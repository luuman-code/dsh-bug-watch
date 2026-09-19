# DSH Bug Watch — 2026-09-19

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 52

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#6458](https://github.com/deepseek-ai/deepseek-harness/discussions/6458) **[Bug] Todo list does not update incrementally during long-running tasks**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-18

## 📝 仅报告 — 无人互动
- [#6314](https://github.com/deepseek-ai/deepseek-harness/discussions/6314) [Bug][0.1.5-rc.x] Fork 出的会话发送新消息时重放源会话旧 prompt（A），新 prompt（B/C）永久滞留队列不执行
- [#7123](https://github.com/deepseek-ai/deepseek-harness/discussions/7123) [bug]「只有 reasoning、无可见正文也无工具调用」的响应被判为成功 ⇒ 静默空回复
- [#7122](https://github.com/deepseek-ai/deepseek-harness/discussions/7122) [Bug][0.1.5-rc.2 / 0.1.6-alpha.2] sessionQuery.readSession rejects valid forked sessions
- [#7121](https://github.com/deepseek-ai/deepseek-harness/discussions/7121) Bug: approveEscalation fails closed on equal-mode sandbox_permissions, bricking sessions
- [#6971](https://github.com/deepseek-ai/deepseek-harness/discussions/6971) [BUG] 更新不能太积极，又不能用了！
- [#7120](https://github.com/deepseek-ai/deepseek-harness/discussions/7120) [Bug] messages protocol: prepare undefined crash on tool_use, then INVALID_REQUEST on retry
- [#6889](https://github.com/deepseek-ai/deepseek-harness/discussions/6889) [Bug] Live sessions have no retention policy: heap grows with opened-session count and OOMs at any heap cap (128 GB host, measured per-session costs)
- [#7115](https://github.com/deepseek-ai/deepseek-harness/discussions/7115) [Bug] Host enters a CPU-bound loop and blocks the event loop when a turn starts in a large session (~700k+ tokens)
- [#6964](https://github.com/deepseek-ai/deepseek-harness/discussions/6964) [Bug] claimed 的输入在 prepareRequest 抛错时会永久丢失：本机 154 份存档里 14 例
- [#7114](https://github.com/deepseek-ai/deepseek-harness/discussions/7114) [Bug] Uncaught ENOENT in dsh-subprocess-local OutputCollector.spillAll crashes the whole dsh web process (external cleanup removed temp dir)
- [#7113](https://github.com/deepseek-ai/deepseek-harness/discussions/7113) [Bug] Web 侧栏会话列表在 0.1.5-rc.1 → rc.2 升级后整块消失（dsh.workspace.view.v5 缺 sessionUpdatedAtByAccount）
- [#7112](https://github.com/deepseek-ai/deepseek-harness/discussions/7112) [Bug] Web 侧栏会话列表在 0.1.5-rc.1 → rc.2 升级后整块消失（dsh.workspace.view.v5 缺 sessionUpdatedAtByAccount）
- [#1026](https://github.com/deepseek-ai/deepseek-harness/discussions/1026) [Bug Report] `edit`（str_replace_editor）重写文件时静默剥掉 UTF-8 BOM
- [#7103](https://github.com/deepseek-ai/deepseek-harness/discussions/7103) [Bug] 桌面端（Electron）会话标题栏的「N 个子代理」入口无法悬停/点击展开：lineage 控件缺少 -webkit-app-region: no-drag
- [#7099](https://github.com/deepseek-ai/deepseek-harness/discussions/7099) [Bug] 从聊天引用点开文件时右侧预览失败：fs-error "… is not an absolute path"（Windows）
- [#7079](https://github.com/deepseek-ai/deepseek-harness/discussions/7079) [Bug] pnpm dsh web 从源码启动时工具调用全线崩溃：tsx/esm 加载 TS 源码与插件加载编译产物导致 TOOL_RUNTIME_SCHEDULER Symbol 分裂
- [#7096](https://github.com/deepseek-ai/deepseek-harness/discussions/7096) Bug: tool calls always fail with "Cannot read properties of undefined (reading 'prepare')" on 0.1.6-alpha.2 (Windows, source checkout) — works on 0.1.5-rc.2
- [#7065](https://github.com/deepseek-ai/deepseek-harness/discussions/7065) [Bug] A stored subagent notice carrying reasoning makes a session permanently unusable on the DeepSeek Messages protocol
- [#7087](https://github.com/deepseek-ai/deepseek-harness/discussions/7087) [Bug] Duplicate tool names across scopes: Teams' `send_message` shadows `tool-subagent-control`'s, breaking plain continuable subagents
- [#739](https://github.com/deepseek-ai/deepseek-harness/discussions/739) [Bug] 思考模式下工具调用返回 400 INVALID_REQUEST — reasoning_content 未回传
- [#7083](https://github.com/deepseek-ai/deepseek-harness/discussions/7083) [Bug] 本轮运行失败Cannot read properties of undefined (reading 'prepare')
- [#6972](https://github.com/deepseek-ai/deepseek-harness/discussions/6972) [Bug] 未思考直接输出文本时 Chat 出现空的思考块（0.1.6-alpha.2 / deepseek-flash + Messages 协议）
- [#6979](https://github.com/deepseek-ai/deepseek-harness/discussions/6979) [Bug] Chat: "Load earlier" can succeed without adding any rows
- [#7024](https://github.com/deepseek-ai/deepseek-harness/discussions/7024) [Bug] workspace-write Seatbelt profile blocks new PTYs (posix_openpt: EPERM) — nested sessions and PTY-based tools fail
- [#7032](https://github.com/deepseek-ai/deepseek-harness/discussions/7032) [BUG]: Host-backed settings (Settings > Models/General) are impossible behind any reverse proxy — isLoopback gate tests the hostname string only, with no deployment override
- [#7069](https://github.com/deepseek-ai/deepseek-harness/discussions/7069) [Bug] `pnpm dsh web` dev launch crashes on every tool call with `Cannot read properties of undefined (reading 'prepare')
- [#7068](https://github.com/deepseek-ai/deepseek-harness/discussions/7068) [Bug] Web sidebar disappears entirely when a persisted store's `init()` gained a field after that store was written
- [#7061](https://github.com/deepseek-ai/deepseek-harness/discussions/7061) [bug] 源码启动(tsx)模式下,任何工具调用都会报 Cannot read properties of undefined (reading 'prepare')
- [#7067](https://github.com/deepseek-ai/deepseek-harness/discussions/7067) [Bug]子 agent 代理无法通过提权执行操作，要不就得默认放权给
- [#6427](https://github.com/deepseek-ai/deepseek-harness/discussions/6427) [Bug][性能] 0.1.5-rc.2 Web UI 空闲态主线程占用约 50%、布局约 144 次/秒（≈每帧一次），拖拽窗口 resize 明显卡顿
- [#7058](https://github.com/deepseek-ai/deepseek-harness/discussions/7058) [Bug] Tool calls crash when dsh-tools is loaded from multiple module instances
- [#7054](https://github.com/deepseek-ai/deepseek-harness/discussions/7054) [Bug] Agent Team roster reads `model` from a stale creation-time snapshot (offline teammates get the Lead's model)
- [#7051](https://github.com/deepseek-ai/deepseek-harness/discussions/7051) Bug: 开发启动方式（pnpm dsh web）下所有工具调用失败 —— Cannot read properties of undefined (reading `prepare`) / all tool calls fail on the tsx dev launch
- [#3751](https://github.com/deepseek-ai/deepseek-harness/discussions/3751) Bug: TOOL_RUNTIME_SCHEDULER symbol mismatch crashes every subagent tool call (fix included)
- [#6224](https://github.com/deepseek-ai/deepseek-harness/discussions/6224) [Bug] llm-pi-ai/opencode-go: missing x-opencode-session header and deepseek-v4.1-flash catalog entry
- [#7011](https://github.com/deepseek-ai/deepseek-harness/discussions/7011) [Bug] 源码启动默认 runtime 解析模式导致 dsh-tools 双实例,所有工具调用报 Cannot read properties of undefined (reading 'prepare')
- [#7038](https://github.com/deepseek-ai/deepseek-harness/discussions/7038) [Bug report] UI - 界面布局错乱
- [#6147](https://github.com/deepseek-ai/deepseek-harness/discussions/6147) [Bug] Forked session inherits the parent's queued next message and runs it as a phantom turn
- [#6953](https://github.com/deepseek-ai/deepseek-harness/discussions/6953) [Bug] 过期的 dsh.workspace.view.v5 会让整个侧边栏浏览器留白（会话历史"消失"）
- [#4601](https://github.com/deepseek-ai/deepseek-harness/discussions/4601) Bug: agent loop crashes after bash tool call — 'Cannot read properties of undefined (reading \'prepare\')' kills session (3 consecutive turns)
- [#4508](https://github.com/deepseek-ai/deepseek-harness/discussions/4508) [Bug] Web mode tool execution fails: Cannot read properties of undefined (reading 'prepare')
- [#6994](https://github.com/deepseek-ai/deepseek-harness/discussions/6994) bug: 源码启动（pnpm dsh / pnpm dsh web）首次工具调用必崩 — Cannot read properties of undefined (reading 'prepare')
- [#6992](https://github.com/deepseek-ai/deepseek-harness/discussions/6992) [Bug] tsx source launch + Symbol() dual-load: ctx.tools[TOOL_RUNTIME_SCHEDULER] is undefined (prepare crash, then INVALID_REQUEST)
- [#6975](https://github.com/deepseek-ai/deepseek-harness/discussions/6975) [Bug] Source launch (pnpm dsh) on 0.1.6-alpha.2: every tool call fails with "Cannot read properties of undefined (reading 'prepare')"
- [#6967](https://github.com/deepseek-ai/deepseek-harness/discussions/6967) [Bug] 0.1.6-alpha.2 source launch (pnpm dsh) splits @deepseek-ai/dsh-tools across src/lib — every tool call fails with "Cannot read properties of undefined (reading 'prepare')"
- [#7016](https://github.com/deepseek-ai/deepseek-harness/discussions/7016) [Bug] Windows下, 选择分区根目录作为项目空间 可设定但不可选
- [#7014](https://github.com/deepseek-ai/deepseek-harness/discussions/7014) BUG: 冷启动会话列表里，分叉（fork）会话的标题退化成目录名、时间退化成创建时间
- [#6856](https://github.com/deepseek-ai/deepseek-harness/discussions/6856) [Bug] Windows: Open In... launches the workspace folder behind the browser and never takes focus (result depends on the launching process)
- [#6201](https://github.com/deepseek-ai/deepseek-harness/discussions/6201) [Bug] dsh web 0.1.5-rc.1: silent process death (0xC0000409) loses in-flight turns - 12 deaths / 8 days
- [#7008](https://github.com/deepseek-ai/deepseek-harness/discussions/7008) [Bug] dsh plugin add: a failed-then-retried install silently never activates the bundle (exit 0, no warning)
- [#7004](https://github.com/deepseek-ai/deepseek-harness/discussions/7004) [bug] 安装的许多插件版本不适配导致整个dsh无法启动，需添加熔断保护机制

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-19T02:37:34.131Z_