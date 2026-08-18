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

// 强/中/弱 分级
// strong: 引用已合并 PR / 采纳答案作者是维护者 / 维护者评论
// medium: 采纳答案但作者非维护者
// weak:   无任何修复信号
export function classifyConfidence(d, mergedPRs, maintainers) {
  if (mergedPRs && mergedPRs.length > 0) return 'strong';

  const authorLogin = d.answer?.author?.login?.toLowerCase();
  if (d.answerChosenAt && authorLogin && maintainers.set.has(authorLogin)) {
    return 'strong';
  }

  for (const c of d.comments?.nodes || []) {
    const login = c.author?.login?.toLowerCase();
    if (login && maintainers.set.has(login)) return 'strong';
  }

  if (d.answerChosenAt) return 'medium';
  return 'weak';
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