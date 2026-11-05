# DSH Bug Watch — 2026-11-05

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 63

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#12236](https://github.com/deepseek-ai/deepseek-harness/discussions/12236) [Bug] Desktop 卸载从自定义 npm 源安装的插件时回退到公共源，校验 404
- [#12234](https://github.com/deepseek-ai/deepseek-harness/discussions/12234) Bug: scrolling Chat shifts the session header (title row + view tabs) out of the window — 0.2.2-rc.1 on macOS
- [#12233](https://github.com/deepseek-ai/deepseek-harness/discussions/12233) [Bug]validation error for ResponseIncompleteEvent response.incomplete_details.reason Input should be 'max_output_tokens' or 'content_filter' [type=literal_error, input_value='length', input_type=str] For further information visit https://errors.pydantic.dev/2.13/v/literal_error
- [#11475](https://github.com/deepseek-ai/deepseek-harness/discussions/11475) [Bug] 工具目录被整体替换后，请求把所有工具标成 defer_loading，DeepSeek 通道返回 400 且该对话永久不可用
- [#11990](https://github.com/deepseek-ai/deepseek-harness/discussions/11990) [Bug] "system-message" withdrew materialized target "chat" on long compacted sessions (incremental "Load earlier")
- [#12228](https://github.com/deepseek-ai/deepseek-harness/discussions/12228) [Bug]: Auto-review fails with 'reviewer must emit zero or more reasoning blocks followed by exactly one text block' when using models with reasoning/thinking
- [#12225](https://github.com/deepseek-ai/deepseek-harness/discussions/12225) [Bug] 长任务中助手在工具调用之间只输出 "..." / "—"，缺少有效的过程说明
- [#12224](https://github.com/deepseek-ai/deepseek-harness/discussions/12224) [Bug] 插件更新后宿主原生崩溃：dsh-hmr 的 evict() 把 .node 清出 require.cache，原生模块被二次 dlopen 后断言失败
- [#12223](https://github.com/deepseek-ai/deepseek-harness/discussions/12223) [Bug][Desktop][macOS] 工作区所在 SMB 网络卷变为不可访问时，主机进程以 SIGABRT 退出，且 stderr 无任何 JavaScript 报错
- [#11831](https://github.com/deepseek-ai/deepseek-harness/discussions/11831) [Bug] 工具结果里一个孤立的 UTF-16 代理项（半个 emoji）会让会话永久 400（INVALID_REQUEST）
- [#11025](https://github.com/deepseek-ai/deepseek-harness/discussions/11025) [bug] 在模型思考阶段中断，会让会话永久不可用（Invalid assistant message: content or tool_calls must be set）
- [#12210](https://github.com/deepseek-ai/deepseek-harness/discussions/12210) [Bug] Upgrading only @deepseek-ai/dsh* to 0.2.2-rc.1 leaves the cordis family at 4.0.x — pnpm exits 0, boot fails with version-unrelated errors
- [#10813](https://github.com/deepseek-ai/deepseek-harness/discussions/10813) [Bug][macOS] 固定浅色主题启动时短暂切回深色
- [#12214](https://github.com/deepseek-ai/deepseek-harness/discussions/12214) Bug Report: `webServer` route not released on bundle remove/reinstall → duplicate-route activation failure
- [#12191](https://github.com/deepseek-ai/deepseek-harness/discussions/12191) [Bug][Desktop][macOS] rc.5：profile patch 被重写时丢失手写的 insert 条目，MCP 服务器静默消失
- [#12208](https://github.com/deepseek-ai/deepseek-harness/discussions/12208) [Bug] wait_agent 阻塞期间用户消息静默排队 26 分钟，无提示也无法让路
- [#12204](https://github.com/deepseek-ai/deepseek-harness/discussions/12204) [Bug] Pending workspace instructions from repository A can be injected after switching cwd to repository B
- [#12201](https://github.com/deepseek-ai/deepseek-harness/discussions/12201) [Bug] 工作区被标记 Low 完整性后，Electron/Chromium 无法启动（exit 0x80000003，无日志）
- [#12200](https://github.com/deepseek-ai/deepseek-harness/discussions/12200) [Bug] 子代理上游断线时父代理收不到任何通知（agent/error 触发但无转发）
- [#12199](https://github.com/deepseek-ai/deepseek-harness/discussions/12199) [BUG] pnpm 全局安装 dsh：node-addon-native-custom-loader 无法解析可选平台包，dsh web 启动失败
- [#11583](https://github.com/deepseek-ai/deepseek-harness/discussions/11583) [Bug] 桌面端 0.2.1-rc.5：每次启动铸一枚带随机端口的 dsh-auth-* cookie，约 70 次后 Cookie 头达 16 KB → HTTP 431 → 误报 desktop welcome: Web authentication failed，且无法自愈
- [#12192](https://github.com/deepseek-ai/deepseek-harness/discussions/12192) [Bug] 一个第三方插件失败（如重复 id 注册）即可让整个 Desktop 拒绝启动
- [#11223](https://github.com/deepseek-ai/deepseek-harness/discussions/11223) [Bug] Windows workspace-write: 0xC0000142 comes from the token default DACL naming a non-restricting capability SID (corrected; follow-up to #8991 / #8067)
- [#12187](https://github.com/deepseek-ai/deepseek-harness/discussions/12187) [bug]：在运行的时候，token用量浮层不断上移
- [#11258](https://github.com/deepseek-ai/deepseek-harness/discussions/11258) [Bug] tool-call timeout is notify-only: a tool with a declared timeoutMs can hang the whole session past its budget
- [#12182](https://github.com/deepseek-ai/deepseek-harness/discussions/12182) [Bug] DSH Desktop (Windows) — 每次工具调用弹出可见控制台窗口
- [#12181](https://github.com/deepseek-ai/deepseek-harness/discussions/12181) [Bug] `dsh web` 的 shutdown 可超出 `PROCESS_SHUTDOWN_TIMEOUT_MS`（5s）预算并被 SIGKILL ⇒ 进行中的 turn 被中断
- [#11824](https://github.com/deepseek-ai/deepseek-harness/discussions/11824) [Bug] Desktop in-app update leaves resources\runtime empty → Host fatal on next launch (0.2.1-rc.5, no junctions involved)
- [#12179](https://github.com/deepseek-ai/deepseek-harness/discussions/12179) [Bug] 尾部为 pending 工具调用的会话被 crash-recovery 合成坏 tool/result ⇒ 会话永久不可读 / 不可 resume
- [#11857](https://github.com/deepseek-ai/deepseek-harness/discussions/11857) [Bug] 每轮「改动文件」卡片会静默丢失，且同一工作区并发会话会互相串入对方的改动
- [#12120](https://github.com/deepseek-ai/deepseek-harness/discussions/12120) Bug: sidebar Markdown preview never renders local images (desktop shell, dsh-app:// origin)
- [#11763](https://github.com/deepseek-ai/deepseek-harness/discussions/11763) [Bug] settings/describe crashes on Standard Schema Config with toJSON
- [#12132](https://github.com/deepseek-ai/deepseek-harness/discussions/12132) [Bug] 文档预览报「文件不存在」：Markdown 链接含「\ + ASCII 标点」时丢一级分隔符（0.2.1-rc.5 复现）
- [#12160](https://github.com/deepseek-ai/deepseek-harness/discussions/12160) [Bug] WebUI shows「已停止/Task stopped」 for long-running headless turns (false positive)
- [#11652](https://github.com/deepseek-ai/deepseek-harness/discussions/11652) [BUG]DSH 沙箱打低完整性标签导致程序无法启动0.2.1-rc.3
- [#10367](https://github.com/deepseek-ai/deepseek-harness/discussions/10367) [bug] Agent Teams 会话下 send_message 无法按 id 寻址子代理，但 subagent 工具描述声称可以，这个bug之前修复过一次，但没有修好
- [#8827](https://github.com/deepseek-ai/deepseek-harness/discussions/8827) [Bug] workflow 工具调用永不返回，父 Agent 卡死在 step/start 后无事件
- [#12169](https://github.com/deepseek-ai/deepseek-harness/discussions/12169) [bug] 1M 上下文下反复触发压缩、每次全量重读约 500K，prompt 水位不下降（疑似压缩循环）
- [#8420](https://github.com/deepseek-ai/deepseek-harness/discussions/8420) [Bug] 桌面版：沙箱模式下所有命令派生失败（exit code 3221225794 / 0xC0000142），被迫开全盘权限才能工作
- [#12065](https://github.com/deepseek-ai/deepseek-harness/discussions/12065) [Bug] 0.2.1-rc.5: a session log that fails the protected-head invariant is silently truncated to a frame prefix on app start (no backup); writer still emits the invalid append
- [#12158](https://github.com/deepseek-ai/deepseek-harness/discussions/12158) [Bug][Linux] "Show in file manager" opens the parent folder without selecting the file
- [#12155](https://github.com/deepseek-ai/deepseek-harness/discussions/12155) [Bug] web_fetch decodes GB18030 pages as UTF-8 when Content-Type has no charset (mojibake)
- [#12153](https://github.com/deepseek-ai/deepseek-harness/discussions/12153) [Bug][macOS] 主窗口偶发无法点击或打字，原生菜单正常，新建窗口无效（0.2.1-rc.5）
- [#12147](https://github.com/deepseek-ai/deepseek-harness/discussions/12147) [Bug] Windows 关机/重启时误报 host 崩溃（exit 1073807364 / 0x40010004）并弹出致命错误 / False fatal "host exited with 1073807364" on Windows shutdown
- [#12130](https://github.com/deepseek-ai/deepseek-harness/discussions/12130) [Bug] 消息入队后不唤醒，重启时待处理消息被静默丢弃
- [#12142](https://github.com/deepseek-ai/deepseek-harness/discussions/12142) [Bug] 轮次改动卡片按工作区差异归因，多 agent 共写同一目录时会算上别人的改动
- [#12136](https://github.com/deepseek-ai/deepseek-harness/discussions/12136) [Bug] 会话日志首帧不是恰好一行时，会话在 App 里整个消失
- [#8833](https://github.com/deepseek-ai/deepseek-harness/discussions/8833) [Bug] Markdown 文件链接含「反斜杠 + ASCII 标点」时丢一级路径分隔符，预览器报「文件不存在」
- [#12133](https://github.com/deepseek-ai/deepseek-harness/discussions/12133) [Bug] Working directory renamed in-session causes permanent turn failures when header.cwd no longer exists
- [#11806](https://github.com/deepseek-ai/deepseek-harness/discussions/11806) [Bug] Provider OpenRouter: minimax/minimax-m3.1-flash missing from catalog
- [#12123](https://github.com/deepseek-ai/deepseek-harness/discussions/12123) [Bug] 切换模型时 MCP 工具被整批注销，期间模型调用返回 unknown tool
- [#12113](https://github.com/deepseek-ai/deepseek-harness/discussions/12113) [Bug] dsh-auth cookie accumulates once per desktop launch; 72 launches make the app unbootable (HTTP 431)
- [#9559](https://github.com/deepseek-ai/deepseek-harness/discussions/9559) [Bug Report] windows-acl: Low integrity label (and allow ACE) not applied to existing subfolders, so the confined child can write only the workspace root
- [#12012](https://github.com/deepseek-ai/deepseek-harness/discussions/12012) [BUG] documentpreview 打包的 pdfjs-dist 6.3.289 缺失 getOrInsertComputed polyfill，.pdf/.docx/.pptx 预览全量崩溃
- [#12106](https://github.com/deepseek-ai/deepseek-harness/discussions/12106) [Bug] 0.2.1-rc.5 仍可复现：空白会话切换预设后 subagent 丢失（附脚本与日志）
- [#10061](https://github.com/deepseek-ai/deepseek-harness/discussions/10061) [Bug] 长会话中已完成的 Codex 响应被误判 context overflow，随后模型反复自述「预算极低」
- [#8844](https://github.com/deepseek-ai/deepseek-harness/discussions/8844) [Bug] pi-ai adapter discards the provider's stable error code, so upstream stream interruptions become non-retryable PI_AI_ERROR
- [#11121](https://github.com/deepseek-ai/deepseek-harness/discussions/11121) [Bug] dsh-hmr: 热重载后 apply() 定时器永久携带 executing=true，导致 runExclusive 嵌套报错
- [#11886](https://github.com/deepseek-ai/deepseek-harness/discussions/11886) [Bug][0.2.2-alpha.2] Failed rollback activation is reported as “plugin is not installed”; the suggested Add action then returns already-installed
- [#11397](https://github.com/deepseek-ai/deepseek-harness/discussions/11397) [Bug][Desktop 0.2.1-rc.3] Auth cookies accumulate across restarts, causing HTTP 431 and startup failure
- [#12098](https://github.com/deepseek-ai/deepseek-harness/discussions/12098) [Bug][Desktop 0.2.1-rc.5] Startup fatal "bad port": OS-assigned host port can land on the Fetch spec's forbidden-port list
- [#11981](https://github.com/deepseek-ai/deepseek-harness/discussions/11981) [Bug] ptc 模式下中断/报错后 tool/ptc-dispatch* 落盘于 turn 之外，导致 session 历史永久无法加载
- [#12050](https://github.com/deepseek-ai/deepseek-harness/discussions/12050) [bug]位于 cwd 与 git 根之间的 `.agents/skills` 会被静默跳过

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-05T04:42:39.195Z_