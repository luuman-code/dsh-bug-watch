# DSH Bug Watch — 2026-11-16

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 33

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#13376](https://github.com/deepseek-ai/deepseek-harness/discussions/13376) **[Bug] 桌面端升级迁移会把已禁用的可选 bundle 重新启用并与依赖安装竞态，首启 sessionController 不可用、无法新建会话**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-15

## 📝 仅报告 — 无人互动
- [#8827](https://github.com/deepseek-ai/deepseek-harness/discussions/8827) [Bug] workflow 工具调用永不返回，父 Agent 卡死在 step/start 后无事件
- [#11258](https://github.com/deepseek-ai/deepseek-harness/discussions/11258) [Bug] tool-call timeout is notify-only: a tool with a declared timeoutMs can hang the whole session past its budget
- [#13463](https://github.com/deepseek-ai/deepseek-harness/discussions/13463) [Bug] 行内图 404：Markdown 写 /C:/… 时客户端未归一化前导斜杠，且无任何诊断
- [#9086](https://github.com/deepseek-ai/deepseek-harness/discussions/9086) [BUG](windows沙箱问题)(DSH GUI模式)会话里跑在非「完全权限」模式在项目文件夹根目录生成Windows 强制完整性标签，导致二进制生成文件权限受限
- [#13333](https://github.com/deepseek-ai/deepseek-harness/discussions/13333) [BUG] DSH Desktop 0.2.2-rc.3 启动崩溃分析报告
- [#13406](https://github.com/deepseek-ai/deepseek-harness/discussions/13406) [Bug] mcp-client stdio transport cannot launch a .cmd command on Windows (spawn EINVAL) — every call becomes "server is disconnected"
- [#13015](https://github.com/deepseek-ai/deepseek-harness/discussions/13015) [bug] 图片太大卡住session无法继续下去
- [#13436](https://github.com/deepseek-ai/deepseek-harness/discussions/13436) [Bug][Desktop] Windows Open In → VS Code 打不开（502 launch-failed）：继承的 ELECTRON_RUN_AS_NODE 让编辑器以 Node 模式启动
- [#13434](https://github.com/deepseek-ai/deepseek-harness/discussions/13434) [Bug] 自定义模型通道报 TRANSPORT 或 404
- [#13433](https://github.com/deepseek-ai/deepseek-harness/discussions/13433) [Bug] 桌面端：装 dsh-tui 后新建会话必失败（root.events.on 被守卫）；且 PROTECTED_PLUGINS 把一行 disabled 的行算数，导致插件永久不可卸载
- [#11620](https://github.com/deepseek-ai/deepseek-harness/discussions/11620) [bug] dsh-llm-pi-ai: stream-idle watchdog ignores SSE keep-alives, so a long prompt pass is killed as a dead stream (patch + regression test)
- [#13429](https://github.com/deepseek-ai/deepseek-harness/discussions/13429) [Bug] Desktop fails to start on Windows with 无法使用: analytics report blocks ~10s on PowerShell cold start → ECONNRESET during boot
- [#13427](https://github.com/deepseek-ai/deepseek-harness/discussions/13427) [Bug][0.2.2-rc.1] ask_user_question cannot pass `detail`, so a long question is clamped to 3 lines
- [#13081](https://github.com/deepseek-ai/deepseek-harness/discussions/13081) [Bug][Desktop rc.1 → rc.2] 官方 CUA 旧依赖残留禁用 storage-domain，导致工作区/历史全空
- [#13417](https://github.com/deepseek-ai/deepseek-harness/discussions/13417) [Bug][Desktop] 0.2.2-rc.3 Windows 冷启动必现 TypeError: fetch failed(ECONNRESET)，壳子无重试直接致命退出
- [#13419](https://github.com/deepseek-ai/deepseek-harness/discussions/13419) [Bug][Desktop] 0.2.2-rc.3 Windows 冷启动必现 TypeError: fetch failed(ECONNRESET)，壳子无重试直接致命退出
- [#13418](https://github.com/deepseek-ai/deepseek-harness/discussions/13418) [Bug] Composer draft is lost when a turn fails before the message is admitted (working-directory error)
- [#13416](https://github.com/deepseek-ai/deepseek-harness/discussions/13416) [Bug] 桌面端 0.2.2-rc.3：Session 投影不推送实时帧，只有打开会话时的基线（依赖 useProjection 的看板无法实时刷新）
- [#12929](https://github.com/deepseek-ai/deepseek-harness/discussions/12929) Bug: `todo_write` lists get stuck mid-plan when a long turn ends (74% of turns here)
- [#13415](https://github.com/deepseek-ai/deepseek-harness/discussions/13415) [Bug] Windows: a running harness holds a directory handle on its own install dir — `npm i -g @deepseek-ai/dsh@X` fails with EBUSY
- [#13411](https://github.com/deepseek-ai/deepseek-harness/discussions/13411) [Bug] Windows：在应用中打开 → 文件资源管理器 的窗口被建在屏幕外（物理 0x7FFF）/ Explorer window created outside every monitor
- [#13397](https://github.com/deepseek-ai/deepseek-harness/discussions/13397) [Bug][LiveShare] viewer 点「继续生成」发出的 retry 不计入 viewer turn，续跑那一轮不受共享限制（0.2.2-rc.2 / rc.3）
- [#13396](https://github.com/deepseek-ai/deepseek-harness/discussions/13396) [Bug] After MCP tool discovery, the next step can still receive a stale tool list
- [#13394](https://github.com/deepseek-ai/deepseek-harness/discussions/13394) [Bug][Windows] Installer rejects the default path and the installation path field cannot be edited (0.2.2pre-1)
- [#13393](https://github.com/deepseek-ai/deepseek-harness/discussions/13393) [Bug] Compaction deadlocks when a route's declared contextWindow is below actual usage: every successful `stop` completion is reclassified as CONTEXT_WINDOW_EXCEEDED
- [#13390](https://github.com/deepseek-ai/deepseek-harness/discussions/13390) [Bug] Desktop 0.2.2-rc.3: Most plugins stopped working after update; Plugins page and sidebar "More" button unresponsive; CLI unusable for desktop profile
- [#13385](https://github.com/deepseek-ai/deepseek-harness/discussions/13385) [Bug] 升级后可选插件遮蔽核心包，导致 workspace/session 服务全部不可用，界面表现为"会话全部丢失"（数据实际完好）
- [#13387](https://github.com/deepseek-ai/deepseek-harness/discussions/13387) [Bug] Windows 上标题栏「关闭」和「最大化」按钮悬停时出现两个重复 tooltip
- [#13273](https://github.com/deepseek-ai/deepseek-harness/discussions/13273) [Bug][Windows][HMR] 共享依赖目录迁移使已启用插件更新被 package-moved / bundle-in-use 阻塞
- [#5477](https://github.com/deepseek-ai/deepseek-harness/discussions/5477) Bug:Windows ACL 沙箱在其缓存的私有临时目录被回收后永久失效
- [#13373](https://github.com/deepseek-ai/deepseek-harness/discussions/13373) [Bug] 熄屏后容器 Web 进程失联，恢复流程「未强杀容器启动器」导致亮屏后数分钟不可用
- [#13374](https://github.com/deepseek-ai/deepseek-harness/discussions/13374) [Bug] Desktop update can drop third-party plugin registration and block recovery / 桌面版更新可能丢失第三方插件登记并阻塞恢复

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-16T04:17:11.777Z_