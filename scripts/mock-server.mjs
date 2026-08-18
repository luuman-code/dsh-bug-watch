// scripts/mock-server.mjs
// 一个假装的 GitHub GraphQL 服务器，用于端到端测试 fetch-bugs.mjs。
// 监听 127.0.0.1 随机端口，把端口号打到 stdout（"MOCK_PORT=<n>"）。
//
// 数据集覆盖所有置信度分支 + 过滤路径，跑一次能完整验证：

import http from 'node:http';

const NOW = '2026-01-15T12:00:00Z';

const discussions = [
  // ① strong: 引用了已合并 PR
  {
    number: 2078,
    title: '[Bug] Tool calls fail with "Cannot read properties of undefined (reading prepare)" after pnpm install',
    url: 'https://github.com/deepseek-ai/deepseek-harness/discussions/2078',
    createdAt: '2025-12-01T00:00:00Z',
    updatedAt: NOW,
    answerChosenAt: NOW,
    author: { login: 'community-reporter' },
    category: { name: 'Q&A' },
    labels: { nodes: [] },
    body: 'See fix in #2080',
    answer: {
      body: 'Replace Symbol(...) with Symbol.for(...)',
      url: 'https://github.com/deepseek-ai/deepseek-harness/discussions/2078#answer',
      author: { login: 'community-reporter' }
    },
    comments: { nodes: [] }
  },

  // ② strong: 维护者评论（未采纳答案）
  {
    number: 2990,
    title: '[Bug] Windows 下 spawn bash ENOENT 整体崩溃',
    url: 'https://github.com/deepseek-ai/deepseek-harness/discussions/2990',
    createdAt: '2026-01-10T00:00:00Z',
    updatedAt: '2026-01-15T11:30:00Z',
    answerChosenAt: null,
    author: { login: 'windows-user' },
    category: { name: 'Q&A' },
    labels: { nodes: [] },
    body: 'spawn bash 时未捕获 ENOENT，整体崩',
    answer: null,
    comments: {
      nodes: [
        { body: 'Will fix in next release, tracked in internal issue', url: '...', author: { login: 'deepseek-eng-1' } }
      ]
    }
  },

  // ③ strong: 采纳答案且作者是维护者（maintainers.json 里包含的 login）
  {
    number: 1959,
    title: '[Bug] insufficient tool messages following tool_calls message',
    url: 'https://github.com/deepseek-ai/deepseek-harness/discussions/1959',
    createdAt: '2026-01-05T00:00:00Z',
    updatedAt: '2026-01-15T10:30:00Z',
    answerChosenAt: '2026-01-15T10:30:00Z',
    author: { login: 'reporter-2' },
    category: { name: 'Q&A' },
    labels: { nodes: [] },
    body: '每次请求都被供应商 400',
    answer: {
      body: '我们会在出站前做 "insufficient tool messages" 校验',
      url: '...',
      author: { login: 'deepseek-eng-2' }
    },
    comments: { nodes: [] }
  },

  // ④ medium: 采纳答案但作者非维护者
  {
    number: 1593,
    title: '[BUG] 会话日志 tool/result 引用不存在的 call id',
    url: 'https://github.com/deepseek-ai/deepseek-harness/discussions/1593',
    createdAt: '2026-01-08T00:00:00Z',
    updatedAt: '2026-01-14T15:00:00Z',
    answerChosenAt: '2026-01-14T15:00:00Z',
    author: { login: 'reporter-3' },
    category: { name: 'Q&A' },
    labels: { nodes: [] },
    body: '对话被永久 400',
    answer: {
      body: '我临时修了，把 tool 消息转 user 消息',
      url: '...',
      author: { login: 'random-patcher' }
    },
    comments: { nodes: [] }
  },

  // ⑤ weak: 仅报告，无任何修复信号
  {
    number: 161,
    title: 'Bug: tool calls are dropped against servers that send null in continuation deltas',
    url: 'https://github.com/deepseek-ai/deepseek-harness/discussions/161',
    createdAt: '2025-11-20T00:00:00Z',
    updatedAt: '2026-01-13T09:00:00Z',
    answerChosenAt: null,
    author: { login: 'reporter-4' },
    category: { name: 'Q&A' },
    labels: { nodes: [] },
    body: 'id/name 被 null 覆盖',
    answer: null,
    comments: { nodes: [] }
  },

  // ⑥ 非 bug：标题没有 [Bug] 前缀，category 也不是 Bugs
  // 应被过滤器丢弃
  {
    number: 3001,
    title: 'How to configure plugins?',
    url: 'https://github.com/deepseek-ai/deepseek-harness/discussions/3001',
    createdAt: '2026-01-09T00:00:00Z',
    updatedAt: '2026-01-14T08:00:00Z',
    answerChosenAt: '2026-01-14T08:00:00Z',
    author: { login: 'newbie' },
    category: { name: 'Q&A' },
    labels: { nodes: [] },
    body: '想用社区插件',
    answer: { body: 'read the docs', url: '...', author: { login: 'helper' } },
    comments: { nodes: [] }
  },

  // ⑦ 通过 category=Bugs 命中的（标题无 [Bug] 但 category 是 Bugs）
  {
    number: 3002,
    title: 'Streaming crashes on slow networks',
    url: 'https://github.com/deepseek-ai/deepseek-harness/discussions/3002',
    createdAt: '2026-01-11T00:00:00Z',
    updatedAt: '2026-01-15T08:00:00Z',
    answerChosenAt: null,
    author: { login: 'reporter-5' },
    category: { name: 'Bugs' },
    labels: { nodes: [] },
    body: '流式很慢',
    answer: null,
    comments: { nodes: [] }
  },

  // ⑧ 通过 label=confirmed 命中
  {
    number: 3003,
    title: 'Memory leak after long sessions',
    url: 'https://github.com/deepseek-ai/deepseek-harness/discussions/3003',
    createdAt: '2026-01-07T00:00:00Z',
    updatedAt: '2026-01-15T07:00:00Z',
    answerChosenAt: null,
    author: { login: 'reporter-6' },
    category: { name: 'Q&A' },
    labels: { nodes: [{ name: 'confirmed' }] },
    body: 'memory leak',
    answer: null,
    comments: { nodes: [] }
  }
];

