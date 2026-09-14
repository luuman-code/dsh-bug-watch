# DSH Bug Watch — 2026-09-14

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 51

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#6493](https://github.com/deepseek-ai/deepseek-harness/discussions/6493) [Bug] Session format migration (v0→v3) is non-atomic: stopping the process between the gen0 truncation and the v3 write irreversibly loses the log tail
- [#6569](https://github.com/deepseek-ai/deepseek-harness/discussions/6569) [BUG]0.1.5-rc.1,新会话按钮没有反应,工作区新会话直接打开了文件夹
- [#6224](https://github.com/deepseek-ai/deepseek-harness/discussions/6224) [Bug] llm-pi-ai/opencode-go: missing x-opencode-session header and deepseek-v4.1-flash catalog entry
- [#6561](https://github.com/deepseek-ai/deepseek-harness/discussions/6561) [Bug Report] Windows: confined children die with 0xC0000142 and raise modal dialogs; PowerShell capture of native commands silently fails
- [#5119](https://github.com/deepseek-ai/deepseek-harness/discussions/5119) [Bug] Web composer disappears until page refresh — conversation.composer.bar inject crashes with "ui-conversation: conversation service unavailable" during client module hot-update
- [#6217](https://github.com/deepseek-ai/deepseek-harness/discussions/6217) Bug: Web GUI file preview shows "file resource service unavailable" on Chromium <= 125 — protocolOf() relies on WHATWG URL host parsing for a non-special scheme
- [#5966](https://github.com/deepseek-ai/deepseek-harness/discussions/5966) bug: deepseek harness 现在对 AGENTS. md 的行为有问题。
- [#6552](https://github.com/deepseek-ai/deepseek-harness/discussions/6552) [Bug] 安卓语音输入：输入法组字里带换行时，输入框只落地一部分文本（首段整段丢失）
- [#6550](https://github.com/deepseek-ai/deepseek-harness/discussions/6550) [Bug] 安卓语音输入：输入法组字里带换行时，输入框只落地一部分文本（首段整段丢失）
- [#4021](https://github.com/deepseek-ai/deepseek-harness/discussions/4021) [Bug] Same-mode sandbox_permissions hard-errors instead of running — loops GPT-family models
- [#6517](https://github.com/deepseek-ai/deepseek-harness/discussions/6517) [Bug] Windows: every shell tool call opens a visible console window (Windows subprocess runner spawned without windowsHide)
- [#6484](https://github.com/deepseek-ai/deepseek-harness/discussions/6484) [Bug] 0.1.5 breaking rename: agent persona config key text→prefix silently drops persona content (no error, no migration warning)
- [#6138](https://github.com/deepseek-ai/deepseek-harness/discussions/6138) [Bug] 输入法拼音未上屏时，输入框自动填充乱码汉字
- [#6543](https://github.com/deepseek-ai/deepseek-harness/discussions/6543) [Bug] edit rejects same-mode sandbox_permissions under danger-full-access
- [#3375](https://github.com/deepseek-ai/deepseek-harness/discussions/3375) [Bug] 重启后侧栏所有会话标题显示为工作区文件夹名，点开会话后才恢复
- [#4167](https://github.com/deepseek-ai/deepseek-harness/discussions/4167) [Bug] Deleted/modified agent preset ("Mode") strands recorded sessions after host restart: preset "X" not found
- [#6539](https://github.com/deepseek-ai/deepseek-harness/discussions/6539) [Bug] Plugin/profile composition drift only surfaces as a fatal crash on the next boot — needs preflight validation and a dsh profile doctor
- [#6534](https://github.com/deepseek-ai/deepseek-harness/discussions/6534) [Bug] tool-result 剪枝跑在压缩选区之前，摘要器拿到的是已经被剪过的内容
- [#6262](https://github.com/deepseek-ai/deepseek-harness/discussions/6262) [Bug Report] session.fork 的 seed 多带一条 user prompt：turn/end 与下一个 turn/start 之间的事件被扫进子会话，子会话重跑父会话的下一条任务
- [#6505](https://github.com/deepseek-ai/deepseek-harness/discussions/6505) [Bug] "Reveal in File Explorer" creates a permanently invisible window on Windows
- [#6527](https://github.com/deepseek-ai/deepseek-harness/discussions/6527) [Bug] Stale cordis_inspect / cordis_mount references survive the tool-cordis rename
- [#6524](https://github.com/deepseek-ai/deepseek-harness/discussions/6524) [Bug] todo 任务栏在回合中断后永久消失（todos 投影被 turn/start 无条件清空）—— 证据 + 已验证的最小修复
- [#6461](https://github.com/deepseek-ai/deepseek-harness/discussions/6461) [Bug][Windows] koffi is load-bearing (session JSONL atomic writes, win32 process/acl) but fails late and confusingly under embedded Node
- [#3313](https://github.com/deepseek-ai/deepseek-harness/discussions/3313) [Bug] Web workspace picker truncates paths at CJK chars whose UTF-16 low byte is 0x00 (e.g. U+5F00)
- [#2126](https://github.com/deepseek-ai/deepseek-harness/discussions/2126) [Bug] Windows 原生目录选择器截断含 U+xx00 汉字的路径（如「阀」U+9600），导致 workspace 创建失败
- [#1660](https://github.com/deepseek-ai/deepseek-harness/discussions/1660) Bug: Windows folder picker truncates UTF-16 paths at code units whose first byte is 0x00 (common for CJK chars) -> workspace create fails with ENOENT / workspace-invalid-path
- [#280](https://github.com/deepseek-ai/deepseek-harness/discussions/280) [BUG] llm-pi-ai 应支持配置 compat.supportsDeveloperRole
- [#4666](https://github.com/deepseek-ai/deepseek-harness/discussions/4666) [bug] Spawn-backed subagents drop reasoningEffort; endpoints that require thinking reject every delegation
- [#4612](https://github.com/deepseek-ai/deepseek-harness/discussions/4612) Bug report draft: native read_image tool fails with "cannot get property 'fs' without inject" (all presets)
- [#4591](https://github.com/deepseek-ai/deepseek-harness/discussions/4591) [BUG] Python SDK当 session ID 存在时无法 resume 对话
- [#4193](https://github.com/deepseek-ai/deepseek-harness/discussions/4193) [Bug] Subagent 工具未暴露 model/provider 参数，子代理强制继承父代理模型导致无法按需切换模型
- [#4023](https://github.com/deepseek-ai/deepseek-harness/discussions/4023) [Bug] Windows: dsh-subprocess-local 的 spawn()/taskkill 未设置 windowsHide，重启 Harness 时弹出空白 CMD 窗口
- [#6515](https://github.com/deepseek-ai/deepseek-harness/discussions/6515) [Bug] Windows: "Reveal in File Explorer" from a deliverables card silently does nothing (execFile + windowsHide + exit-1 swallow)
- [#5034](https://github.com/deepseek-ai/deepseek-harness/discussions/5034) [BUG]归入未分组的对话会导致Error: spawn C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe ENOENT
- [#6108](https://github.com/deepseek-ai/deepseek-harness/discussions/6108) [Bug] v2.0.6: skill-registry BigInt type error breaks all requests (REQUEST_EXTENSION failed)
- [#6223](https://github.com/deepseek-ai/deepseek-harness/discussions/6223) [Bug] /compact says a compaction is active when the agent is simply mid-turn
- [#6458](https://github.com/deepseek-ai/deepseek-harness/discussions/6458) [Bug] Todo list does not update incrementally during long-running tasks
- [#6483](https://github.com/deepseek-ai/deepseek-harness/discussions/6483) Bug report: Windows windows-acl sandbox dies permanently for a session when its cached private temp dir disappears
- [#6511](https://github.com/deepseek-ai/deepseek-harness/discussions/6511) [Bug] Every session open / client reconnect re-decodes the session log and retains the decoded copy until V8 heap OOM (~30–90s of UI activity)
- [#5408](https://github.com/deepseek-ai/deepseek-harness/discussions/5408) Bug: session log corruption — resumed writer re-appends overlapping seqs at byte-EOF (appendLines never validates the durable tail)
- [#6459](https://github.com/deepseek-ai/deepseek-harness/discussions/6459) [Bug] Coexisting dsh installations sharing one $DSH_HOME rewrite the shared profiles/node_modules fallback links on every launch
- [#6401](https://github.com/deepseek-ai/deepseek-harness/discussions/6401) [Bug] TRANSPORT retries reuse a CLOSED HTTP/2 session after the process loses a local address
- [#6467](https://github.com/deepseek-ai/deepseek-harness/discussions/6467) Bug: OpenCode Go requests fail with MissingSessionID
- [#6475](https://github.com/deepseek-ai/deepseek-harness/discussions/6475) [Bug] 工具结果里的图片块只有 read_image 会被渲染，其他工具（含插件工具）返回的图片被静默丢弃
- [#6496](https://github.com/deepseek-ai/deepseek-harness/discussions/6496) Bug: session list shows no title for seeded (forked/resumed) sessions until opened
- [#6494](https://github.com/deepseek-ai/deepseek-harness/discussions/6494) [Bug] Cross-session `session/prompt` messages are recorded without `senderSessionId` (sender not stored)
- [#6500](https://github.com/deepseek-ai/deepseek-harness/discussions/6500) [Bug] Two concurrent owners corrupt one session log, then the whole history fails to load with a misleading "torn JSONL record" error
- [#6497](https://github.com/deepseek-ai/deepseek-harness/discussions/6497) Bug: dsh_plugin_packages — one unresolvable active package fails every deepseek-official request (REQUEST_EXTENSION)
- [#6469](https://github.com/deepseek-ai/deepseek-harness/discussions/6469) [Bug] dsh-compaction reads the removed Session.events accessor -> every compress crashes with TypeError
- [#6314](https://github.com/deepseek-ai/deepseek-harness/discussions/6314) [Bug][0.1.5-rc.x] Fork 出的会话发送新消息时重放源会话旧 prompt（A），新 prompt（B/C）永久滞留队列不执行
- [#6455](https://github.com/deepseek-ai/deepseek-harness/discussions/6455) [Bug] 重启后子代理列表全部显示"不可用"：v0 日志的 `header.system` 无法迁移到 v3，且错误被降级为可重试的 `unavailable`

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-14T02:49:05.141Z_