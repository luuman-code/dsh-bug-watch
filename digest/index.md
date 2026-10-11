# DSH Bug Watch — 2026-10-11

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 43

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#4664](https://github.com/deepseek-ai/deepseek-harness/discussions/4664) **[Bug]？ goal 功能开启后 agent 无法被动等待后台任务：每次进入 idle 即被强制注入 <goal_round>，空转消耗轮次与 token**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-11
- [#9360](https://github.com/deepseek-ai/deepseek-harness/discussions/9360) **[Bug][Windows desktop] workspace-write 子进程 0xC0000142：普通/管理员启动对照（0.2.0-rc.2，Win11 26200）**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-10
- [#8242](https://github.com/deepseek-ai/deepseek-harness/discussions/8242) **[BUG]deepseek harness本地启动命令失效**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-10

## 📝 仅报告 — 无人互动
- [#9397](https://github.com/deepseek-ai/deepseek-harness/discussions/9397) [Bug] llm-pi-ai 将上游重试缓冲错误归为 PI_AI_ERROR，跳过自动重试
- [#9266](https://github.com/deepseek-ai/deepseek-harness/discussions/9266) [Bug][Windows Desktop 0.2.0-rc.2] Generic transport failure persists across reinstall/reset due to Node CA, stale state, and Electron UI cache
- [#9376](https://github.com/deepseek-ai/deepseek-harness/discussions/9376) [Bug] fs-local 的原子写在「mkdir -p 已存在目录返回 EPERM」的文件系统上全不可写（SSHFS/SFTP 挂载盘必踩）
- [#9254](https://github.com/deepseek-ai/deepseek-harness/discussions/9254) [bug] 桌面版 ELECTRON_RUN_AS_NODE=1 泄漏到子进程，导致 open-in-app 打开 VS Code 必然失败
- [#9314](https://github.com/deepseek-ai/deepseek-harness/discussions/9314) [BUG] Workspace-write provisioning leaves a persistent Low integrity label on the workspace root — executables built in the workspace run at Low IL and fail all writes outside the sandbox
- [#9178](https://github.com/deepseek-ai/deepseek-harness/discussions/9178) [BUG] 插件管理器裸包名安装受 pnpm 11 minimumReleaseAge 默认值影响：新版本发布 24 小时内静默降级到上一版并被判不兼容
- [#9189](https://github.com/deepseek-ai/deepseek-harness/discussions/9189) [Bug] Composed filesystem throws "Cannot mix BigInt and other types" on app.asar paths, which silently empties the whole skill catalog
- [#9267](https://github.com/deepseek-ai/deepseek-harness/discussions/9267) [Bug] dsh web 打开含 Go 代码块的会话滚动时因 Shiki Go 语法灾难性回溯正则卡死（Page Unresponsive）
- [#9392](https://github.com/deepseek-ai/deepseek-harness/discussions/9392) [Bug]会话创建在播种（seed）阶段失败时会留下静默空壳，UI 表现为「点击新建无反应」
- [#6441](https://github.com/deepseek-ai/deepseek-harness/discussions/6441) [Bug][WSL2] dsh web freeze: sync reverse DNS in flock libc probe (missing excludeNetwork)
- [#8323](https://github.com/deepseek-ai/deepseek-harness/discussions/8323) [Bug] Open Web UI goes permanently blank after dsh restarts from a reinstalled/copied install — in-place plugin swap throws uncaught SlotAssemblyError (0.1.7-rc.2)
- [#9374](https://github.com/deepseek-ai/deepseek-harness/discussions/9374) [Bug][mcp-resources][0.2.1-alpha.2] list_mcp_resources never returns nextCursor and fails on servers with more than 64 pages
- [#9373](https://github.com/deepseek-ai/deepseek-harness/discussions/9373) [Bug][http-proxy][0.2.1-alpha.2] A blank proxy variable makes every Node child connect directly while the host proxies
- [#9372](https://github.com/deepseek-ai/deepseek-harness/discussions/9372) [Bug][session-persistence-jsonl][0.2.1-alpha.2] A crash that leaves NUL bytes after the last zstd frame makes the whole session unopenable
- [#9371](https://github.com/deepseek-ai/deepseek-harness/discussions/9371) [Bug][tool-fs][0.2.1-alpha.2] write/edit result-card diff runs untimed on the Host thread; an 8,000-line overwrite freezes every session for ~8 s
- [#8352](https://github.com/deepseek-ai/deepseek-harness/discussions/8352) [BUG] 工具输出含未配对 UTF-16 代理项会让整个会话永久 HTTP 400（错误信息无法诊断）
- [#9368](https://github.com/deepseek-ai/deepseek-harness/discussions/9368) [Bug][Windows Desktop 0.2.0-rc.2] 插件引入旧版 dsh-tools 后启动失败：agent-loop 缺少 tools
- [#9099](https://github.com/deepseek-ai/deepseek-harness/discussions/9099) [Bug] Message injected without producer-owned `source.kind` violates v4 format and drops sessions
- [#9247](https://github.com/deepseek-ai/deepseek-harness/discussions/9247) [Bug] attachment-local: durable-home walk reaches the filesystem root — image attachments fail with EACCES on Android (fix included)
- [#8312](https://github.com/deepseek-ai/deepseek-harness/discussions/8312) [Bug][Windows] workspace-write leaves a permanent Low integrity label on the project, breaking every other tool used on it — several reports, still unchanged in 0.2.0-rc.2
- [#9363](https://github.com/deepseek-ai/deepseek-harness/discussions/9363) [Bug] 0.2.1-alpha.2 写入的对象格式草稿（{text,references}）使 0.2.0-rc.2 的对话视图整页空白（conversation.session 插槽崩溃）
- [#9359](https://github.com/deepseek-ai/deepseek-harness/discussions/9359) [Bug][Windows] open-in-app cannot launch Electron-based apps: VS Code reports "Open failed, please retry"
- [#9230](https://github.com/deepseek-ai/deepseek-harness/discussions/9230) [Bug] Completed Codex responses are misclassified as context overflow above the catalog window (tested patch)
- [#9352](https://github.com/deepseek-ai/deepseek-harness/discussions/9352) [Bug] 未分类的空 body HTTP 400 被判为 INVALID_REQUEST，导致长会话被永久锁死
- [#8066](https://github.com/deepseek-ai/deepseek-harness/discussions/8066) [Bug] 会话持久化的 live 写缓冲无上限增长：`dsh web` 进程 RSS 涨到 14.7 GB（0.1.7-rc.2 / Windows）
- [#8674](https://github.com/deepseek-ai/deepseek-harness/discussions/8674) [Bug] dsh-app-boot 的 CJS 解析钩子被 require('process/') 打崩：resolve.paths() 返回 null → 插件 failed to import
- [#9353](https://github.com/deepseek-ai/deepseek-harness/discussions/9353) [Bug][Windows][Desktop] 关闭标题栏菜单弹窗时，下层窗口瞬间抢前台，界面出现一帧级闪烁（窗口层级问题）
- [#5363](https://github.com/deepseek-ai/deepseek-harness/discussions/5363) [Bug] 第三方插件 dsh-univer-office import 了 dsh-settings 不存在的 settingsNamespace 导出导致整树崩溃
- [#9343](https://github.com/deepseek-ai/deepseek-harness/discussions/9343) [Bug] 0.2.0-rc.2 无法读取 0.1.x 历史会话：冻结 v0 清单漏声明 permission/preset.origin，整份会话被拒
- [#9239](https://github.com/deepseek-ai/deepseek-harness/discussions/9239) [Bug] 历史里的空 reasoning 块会序列化成空 thinking 块，导致已有会话切到严格的 Anthropic Messages 网关后永久失败
- [#8559](https://github.com/deepseek-ai/deepseek-harness/discussions/8559) [Bug] 同一工作目录下多个 Session 的「已更改文件」卡片互相认领对方的改动（附修复分支）
- [#9124](https://github.com/deepseek-ai/deepseek-harness/discussions/9124) [Bug] Terminated sub-agent output is unrecoverable: no closing message, no registry entry, no read-back path
- [#9330](https://github.com/deepseek-ai/deepseek-harness/discussions/9330) [Bug] 未配置 websearch 的情况下，web_search 调用仍触发了提供商 Response API 侧的联网搜索并产生扣费
- [#9325](https://github.com/deepseek-ai/deepseek-harness/discussions/9325) [Bug] browser-auth 会话 cookie 硬编码 SameSite=Strict：跨站发起的入口导航（含 OAuth 登录回跳）必现 401、刷新才恢复
- [#9322](https://github.com/deepseek-ai/deepseek-harness/discussions/9322) [Bug] Windows 沙箱临时目录缺失后，同一会话内所有命令持续失败
- [#9321](https://github.com/deepseek-ai/deepseek-harness/discussions/9321) [Bug] TLS 证书校验失败仅显示 TRANSPORT，界面缺少具体原因
- [#9263](https://github.com/deepseek-ai/deepseek-harness/discussions/9263) [Bug] 0.2.0-rc.2 / 0.2.1-alpha.1：流式输出时滚轮无法中断外层对话的尾部跟随 / reading gestures cannot interrupt outer-transcript tail following while streaming
- [#7735](https://github.com/deepseek-ai/deepseek-harness/discussions/7735) [Bug] Windows：沙箱给工作区根目录盖 Low 完整性标签后，目录内的 .bat/.cmd/.exe 双击弹「无法验证发布者」
- [#9272](https://github.com/deepseek-ai/deepseek-harness/discussions/9272) [Bug] Windows 受限令牌沙箱内 CIM/WMI 整体不可用：Get-CimInstance 及全部 CIM 派生命令（Get-NetTCPConnection / Get-NetIPAddress / Get-NetAdapter / Get-Volume）均返回"拒绝访问"(0x80041003)，Get-PSDrive 静默报 0
- [#9268](https://github.com/deepseek-ai/deepseek-harness/discussions/9268) [Bug] Windows: Open In 无法用 VS Code 打开工作区 — ELECTRON_RUN_AS_NODE 污染启动环境

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-11T03:21:32.442Z_