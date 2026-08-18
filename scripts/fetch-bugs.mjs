#!/usr/bin/env node
// scripts/fetch-bugs.mjs
// 拉取 deepseek-ai/deepseek-harness 的 Discussions，过滤 [Bug] 类讨论，
// 按"维护者信号 / 已采纳答案 / 引用合并 PR"分级置信度，写入 digest/。

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isBugDiscussion, classifyTier, extractPRRefs } from './lib-filter.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ORG = 'deepseek-ai';
const REPO = 'deepseek-harness';
const DIGEST_DIR = join(ROOT, 'digest');

const TOKEN = process.env.GH_TOKEN;
if (!TOKEN) {
  console.error('[bug-watch] GH_TOKEN is required (set env or run from GitHub Actions).');
  process.exit(1);
}

mkdirSync(DIGEST_DIR, { recursive: true });

// ---------- 维护者名单 ----------
function loadMaintainers() {
  const main = JSON.parse(readFileSync(join(ROOT, 'maintainers.json'), 'utf8'));
  const localPath = join(ROOT, 'maintainers.local.json');
  const local = existsSync(localPath) ? JSON.parse(readFileSync(localPath, 'utf8')) : { logins: [], orgs: [] };
  const set = new Set(
    [...(main.logins || []), ...(local.logins || [])].map(s => s.toLowerCase())
  );
  return { set, orgs: new Set([...(main.orgs || []), ...(local.orgs || [])].map(s => s.toLowerCase())) };
}
const MAINTAINERS = loadMaintainers();

// ---------- 过滤器 / 参与者分级（已抽到 lib-filter.mjs，便于单测） ----------

// ---------- GraphQL ----------
const GRAPHQL_URL = process.env.GH_GRAPHQL_URL || 'https://api.github.com/graphql';

async function graphql(query, variables) {
  const r = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      'User-Agent': 'dsh-bug-watch'
    },
    body: JSON.stringify({ query, variables })
  });
  if (!r.ok) {
    const txt = await r.text();
    throw new Error(`GraphQL HTTP ${r.status}: ${txt.slice(0, 500)}`);
  }
  const data = await r.json();
  if (data.errors?.length) {
    throw new Error(`GraphQL errors: ${JSON.stringify(data.errors).slice(0, 800)}`);
  }
  return data.data;
}

// ---------- 拉取所有 discussions ----------
async function fetchAllDiscussions() {
  const query = `
    query($cursor: String) {
      repository(owner: "${ORG}", name: "${REPO}") {
        discussions(first: 50, after: $cursor, orderBy: {field: UPDATED_AT, direction: DESC}) {
          pageInfo { hasNextPage endCursor }
          nodes {
            number title url createdAt updatedAt answerChosenAt closedAt stateReason isAnswered
            author { login }
            category { name }
            labels(first: 10) { nodes { name } }
            body
            answer {
              body
              url
              author { login }
            }
            comments(first: 15) {
              nodes {
                body
                url
                author { login }
              }
            }
          }
        }
      }
    }
  `;
  let all = [];
  let cursor = null;
  let hasNext = true;
  while (hasNext) {
    const data = await graphql(query, { cursor });
    const ds = data.repository.discussions;
    all.push(...ds.nodes);
    hasNext = ds.pageInfo.hasNextPage;
    cursor = ds.pageInfo.endCursor;
    console.log(`[bug-watch]   paginated: +${ds.nodes.length}, total=${all.length}`);
  }
  return all;
}

// ---------- 引用 PR 解析 ----------
// 串行太慢（135s+ for 271 PRs）。改成并发 + 上限。
async function fetchMergedPRs(numbers, concurrency = 8) {
  const queue = [...numbers];
  const merged = [];
  async function worker() {
    while (queue.length > 0) {
      const n = queue.shift();
      if (n === undefined) return;
      try {
        const query = `
          query {
            repository(owner: "${ORG}", name: "${REPO}") {
              pullRequest(number: ${n}) {
                number merged mergedAt url title
              }
            }
          }
        `;
        const data = await graphql(query);
        const pr = data.repository.pullRequest;
        if (pr && pr.merged) {
          merged.push({ number: pr.number, url: pr.url, mergedAt: pr.mergedAt, title: pr.title });
        }
      } catch (e) {
        // PR 不存在、network error 或 rate limit —— 忽略单条，整体继续
      }
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, numbers.length || 1) }, worker);
  await Promise.all(workers);
  return merged;
}

