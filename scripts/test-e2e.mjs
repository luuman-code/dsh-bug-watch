// scripts/test-e2e.mjs
// 端到端冒烟：
//   1. 备份 maintainers.local.json（若有），写入测试维护者名单
//   2. 启动 mock GraphQL 服务器
//   3. 用 GH_GRAPHQL_URL 指向 mock 跑 fetch-bugs.mjs
//   4. 校验 digest/index.md 内容覆盖 strong/medium/weak 三档
//   5. 关闭 mock + 还原 maintainers.local.json
//
// 不需要任何 GitHub PAT；不修改源码（仅临时写入 gitignored 的 maintainers.local.json）。

import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync, rmSync, existsSync, copyFileSync, writeFileSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const digestDir = join(ROOT, 'digest');
const maintainersLocalPath = join(ROOT, 'maintainers.local.json');

let pass = 0, fail = 0;
function assert(label, cond, detail = '') {
  if (cond) { pass++; console.log(`  ✅ ${label}`); }
  else { fail++; console.log(`  ❌ ${label}${detail ? '\n     ' + detail : ''}`); }
}

// 测试期间使用的"假维护者"——mock 数据里的 deepseek-eng-1 / deepseek-eng-2 都命中。
// 这与生产无关，结束时还原。
const TEST_MAINTAINERS = {
  _comment: '临时为 e2e 测试写入，跑完会被还原',
  logins: ['deepseek-eng-1', 'deepseek-eng-2'],
  orgs: []
};

let backedUp = null;
let mock = null;

function cleanup() {
  try { if (mock) mock.kill(); } catch {}
  try {
    if (backedUp !== null) {
      writeFileSync(maintainersLocalPath, backedUp);
    } else if (existsSync(maintainersLocalPath)) {
      rmSync(maintainersLocalPath);
    }
  } catch (e) {
    console.error('  ⚠️  还原 maintainers.local.json 失败：', e.message);
  }
}

async function main() {
  // 0) 备份 maintainers.local.json
  if (existsSync(maintainersLocalPath)) {
    backedUp = readFileSync(maintainersLocalPath, 'utf8');
  }
  writeFileSync(maintainersLocalPath, JSON.stringify(TEST_MAINTAINERS, null, 2));

  // 清掉上次的产物，确保本次是 fresh run
  for (const f of ['index.md', 'history.jsonl', '.cursor']) {
    const p = join(digestDir, f);
    if (existsSync(p)) rmSync(p);
  }

  try {
    // 1) 启动 mock
    console.log('🚀 启动 mock GraphQL 服务器...');
    mock = spawn(process.execPath, [join(ROOT, 'scripts', 'mock-server.mjs')], {
      stdio: ['ignore', 'pipe', 'inherit']
    });

    let port = null;
    await new Promise((resolve, reject) => {
      const onData = chunk => {
        const s = chunk.toString();
        process.stdout.write(`[mock] ${s}`);
        const m = s.match(/MOCK_PORT=(\d+)/);
        if (m && !port) {
          port = Number(m[1]);
          mock.stdout.off('data', onData);
          resolve();
        }
      };
      mock.stdout.on('data', onData);
      setTimeout(() => reject(new Error('mock 启动超时')), 5000);
    });
    console.log(`   ✓ mock listening on http://127.0.0.1:${port}/graphql\n`);

    // 2) 跑 fetch-bugs 指向 mock
    console.log('🚀 跑 fetch-bugs.mjs（指向 mock）...');
    await new Promise((resolve, reject) => {
      const child = spawn(process.execPath, [join(ROOT, 'scripts', 'fetch-bugs.mjs')], {
        cwd: ROOT,
        env: {
          ...process.env,
          GH_TOKEN: 'mock-fake-token',
          GH_GRAPHQL_URL: `http://127.0.0.1:${port}/graphql`,
          SINCE_OVERRIDE: ''
        },
        stdio: 'inherit'
      });
      child.on('exit', code => code === 0 ? resolve() : reject(new Error(`fetch-bugs 退出码 ${code}`)));
    });
    console.log('');

    // 3) 校验产物
    console.log('🔍 校验产物...');

    const indexPath = join(digestDir, 'index.md');
    const historyPath = join(digestDir, 'history.jsonl');
    const cursorPath = join(digestDir, '.cursor');

    assert('digest/index.md 存在', existsSync(indexPath));
    assert('digest/history.jsonl 存在', existsSync(historyPath));
    assert('digest/.cursor 存在', existsSync(cursorPath));

    const indexMd = readFileSync(indexPath, 'utf8');
    const history = readFileSync(historyPath, 'utf8').trim().split('\n').filter(Boolean);
    const historyItems = history.map(l => JSON.parse(l));

    // mock 共 8 个 discussions，1 个非 bug (#3001)，剩 7 个 bug
    assert('history.jsonl 恰好 7 条 bug',
      historyItems.length === 7,
      `actual=${historyItems.length}`);

    const strong = historyItems.filter(h => h.confidence === 'strong').map(h => h.number).sort((a, b) => a - b);
    const medium = historyItems.filter(h => h.confidence === 'medium').map(h => h.number).sort((a, b) => a - b);
    const weak = historyItems.filter(h => h.confidence === 'weak').map(h => h.number).sort((a, b) => a - b);

    assert('strong 档 = [#1959, #2078, #2990]',
      JSON.stringify(strong) === JSON.stringify([1959, 2078, 2990]),
      `actual=${JSON.stringify(strong)}`);

    assert('medium 档 = [#1593]',
      JSON.stringify(medium) === JSON.stringify([1593]),
      `actual=${JSON.stringify(medium)}`);

    assert('weak 档 = [#161, #3002, #3003]',
      JSON.stringify(weak) === JSON.stringify([161, 3002, 3003]),
      `actual=${JSON.stringify(weak)}`);

    assert('非 bug 讨论 #3001 被过滤',
      !historyItems.some(h => h.number === 3001));

    assert('index.md 含 🟢 Strong 章节', indexMd.includes('🟢 Strong'));
    assert('index.md 含 🟡 Medium 章节', indexMd.includes('🟡 Medium'));
    assert('index.md 含 🔴 Weak 章节', indexMd.includes('🔴 Weak'));

    for (const n of [2078, 2990, 1959]) {
      assert(`index.md 含 #${n}`, indexMd.includes(`#${n}`));
    }

    const item2078 = historyItems.find(h => h.number === 2078);
    assert('#2078 命中合并 PR #2080',
      item2078?.mergedPRs?.some(p => p.number === 2080),
      JSON.stringify(item2078?.mergedPRs));

    const cursor = readFileSync(cursorPath, 'utf8').trim();
    const expectedMax = historyItems.map(h => h.updatedAt).sort().pop();
    assert('.cursor 等于历史中最大 updatedAt',
      cursor === expectedMax,
      `cursor=${cursor}, expected=${expectedMax}`);

    const today = new Date().toISOString().slice(0, 10);
    const dailyPath = join(digestDir, `${today}.md`);
    assert(`digest/${today}.md 存在`, existsSync(dailyPath));

  } finally {
    cleanup();
    console.log('\n🛑 mock 已关闭，maintainers.local.json 已还原');
  }

  console.log(`\n=== 端到端测试: ${pass} passed, ${fail} failed ===`);
  if (fail > 0) process.exit(1);
}

main().catch(e => {
  cleanup();
  console.error('FATAL:', e.message);
  process.exit(1);
});