// 合并的 PR
const mergedPRs = new Map([
  [2080, { number: 2080, merged: true, mergedAt: '2026-01-14T18:00:00Z', url: 'https://github.com/deepseek-ai/deepseek-harness/pull/2080', title: 'fix(scheduler): use Symbol.for for cross-package scheduler keys' }],
  [9999, { number: 9999, merged: false, mergedAt: null, url: 'https://github.com/deepseek-ai/deepseek-harness/pull/9999', title: 'wip: not yet' }]
]);

function handle(body) {
  let payload;
  try { payload = JSON.parse(body); } catch { return { errors: [{ message: 'invalid json' }] }; }
  const q = payload.query || '';

  if (q.includes('discussions(first:')) {
    return {
      data: {
        repository: {
          discussions: {
            pageInfo: { hasNextPage: false, endCursor: null },
            nodes: discussions
          }
        }
      }
    };
  }
  const m = q.match(/pullRequest\(number:\s*(\d+)\)/);
  if (m) {
    const n = Number(m[1]);
    return {
      data: {
        repository: {
          pullRequest: mergedPRs.has(n) ? mergedPRs.get(n) : null
        }
      }
    };
  }
  return { errors: [{ message: 'unmocked query' }] };
}

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    const out = handle(body);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(out));
  });
});

server.listen(0, '127.0.0.1', () => {
  const port = server.address().port;
  // 输出约定格式，便于 orchestrator 解析
  process.stdout.write(`MOCK_PORT=${port}\n`);
});