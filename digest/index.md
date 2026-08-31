# DSH Bug Watch — 2026-08-31

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 48

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#455](https://github.com/deepseek-ai/deepseek-harness/discussions/455) [Bug Report] 子代理继承父代理的"创建时默认模型"而非"会话当前模型"，第三方 provider 会话中 subagent 必报 no API key for provider route "deepseek-official"
- [#5147](https://github.com/deepseek-ai/deepseek-harness/discussions/5147) Bug: Changing approval policy while escalation is pending leaves agent stuck working
- [#5142](https://github.com/deepseek-ai/deepseek-harness/discussions/5142) [bug]同时开启desktop和web时session内容同步报错
- [#5140](https://github.com/deepseek-ai/deepseek-harness/discussions/5140) [bug] Keep response pinned at bottom instead of continuous scrolling (and only scroll up once before the text comes)
- [#468](https://github.com/deepseek-ai/deepseek-harness/discussions/468) [Bug Report] danger-full-access 下模型重试带 `sandbox_permissions` 的调用被"not strictly wider"拒绝——升级面不随当前模式裁剪，错误文案被误读为权限系统失效
- [#4666](https://github.com/deepseek-ai/deepseek-harness/discussions/4666) [bug] Spawn-backed subagents drop reasoningEffort; endpoints that require thinking reject every delegation
- [#5128](https://github.com/deepseek-ai/deepseek-harness/discussions/5128) [BUG] Python SDK指南版本未对齐
- [#3250](https://github.com/deepseek-ai/deepseek-harness/discussions/3250) [Bug][Fix available] pnpm add -g 后 native binding 解析失败，dsh web 找不到已安装插件
- [#5046](https://github.com/deepseek-ai/deepseek-harness/discussions/5046) [Bug] persistent bash mis-expands ! in commands via history expansion; bash 3.2.57 (incl. macOS default) hangs until timeout (shebangs in heredocs) - one-line fix
- [#4990](https://github.com/deepseek-ai/deepseek-harness/discussions/4990) Bug: sandbox escalation error occurs when current mode is already danger-full-access
- [#3923](https://github.com/deepseek-ai/deepseek-harness/discussions/3923) [BUG] dsh-llm-pi-ai: tool_call arguments O(n²) reparse in long sessions causes 500 Upstream gateway error
- [#4763](https://github.com/deepseek-ai/deepseek-harness/discussions/4763) Bug: sandbox_permissions/justification break every tool call on Full access - sanitize no-op escalation requests
- [#5095](https://github.com/deepseek-ai/deepseek-harness/discussions/5095) [Bug] In-process subagents cannot write under inherited workspace-write because escalation fields remain exposed
- [#4091](https://github.com/deepseek-ai/deepseek-harness/discussions/4091) Bug: duplicate provider tool-call index silently merges two calls into one — the harness executes a different tool than the model called
- [#4062](https://github.com/deepseek-ai/deepseek-harness/discussions/4062) [Bug] SSE tool_calls delta 解析未防御空字符串 id/name，导致第三方供应商流式响应解析失败
- [#3822](https://github.com/deepseek-ai/deepseek-harness/discussions/3822) Bug: streamed tool_call id/name clobbered by empty strings from OpenAI-compatible gateways (llm-deepseek), breaks session reload
- [#3807](https://github.com/deepseek-ai/deepseek-harness/discussions/3807) [Bug] llm-deepseek loses tool name when later deltas repeat an empty name
- [#3299](https://github.com/deepseek-ai/deepseek-harness/discussions/3299) Bug: streaming tool_calls with empty name from third-party backends cause agent loops
- [#3281](https://github.com/deepseek-ai/deepseek-harness/discussions/3281) Bug: streamed tool calls assembled with empty name/callId when continuation deltas carry explicit id:""/name:null (dsh-llm-deepseek, rc.6 & rc.7)
- [#2916](https://github.com/deepseek-ai/deepseek-harness/discussions/2916) [Bug] 流式 tool_calls delta 中 name/id 为 null 时被覆盖，导致 unknown tool ""
- [#2802](https://github.com/deepseek-ai/deepseek-harness/discussions/2802) [Bug] rc.6: every tool call fails with "unknown tool """ — streamed deltas drop the tool name (write/bash all broken)
- [#5113](https://github.com/deepseek-ai/deepseek-harness/discussions/5113) [Bug] reasoning-only stop is treated as completed and silently ends the turn
- [#3985](https://github.com/deepseek-ai/deepseek-harness/discussions/3985) [BUG] 代理环境下 LLM API 请求全部失败：Node fetch (undici) 不读取 HTTP_PROXY/HTTPS_PROXY 环境变量
- [#4858](https://github.com/deepseek-ai/deepseek-harness/discussions/4858) [BUG]dsh-v0.1.2-alpha.1 中对话标签新增的调整宽度功能在由插件提供的标签页中意外出现
- [#967](https://github.com/deepseek-ai/deepseek-harness/discussions/967) [Bug] 会话历史含孤立代理项（JS .slice() 切断 emoji 代理对）后，dsh-llm-deepseek 所有请求被 API 以 HTTP 400 拒绝，且错误文案无法定位根因
- [#231](https://github.com/deepseek-ai/deepseek-harness/discussions/231) Bug: Web UI multi-turn sessions drop reasoning blocks — 400 "reasoning_text must be passed back" (openai-responses custom provider)
- [#1850](https://github.com/deepseek-ai/deepseek-harness/discussions/1850) [BUG] DeepSeek thinking-mode reasoning_content not passed back when tool-call assistant msg has empty reasoning -> HTTP 400
- [#3857](https://github.com/deepseek-ai/deepseek-harness/discussions/3857) Bug: DeepSeek 思考模式 + tool calls → 400 'reasoning_content must be passed back'
- [#199](https://github.com/deepseek-ai/deepseek-harness/discussions/199) Bug: vLLM self-hosted deployments stream thinking as delta.reasoning — adapter drops it (fix available)
- [#2674](https://github.com/deepseek-ai/deepseek-harness/discussions/2674) Bug: empty tool-call id/name wipe in llm-deepseek makes session history unloadable
- [#931](https://github.com/deepseek-ai/deepseek-harness/discussions/931) bug: v4 flash 模型跑任务，一致报错工具不可调用
- [#3112](https://github.com/deepseek-ai/deepseek-harness/discussions/3112) Bug: read tcp 错误被误分类为 PI_AI_ERROR，导致 session 直接终止
- [#3128](https://github.com/deepseek-ai/deepseek-harness/discussions/3128) [Bug] dsh-llm-pi-ai ignores Retry-After when retrying — TPM-limited retries always fail
- [#3090](https://github.com/deepseek-ai/deepseek-harness/discussions/3090) Bug: tool calls lose their name/id when streamed through OpenAI-compatible gateways (empty-string deltas overwrite assembly)
- [#3047](https://github.com/deepseek-ai/deepseek-harness/discussions/3047) [bug] agent-loop: markdown-fenced tool-call arguments are rejected with "arguments must be an object"
- [#5119](https://github.com/deepseek-ai/deepseek-harness/discussions/5119) [Bug] Web composer disappears until page refresh — conversation.composer.bar inject crashes with "ui-conversation: conversation service unavailable" during client module hot-update
- [#5116](https://github.com/deepseek-ai/deepseek-harness/discussions/5116) Bug: pre-existing TS errors block pnpm run build on master (5 errors in test files, @types/react bigint/ReactNode)
- [#3489](https://github.com/deepseek-ai/deepseek-harness/discussions/3489) [Bug] Expired MCP session causes repeated tool-call failures without reconnect or circuit breaking
- [#1420](https://github.com/deepseek-ai/deepseek-harness/discussions/1420) [Bug Report]：Windows 上 dsh plugin 的含空格路径参数会被拆断
- [#2659](https://github.com/deepseek-ai/deepseek-harness/discussions/2659) [BUG]模型输出12189后被强制截断
- [#5082](https://github.com/deepseek-ai/deepseek-harness/discussions/5082) [Bug] pnpm run build 在 Node < 24.2 上静默退出（退出码 0），不生成任何构建产物
- [#5007](https://github.com/deepseek-ai/deepseek-harness/discussions/5007) [Bug] Cannot stream from vLLM end point
- [#5062](https://github.com/deepseek-ai/deepseek-harness/discussions/5062) [Bug] dsh plugin: Windows 下 remove link: 安装的插件 后 node_modules 残留链接，后续 add 同名 git 插件稳定复现 ERR_PNPM_EPERM，且失败提示为错误诊断
- [#3226](https://github.com/deepseek-ai/deepseek-harness/discussions/3226) Bug: adopted vision models lose input modalities during discovery (MODEL_DOES_NOT_SUPPORT_IMAGES)
- [#530](https://github.com/deepseek-ai/deepseek-harness/discussions/530) [Bug] `WebSocket error` 被归类为 `PI_AI_ERROR`，导致绕过重试
- [#5034](https://github.com/deepseek-ai/deepseek-harness/discussions/5034) [BUG]归入未分组的对话会导致Error: spawn C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe ENOENT
- [#1586](https://github.com/deepseek-ai/deepseek-harness/discussions/1586) [bug] 会话历史加载失败：崩溃恢复与残留执行流并发写同一日志，seq 重叠（corrupt session log: seq gap in committed region）
- [#696](https://github.com/deepseek-ai/deepseek-harness/discussions/696) [BUG] RTL mixed-text rendering is broken when a sentence starts with an English word

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-08-31T02:48:43.598Z_