# DSH Bug Watch — 2026-11-04

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 64

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#11991](https://github.com/deepseek-ai/deepseek-harness/discussions/11991) [BUG][Desktop 0.2.1-rc.3] 安装更新反复失败：desktop update: task inspection timed out —— 任务排空 10 秒死线过短
- [#9793](https://github.com/deepseek-ai/deepseek-harness/discussions/9793) [Bug] 工具调用被误输出为纯文本时完全静默：assistant 消息零 tool-call block，UI 仍显示「已完成」
- [#12095](https://github.com/deepseek-ai/deepseek-harness/discussions/12095) [BUG] DSH 工作目录写文件，一直申请权限
- [#12088](https://github.com/deepseek-ai/deepseek-harness/discussions/12088) [Bug] File links with line numbers are treated as missing files
- [#12092](https://github.com/deepseek-ai/deepseek-harness/discussions/12092) [Bug] dsh-hmr 启动时的 profile 对齐把进行中的 import 当成失败清掉，插件动态导入的 CommonJS 依赖触发 ERR_INTERNAL_ASSERTION
- [#11318](https://github.com/deepseek-ai/deepseek-harness/discussions/11318) [Bug][Desktop] Windows 客户端下载下来启动报错，加上--no-sandbox 后可正常启动
- [#12090](https://github.com/deepseek-ai/deepseek-harness/discussions/12090) [Bug][Plugin] Machine translation of reasoning 插件在翻译内容时, 不要翻译代码块内部的内容
- [#11853](https://github.com/deepseek-ai/deepseek-harness/discussions/11853) [bug] DSH 0.2.1-rc.5：Web GUI 改模型配置必报 profile reload requires the root Include entry
- [#12078](https://github.com/deepseek-ai/deepseek-harness/discussions/12078) [Bug] Windows workspace-write：ninja 启动子进程后永久挂起（命名管道写端被受限令牌拒绝）
- [#10155](https://github.com/deepseek-ai/deepseek-harness/discussions/10155) [Bug] Command hooks run under the deployment sandbox policy, not the calling session's: in danger-full-access a hook still cannot write the session workspace
- [#12075](https://github.com/deepseek-ai/deepseek-harness/discussions/12075) [Bug] Windows 10: every child process dies with 0xC0000142 under workspace-write while file writes still work
- [#10716](https://github.com/deepseek-ai/deepseek-harness/discussions/10716) [Bug] 桌面版「Web authentication failed」：Host 已回 303，跟随重定向时历史 dsh-auth cookie 触发 431（0.2.1-rc.2）
- [#11387](https://github.com/deepseek-ai/deepseek-harness/discussions/11387) [Bug] fix(desktop): preserve Host failure diagnostic when Host exits during post-ready HTTP setup in DesktopBackendController.start()
- [#10830](https://github.com/deepseek-ai/deepseek-harness/discussions/10830) [Bug] 桌面端启动不可恢复：每次启动铸一枚 30 天 dsh-auth-* cookie，约 70 次后 Cookie 头越 16 KB → 431 → "desktop welcome: Web authentication failed"
- [#11583](https://github.com/deepseek-ai/deepseek-harness/discussions/11583) [Bug] 桌面端 0.2.1-rc.5：每次启动铸一枚带随机端口的 dsh-auth-* cookie，约 70 次后 Cookie 头达 16 KB → HTTP 431 → 误报 desktop welcome: Web authentication failed，且无法自愈
- [#11332](https://github.com/deepseek-ai/deepseek-harness/discussions/11332) [Bug][Desktop 0.2.1-rc.3] 启动失败：累积的 dsh-auth-* cookie 撑爆 16 KiB
- [#11197](https://github.com/deepseek-ai/deepseek-harness/discussions/11197) [Bug] Desktop 0.2.1-rc.3 (Windows x64): "desktop welcome: Web authentication failed" once per-port dsh-auth cookies overflow the 16 KiB header limit
- [#11710](https://github.com/deepseek-ai/deepseek-harness/discussions/11710) [BUG] Platform auth cookies accumulate per-launch and are never cleared → 431 Request Header Too Large → DSH Desktop fails to launch after ~72 starts
- [#11293](https://github.com/deepseek-ai/deepseek-harness/discussions/11293) [Bug] Desktop startup fails with "desktop welcome: Web authentication failed" — per-launch dsh-auth cookies accumulate until the 16KB request-header limit returns 431
- [#10632](https://github.com/deepseek-ai/deepseek-harness/discussions/10632) [Bug] 桌面端每次启动新发一枚认证 cookie，约 70 次后请求头超过 16 KB，启动直接失败（431 → "Web authentication failed"）
- [#11344](https://github.com/deepseek-ai/deepseek-harness/discussions/11344) [bug]Desktop startup fails with “Web authentication failed” after ~70 launches (auth cookie header exceeds Node’s 16 KiB limit)
- [#11965](https://github.com/deepseek-ai/deepseek-harness/discussions/11965) [bug] Desktop 0.2.1-rc.5: "Web authentication failed" after ~70 launches (dsh-auth cookies exceed the 16 KB header limit)
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#11555](https://github.com/deepseek-ai/deepseek-harness/discussions/11555) [Bug] 本地认证 cookie 无限累积导致 "desktop welcome: Web authentication failed"
- [#11397](https://github.com/deepseek-ai/deepseek-harness/discussions/11397) [Bug][Desktop 0.2.1-rc.3] Auth cookies accumulate across restarts, causing HTTP 431 and startup failure
- [#11590](https://github.com/deepseek-ai/deepseek-harness/discussions/11590) [BUG] DSH 桌面版启动失败（Web authentication failed）：认证 cookie 无界累积撑爆请求头，30 天内约 70 次启动后触发
- [#11602](https://github.com/deepseek-ai/deepseek-harness/discussions/11602) [Bug] Desktop welcome: Web authentication failed on startup due to net.fetch stripping SameSite=Strict cookies on 303 redirect
- [#11379](https://github.com/deepseek-ai/deepseek-harness/discussions/11379) [Bug] Desktop startup fails: local dsh-auth-* cookie accumulation can exceed 16KB request header
- [#12065](https://github.com/deepseek-ai/deepseek-harness/discussions/12065) [Bug] 0.2.1-rc.5: a session log that fails the protected-head invariant is silently truncated to a frame prefix on app start (no backup); writer still emits the invalid append
- [#10619](https://github.com/deepseek-ai/deepseek-harness/discussions/10619) [Bug] 0.2.1-rc.2: sessions with non-empty surface but no system/message head fail to load (SessionFormatError: requires a protected first surface head)
- [#12012](https://github.com/deepseek-ai/deepseek-harness/discussions/12012) [BUG] documentpreview 打包的 pdfjs-dist 6.3.289 缺失 getOrInsertComputed polyfill，.pdf/.docx/.pptx 预览全量崩溃
- [#11886](https://github.com/deepseek-ai/deepseek-harness/discussions/11886) [Bug][0.2.2-alpha.2] Failed rollback activation is reported as “plugin is not installed”; the suggested Add action then returns already-installed
- [#339](https://github.com/deepseek-ai/deepseek-harness/discussions/339) Bug: 无法识别/claude/skill下面的软链接的skill
- [#9112](https://github.com/deepseek-ai/deepseek-harness/discussions/9112) [Bug][Desktop][macOS] 窗口完全无法拖动：连标记了 data-window-drag 的 chrome 行也拖不动（0.2.0-rc.2 / Electron 44）
- [#12045](https://github.com/deepseek-ai/deepseek-harness/discussions/12045) [Bug] Browser HTTP/1.1 connection pool exhaustion: plugin SSE/long-poll streams starve the ~6-connection pool, freezing new tabs (listBundles et al. pending forever)
- [#12058](https://github.com/deepseek-ai/deepseek-harness/discussions/12058) [Bug] 新建对话复用旧空 Session，导致子代理模型白名单使用过期设置
- [#12054](https://github.com/deepseek-ai/deepseek-harness/discussions/12054) [Bug] Chat relative Markdown images resolve to the session's original cwd (worktree sessions 404)
- [#10164](https://github.com/deepseek-ai/deepseek-harness/discussions/10164) [Bug] Windows: Persistent PTY shell fails to start under workspace-write sandbox (root cause found)
- [#12039](https://github.com/deepseek-ai/deepseek-harness/discussions/12039) [Bug] deepseek-search-api：已登录账号仅在会话路由为 deepseek-account 时生效，其他路由下 web_search 静默消失且无诊断
- [#12024](https://github.com/deepseek-ai/deepseek-harness/discussions/12024) [Bug] Windows: workspace-write 沙箱下所有子进程在 DLL 初始化阶段以 0xC0000142 退出（read-only 正常）
- [#12023](https://github.com/deepseek-ai/deepseek-harness/discussions/12023) [Bug]固定 4096 Token 安全余量导致小上下文模型首次请求即被限制为 1 个输出 Token
- [#12015](https://github.com/deepseek-ai/deepseek-harness/discussions/12015) [Bug][Windows Desktop 0.2.1-rc.5] Proxy env vars pointing at a dead port make every model request fail with "DeepSeek Messages transport failed" (no direct fallback)
- [#10162](https://github.com/deepseek-ai/deepseek-harness/discussions/10162) [Bug] open-in-app: VS Code (and every Electron app) cannot be launched on Windows — ELECTRON_RUN_AS_NODE leaks into the child environment
- [#11994](https://github.com/deepseek-ai/deepseek-harness/discussions/11994) Bug: [0.2.2-alpha.2] 内置 Agent 预设全部「加载失败」（Cannot read properties of undefined (reading 'parent')），且 settings 写入全部静默失败
- [#3158](https://github.com/deepseek-ai/deepseek-harness/discussions/3158) Bug: pi-ai stream_read_error is treated as non-retryable PI_AI_ERROR
- [#11404](https://github.com/deepseek-ai/deepseek-harness/discussions/11404) [Bug][Desktop 0.2.1-rc.3] sandboxed pwsh never runs: 0xC0000142 when the host process has no console
- [#11971](https://github.com/deepseek-ai/deepseek-harness/discussions/11971) [BUG] Gateway/internal: failed to create session
- [#11763](https://github.com/deepseek-ai/deepseek-harness/discussions/11763) [Bug] settings/describe crashes on Standard Schema Config with toJSON
- [#11984](https://github.com/deepseek-ai/deepseek-harness/discussions/11984) [Bug] @deepseek-ai/dsh@0.2.2-alpha.3 is uninstallable: alpha tag points at a wave missing @deepseek-ai/dsh-tool-pwsh-persistent@0.2.2-alpha.3
- [#11986](https://github.com/deepseek-ai/deepseek-harness/discussions/11986) [Bug] 0.2.1-rc.5: auto preset rejects every tool call on opencode-go routes (reviewer call omits sessionId → 400 MissingSessionID)
- [#11990](https://github.com/deepseek-ai/deepseek-harness/discussions/11990) [Bug] "system-message" withdrew materialized target "chat" on long compacted sessions (incremental "Load earlier")
- [#9599](https://github.com/deepseek-ai/deepseek-harness/discussions/9599) [Bug] 桌面版「在编辑器中打开」对 Electron 系编辑器必然失败 —— ELECTRON_RUN_AS_NODE 泄漏到子进程
- [#11121](https://github.com/deepseek-ai/deepseek-harness/discussions/11121) [Bug] dsh-hmr: 热重载后 apply() 定时器永久携带 executing=true，导致 runExclusive 嵌套报错
- [#11067](https://github.com/deepseek-ai/deepseek-harness/discussions/11067) [Bug] 切换 provider 后，历史 continuable 子 agent 仍按创建时的 provider 计费（界面全显示 opencode-go，实际扣了 DeepSeek 官方账号）
- [#11981](https://github.com/deepseek-ai/deepseek-harness/discussions/11981) [Bug] ptc 模式下中断/报错后 tool/ptc-dispatch* 落盘于 turn 之外，导致 session 历史永久无法加载
- [#11982](https://github.com/deepseek-ai/deepseek-harness/discussions/11982) [Bug] CUA native SDK 0.28.0：browser_navigate 的 session 可选契约与实际授权检查不一致
- [#11975](https://github.com/deepseek-ai/deepseek-harness/discussions/11975) Bug: Windows Terminal missing from "Open In..." - fs.stat() fails with EACCES on MSIX app execution aliases
- [#7788](https://github.com/deepseek-ai/deepseek-harness/discussions/7788) [Bug] MCP tool results drop structuredContent — the official computer-use plugin can't reach its own element_token
- [#11970](https://github.com/deepseek-ai/deepseek-harness/discussions/11970) [bug] dsh-superagent: GitHub Source silently drops a mention when its notification arrives late (race with the poll cursor)
- [#11963](https://github.com/deepseek-ai/deepseek-harness/discussions/11963) [Bug] dsh-client-ui-subagent 注入的服务无任何包提供，导致 web 端整页启动失败（0.2.1-rc.5）
- [#1202](https://github.com/deepseek-ai/deepseek-harness/discussions/1202) [Bug][Web GUI] Failed subagents stay visible in the UI as if still running — non-terminal ready state, no way to clear them from the UI
- [#10949](https://github.com/deepseek-ai/deepseek-harness/discussions/10949) [Bug] 0.2.1-rc.3 静默升级删除安装目录内的用户工作区（~835 MB 数据丢失，不进回收站，无任何提示）
- [#6747](https://github.com/deepseek-ai/deepseek-harness/discussions/6747) [Bug] Responses tool argument streaming saturates CPU and blocks the event loop (pi-ai 0.85.1; runnable repro)
- [#11935](https://github.com/deepseek-ai/deepseek-harness/discussions/11935) [Bug]Windows + UNC session workspace: every shell tool call wedges and kills the session (TOOL_OUTCOME_UNKNOWN, no launch timeout)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-04T04:23:33.159Z_