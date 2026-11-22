# DSH Bug Watch — 2026-11-22

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 48

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#13376](https://github.com/deepseek-ai/deepseek-harness/discussions/13376) **[Bug] 桌面端升级迁移会把已禁用的可选 bundle 重新启用并与依赖安装竞态，首启 sessionController 不可用、无法新建会话**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-22
- [#13387](https://github.com/deepseek-ai/deepseek-harness/discussions/13387) **[Bug] Windows 上标题栏「关闭」和「最大化」按钮悬停时出现两个重复 tooltip**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-21

## 📝 仅报告 — 无人互动
- [#14044](https://github.com/deepseek-ai/deepseek-harness/discussions/14044) [Bug] @deepseek-ai/dsh@0.2.3-alpha.1 可安装但所有命令无法启动：cordis-plugin-loader@1.1.0 是旧构建，缺少 EntryValidationError
- [#14041](https://github.com/deepseek-ai/deepseek-harness/discussions/14041) [Bug][Plugin Manager] 卸载插件时只用单一 registry，不经过 registryPlan，私有源下的 profile 必然失败（至 0.2.3-alpha.1 未修复）
- [#8783](https://github.com/deepseek-ai/deepseek-harness/discussions/8783) [Bug] Session indexing still fails on 0.2.1-alpha.2: historical revision churn + isolated in-memory Agent index
- [#14038](https://github.com/deepseek-ai/deepseek-harness/discussions/14038) [Bug] session-query-sqlite reserves the WAL writer for TEMP-only search refreshes
- [#9695](https://github.com/deepseek-ai/deepseek-harness/discussions/9695) [Bug] session_search 永久 30s 超时：:memory: FTS 索引 + 单事务对账 + 工具超时中止，大语料必然死锁
- [#11864](https://github.com/deepseek-ai/deepseek-harness/discussions/11864) [Bug] session/search 的 FTS5 索引构建在有常驻写入会话的部署上永远失败**（rc.5 / 0.2.1-rc.5，rc.2 同）`session/search` FTS index build never stabilizes when any session writes periodically (bot heartbeat) — `SESSION_QUERY_PERSISTENCE_FAILED: did not stabilize after one retry`
- [#14039](https://github.com/deepseek-ai/deepseek-harness/discussions/14039) [Bug] A dangling image reference in a resumed session surfaces as "TRANSPORT: DeepSeek Messages transport failed" and is retried 5 times
- [#13937](https://github.com/deepseek-ai/deepseek-harness/discussions/13937) [Bug] System prompt references a non-existent "read" tool; calls fail with unknown tool
- [#14037](https://github.com/deepseek-ai/deepseek-harness/discussions/14037) [Bug] 非 UI 进程创建的会话永远不进工作区注册表：SDK/headless/嵌入器会话在桌面版与 Web 版侧栏永久不可见（registry 仅首次初始化时 bootstrap）
- [#13394](https://github.com/deepseek-ai/deepseek-harness/discussions/13394) [Bug][Windows] Installer rejects the default path and the installation path field cannot be edited (0.2.2pre-1)
- [#14035](https://github.com/deepseek-ai/deepseek-harness/discussions/14035) [Bug] 0.2.2-rc.5 升级后 ds-bot 引擎启动失败(HTTP 404)，回退 rc.3 立即恢复
- [#13282](https://github.com/deepseek-ai/deepseek-harness/discussions/13282) [Bug] remoteAccess.whenAccess is not a function - 5 official client plugins fail to mount
- [#14034](https://github.com/deepseek-ai/deepseek-harness/discussions/14034) [Bug]Archiving a session silently deletes its active schedules (no confirmation, no log, no backup)
- [#11667](https://github.com/deepseek-ai/deepseek-harness/discussions/11667) [bug] x64-windows, version 0.2.1-rc.5: session can't modify workspace in a virtual disk (vhd,vhdx) with Workspace Write permission.
- [#14031](https://github.com/deepseek-ai/deepseek-harness/discussions/14031) [Bug] 本地历史永久卡在「载入历史…」：本机防火墙按包内容 DROP 时 WebSocket 历史帧被静默丢弃
- [#9552](https://github.com/deepseek-ai/deepseek-harness/discussions/9552) [Bug] 回归：0.2.0-rc.2 起，删除子代理会话目录不再从 UI 清除该条目
- [#14013](https://github.com/deepseek-ai/deepseek-harness/discussions/14013) [bug] some plugins break dsh
- [#13524](https://github.com/deepseek-ai/deepseek-harness/discussions/13524) [Bug] Model-switch compaction asks the unavailable previous model for the summary and drops the user's input
- [#14019](https://github.com/deepseek-ai/deepseek-harness/discussions/14019) [Bug] dsh-desktop 0.2.2-rc.5 crashes on startup with uncaught ECONNRESET from internal fetch; stale processes after quit make it recurrent (Windows)
- [#14028](https://github.com/deepseek-ai/deepseek-harness/discussions/14028) [Bug] 发送消息后会话列表不立即按最近更新置顶，需切换到其他会话后才重排
- [#5954](https://github.com/deepseek-ai/deepseek-harness/discussions/5954) [Bug] 内置目录刷新后，settings 里引用的孤儿模型令 llm-pi-ai 整体激活失败（静默），Web 模型选择器只剩内置 DeepSeek 组 // hand-declared model absent from installed catalog silently kills the whole llm-pi-ai adapter at boot
- [#14021](https://github.com/deepseek-ai/deepseek-harness/discussions/14021) [Bug] Windows 桌面端更新器无法安装：MoveFileExW ERROR 32（安装目录被第三方句柄占用）
- [#13015](https://github.com/deepseek-ai/deepseek-harness/discussions/13015) [bug] 图片太大卡住session无法继续下去
- [#13745](https://github.com/deepseek-ai/deepseek-harness/discussions/13745) [Bug] 桌面端加载 office 技能后 Office 工具仍不出现（0.2.2-rc.5）
- [#13939](https://github.com/deepseek-ai/deepseek-harness/discussions/13939) [BUG] “从左侧栏取消固定”无法持久化
- [#9609](https://github.com/deepseek-ai/deepseek-harness/discussions/9609) [Bug] Desktop (Windows): per-record storage loads every record file at once → EMFILE during Host startup (14k session_projcache files)
- [#14016](https://github.com/deepseek-ai/deepseek-harness/discussions/14016) [Bug] A session starts while a plugin's async apply is still pending, and the plugin's listeners do not run meanwhile
- [#14011](https://github.com/deepseek-ai/deepseek-harness/discussions/14011) [bug] sandbox-windows-acl: AclSandbox init failure loses the real Win32 cause (AggregateError.message hides e.g. CreateRestrictedToken 87)
- [#14006](https://github.com/deepseek-ai/deepseek-harness/discussions/14006) [Bug] Host process repeatedly crashes with V8 heap OOM (exit 134): heap dominated by ~8M string objects; skill-catalog system-reminder duplicated into Session.messages every turn
- [#13730](https://github.com/deepseek-ai/deepseek-harness/discussions/13730) [Bug] 0.2.2-rc.5 desktop auto-update leaves official optional bundles at rc.3 — preflight disables session-query-sqlite, sessionController unavailable
- [#14002](https://github.com/deepseek-ai/deepseek-harness/discussions/14002) [Bug][Windows][Desktop 0.2.1-rc.2] 把安装目录设为工作区后，临时目录/原子写类工具调用全部 EPERM（exe 继承 Low 完整性标签）
- [#13836](https://github.com/deepseek-ai/deepseek-harness/discussions/13836) [Bug] 桌面端 0.2.2-rc.5 启动即崩溃：主进程 undici fetch 内置 Host 报 read ECONNRESET（每次必现）
- [#4037](https://github.com/deepseek-ai/deepseek-harness/discussions/4037) [bug] `skill-filesystem` silently drops skills whose frontmatter `description` contains a colon+space ("Nested mappings are not allowed in compact mappings")
- [#13993](https://github.com/deepseek-ai/deepseek-harness/discussions/13993) [Bug] 工具输出按字节截断产生孤立代理字符，会话被永久卡死（400 INVALID_REQUEST: lone leading surrogate in hex escape）
- [#13906](https://github.com/deepseek-ai/deepseek-harness/discussions/13906) [Bug] Token meter underestimates real prompt tokens ~2.5x on CJK/JSON content (4 chars/token heuristic)
- [#8857](https://github.com/deepseek-ai/deepseek-harness/discussions/8857) [BUG] Changing cordis.patch.yml while sessions are running kills every running session mid-turn
- [#13429](https://github.com/deepseek-ai/deepseek-harness/discussions/13429) [Bug] Desktop fails to start on Windows with 无法使用: analytics report blocks ~10s on PowerShell cold start → ECONNRESET during boot
- [#13983](https://github.com/deepseek-ai/deepseek-harness/discussions/13983) [Bug] Parallel tool calls collapse when the gateway repeats tool_call index: arguments concatenate -> MALFORMED_RESPONSE kills the turn
- [#13979](https://github.com/deepseek-ai/deepseek-harness/discussions/13979) bug: open-in-app marks the wrong app as default when the OS handler is a packaged (AppX) app
- [#13945](https://github.com/deepseek-ai/deepseek-harness/discussions/13945) [Bug] Kimi Responses: empty tool-call identities poison V4 replay; every later turn returns 400
- [#13907](https://github.com/deepseek-ai/deepseek-harness/discussions/13907) [Bug] Context meter shows 0% after failed requests: zero-usage samples from 400 rejections replace real pressure
- [#13902](https://github.com/deepseek-ai/deepseek-harness/discussions/13902) [Bug] Compaction overflow recovery deadlocks when the compacted span itself exceeds the model's context window
- [#13977](https://github.com/deepseek-ai/deepseek-harness/discussions/13977) [Bug] 侧栏终端无法渲染 Nerd Font 图标，starship prompt 显示为方框
- [#13973](https://github.com/deepseek-ai/deepseek-harness/discussions/13973) [Bug] 文档预览静态模式的 DOMPurify 误杀含类标签序列的 <style> 块，合法自包含 HTML 丢失全部样式
- [#12261](https://github.com/deepseek-ai/deepseek-harness/discussions/12261) [Bug][macOS] 0.2.2-rc.1 frameless window has no drag region — window cannot be moved by mouse (worked in 0.2.1-rc.5)
- [#13904](https://github.com/deepseek-ai/deepseek-harness/discussions/13904) [Bug] A step with many tool calls can never be compacted: range selection collapses to one node and "successful" compactions free nothing

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-22T04:36:03.193Z_