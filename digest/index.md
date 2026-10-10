# DSH Bug Watch — 2026-10-10

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 54

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#7032](https://github.com/deepseek-ai/deepseek-harness/discussions/7032) **[BUG]: Host-backed settings (Settings > Models/General) are impossible behind any reverse proxy — isLoopback gate tests the hostname string only, with no deployment override**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-10
- [#6226](https://github.com/deepseek-ai/deepseek-harness/discussions/6226) **Bug: subagent-codex runs intermittently never settle - the child completes its turn and exits, but the dsh-side run hangs until a server restart**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-09

## 📝 仅报告 — 无人互动
- [#9312](https://github.com/deepseek-ai/deepseek-harness/discussions/9312) [Bug][Desktop][macOS] 全屏下「检查更新…」确认后黑屏 / 窗口消失 —— 已定位到 vibrancy + 透明覆盖层（汇总 #8224、#9035）
- [#9035](https://github.com/deepseek-ai/deepseek-harness/discussions/9035) [BUG] macOS: fullscreen window in a separate Space disappears permanently after clicking "Check for Updates"
- [#8224](https://github.com/deepseek-ai/deepseek-harness/discussions/8224) [Bug] macOS 桌面版：原生全屏下点「检查更新…」，在弹窗点确认后整屏变黑且无法恢复
- [#7501](https://github.com/deepseek-ai/deepseek-harness/discussions/7501) [Bug] v0.1.7-alpha.1 深度搜索中上下文被频繁压缩：5分38秒内触发6次（仅1-4条/1.4k-3.6k tokens），并伴随 summary-not-smaller 空转
- [#5046](https://github.com/deepseek-ai/deepseek-harness/discussions/5046) [Bug] persistent bash mis-expands ! in commands via history expansion; bash 3.2.57 (incl. macOS default) hangs until timeout (shebangs in heredocs) - one-line fix
- [#9240](https://github.com/deepseek-ai/deepseek-harness/discussions/9240) [Bug] Heredoc shebangs (`!`) still trigger history expansion → 300s timeout in **0.2.1-alpha.1** — independent repro, cross-verification, and one-line fix verified (follow-up to #3373 / #5046)
- [#423](https://github.com/deepseek-ai/deepseek-harness/discussions/423) [Bug Report] Windows 工作区：连接后外部创建/移入的子目录永远无法写入（capability ACE 永不补授）
- [#9290](https://github.com/deepseek-ai/deepseek-harness/discussions/9290) Bug Report: Windows 上「用 VS Code 打开」始终 502 Bad Gateway
- [#7785](https://github.com/deepseek-ai/deepseek-harness/discussions/7785) BUG: generated desktop dev bundle cannot cold start — launcher omits DSH_DESKTOP_PRIMARY_RUNTIME_DIR
- [#139](https://github.com/deepseek-ai/deepseek-harness/discussions/139) Bug: pnpm install fails when global core.hooksPath is set (Codex/other hook managers)
- [#9292](https://github.com/deepseek-ai/deepseek-harness/discussions/9292) [Bug][fs-local] Files created by the write tool are always 0600 on POSIX, ignoring umask and defeating default ACLs
- [#9293](https://github.com/deepseek-ai/deepseek-harness/discussions/9293) [Bug] scrubbedParentEnv strips GIT_CONFIG_KEY_n but keeps COUNT/VALUE, so every git call in a child fails
- [#8466](https://github.com/deepseek-ai/deepseek-harness/discussions/8466) [Bug] 工具输出中的孤立代理项会让会话永久 400，且用户看不到原因、也没有恢复路径
- [#8733](https://github.com/deepseek-ai/deepseek-harness/discussions/8733) Bug: repeated automatic compaction with little or no progress blocks chat execution
- [#7212](https://github.com/deepseek-ai/deepseek-harness/discussions/7212) [Bug] Compaction selects its own previous checkpoint as the whole span, so a long session never converges (59/79 attempts rejected, 44.6 min burned)
- [#9289](https://github.com/deepseek-ai/deepseek-harness/discussions/9289) [Bug][高影响] 文档收尾期间 Stop 无法中断，消息注入与 /goal 无法启动下一轮（0.2.0-rc.2，附复现）
- [#5007](https://github.com/deepseek-ai/deepseek-harness/discussions/5007) [Bug] Cannot stream from vLLM end point
- [#9272](https://github.com/deepseek-ai/deepseek-harness/discussions/9272) [Bug] Windows 受限令牌沙箱内 CIM/WMI 整体不可用：Get-CimInstance 及全部 CIM 派生命令（Get-NetTCPConnection / Get-NetIPAddress / Get-NetAdapter / Get-Volume）均返回"拒绝访问"(0x80041003)，Get-PSDrive 静默报 0
- [#8991](https://github.com/deepseek-ai/deepseek-harness/discussions/8991) [Bug] workspace-write sandbox: every confined pwsh command exits with 0xC0000142 (STATUS_DLL_INIT_FAILED), no stderr
- [#9271](https://github.com/deepseek-ai/deepseek-harness/discussions/9271) [Bug] Inspector Cordis-tree growth crashes Desktop Host: source state exceeds source-frame byte limit
- [#7834](https://github.com/deepseek-ai/deepseek-harness/discussions/7834) [Bug] 删除附件对象后会话每个请求都失败，并被误报为 "DeepSeek Messages transport failed"（附修复补丁）
- [#9262](https://github.com/deepseek-ai/deepseek-harness/discussions/9262) [Bug] Missing attachment object still bricks image-bearing sessions on 0.2.0-rc.2, still reported as TRANSPORT (see #7582)
- [#8256](https://github.com/deepseek-ai/deepseek-harness/discussions/8256) [Bug] v0.2.0-rc.2：新建/恢复任何会话都失败——persona 提示词段 "deployment:persona-prefix" 重复注册
- [#9268](https://github.com/deepseek-ai/deepseek-harness/discussions/9268) [Bug] Windows: Open In 无法用 VS Code 打开工作区 — ELECTRON_RUN_AS_NODE 污染启动环境
- [#9044](https://github.com/deepseek-ai/deepseek-harness/discussions/9044) [Bug][Windows][Desktop 0.2.0-rc.2] 启动失败：desktop welcome: Web RPC failed（同一套插件在 node 下正常）
- [#9266](https://github.com/deepseek-ai/deepseek-harness/discussions/9266) [Bug][Windows Desktop 0.2.0-rc.2] Generic transport failure persists across reinstall/reset due to Node CA, stale state, and Electron UI cache
- [#9267](https://github.com/deepseek-ai/deepseek-harness/discussions/9267) [Bug] dsh web 打开含 Go 代码块的会话滚动时因 Shiki Go 语法灾难性回溯正则卡死（Page Unresponsive）
- [#9263](https://github.com/deepseek-ai/deepseek-harness/discussions/9263) [Bug] 0.2.0-rc.2 / 0.2.1-alpha.1：流式输出时滚轮无法中断外层对话的尾部跟随 / reading gestures cannot interrupt outer-transcript tail following while streaming
- [#9261](https://github.com/deepseek-ai/deepseek-harness/discussions/9261) [Bug]: dsh plugin add 在 Windows 上挂起不退出，profile bundles 永不 reconcile（插件"装上了但不加载"）
- [#9258](https://github.com/deepseek-ai/deepseek-harness/discussions/9258) [Bug] 启动期崩溃：桌面宿主抛 CordisError INACTIVE_EFFECT（Fiber._reload → Proxy.plugin on inactive context）
- [#9260](https://github.com/deepseek-ai/deepseek-harness/discussions/9260) [Bug] 启动期失败：desktop welcome: Web RPC failed（错误信息不带底层原因，难以定位）
- [#9259](https://github.com/deepseek-ai/deepseek-harness/discussions/9259) [Bug] 启动期失败：web boot 报 "1 entry did not activate"，@nono-neko/dsh-browser 永远在等 settingsScope
- [#9239](https://github.com/deepseek-ai/deepseek-harness/discussions/9239) [Bug] 历史里的空 reasoning 块会序列化成空 thinking 块，导致已有会话切到严格的 Anthropic Messages 网关后永久失败
- [#4549](https://github.com/deepseek-ai/deepseek-harness/discussions/4549) [Bug] Scheduler failure leaves dangling tool/call — session permanently returns 400 INVALID_REQUEST (fix: append only the missing tool/result, #4017 follow-up)
- [#9254](https://github.com/deepseek-ai/deepseek-harness/discussions/9254) [bug] 桌面版 ELECTRON_RUN_AS_NODE=1 泄漏到子进程，导致 open-in-app 打开 VS Code 必然失败
- [#9249](https://github.com/deepseek-ai/deepseek-harness/discussions/9249) [Bug] koffi pinned to exactly 3.1.1, which has no Android prebuild — every session resume fails on Android since 0.2
- [#9248](https://github.com/deepseek-ai/deepseek-harness/discussions/9248) [Bug] app-boot resolver requires node-addon-require-builtin unconditionally — fatal on Android, while hmr already has the --expose-internals fallback
- [#9247](https://github.com/deepseek-ai/deepseek-harness/discussions/9247) [Bug] attachment-local: durable-home walk reaches the filesystem root — image attachments fail with EACCES on Android (fix included)
- [#8354](https://github.com/deepseek-ai/deepseek-harness/discussions/8354) [Bug][Windows][Desktop 0.2.0-rc.2] 全新安装在 96% 误报“DeepSeek Harness 无法关闭”
- [#8617](https://github.com/deepseek-ai/deepseek-harness/discussions/8617) [Bug] DSH 0.2.0-rc.2 crashes (SIGABRT, exit 134) during session format v3→v4 migration — and older pinned versions can no longer read the store
- [#9215](https://github.com/deepseek-ai/deepseek-harness/discussions/9215) [Bug] 空 id/name 伪 tool-call 落盘后 tool/result 校验永久失败，会话从该 seq 起卡死（0.1.7-rc.2 → 0.2.1-alpha.1 均未修，附本地已验证补丁）
- [#7414](https://github.com/deepseek-ai/deepseek-harness/discussions/7414) Bug: dsh web V8 heap OOM after long uptime — live sessions are never unloaded
- [#9241](https://github.com/deepseek-ai/deepseek-harness/discussions/9241) [Bug] Queued message row disappears between the inbox claim and transcript admission (0.2.1-alpha.1, with a locally verified patch)
- [#9235](https://github.com/deepseek-ai/deepseek-harness/discussions/9235) [Bug][WebUI] WebUI Lexical 0.49.0 中文 IME composition 阶段 DOM 重渲染打断拼音组字，拼音直接上屏、文字乱序重复
- [#9230](https://github.com/deepseek-ai/deepseek-harness/discussions/9230) [Bug] Completed Codex responses are misclassified as context overflow above the catalog window (tested patch)
- [#9098](https://github.com/deepseek-ai/deepseek-harness/discussions/9098) [Bug] v0.2.0-rc.2 插件市场卸载插件后整个应用 UI 冻结，只能重启
- [#3751](https://github.com/deepseek-ai/deepseek-harness/discussions/3751) Bug: TOOL_RUNTIME_SCHEDULER symbol mismatch crashes every subagent tool call (fix included)
- [#9184](https://github.com/deepseek-ai/deepseek-harness/discussions/9184) Bug: single-dollar math parsing swallows dollar amounts in assistant prose ($3,641 … $200/mo becomes KaTeX garbage)
- [#9216](https://github.com/deepseek-ai/deepseek-harness/discussions/9216) [Bug] 桌面打包版：系统提示词宣传的 implementation checkout 指向 app.asar 内部虚拟路径，agent 工具全部无法访问（0.2.0-rc.2，master 未修）
- [#9220](https://github.com/deepseek-ai/deepseek-harness/discussions/9220) [Bug] Linux: empty systemd scopes keep polling and stall the Web UI for over 100 seconds
- [#8792](https://github.com/deepseek-ai/deepseek-harness/discussions/8792) [Bug] 插件 id 冲突会让整个宿主崩溃：Cannot read properties of undefined (reading 'prepare')
- [#8453](https://github.com/deepseek-ai/deepseek-harness/discussions/8453) [Bug] Windows 11 sandbox bug: real folder permissions and the Low integrity label are permanently rewritten, with no revoke path —— Windows 11 沙箱 bug：真实目录的权限与 Low 完整性标签被永久改写，且无回收路径

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-10T03:48:29.037Z_