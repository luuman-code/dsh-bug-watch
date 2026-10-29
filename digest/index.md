# DSH Bug Watch — 2026-10-29

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 56

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#11401](https://github.com/deepseek-ai/deepseek-harness/discussions/11401) [bug] Web search 设置页无法配置 Messages 搜索的模型名（model 字段缺失）
- [#11400](https://github.com/deepseek-ai/deepseek-harness/discussions/11400) [Bug] Desktop built-in plugin imports fail when directory parents skip the profile manifest
- [#11397](https://github.com/deepseek-ai/deepseek-harness/discussions/11397) [Bug][Desktop 0.2.1-rc.3] Auth cookies accumulate across restarts, causing HTTP 431 and startup failure
- [#9314](https://github.com/deepseek-ai/deepseek-harness/discussions/9314) [BUG] Workspace-write provisioning leaves a persistent Low integrity label on the workspace root — executables built in the workspace run at Low IL and fail all writes outside the sandbox
- [#11398](https://github.com/deepseek-ai/deepseek-harness/discussions/11398) [bug] anthropic-messages: tool-result pruning rewrites history without invalidating replayed thinking signatures
- [#11390](https://github.com/deepseek-ai/deepseek-harness/discussions/11390) [Bug] tok/s reading inflated by orders of magnitude on tool-call steps (decodeMs collapses to ~1ms)
- [#11389](https://github.com/deepseek-ai/deepseek-harness/discussions/11389) [Bug] Windows (win32): @dsh-external/dsh-blender-plugin raw child_process.spawn without error listener or windowsHide crashes dsh-desktop-host every 15s and leaks port 17860
- [#11388](https://github.com/deepseek-ai/deepseek-harness/discussions/11388) [Bug] fix(desktop): serialize DesktopProjectManager.withLock() stale profile lock takeover with a claim file
- [#11387](https://github.com/deepseek-ai/deepseek-harness/discussions/11387) [Bug] fix(desktop): preserve Host failure diagnostic when Host exits during post-ready HTTP setup in DesktopBackendController.start()
- [#11381](https://github.com/deepseek-ai/deepseek-harness/discussions/11381) [Bug] dsh-tool-subagent 实例配置 modelDiscovery 为 false 时仍注册 list_subagent_models 工具
- [#11380](https://github.com/deepseek-ai/deepseek-harness/discussions/11380) [Bug] Desktop Host aborts with SIGABRT (exit 134) at the ~4 GB V8 heap ceiling; restored long sessions reach it during startup
- [#11379](https://github.com/deepseek-ai/deepseek-harness/discussions/11379) [Bug] Desktop startup fails: local dsh-auth-* cookie accumulation can exceed 16KB request header
- [#11378](https://github.com/deepseek-ai/deepseek-harness/discussions/11378) [Bug] Inline file links with Windows paths open wrong path: Markdown backslash escaping breaks _-prefixed segments; sidebar reports file-not-found
- [#11377](https://github.com/deepseek-ai/deepseek-harness/discussions/11377) [Bug] DeepSeek Harness desktop returns persistent 502 on account-login channel since Oct 28
- [#11376](https://github.com/deepseek-ai/deepseek-harness/discussions/11376) [Bug] DeepSeek Harness desktop returns persistent 502 on account-login channel since Oct 28
- [#11373](https://github.com/deepseek-ai/deepseek-harness/discussions/11373) [Bug] tools.restrict() 遮不住 agent 自身作用域注册的工具：own 层不过 admits，也不进 restrictableNames
- [#11358](https://github.com/deepseek-ai/deepseek-harness/discussions/11358) [Bug]Web RPC Failed
- [#11346](https://github.com/deepseek-ai/deepseek-harness/discussions/11346) [Bug] Desktop app startup failed: 1 required plugin did not activate (v0.2.1-rc.3)
- [#11337](https://github.com/deepseek-ai/deepseek-harness/discussions/11337) [Bug] Benign Chinese ops prompt → stream ends with stop reason "refusal" → client reports MALFORMED_RESPONSE (deepseek-flash)
- [#11314](https://github.com/deepseek-ai/deepseek-harness/discussions/11314) [Bug] Factory headroom-dominated pressure budget -> premature auto-compaction loop on large-window local models; compaction lifecycle invisible to plugin subscribers (0.2.2-alpha.2)
- [#9949](https://github.com/deepseek-ai/deepseek-harness/discussions/9949) [Bug] `subagent_codex` fails on any model newer than the pinned Codex CLI (0.153.4)
- [#11356](https://github.com/deepseek-ai/deepseek-harness/discussions/11356) [Bug] compaction-basic: summarize call drops the session's reasoningEffort, so non-default-effort sessions re-prefill the whole history
- [#11347](https://github.com/deepseek-ai/deepseek-harness/discussions/11347) [Bug] DSH Using Significantly More Input Tokens than other Agents
- [#11349](https://github.com/deepseek-ai/deepseek-harness/discussions/11349) [BUG] DSH 使用的输入令牌数量远多于其他智能体
- [#7642](https://github.com/deepseek-ai/deepseek-harness/discussions/7642) [Bug] Agent Teams bundle 在 Web/Desktop 未禁用 subagent：子代理不在 Team roster，list_agents/send_message 找不到也联系不上
- [#11121](https://github.com/deepseek-ai/deepseek-harness/discussions/11121) [Bug] dsh-hmr: 热重载后 apply() 定时器永久携带 executing=true，导致 runExclusive 嵌套报错
- [#11344](https://github.com/deepseek-ai/deepseek-harness/discussions/11344) [bug]Desktop startup fails with “Web authentication failed” after ~70 launches (auth cookie header exceeds Node’s 16 KiB limit)
- [#8420](https://github.com/deepseek-ai/deepseek-harness/discussions/8420) [Bug] 桌面版：沙箱模式下所有命令派生失败（exit code 3221225794 / 0xC0000142），被迫开全盘权限才能工作
- [#11341](https://github.com/deepseek-ai/deepseek-harness/discussions/11341) [Bug] plugin_manager set_plugin(false) drops the management RPC and leaves the host plugin disabled after DSH restart
- [#11318](https://github.com/deepseek-ai/deepseek-harness/discussions/11318) [Bug][Desktop] Windows 客户端下载下来启动报错，加上--no-sandbox 后可正常启动
- [#8453](https://github.com/deepseek-ai/deepseek-harness/discussions/8453) [Bug] Windows 11 sandbox bug: real folder permissions and the Low integrity label are permanently rewritten, with no revoke path —— Windows 11 沙箱 bug：真实目录的权限与 Low 完整性标签被永久改写，且无回收路径
- [#10630](https://github.com/deepseek-ai/deepseek-harness/discussions/10630) [BUG] v0.2.0-rc.2桌面版 WIN10 默认workspace-write沙箱下 pwsh 失败（failed）
- [#10808](https://github.com/deepseek-ai/deepseek-harness/discussions/10808) [Bug] 发送消息后同一条用户消息出现两个气泡（数据层只有一条，疑似 queued 提交未参与去重）
- [#11306](https://github.com/deepseek-ai/deepseek-harness/discussions/11306) [Bug] Desktop host dies with CordisError INACTIVE_EFFECT during plugin hot-reload (Fiber._reload)
- [#7801](https://github.com/deepseek-ai/deepseek-harness/discussions/7801) [Bug] 网页端静默吞掉 session/create 错误；dsh-persona 预设 schema 把 text 改名为 prefix，旧预设无迁移提示直接失效
- [#9904](https://github.com/deepseek-ai/deepseek-harness/discussions/9904) [Bug] Desktop host 进程因未捕获的 ECONNRESET 异常退出后 web 服务不自恢复（UI 假活、端口全断）
- [#11332](https://github.com/deepseek-ai/deepseek-harness/discussions/11332) [Bug][Desktop 0.2.1-rc.3] 启动失败：累积的 dsh-auth-* cookie 撑爆 16 KiB
- [#9852](https://github.com/deepseek-ai/deepseek-harness/discussions/9852) [BUG] Workspace "New session" fails with session/agent-busy when the only blank session is a continuable subagent thread
- [#11329](https://github.com/deepseek-ai/deepseek-harness/discussions/11329) [Bug][Windows] Factory headroomTokens puts the auto-compaction trigger at 49.4% of a 256K window, and every trigger invalidates the whole provider prompt cache (grok-4.7, 0.2.1-rc.3)
- [#11258](https://github.com/deepseek-ai/deepseek-harness/discussions/11258) [Bug] tool-call timeout is notify-only: a tool with a declared timeoutMs can hang the whole session past its budget
- [#11327](https://github.com/deepseek-ai/deepseek-harness/discussions/11327) [Bug] 上下文压缩失败后会话永久卡在「运行中」：UI 无法暂停/删除，压缩错误被序列化为 [object Object]
- [#11283](https://github.com/deepseek-ai/deepseek-harness/discussions/11283) [Bug] dsh-client-ui-chat causes renderer main-thread freeze on startup (Windows, 0.2.1-rc.3)
- [#11325](https://github.com/deepseek-ai/deepseek-harness/discussions/11325) BUG: 端口级 Cookie 在 127.0.0.1 上无限累积导致 HTTP 431
- [#11315](https://github.com/deepseek-ai/deepseek-harness/discussions/11315) [Bug][Desktop] Windows 客户端在高刷高分屏上，窗口内文字在输入/流式输出时发虚（其他窗口正常）
- [#11313](https://github.com/deepseek-ai/deepseek-harness/discussions/11313) [Bug][Python SDK][Windows] Official 0.2.1rc2 runtime wheel fails to persist sessions: koffi.node load error under D:\snapshot
- [#11303](https://github.com/deepseek-ai/deepseek-harness/discussions/11303) [Bug][Windows][Desktop 0.2.1-rc.3] 历史会话 cwd 指向离线 SMB/UNC 路径时，Host 启动被 fs.realpath 无限阻塞，主窗口一直不显示
- [#7735](https://github.com/deepseek-ai/deepseek-harness/discussions/7735) [Bug] Windows：沙箱给工作区根目录盖 Low 完整性标签后，目录内的 .bat/.cmd/.exe 双击弹「无法验证发布者」
- [#10164](https://github.com/deepseek-ai/deepseek-harness/discussions/10164) [Bug] Windows: Persistent PTY shell fails to start under workspace-write sandbox (root cause found)
- [#11294](https://github.com/deepseek-ai/deepseek-harness/discussions/11294) [Bug] dsh web 常驻约 25.8h 后 V8 堆打满默认 4GB 上限并 OOM 崩溃，进程静默退出（Node 24 / Windows 11）
- [#11293](https://github.com/deepseek-ai/deepseek-harness/discussions/11293) [Bug] Desktop startup fails with "desktop welcome: Web authentication failed" — per-launch dsh-auth cookies accumulate until the 16KB request-header limit returns 431
- [#11290](https://github.com/deepseek-ai/deepseek-harness/discussions/11290) [bug] macOS：Harness 为前台窗口时切换输入法，CursorUIViewService 占用 95%+ CPU 并导致全系统输入卡死
- [#10559](https://github.com/deepseek-ai/deepseek-harness/discussions/10559) [Bug] 0.2.1-rc.2 / Windows 11: host 以 0xFFFF7003 (4294930435) 静默退出，三次冷启动 3/3 必现，无堆栈、无 hostDiagnostic、无 WER 记录
- [#6684](https://github.com/deepseek-ai/deepseek-harness/discussions/6684) [Bug] Web GUI session view goes blank during an active turn (v3 session format) — reproduced on 0.1.5-rc.2, not on 0.1.2-rc.1
- [#11288](https://github.com/deepseek-ai/deepseek-harness/discussions/11288) [Bug] 会话目录残留一个明文世代文件 → workspaceController 不可用（工作区为空 / 卡在"正在加载工作区" / workspace/create service-unavailable）
- [#8126](https://github.com/deepseek-ai/deepseek-harness/discussions/8126) [Bug] Ctrl+A in a sidebar file preview selects the entire page (session list + conversation included), so preview content cannot be copied on its own
- [#9848](https://github.com/deepseek-ai/deepseek-harness/discussions/9848) [Bug] deepseek-flash 将 DSML 工具调用标记混入 tool input JSON，导致 turn 以 MALFORMED_RESPONSE 中止

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-29T03:54:28.283Z_