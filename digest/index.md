# DSH Bug Watch — 2026-09-17

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 44

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#6900](https://github.com/deepseek-ai/deepseek-harness/discussions/6900) [Bug] Desktop dev launcher treats native pnpm executable as JavaScript
- [#6899](https://github.com/deepseek-ai/deepseek-harness/discussions/6899) [Bug] bwrap `workspace-write` fails when `/tmp` is an absolute symlink: `Can't mount tmpfs on /newroot/tmp`
- [#6894](https://github.com/deepseek-ai/deepseek-harness/discussions/6894) [Bug] iCloud-offloaded (dataless) plugin files fail with EDEADLK on boot, and the loader's AggregateError masks all 13 member failures
- [#6892](https://github.com/deepseek-ai/deepseek-harness/discussions/6892) [Bug] 0.1.6-alpha.1 升级后所有会话无法创建/恢复：profile 内 dsh-scope 双副本导致 scope 身份失配
- [#6891](https://github.com/deepseek-ai/deepseek-harness/discussions/6891) [Bug] 0.1.6-alpha.1: mounting an experimental browser provider makes every Session fail to create/resume
- [#6890](https://github.com/deepseek-ai/deepseek-harness/discussions/6890) Bug: v0-to-v1 migrator rejects subagent/descriptor version 2 written by earlier releases, breaking session search
- [#6889](https://github.com/deepseek-ai/deepseek-harness/discussions/6889) [Bug] Live sessions have no retention policy: heap grows with opened-session count and OOMs at any heap cap (128 GB host, measured per-session costs)
- [#6886](https://github.com/deepseek-ai/deepseek-harness/discussions/6886) [Bug] subprocess-local: the 15 ms owner wait rescans all of /proc synchronously, costing ~15% of a core per long-lived process group
- [#6781](https://github.com/deepseek-ai/deepseek-harness/discussions/6781) [Bug] Android APK: ZodError in workspace.json (updatedAt) blocks app startup after user-initiated stop — sessions locked
- [#6883](https://github.com/deepseek-ai/deepseek-harness/discussions/6883) [Bug] Native HMR starts replacement activation before asynchronous disposal finishes
- [#6880](https://github.com/deepseek-ai/deepseek-harness/discussions/6880) [Bug] client-connection is missing the webServer injection: every third-party rpc.handle registration fails silently
- [#6879](https://github.com/deepseek-ai/deepseek-harness/discussions/6879) [Bug] subprocess-local: Windows 上每条受管命令都会弹出可见的控制台窗口（windows-job.ts 漏了 windowsHide）
- [#6437](https://github.com/deepseek-ai/deepseek-harness/discussions/6437) [Bug] dsh-client-resources 的 protocolOf 依赖 new URL().hostname，Edge 129 下文件预览显示“文件资源服务不可用”
- [#6726](https://github.com/deepseek-ai/deepseek-harness/discussions/6726) [BUG]手机浏览器无法预览文件：文件预览在部分厂商浏览器上失效（new URL().hostname 解析不出非特殊 scheme 的 host）
- [#6878](https://github.com/deepseek-ai/deepseek-harness/discussions/6878) [Bug] compaction 辅助调用丢弃路由 reasoningEffort：off 档映射非法的路由上 /compact 必然 400 失败
- [#4024](https://github.com/deepseek-ai/deepseek-harness/discussions/4024) [Bug] Windows: dsh CLI 插件管理 spawnSync("pnpm", ..., { shell: true }) 未设置 windowsHide，安装插件时弹出 CMD 窗口
- [#4218](https://github.com/deepseek-ai/deepseek-harness/discussions/4218) [Bug] dsh web crashes on Windows when a tool call / sub-agent is triggered
- [#6876](https://github.com/deepseek-ai/deepseek-harness/discussions/6876) [Bug] mcp-client: 工具 inputSchema 缺少与 outputSchema 对称的子集规范化
- [#4400](https://github.com/deepseek-ai/deepseek-harness/discussions/4400) [Bug] Loader cannot resolve ESM plugin with zero import statements (could not be resolved)
- [#6875](https://github.com/deepseek-ai/deepseek-harness/discussions/6875) [Bug] Session log format drift makes prior history unreadable after upgrading from 0.1.1-rc.1 to 0.1.5 (permission/preset.origin, subagent/descriptor version 2)
- [#6825](https://github.com/deepseek-ai/deepseek-harness/discussions/6825) [Bug] 正文里的 @ 会弹出候选菜单，且没有转义或关闭方式
- [#6872](https://github.com/deepseek-ai/deepseek-harness/discussions/6872) [BUG]Terminal cleanup failure notice cannot be dismissed and resurrects on every page load when the session's agent preset was deleted
- [#6871](https://github.com/deepseek-ai/deepseek-harness/discussions/6871) [Bug] Desktop 打包因测试脚本遗留 fs-ext 调用而 100% 失败 (runtime-payload-smoke.mjs)
- [#6870](https://github.com/deepseek-ai/deepseek-harness/discussions/6870) [Bug] Web client: a persisted view-store payload missing a newly added field crashes the whole sidebar.workspaces slot
- [#6869](https://github.com/deepseek-ai/deepseek-harness/discussions/6869) Bug: OpenAI strict mode forces `sandbox_permissions` into `required`, causing unrecoverable "sandbox escalation is not strictly wider" loop
- [#6295](https://github.com/deepseek-ai/deepseek-harness/discussions/6295) [Bug][SDK 0.1.5-rc.2] Persisted session resume fails after runtime restart
- [#6868](https://github.com/deepseek-ai/deepseek-harness/discussions/6868) [Bug] Web 端输入法预编辑未上屏时点击「发送」，未提交的拼音被当作消息内容发出（Windows / 源码版 0.1.2-alpha.1 cd5ef81）
- [#6866](https://github.com/deepseek-ai/deepseek-harness/discussions/6866) [Bug] `workflow` tool clips its result to 50,000 chars BEFORE the spill policy runs; the spill file labelled "Full formatted result" is truncated and the rest is lost
- [#6797](https://github.com/deepseek-ai/deepseek-harness/discussions/6797) [Bug] Compaction summarization always fails with thinking models — default maxTokens=8192 is consumed by reasoning tokens
- [#6856](https://github.com/deepseek-ai/deepseek-harness/discussions/6856) [Bug] Windows: Open In... launches the workspace folder behind the browser and never takes focus (result depends on the launching process)
- [#6852](https://github.com/deepseek-ai/deepseek-harness/discussions/6852) [Bug] Queue strip misses input a session already had pending when it became live (fork children)
- [#5975](https://github.com/deepseek-ai/deepseek-harness/discussions/5975) [Bug] 内测模型 deepseek-v4.1-flash-expires-on-0910 reasoning 陷入"写/好/执行"无限重复
- [#6705](https://github.com/deepseek-ai/deepseek-harness/discussions/6705) [Bug] Windows "reveal in file manager" on delivery cards silently no-ops: explorer.exe /select receives a file:/// URL instead of a path
- [#6157](https://github.com/deepseek-ai/deepseek-harness/discussions/6157) [Bug] Plugin slash-command output is invisible when the command is the first action in a blank session
- [#6639](https://github.com/deepseek-ai/deepseek-harness/discussions/6639) [Bug] 仅修改 Skill 正文后，已有会话可能继续沿用旧指令
- [#6840](https://github.com/deepseek-ai/deepseek-harness/discussions/6840) [Bug] released-v0 migration refuses every session written during the `permission/preset.origin` window (2026-08-19 .. 2026-08-21)
- [#6841](https://github.com/deepseek-ai/deepseek-harness/discussions/6841) [Bug] 出站 HTTP/2 无开关：undici v8 默认 allowH2=true，H2 会话级故障会拖死 agent 主路径
- [#6838](https://github.com/deepseek-ai/deepseek-harness/discussions/6838) [Bug] 安装社区插件后 dsh web 不监听端口且 GUI 整体空白：启动路径零容错的根因与修法建议
- [#5926](https://github.com/deepseek-ai/deepseek-harness/discussions/5926) [Bug] connection fails to start when a third-party plugin registers an HTTP channel: cannot get property 'webServer' without inject
- [#201](https://github.com/deepseek-ai/deepseek-harness/discussions/201) [BUG] spamming Error: sandbox escalation to "workspace-write" is not strictly wider than this call's current "danger-full-access" mode
- [#6818](https://github.com/deepseek-ai/deepseek-harness/discussions/6818) [Bug] 请求准备阶段缺附件被包装成 TRANSPORT 并重试 5 次后本轮失败 / missing attachment store surfaces as TRANSPORT
- [#6823](https://github.com/deepseek-ai/deepseek-harness/discussions/6823) [Bug] Blank Web sidebar after downgrading: localStorage key dsh.workspace.view.v5 stays the same across incompatible state shapes
- [#6819](https://github.com/deepseek-ai/deepseek-harness/discussions/6819) [Bug] apps/desktop: ⌘C / ⌘V 无反应 — 应用菜单缺少 editMenu role
- [#6799](https://github.com/deepseek-ai/deepseek-harness/discussions/6799) [Bug] Optional Playwright MCP startup failure aborts Session create/resume and removes the Session from Web UI

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-17T02:51:37.597Z_