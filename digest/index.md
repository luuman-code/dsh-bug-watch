# DSH Bug Watch — 2026-08-26

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 37

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#4473](https://github.com/deepseek-ai/deepseek-harness/discussions/4473) **[Bug] spawn 子代理未继承 agent-default-model：主会话走自定义 provider， spawn 子代理被路由到 deepseek-official**<br/>  分类：Q&A · 标签：— · 最近更新：2026-08-25

## 📝 仅报告 — 无人互动
- [#4560](https://github.com/deepseek-ai/deepseek-harness/discussions/4560) [Bug] Skills are not auto loaded when in a wsl worksspace
- [#4359](https://github.com/deepseek-ai/deepseek-harness/discussions/4359) Bug: sandbox escalation to the current mode is rejected — same-mode `sandbox_permissions` fails with "not strictly wider"
- [#4555](https://github.com/deepseek-ai/deepseek-harness/discussions/4555) [Bug] Subagents always fail with 400 "Reasoning is mandatory" when parent uses a thinking-required model (Ox Alpha via OpenRouter)
- [#4549](https://github.com/deepseek-ai/deepseek-harness/discussions/4549) [Bug] Scheduler failure leaves dangling tool/call — session permanently returns 400 INVALID_REQUEST (fix: reuse appendSkippedToolCall, #4017 follow-up)
- [#3797](https://github.com/deepseek-ai/deepseek-harness/discussions/3797) [bug] 打开大会话时 history 页把全部 assistant/chunk 送进浏览器，UI 看起来像没回复 — 附可 cherry-pick 修复
- [#4544](https://github.com/deepseek-ai/deepseek-harness/discussions/4544) [bug] attach/resume 全量解码 chunk 致大会话 OOM/超时 — open 层 follow-up（#3797 互补）
- [#582](https://github.com/deepseek-ai/deepseek-harness/discussions/582) [bug] Claude hook matcher 大小写敏感，Bash 选不中 bash，安全 hook 静默失效 — 附可 cherry-pick 修复
- [#4535](https://github.com/deepseek-ai/deepseek-harness/discussions/4535) [Bug] Typert strict object codecs silently strip unknown fields / 未知字段被静默删除
- [#3812](https://github.com/deepseek-ai/deepseek-harness/discussions/3812) [BUG] JavaScript heap out of memory
- [#715](https://github.com/deepseek-ai/deepseek-harness/discussions/715) [Bug] 所有带参数的工具调用生成 {"input": ""}，参数名丢失导致 100% 失败
- [#530](https://github.com/deepseek-ai/deepseek-harness/discussions/530) [Bug] `WebSocket error` 被归类为 `PI_AI_ERROR`，导致绕过重试
- [#4508](https://github.com/deepseek-ai/deepseek-harness/discussions/4508) [Bug] Web mode tool execution fails: Cannot read properties of undefined (reading 'prepare')
- [#4506](https://github.com/deepseek-ai/deepseek-harness/discussions/4506) [Bug] Multi-process shared session root: concurrent writes corrupt the JSONL session log (seq gap); history/resume fail
- [#4489](https://github.com/deepseek-ai/deepseek-harness/discussions/4489) [Bug] 任何网页 Ctrl+C(复制)后所有 Chrome 标签页卡死——疑似 Chrome/剪贴板问题(非 dsh 特定)
- [#2763](https://github.com/deepseek-ai/deepseek-harness/discussions/2763) [Bug Report] 包族 npm dist-tag `latest` 不一致：全新项目按默认版本安装必然 ERESOLVE（0.0.1-rc.1 的 peer 引用已不存在的包名）
- [#4485](https://github.com/deepseek-ai/deepseek-harness/discussions/4485) [Bug] dsh-file-reference-local: disposePrompt() throws on every agent disposal — .catch on undefined Cordis effect-disposer return
- [#2855](https://github.com/deepseek-ai/deepseek-harness/discussions/2855) Bug: Tool calls fail with `unknown tool ""` (empty name) when a large tool call is split into multiple stream chunks
- [#4479](https://github.com/deepseek-ai/deepseek-harness/discussions/4479) [Bug] All pwsh tool calls fail with TypeError: Cannot read properties of undefined (reading 'length')
- [#4454](https://github.com/deepseek-ai/deepseek-harness/discussions/4454) Bug: compactor rejects valid short summaries with “summary is not smaller”
- [#4475](https://github.com/deepseek-ai/deepseek-harness/discussions/4475) Bug: Windows 目录选择器截断含特定中文字符的路径 (readUtf16 低字节 0 误判为终止符)
- [#4469](https://github.com/deepseek-ai/deepseek-harness/discussions/4469) Bug: "Fetch available models" returns stale bundled catalog for built-in providers (e.g. OpenRouter) instead of querying the live endpoint
- [#3374](https://github.com/deepseek-ai/deepseek-harness/discussions/3374) [bug] dsh-llm-deepseek：流式工具调用的 name/id 为 null 时覆盖首个 delta，导致 DeepSeek 推理模型所有工具调用失败
- [#2820](https://github.com/deepseek-ai/deepseek-harness/discussions/2820) [Bug] DeepSeek 流式工具调用名称被空分片覆盖，导致 `unknown tool ""`
- [#534](https://github.com/deepseek-ai/deepseek-harness/discussions/534) [BUG]会话/思考过长导致的：历史加载失败：history unavailable for session "session-2063f7c0-01dd-4892-ad90-9a2068c4f95d": RangeError: Maximum call stack size exceeded（internal）
- [#4400](https://github.com/deepseek-ai/deepseek-harness/discussions/4400) [Bug] Loader cannot resolve ESM plugin with zero import statements (could not be resolved)
- [#4379](https://github.com/deepseek-ai/deepseek-harness/discussions/4379) [Bug] Harness npx Installation will stuck
- [#4436](https://github.com/deepseek-ai/deepseek-harness/discussions/4436) [Bug][Windows] dsh web 随机静默死亡：node-pty 1.2.0-beta.15 ConPTY socket 无 error 监听 + windowsTerminal 错误处理器 throw
- [#4227](https://github.com/deepseek-ai/deepseek-harness/discussions/4227) [Bug] Tapping an answer in the planning question popup does not confirm it on mobile
- [#4178](https://github.com/deepseek-ai/deepseek-harness/discussions/4178) [BUG] 两个 dsh web 实例并发打开同一会话，导致会话日志 seq 冲突、历史记录损坏
- [#4450](https://github.com/deepseek-ai/deepseek-harness/discussions/4450) [bug] Chrome 开启页面翻译后，导致聊天输入框渲染错乱且会被删除
- [#4447](https://github.com/deepseek-ai/deepseek-harness/discussions/4447) [Bug] Node >=24 default HTTP/2 fetch corrupts large request bodies against api.deepseek.com: TRANSPORT retry storms (TLS bad record mac + ERR_HTTP2_INVALID_SESSION)
- [#4403](https://github.com/deepseek-ai/deepseek-harness/discussions/4403) [Bug] WebUI 首次加载较长历史对话报「历史加载失败：signal timed out (internal)」
- [#4387](https://github.com/deepseek-ai/deepseek-harness/discussions/4387) [Bug] A degenerate streamed tool call (empty callId) is persisted, then the loader rejects it — entire session history becomes permanently unloadable
- [#4311](https://github.com/deepseek-ai/deepseek-harness/discussions/4311) [Bug] 子代理默认委派失败：子代理继承的是过期的 base 默认模型，而非父代理实际运行的模型
- [#4367](https://github.com/deepseek-ai/deepseek-harness/discussions/4367) Bug: DeepSeek WebSearchProvider drops the generated answer from native web search responses
- [#3489](https://github.com/deepseek-ai/deepseek-harness/discussions/3489) [Bug] Expired MCP session causes repeated tool-call failures without reconnect or circuit breaking

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-08-26T00:55:08.606Z_