// scripts/lib-filter.mjs
// 纯函数：过滤 [Bug] 类讨论 + 置信度分级。不依赖任何 IO，便于单测。

export const BUG_TITLE = /^\s*(?:\[(?:Bug|BUG)\]|Bug:|bug report|\[bug\]|\[bug report\])/i;
export const CATEGORY_BUG = /^bugs?$/i;
export const LABEL_BUG = /^(bug|confirmed|regression)$/i;

export function isBugDiscussion(d) {
  if (BUG_TITLE.test(d.title || '')) return true;
  if (d.category && CATEGORY_BUG.test(d.category.name || '')) return true;
  if (d.labels?.nodes?.some(l => LABEL_BUG.test(l.name || ''))) return true;
  return false;
}

// 三级"参与者身份"分级
//   official:   committer 参与了（采纳答案作者是 committer / committer 留了评论 / 引用了合并 PR）
//   community:  已采纳答案，作者不是 committer（社区已验证的方向）
//   reported:   没人互动过（原始报告）
//
// 之前的 confidence 三档(strong/medium/weak) 是"修复置信度"语义，
// 对 PR/Issues 关闭的仓库不合适；改成"参与者身份"更适合社区驱动项目。
export function classifyTier(d, mergedPRs, maintainers) {
  if (mergedPRs && mergedPRs.length > 0) return 'official';

  const answerAuthor = d.answer?.author?.login?.toLowerCase();
  if (d.answerChosenAt && answerAuthor && maintainers.set.has(answerAuthor)) {
    return 'official';
  }

  for (const c of d.comments?.nodes || []) {
    const login = c.author?.login?.toLowerCase();
    if (login && maintainers.set.has(login)) return 'official';
  }

  if (d.answerChosenAt) return 'community';
  return 'reported';
}

export function extractPRRefs(texts) {
  const set = new Set();
  const PR_REF = /(?<![\w/])#(\d+)\b/g;
  for (const t of texts) {
    if (!t) continue;
    for (const m of t.matchAll(PR_REF)) set.add(Number(m[1]));
  }
  return [...set];
}