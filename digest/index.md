# DSH Bug Watch — 2026-08-24

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 63

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
- [#3786](https://github.com/deepseek-ai/deepseek-harness/discussions/3786) **[Bug] npx @deepseek-ai/dsh web 无限卡死：npm 依赖解析死循环（CPU 100%、零网络流量、换镜像无效）**<br/>  分类：General · 标签：— · 最近更新：2026-08-23
- [#580](https://github.com/deepseek-ai/deepseek-harness/discussions/580) **[bug] Win32 原生目录选择器在 U+XX00（如「开」）处截断 UTF-16 路径 — 附可 cherry-pick 修复**<br/>  分类：General · 标签：— · 最近更新：2026-08-23

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#4276](https://github.com/deepseek-ai/deepseek-harness/discussions/4276) Bug: acp permission requests carry only toolCallId, so no client can describe what it is approving
- [#3877](https://github.com/deepseek-ai/deepseek-harness/discussions/3877) Bug: sandbox escalation rejects non-widening sandbox_permissions, causing tool-calling error spam with non-DeepSeek / custom models
- [#403](https://github.com/deepseek-ai/deepseek-harness/discussions/403) [Bug] agent-presets.roots user config is overwritten by composeProfile — custom preset roots never take effect
- [#4265](https://github.com/deepseek-ai/deepseek-harness/discussions/4265) Bug: llm-deepseek adapter drops tool name/id when relay sends explicit null in stream chunks
- [#4127](https://github.com/deepseek-ai/deepseek-harness/discussions/4127) [Bug] 同一 workspace 多开 dsh 实例导致会话日志 seq 重复损坏:历史会话 seq gap 打不开,且单帧重写可致整个 web 启动崩溃
- [#4178](https://github.com/deepseek-ai/deepseek-harness/discussions/4178) [BUG] 两个 dsh web 实例并发打开同一会话，导致会话日志 seq 冲突、历史记录损坏
- [#4208](https://github.com/deepseek-ai/deepseek-harness/discussions/4208) [bug] Concurrent session writers cause corrupt session log (seq collision) - history/model fail to load
- [#483](https://github.com/deepseek-ai/deepseek-harness/discussions/483) [bug] After a force-kill of the DSH host (deadlocked agents) + restart, user input appears late or never - write-behind batching loses the un-flushed tail
- [#1550](https://github.com/deepseek-ai/deepseek-harness/discussions/1550) [Bug] Cold history loading fully materializes large/corrupt logs and can stall the entire Web server
- [#436](https://github.com/deepseek-ai/deepseek-harness/discussions/436) [Bug] 会话历史包含孤立 UTF-16 代理码元后，所有后续请求持续返回 HTTP 400 `INVALID_REQUEST`
- [#2904](https://github.com/deepseek-ai/deepseek-harness/discussions/2904) [BUG] Spawned subagents inherit the parent's creation-time model options — stale provider keeps 401ing until server restart
- [#3797](https://github.com/deepseek-ai/deepseek-harness/discussions/3797) [bug] 打开大会话时 history 页把全部 assistant/chunk 送进浏览器，UI 看起来像没回复 — 附可 cherry-pick 修复
- [#4244](https://github.com/deepseek-ai/deepseek-harness/discussions/4244) [Bug] An incomplete custom model entry disables pi-ai providers and the Models UI after restart
- [#4248](https://github.com/deepseek-ai/deepseek-harness/discussions/4248) [Bug]新建会话空态下输入框不可点击/输入（composer 塌缩到 ~4px）
- [#4247](https://github.com/deepseek-ai/deepseek-harness/discussions/4247) [Bug][subprocess] Whole-host crash when an external %TEMP% sweep removes the spill directory mid-stream (root cause + fix)
- [#4243](https://github.com/deepseek-ai/deepseek-harness/discussions/4243) [Bug] A hand-declared keyless route can never serve its first request (local LM Studio / Ollama)
- [#1472](https://github.com/deepseek-ai/deepseek-harness/discussions/1472) [Bug] Subagents inherit session-start options.model instead of the current UI-selected model (causes unexpected v4-pro billing)
- [#3454](https://github.com/deepseek-ai/deepseek-harness/discussions/3454) Bug: unknown prompt variable "{{hexagon}}" in section "tools:sdk" under code-mode presets with drawio MCP
- [#4166](https://github.com/deepseek-ai/deepseek-harness/discussions/4166) [Bug] Cold history resolves the wrong presenter for agent-scoped shadow tools
- [#4233](https://github.com/deepseek-ai/deepseek-harness/discussions/4233) [Bug] Web UI chat input: Chinese IME composition is frequently interrupted — text jumps and commits wrong characters when typing fast
- [#4227](https://github.com/deepseek-ai/deepseek-harness/discussions/4227) [Bug] Tapping an answer in the planning question popup does not confirm it on mobile
- [#3717](https://github.com/deepseek-ai/deepseek-harness/discussions/3717) [Bug Report] 自定义agent删除后， 界面无法恢复为默认agent
- [#1839](https://github.com/deepseek-ai/deepseek-harness/discussions/1839) Bug report: New Session silently fails when the default agent preset no longer exists
- [#4223](https://github.com/deepseek-ai/deepseek-harness/discussions/4223) Bug: dsh-host-directory-picker-native 在 Windows 上使用原生文件夹选择器导致后端进程级崩溃 (FATAL ERROR: Error::New napi_get_last_error_info)
- [#2540](https://github.com/deepseek-ai/deepseek-harness/discussions/2540) Bug: tool-call id/name overwritten by empty strings from OpenAI-compatible providers (every tool call becomes `unknown tool ""`)
- [#468](https://github.com/deepseek-ai/deepseek-harness/discussions/468) [Bug Report] danger-full-access 下模型重试带 `sandbox_permissions` 的调用被"not strictly wider"拒绝——升级面不随当前模式裁剪，错误文案被误读为权限系统失效
- [#4218](https://github.com/deepseek-ai/deepseek-harness/discussions/4218) [Bug] dsh web crashes on Windows when a tool call / sub-agent is triggered
- [#4217](https://github.com/deepseek-ai/deepseek-harness/discussions/4217) [Bug] 长会话在 DeepSeek 上报 HTTP 400 INVALID_REQUEST 且无法恢复
- [#4214](https://github.com/deepseek-ai/deepseek-harness/discussions/4214) [Bug] Windows host process exits with 0xC0000409 (fail-fast) during heavy multi-tool turn
- [#4212](https://github.com/deepseek-ai/deepseek-harness/discussions/4212) [Bug] Custom `api: openai-responses` provider against vllm fails with "Unexpected end of JSON input" on streaming
- [#4206](https://github.com/deepseek-ai/deepseek-harness/discussions/4206) [Bug] Missing default fallback for image budget in PiAiAdapter causes "Image request maxPixels must be a positive integer"
- [#3519](https://github.com/deepseek-ai/deepseek-harness/discussions/3519) [Bug] Repeated sandbox_permissions causes subagent Bash/Write/Edit calls to fail repeatedly
- [#4198](https://github.com/deepseek-ai/deepseek-harness/discussions/4198) [bug] subagent: an aborted child's closing message injects tool-call blocks into a user message, permanently breaking the parent session
- [#4196](https://github.com/deepseek-ai/deepseek-harness/discussions/4196) [Bug] 所有 in-process subagent 必然失败（join deployment preset 后运行循环静默死亡）；headless profile 完全正常
- [#4193](https://github.com/deepseek-ai/deepseek-harness/discussions/4193) [Bug] Subagent 工具未暴露 model/provider 参数，子代理强制继承父代理模型导致无法按需切换模型
- [#758](https://github.com/deepseek-ai/deepseek-harness/discussions/758) [Bug Report] Windows sandbox (workspace-write): permanent crash after Temp cleanup (P0) + 4 related issues
- [#2931](https://github.com/deepseek-ai/deepseek-harness/discussions/2931) [Bug] dsh web 首次打开页面必现 "Failed to load plugins"（29 个 entry 全部 pending），刷新后恢复
- [#4170](https://github.com/deepseek-ai/deepseek-harness/discussions/4170) Bug: Web bundle exposes an empty agent preset roster outside the CLI
- [#4167](https://github.com/deepseek-ai/deepseek-harness/discussions/4167) [Bug] Deleted/modified agent preset ("Mode") strands recorded sessions after host restart: preset "X" not found
- [#2169](https://github.com/deepseek-ai/deepseek-harness/discussions/2169) [Bug] 流式工具调用增量携带空 id/name，导致会话历史永久无法加载：SessionPersistenceCorruptionError: message must have tool source
- [#4073](https://github.com/deepseek-ai/deepseek-harness/discussions/4073) Bug: LSP server stdout has no error listener — one transport failure crashes the whole host process
- [#1397](https://github.com/deepseek-ai/deepseek-harness/discussions/1397) [Bug] 自定义提供方(openai-completions)下内置工具 get_goal schema 非法:null is not of type "array"
- [#4158](https://github.com/deepseek-ai/deepseek-harness/discussions/4158) [Bug] spawn 子代理路由两源拼接：provider 继承父会话、model 落全局默认，多 provider 下产生非法组合（UNKNOWN_MODEL）
- [#4048](https://github.com/deepseek-ai/deepseek-harness/discussions/4048) Bug: Failed tool call causing session dead lock
- [#4120](https://github.com/deepseek-ai/deepseek-harness/discussions/4120) Bug: pi-ai pinned at ^0.82.1 cannot receive the 0.84.2 fix for dropped tool-call arguments
- [#4115](https://github.com/deepseek-ai/deepseek-harness/discussions/4115) [Bug] 创造模式创建的不可用自定义 Agent 预设被启用后，「新会话」静默失败：UI 无任何反馈（New Session silent failure when the active custom preset fails to mount）
- [#4109](https://github.com/deepseek-ai/deepseek-harness/discussions/4109) Bug: job disposal awaits producer cancellation without deadline — one stuck cancel() stalls whole-process shutdown forever
- [#4108](https://github.com/deepseek-ai/deepseek-harness/discussions/4108) Bug: parallel tool-call deltas without ids collapse to identical empty CallId — replayed results cannot be correlated by the provider
- [#4107](https://github.com/deepseek-ai/deepseek-harness/discussions/4107) Bug: settings/credentials watchers pin the boot-time symlink target — retargeted dotfiles stop updating and edits cross-attribute between files
- [#4106](https://github.com/deepseek-ai/deepseek-harness/discussions/4106) Bug: three silent .env value-loss classes (BOM, CR-only endings, multiline quoted values) route credentials to the wrong layer with no diagnostic
- [#4105](https://github.com/deepseek-ai/deepseek-harness/discussions/4105) Bug: tool registration accepts control-character names, megabyte descriptions, and duplicate names — ambiguity reaches the wire instead of failing loud at load
- [#4102](https://github.com/deepseek-ai/deepseek-harness/discussions/4102) Bug: pwsh persistent tool completes early on prompt-shaped output — fixed prompt constant lets untrusted file content end the wait mid-command
- [#4101](https://github.com/deepseek-ai/deepseek-harness/discussions/4101) Bug: per-process job-id counters collide across resume — stale transcript ids bind to new jobs, misattributing output into model context
- [#4099](https://github.com/deepseek-ai/deepseek-harness/discussions/4099) Bug: authorization commit confirmation is attribution-free — a concurrent unrelated writer makes a failed re-auth report 'authorized'
- [#4098](https://github.com/deepseek-ai/deepseek-harness/discussions/4098) Bug: provider-reported usage flows unchecked into durable token accounting — one malformed response poisons projections permanently
- [#4097](https://github.com/deepseek-ai/deepseek-harness/discussions/4097) Bug: compaction checkpoint frames don't escape the close tag — model-controlled summary text breaks out of the trusted checkpoint block
- [#4093](https://github.com/deepseek-ai/deepseek-harness/discussions/4093) Bug: releasing a continuable child wakes it mid-disposal — settlement notice spawns a paid model turn reported as 'completed'
- [#4091](https://github.com/deepseek-ai/deepseek-harness/discussions/4091) Bug: duplicate provider tool-call index silently merges two calls into one — the harness executes a different tool than the model called
- [#3536](https://github.com/deepseek-ai/deepseek-harness/discussions/3536) [Bug] 浏览器端插件代码错误致 UI 白屏且零可恢复性（FISH_CSS is not defined 实例），建议 client 错误隔离 + 安全模式
- [#2752](https://github.com/deepseek-ai/deepseek-harness/discussions/2752) [Bug] 浏览器端插件服务名冲突致 UI 白屏，报错无冲突来源信息，服务端日志完全无感知
- [#3988](https://github.com/deepseek-ai/deepseek-harness/discussions/3988) [Bug][Web GUI]：会话在所属 workspace 开始后刷新即变空，浏览器侧会话状态未按 workspace 作用域化

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-08-24T00:54:14.700Z_