// ---------- 增量游标 / 时间窗口 ----------
function loadCursor() {
  const override = process.env.SINCE_OVERRIDE;
  if (override) return override;
  const p = join(DIGEST_DIR, '.cursor');
  return existsSync(p) ? readFileSync(p, 'utf8').trim() : null;
}

// 默认只看 SCAN_WINDOW_DAYS 天内的讨论（默认 180 天），
// 监控场景没必要扫全库历史。设 0 = 全量。
function windowCutoff(days) {
  if (!days || days <= 0) return null;
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString();
}

// ---------- 渲染 ----------
function renderIndexMd(bugs, generatedAt) {
  const official = bugs.filter(b => b.tier === 'official');
  const community = bugs.filter(b => b.tier === 'community');
  const reported = bugs.filter(b => b.tier === 'reported');
  const fmt = b => {
    const merged = b.mergedPRs.length ? ` — 已合并 PR: ${b.mergedPRs.map(p => `[#${p.number}](${p.url})`).join(', ')}` : '';
    return `- [#${b.number}](${b.url}) **${b.title}**${merged}<br/>  分类：${b.category || '?'} · 标签：${b.labels.join(', ') || '—'} · 最近更新：${b.updatedAt.slice(0, 10)}`;
  };
  return [
    `# DSH Bug Watch — ${generatedAt.slice(0, 10)}`,
    ``,
    `**目标仓库**: [${ORG}/${REPO}](https://github.com/${ORG}/${REPO}/discussions)`,
    `**本次扫描 Bug 类讨论数**: ${bugs.length}`,
    ``,
    `## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）`,
    official.length ? official.map(fmt).join('\n') : '_（无）_',
    ``,
    `## 👥 社区参与 — 已采纳答案，作者非 committer`,
    community.length ? community.map(fmt).join('\n') : '_（无）_',
    ``,
    `## 📝 仅报告 — 无人互动`,
    reported.map(b => `- [#${b.number}](${b.url}) ${b.title}`).join('\n') || '_（无）_',
    ``,
    `## 📋 官方名单配置`,
    `_当前 logins_: \`${[...MAINTAINERS.set].join(', ') || '(empty)'}\``,
    `_当前 orgs_: \`${[...MAINTAINERS.orgs].join(', ') || '(empty)'}\``,
    `_编辑 \`maintainers.json\` 或新建 \`maintainers.local.json\` 后提交触发新一轮扫描即可生效。_`,
    ``,
    `_Last updated: ${generatedAt}_`
  ].join('\n');
}

function renderDailyMd(bugs, day) {
  return [
    `# ${day} — DSH Bug Watch 快照`,
    ``,
    `本页是当日扫描快照，详细索引见 [index.md](./index.md)。`,
    ``,
    `| # | Title | Tier | 答案作者 | 已合并 PR | 链接 |`,
    `|---|---|---|---|---|---|`,
    ...bugs.map(b => {
      const merged = b.mergedPRs.map(p => `#${p.number}`).join(', ') || '—';
      return `| ${b.number} | ${b.title.replace(/\|/g, '\\|').slice(0, 80)} | ${b.tier} | ${b.answerAuthor || '—'} | ${merged} | [link](${b.url}) |`;
    }),
    ``,
    `_Generated at ${new Date().toISOString()}_`
  ].join('\n');
}

// ---------- main ----------
async function run() {
  const cursor = loadCursor();
  const windowDays = Number(process.env.SCAN_WINDOW_DAYS ?? 180);
  const cutoff = windowCutoff(windowDays);
  console.log(`[bug-watch] cursor: ${cursor || '(none, full scan)'}`);
  console.log(`[bug-watch] window: ${windowDays > 0 ? `last ${windowDays} days (since ${cutoff})` : 'unbounded'}`);

  const all = await fetchAllDiscussions();
  console.log(`[bug-watch] fetched ${all.length} discussions total`);

  // 增量 + 时间窗口
  let candidates = all;
  if (cursor) candidates = candidates.filter(d => d.updatedAt > cursor);
  if (cutoff) candidates = candidates.filter(d => d.updatedAt >= cutoff);
  console.log(`[bug-watch] ${candidates.length} candidates (after cursor + window)`);

  const bugs = [];
  const allPRNumbers = new Set();

  for (const d of candidates) {
    if (!isBugDiscussion(d)) continue;

    const texts = [
      d.body,
      d.answer?.body,
      ...(d.comments?.nodes?.map(c => c.body) || [])
    ];
    const prNumbers = extractPRRefs(texts);
    prNumbers.forEach(n => allPRNumbers.add(n));
    bugs.push({ _d: d, prNumbers });
  }

  const mergedCache = new Map();
  if (allPRNumbers.size > 0) {
    console.log(`[bug-watch] cross-checking ${allPRNumbers.size} PR refs for merged state...`);
    const merged = await fetchMergedPRs([...allPRNumbers]);
    for (const pr of merged) mergedCache.set(pr.number, pr);
    console.log(`[bug-watch]   found ${merged.length} merged PRs`);
  }

  const items = bugs.map(({ _d, prNumbers }) => {
    const mergedPRs = prNumbers.map(n => mergedCache.get(n)).filter(Boolean);
    const tier = classifyTier(_d, mergedPRs, MAINTAINERS);
    return {
      number: _d.number,
      title: _d.title,
      url: _d.url,
      createdAt: _d.createdAt,
      updatedAt: _d.updatedAt,
      closedAt: _d.closedAt || null,
      stateReason: _d.stateReason || null,
      isAnswered: !!_d.isAnswered,
      category: _d.category?.name || null,
      labels: _d.labels?.nodes?.map(l => l.name) || [],
      answerChosenAt: _d.answerChosenAt,
      answerAuthor: _d.answer?.author?.login || null,
      mergedPRs,
      tier
    };
  });

  const generatedAt = new Date().toISOString();
  const today = generatedAt.slice(0, 10);

  writeFileSync(join(DIGEST_DIR, 'index.md'), renderIndexMd(items, generatedAt));
  writeFileSync(join(DIGEST_DIR, `${today}.md`), renderDailyMd(items, today));

  // ---------- 写 history.jsonl（必须在 notification 之前：notification 基于全量） ----------
  const historyPath = join(DIGEST_DIR, 'history.jsonl');
  const existing = existsSync(historyPath) ? readFileSync(historyPath, 'utf8') : '';
  const known = new Set(
    existing.split('\n').filter(Boolean).map(l => {
      try { return JSON.parse(l).number; } catch { return null; }
    }).filter(Boolean)
  );
  const newLines = items.filter(b => !known.has(b.number)).map(b => JSON.stringify(b)).join('\n');
  if (newLines) {
    const sep = existing && !existing.endsWith('\n') ? '\n' : '';
    writeFileSync(historyPath, existing + sep + newLines + '\n');
  }

  // ---------- 每日 delta（用于 web UI 推送） ----------
  // notification 必须基于 history.jsonl 全量计算（items 只是本次 delta）
  const allBugsText = readFileSync(historyPath, 'utf8');
  const allBugs = allBugsText.split('\n').filter(Boolean).map(l => {
    try { return JSON.parse(l); } catch { return null; }
  }).filter(Boolean);

  const since24h = new Date(Date.now() - 24 * 3600_000).toISOString();
  const newBugs = allBugs.filter(b => b.createdAt >= since24h);
  const updatedToday = allBugs.filter(b => b.updatedAt.slice(0, 10) === today);

  const byCategory = {};
  for (const b of [...newBugs, ...updatedToday]) {
    const text = (b.title || '').toLowerCase();
    let cat = 'other';
    if (/win-picker|folder\s*picker|readUtf16|UTF-?16|低字节/.test(text)) cat = 'win-picker';
    else if (/acl|workspace-write|sandbox|puppeteer.*MCP|win32|Hyper-V/.test(text)) cat = 'win-sandbox';
    else if (/session\s*log|seq|corrupt|tool_call|tool\/result/.test(text)) cat = 'session';
    else if (/unknown\s*tool|prepare|llm-deepseek|llm-pi-ai|reasoning_content|tool_call_adjacency/.test(text)) cat = 'llm-adapter';
    else if (/plugin|npm|cordis|peer-dep|dist-tag|ERESOLVE|koffi|node-pty/.test(text)) cat = 'plugin';
    else if (/trust\s*fence|port-less\s*Origin|127\.0\.0\.1|localhost|HTTPS\s*403|crypto\.randomUUID/.test(text)) cat = 'trust-fence';
    else if (/composer|IME|aria-modal|focus|mobile|scroll|PWA|iframe|click-?jack/.test(text)) cat = 'web-ui';
    else if (/freeze|Failed\s*to\s*load|Loading\s*plugins|FrameQueue|busy\s*loop|catalog/.test(text)) cat = 'web-freeze';
    else if (/subagent|model.*inherit|workflow.*model|dsv4p|扣费/.test(text)) cat = 'subagent';
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(b);
  }

  const notification = {
    generatedAt,
    date: today,
    repo: `${ORG}/${REPO}`,
    summary: {
      totalBugs: allBugs.length,
      newLast24h: newBugs.length,
      updatedToday: updatedToday.length,
      // 'resolvedBugs' = discussions formally closed with stateReason=RESOLVED
      // (DSH discussions almost never reach this state — maintainers
      // respond without closing threads). For a practical "this has been
      // addressed" signal we expose 'answeredBugs' (isAnswered=true).
      // The displayed "resolved" counter below takes the union: a bug is
      // resolved if either it was formally closed or an answer was chosen.
      resolvedBugs: allBugs.filter(b => b.stateReason === 'RESOLVED').length,
      answeredBugs: allBugs.filter(b => b.isAnswered).length,
      resolvedOrAnswered: allBugs.filter(b => b.stateReason === 'RESOLVED' || b.isAnswered).length,
      tierBreakdown: {
        official: allBugs.filter(b => b.tier === 'official').length,
        community: allBugs.filter(b => b.tier === 'community').length,
        reported: allBugs.filter(b => b.tier === 'reported').length,
      },
    },
    byCategory,
    newBugs: newBugs.map(b => ({
      number: b.number,
      title: b.title,
      url: b.url,
      tier: b.tier,
      createdAt: b.createdAt,
      labels: b.labels,
    })),
    updatedBugs: updatedToday
      .filter(b => !newBugs.includes(b))
      .map(b => ({
        number: b.number,
        title: b.title,
        url: b.url,
        tier: b.tier,
        updatedAt: b.updatedAt,
      })),
    digestIndexUrl: 'https://raw.githubusercontent.com/luuman-code/dsh-bug-watch/master/digest/index.md',
    digestLatestUrl: 'https://raw.githubusercontent.com/luuman-code/dsh-bug-watch/master/digest/notifications/latest.json',
  };

  const NOTIF_DIR = join(DIGEST_DIR, 'notifications');
  mkdirSync(NOTIF_DIR, { recursive: true });
  const notifPath = join(NOTIF_DIR, `${today}.json`);
  writeFileSync(notifPath, JSON.stringify(notification, null, 2));
  writeFileSync(join(NOTIF_DIR, 'latest.json'), JSON.stringify(notification, null, 2));
  console.log(`[bug-watch] notification written: ${notifPath}`);
  console.log(`[bug-watch]   newLast24h=${newBugs.length}, updatedToday=${updatedToday.length}, totalInWindow=${allBugs.length}, resolved=${notification.summary.resolvedBugs}`);

  if (items.length > 0) {
    const maxUpdated = items.reduce((m, b) => b.updatedAt > m ? b.updatedAt : m, cursor || '');
    if (maxUpdated) writeFileSync(join(DIGEST_DIR, '.cursor'), maxUpdated);
  }

  console.log(`[bug-watch] done: ${items.length} bug discussions written to digest/`);
}

run().catch(e => {
  console.error('[bug-watch] FATAL:', e.message || e);
  process.exit(1);
});