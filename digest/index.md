# DSH Bug Watch — 2026-10-08

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 43

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#9017](https://github.com/deepseek-ai/deepseek-harness/discussions/9017) **[Bug] 第三方 Electron 宿主（Electron-as-node）下 dsh 全量启动失败：require-builtin 指纹门补丁精确 + app-boot 无 --expose-internals 回退**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-07

## 📝 仅报告 — 无人互动
- [#9124](https://github.com/deepseek-ai/deepseek-harness/discussions/9124) [Bug] Terminated sub-agent output is unrecoverable: no closing message, no registry entry, no read-back path
- [#8185](https://github.com/deepseek-ai/deepseek-harness/discussions/8185) [Bug][0.1.7-rc.2] 点击含相对路径（../）的 Markdown 文件链接报 sidebarRight: no registered tab type claims
- [#9099](https://github.com/deepseek-ai/deepseek-harness/discussions/9099) [Bug] Message injected without producer-owned `source.kind` violates v4 format and drops sessions
- [#9113](https://github.com/deepseek-ai/deepseek-harness/discussions/9113) [Bug] turn 在无 tool call 时静默结束（stopReason=stop）导致长任务「莫名中断」；run_code 的 deadline 会误杀等待用户回答的 ask_user_question
- [#9086](https://github.com/deepseek-ai/deepseek-harness/discussions/9086) [BUG](windows沙箱问题)(DSH GUI模式)会话里跑在非「完全权限」模式在项目文件夹根目录生成Windows 强制完整性标签，导致二进制生成文件权限受限
- [#9112](https://github.com/deepseek-ai/deepseek-harness/discussions/9112) [Bug][Desktop][macOS] 窗口完全无法拖动：连标记了 data-window-drag 的 chrome 行也拖不动（0.2.0-rc.2 / Electron 44）
- [#9110](https://github.com/deepseek-ai/deepseek-harness/discussions/9110) [Bug] windows 桌面版使用内置卸载工具时会将命令行安装的dsh的模型供应商等插件配置一起清除，这一行为不合理
- [#8744](https://github.com/deepseek-ai/deepseek-harness/discussions/8744) [Bug] Cannot resume sessions that use llama.cpp (duplicate advertised tool-call ids) · 无法恢复使用 llama.cpp 的会话（广告工具调用 id 重复）
- [#9103](https://github.com/deepseek-ai/deepseek-harness/discussions/9103) [Bug] Settings are unavailable to non-loopback browsers: trusted-host deployments lose the Models page and every per-plugin configuration page (Subagent → Model selection)
- [#9102](https://github.com/deepseek-ai/deepseek-harness/discussions/9102) [Bug] v0.2.1-alpha.1- Process freeze in custom plugin creation during install_bundle
- [#9100](https://github.com/deepseek-ai/deepseek-harness/discussions/9100) [Bug] Live profile reload leaves session-scoped services unavailable: session/follow fails with gateway/service-unavailable
- [#8617](https://github.com/deepseek-ai/deepseek-harness/discussions/8617) [Bug] DSH 0.2.0-rc.2 crashes (SIGABRT, exit 134) during session format v3→v4 migration — and older pinned versions can no longer read the store
- [#9098](https://github.com/deepseek-ai/deepseek-harness/discussions/9098) [Bug] v0.2.0-rc.2 插件市场卸载插件后整个应用 UI 冻结，只能重启
- [#9095](https://github.com/deepseek-ai/deepseek-harness/discussions/9095) [Bug][0.2.0-rc.2] A cancelled step's reasoning is replayed as plain assistant text (pi-ai route), bypassing pi-ai's aborted-message skip
- [#5976](https://github.com/deepseek-ai/deepseek-harness/discussions/5976) [Bug] Agent 在超长上下文 + max reasoning effort 下陷入思考退化循环：回合零产出、无自动熔断，需手动中止（v4.1-flash；同配置 v4-flash 3000+ 步未复发）
- [#9090](https://github.com/deepseek-ai/deepseek-harness/discussions/9090) [Bug] Optional experimental bundles cannot keep their enabled state across restarts — the launch projection prunes them from `dsh.profile.bundles` (Voice input switch resets)
- [#9089](https://github.com/deepseek-ai/deepseek-harness/discussions/9089) [Bug] 出站消息含孤立代理(lone surrogate)时 400 无定位信息，且污染历史后会话永久失败不可恢复
- [#8830](https://github.com/deepseek-ai/deepseek-harness/discussions/8830) [Bug] 会话永久锁死 / 每轮都 400：`Content Exists Risk`、`INVALID_REQUEST` —— 两种机制 · 三个毒源 · 三张面孔 ＋ 可落地的修复建议（更新 2026-10-06）
- [#6751](https://github.com/deepseek-ai/deepseek-harness/discussions/6751) [Bug] 空白新会话切换 Agent Preset 后，新 preset 的 modelSelectionSettings 型 delegation 工具完全未安装（subagent / list_subagent_models 缺失）
- [#8991](https://github.com/deepseek-ai/deepseek-harness/discussions/8991) [Bug] workspace-write sandbox: every confined pwsh command exits with 0xC0000142 (STATUS_DLL_INIT_FAILED), no stderr
- [#8711](https://github.com/deepseek-ai/deepseek-harness/discussions/8711) [Bug][Windows][Desktop 0.2.0-rc.2] 点击系统通知无法聚焦/拉回主窗口
- [#8947](https://github.com/deepseek-ai/deepseek-harness/discussions/8947) [Bug] "DeepSeek Messages transport failed" is a masked transport timeout — undici's 300 s bodyTimeout silently caps streamIdleTimeoutMs（传输层 300 秒上限被误报为传输失败）
- [#8956](https://github.com/deepseek-ai/deepseek-harness/discussions/8956) [bug]依旧是low完整性标签的问题
- [#8958](https://github.com/deepseek-ai/deepseek-harness/discussions/8958) [Bug] 桌面版 Windows 右上角"VS Code"打开失败：`ELECTRON_RUN_AS_NODE=1` 泄漏进子进程环境，Code.exe 以 Node 模式运行并退出 1
- [#8521](https://github.com/deepseek-ai/deepseek-harness/discussions/8521) [Bug] Clean script cannot run due to the setting /types
- [#8183](https://github.com/deepseek-ai/deepseek-harness/discussions/8183) [Bug][0.2.0-rc.1] Guarded write/edit can silently overwrite an external save made during staging
- [#9075](https://github.com/deepseek-ai/deepseek-harness/discussions/9075) [Bug] postinstall fails on Windows: install-lefthook lock ownership check compares fstat vs stat dev values
- [#8980](https://github.com/deepseek-ai/deepseek-harness/discussions/8980) [Bug][Linux] Escaped desktop-entry names display literally and icons disappear
- [#8979](https://github.com/deepseek-ai/deepseek-harness/discussions/8979) [Bug] SQLite search results lose the SessionHeader origin field
- [#8978](https://github.com/deepseek-ai/deepseek-harness/discussions/8978) [Bug] Literal editors accept overlapping matches as a unique edit
- [#8926](https://github.com/deepseek-ai/deepseek-harness/discussions/8926) [Bug][Linux] Empty XDG data variables hide registered file handlers and icons
- [#8898](https://github.com/deepseek-ai/deepseek-harness/discussions/8898) [Bug] Plugin Manager rejects or misclassifies HTTP tarball URLs with query parameters
- [#3719](https://github.com/deepseek-ai/deepseek-harness/discussions/3719) [Bug][POSIX] storage-json can overwrite a published write after directory fsync failure
- [#3466](https://github.com/deepseek-ai/deepseek-harness/discussions/3466) [Bug][Windows] ACL sandbox spawn failure paths can leak native handles and clobber primary errors
- [#9070](https://github.com/deepseek-ai/deepseek-harness/discussions/9070) [Bug][macOS] Pasting a screenshot is rejected as an unsupported format when the pasteboard mislabels JPEG bytes as PNG
- [#9066](https://github.com/deepseek-ai/deepseek-harness/discussions/9066) [Bug][Safety] dsh-llm-pi-ai: malformed tool-call arguments become `{}` and the Tool runs with empty input
- [#9065](https://github.com/deepseek-ai/deepseek-harness/discussions/9065) [Bug] ui-model-selection reads the admin model catalog eagerly (cold boot, reconnect, config events) → authorization failures for non-admin users
- [#9064](https://github.com/deepseek-ai/deepseek-harness/discussions/9064) [Bug] session-query-sqlite: CJK substrings are not searchable, and one unreadable Session fails every search
- [#9063](https://github.com/deepseek-ai/deepseek-harness/discussions/9063) [Bug] dsh-session 0.2.0-rc.2: Session.append cannot write the `ignorable` marker the event design relies on
- [#9058](https://github.com/deepseek-ai/deepseek-harness/discussions/9058) [Bug][Windows][Desktop 0.2.0-rc.2] 插件卸载因 registry 超时耗时约 4 分 45 秒，后续请求报 writer lock 超时
- [#8924](https://github.com/deepseek-ai/deepseek-harness/discussions/8924) [Bug] All tool calls die with `Cannot read properties of undefined (reading 'prepare')` when web profile has its own dsh-tools copy (dual-package Symbol hazard)
- [#9056](https://github.com/deepseek-ai/deepseek-harness/discussions/9056) [BUG] subagent 派出的子代理不可寻址：send_message / interrupt_agent 均报 active teammate not found，父 Agent 无法终止它

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-08T03:58:24.751Z_