# DSH Bug Watch — 2026-08-25

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 43

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
- [#3786](https://github.com/deepseek-ai/deepseek-harness/discussions/3786) **[Bug] npx @deepseek-ai/dsh web 无限卡死：npm 依赖解析死循环（CPU 100%、零网络流量、换镜像无效）**<br/>  分类：General · 标签：— · 最近更新：2026-08-24
- [#580](https://github.com/deepseek-ai/deepseek-harness/discussions/580) **[bug] Win32 原生目录选择器在 U+XX00（如「开」）处截断 UTF-16 路径 — 附可 cherry-pick 修复**<br/>  分类：General · 标签：— · 最近更新：2026-08-24

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#1677](https://github.com/deepseek-ai/deepseek-harness/discussions/1677) **[Bug] 所有工具调用都报 "Cannot read properties of undefined (reading 'prepare')" — ToolRuntime 调度器未注册（rc.6）**<br/>  分类：Q&A · 标签：— · 最近更新：2026-08-24

## 📝 仅报告 — 无人互动
- [#4436](https://github.com/deepseek-ai/deepseek-harness/discussions/4436) [Bug][Windows] dsh web 随机静默死亡：node-pty 1.2.0-beta.15 ConPTY socket 无 error 监听 + windowsTerminal 错误处理器 throw
- [#4412](https://github.com/deepseek-ai/deepseek-harness/discussions/4412) [Bug] 已是 danger-full-access 时重申同一模式被拒，导致非默认模型每次文件操作失败
- [#3591](https://github.com/deepseek-ai/deepseek-harness/discussions/3591) [Bug] Agent loop: dangling tool/call without paired tool/result when a parallel tool call fails mid-dispatch — deriveMessages() builds a provider-invalid transcript
- [#3069](https://github.com/deepseek-ai/deepseek-harness/discussions/3069) Bug: every tool call fails with `unknown tool ""` when gateway sends explicit null id/name on tool-call deltas
- [#1452](https://github.com/deepseek-ai/deepseek-harness/discussions/1452) BUG: 同一 DSH_HOME 下多进程并发写同一会话日志，导致 seq 重复、整段历史无法加载
- [#4178](https://github.com/deepseek-ai/deepseek-harness/discussions/4178) [BUG] 两个 dsh web 实例并发打开同一会话，导致会话日志 seq 冲突、历史记录损坏
- [#4400](https://github.com/deepseek-ai/deepseek-harness/discussions/4400) [Bug] Loader cannot resolve ESM plugin with zero import statements (could not be resolved)
- [#1550](https://github.com/deepseek-ai/deepseek-harness/discussions/1550) [Bug] Cold history loading fully materializes large/corrupt logs and can stall the entire Web server
- [#4379](https://github.com/deepseek-ai/deepseek-harness/discussions/4379) [Bug] Harness npx Installation will stuck
- [#4403](https://github.com/deepseek-ai/deepseek-harness/discussions/4403) [Bug] WebUI 首次加载较长历史对话报「历史加载失败：signal timed out (internal)」
- [#2169](https://github.com/deepseek-ai/deepseek-harness/discussions/2169) [Bug] 流式工具调用增量携带空 id/name，导致会话历史永久无法加载：SessionPersistenceCorruptionError: message must have tool source
- [#3372](https://github.com/deepseek-ai/deepseek-harness/discussions/3372) Bug: llm-pi-ai 丢弃 supportsDeveloperRole，SGLang/Qwen 收到 developer role 后返回 400
- [#4393](https://github.com/deepseek-ai/deepseek-harness/discussions/4393) [BUG] Web UI 崩溃:发消息后整个对话框消失 (NotFoundError: removeChild)
- [#1180](https://github.com/deepseek-ai/deepseek-harness/discussions/1180) [BUG]一直出现Error: invalid arguments: missing required property "description"
- [#4387](https://github.com/deepseek-ai/deepseek-harness/discussions/4387) [Bug] A degenerate streamed tool call (empty callId) is persisted, then the loader rejects it — entire session history becomes permanently unloadable
- [#3155](https://github.com/deepseek-ai/deepseek-harness/discussions/3155) Bug: dsh web freezes (event loop blocked) when the agent executes the pwsh tool on Windows — reproducible in clean profile
- [#4359](https://github.com/deepseek-ai/deepseek-harness/discussions/4359) Bug: sandbox escalation to the current mode is rejected — same-mode `sandbox_permissions` fails with "not strictly wider"
- [#848](https://github.com/deepseek-ai/deepseek-harness/discussions/848) Bug: cordis_inspect_query (platform=client) hangs when the page returns an error resolution
- [#4367](https://github.com/deepseek-ai/deepseek-harness/discussions/4367) Bug: DeepSeek WebSearchProvider drops the generated answer from native web search responses
- [#1105](https://github.com/deepseek-ai/deepseek-harness/discussions/1105) [Bug Report] subagent 显式指定 `model` 被选择层覆盖：workflow `agent(prompt, {model})` 的模型不生效
- [#1100](https://github.com/deepseek-ai/deepseek-harness/discussions/1100) [Bug]subagent 无法切换模型——workflow 的 `model` 覆盖被父 agent 模型覆盖
- [#4158](https://github.com/deepseek-ai/deepseek-harness/discussions/4158) [Bug] spawn 子代理路由两源拼接：provider 继承父会话、model 落全局默认，多 provider 下产生非法组合（UNKNOWN_MODEL）
- [#4077](https://github.com/deepseek-ai/deepseek-harness/discussions/4077) BUG: Spawned subagents inherit `agent.options` stamped at agent creation, not the agent's current model selection
- [#2904](https://github.com/deepseek-ai/deepseek-harness/discussions/2904) [BUG] Spawned subagents inherit the parent's creation-time model options — stale provider keeps 401ing until server restart
- [#4362](https://github.com/deepseek-ai/deepseek-harness/discussions/4362) [Bug] markdown: lone ~ treated as strikethrough, breaks range/math notation (e.g. 350~500ml)
- [#4354](https://github.com/deepseek-ai/deepseek-harness/discussions/4354) [Bug] litellm驱动的模型调用工具后，产生空 text block 被回放为 assistant message，导致 Anthropic assistant prefill 400
- [#3112](https://github.com/deepseek-ai/deepseek-harness/discussions/3112) Bug: read tcp 错误被误分类为 PI_AI_ERROR，导致 session 直接终止
- [#3797](https://github.com/deepseek-ai/deepseek-harness/discussions/3797) [bug] 打开大会话时 history 页把全部 assistant/chunk 送进浏览器，UI 看起来像没回复 — 附可 cherry-pick 修复
- [#4312](https://github.com/deepseek-ai/deepseek-harness/discussions/4312) Bug: concurrent dsh launches race in healProfilesModuleFallback — TOCTOU ENOENT crashes in ensureSymlink (0.1.1-rc.2, still present on master)
- [#4093](https://github.com/deepseek-ai/deepseek-harness/discussions/4093) Bug: releasing a continuable child wakes it mid-disposal — settlement notice spawns a paid model turn reported as 'completed'
- [#4311](https://github.com/deepseek-ai/deepseek-harness/discussions/4311) [Bug] 子代理默认委派失败：子代理继承的是过期的 base 默认模型，而非父代理实际运行的模型
- [#4102](https://github.com/deepseek-ai/deepseek-harness/discussions/4102) Bug: pwsh persistent tool completes early on prompt-shaped output — fixed prompt constant lets untrusted file content end the wait mid-command
- [#4306](https://github.com/deepseek-ai/deepseek-harness/discussions/4306) [bug] Minimal ("极简") preset ships without compaction, and compaction-basic under-counts the output budget
- [#468](https://github.com/deepseek-ai/deepseek-harness/discussions/468) [Bug Report] danger-full-access 下模型重试带 `sandbox_permissions` 的调用被"not strictly wider"拒绝——升级面不随当前模式裁剪，错误文案被误读为权限系统失效
- [#2006](https://github.com/deepseek-ai/deepseek-harness/discussions/2006) Bug Report: Subagent 未正确继承父 Agent 的模型配置
- [#455](https://github.com/deepseek-ai/deepseek-harness/discussions/455) [Bug Report] 子代理继承父代理的"创建时默认模型"而非"会话当前模型"，第三方 provider 会话中 subagent 必报 no API key for provider route "deepseek-official"
- [#4073](https://github.com/deepseek-ai/deepseek-harness/discussions/4073) Bug: LSP server stdout has no error listener — one transport failure crashes the whole host process
- [#4299](https://github.com/deepseek-ai/deepseek-harness/discussions/4299) [Bug] dsh-mcp-client should sanitize MCP     $schema/format before registering tools
- [#201](https://github.com/deepseek-ai/deepseek-harness/discussions/201) [BUG] spamming Error: sandbox escalation to "workspace-write" is not strictly wider than this call's current "danger-full-access" mode
- [#4276](https://github.com/deepseek-ai/deepseek-harness/discussions/4276) Bug: acp permission requests carry only toolCallId, so no client can describe what it is approving

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-08-25T00:54:03.031Z_