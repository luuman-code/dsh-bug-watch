// scripts/test-classify.mjs
// 离线单测：只验证纯函数（filter + classify + extractPRRefs）。
// 不连网络，跑过即说明规则正确。

import {
  isBugDiscussion,
  classifyConfidence,
  extractPRRefs
} from './lib-filter.mjs';

let passed = 0, failed = 0;

function eq(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) {
    passed++;
    console.log(`  ✅ ${label}`);
  } else {
    failed++;
    console.log(`  ❌ ${label}\n     expected: ${JSON.stringify(expected)}\n     actual:   ${JSON.stringify(actual)}`);
  }
}

// ----- 维护者 fake -----
const m = { set: new Set(['alice', 'bob']) };

// ----- isBugDiscussion -----
console.log('isBugDiscussion:');
eq('[Bug] 标题命中',
   isBugDiscussion({ title: '[Bug] xxxx' }),
   true);
eq('[BUG] 大小写不敏感',
   isBugDiscussion({ title: '[BUG] yyyy' }),
   true);
eq('Bug: 前缀',
   isBugDiscussion({ title: 'Bug: foo' }),
   true);
eq('普通标题不命中',
   isBugDiscussion({ title: 'Hello world', category: { name: 'General' } }),
   false);
eq('Category=Bugs 命中',
   isBugDiscussion({ title: '普通', category: { name: 'Bugs' } }),
   true);
eq('Label=bug 命中',
   isBugDiscussion({ title: '普通', labels: { nodes: [{ name: 'bug' }] } }),
   true);
eq('Label=confirmed 命中',
   isBugDiscussion({ title: '普通', labels: { nodes: [{ name: 'confirmed' }] } }),
   true);

// ----- extractPRRefs -----
console.log('\nextractPRRefs:');
eq('正文里的 #1234',
   extractPRRefs(['fix in #1234']),
   [1234]);
eq('多个 PR 去重',
   extractPRRefs(['#1234 #1234', '#5678']),
   [1234, 5678]);
eq('空文本',
   extractPRRefs([null, '']),
   []);
eq('忽略 /path#1 这种 URL 片段',
   extractPRRefs(['see https://github.com/foo/bar/issues/1']),
   []); // URL 中间 #1 不算 PR ref（无 \w/ 前置保护）
eq('something#1 紧跟 \\w 字符也不命中',
   extractPRRefs(['something#1']),
   []); // # 前是字母（\w），负向回顾阻止命中

// ----- classifyConfidence -----
console.log('\nclassifyConfidence:');

const baseD = {
  answerChosenAt: null,
  answer: null,
  comments: { nodes: [] }
};

eq('无信号 → weak',
   classifyConfidence({ ...baseD }, [], m),
   'weak');

eq('已采纳答案但非维护者 → medium',
   classifyConfidence({ ...baseD, answerChosenAt: '2026-01-01', answer: { author: { login: 'random' } } }, [], m),
   'medium');

eq('采纳答案且作者是维护者 → strong',
   classifyConfidence({ ...baseD, answerChosenAt: '2026-01-01', answer: { author: { login: 'Alice' } } }, [], m),
   'strong');

eq('维护者评论 → strong',
   classifyConfidence({ ...baseD, comments: { nodes: [{ author: { login: 'bob' } }] } }, [], m),
   'strong');

eq('引用了合并 PR → strong（哪怕无任何评论）',
   classifyConfidence({ ...baseD }, [{ number: 99 }], m),
   'strong');

eq('社区用户评论，不命中维护者 → weak',
   classifyConfidence({ ...baseD, comments: { nodes: [{ author: { login: 'community' } }] } }, [], m),
   'weak');

console.log(`\n总计: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);