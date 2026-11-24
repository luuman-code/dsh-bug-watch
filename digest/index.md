# DSH Bug Watch — 2026-11-24

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 46

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#13282](https://github.com/deepseek-ai/deepseek-harness/discussions/13282) **[Bug] remoteAccess.whenAccess is not a function - 5 official client plugins fail to mount**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-23

## 📝 仅报告 — 无人互动
- [#12182](https://github.com/deepseek-ai/deepseek-harness/discussions/12182) [Bug] DSH Desktop (Windows) — 每次工具调用弹出可见控制台窗口
- [#14220](https://github.com/deepseek-ai/deepseek-harness/discussions/14220) [Bug] 助手回复会把下一轮用户消息和运行时上下文续写进正文
- [#14218](https://github.com/deepseek-ai/deepseek-harness/discussions/14218) [Bug][Windows Desktop] 主窗口被无焦点唤出后仍显示旧内容，点击才出现 AI 输出和提问卡
- [#11626](https://github.com/deepseek-ai/deepseek-harness/discussions/11626) [Bug] Draft image attachments are lost when switching sessions (text draft survives)
- [#14216](https://github.com/deepseek-ai/deepseek-harness/discussions/14216) [Bug][Desktop] 桌面端更新后 resources\runtime 为空，导致插件安装/更新/卸载全部失败（至 0.2.2-rc.5）
- [#14041](https://github.com/deepseek-ai/deepseek-harness/discussions/14041) [Bug][Plugin Manager] 卸载插件时只用单一 registry，不经过 registryPlan，私有源下的 profile 必然失败（至 0.2.3-alpha.1 未修复）
- [#14213](https://github.com/deepseek-ai/deepseek-harness/discussions/14213) [Bug][Plugin Manager] 安装 GitHub 插件时，已有私有源插件被发往公共 npm 镜像并报 404
- [#13897](https://github.com/deepseek-ai/deepseek-harness/discussions/13897) [Bug] @deepseek-ai/dsh-web declares no zod dependency → typert contributor never registers (ERR_MODULE_NOT_FOUND, rc.3–rc.5)
- [#14207](https://github.com/deepseek-ai/deepseek-harness/discussions/14207) [Bug] 切换外部 Agent 插件后普通历史会话从列表消失，重启恢复（0.2.3-alpha.2）
- [#9462](https://github.com/deepseek-ai/deepseek-harness/discussions/9462) [Bug] Desktop 0.2.0-rc.2: composer 输入栏在会话进行中消失，刷新前无法恢复
- [#14206](https://github.com/deepseek-ai/deepseek-harness/discussions/14206) [bug] experimental-inspector: abrupt client disconnect (TCP RST) kills the Inspector Worker; a later state publish then exits the whole harness
- [#13336](https://github.com/deepseek-ai/deepseek-harness/discussions/13336) [Bug] "Continue" after a failed turn persists an empty user message → session permanently 400s on strict gateways
- [#14019](https://github.com/deepseek-ai/deepseek-harness/discussions/14019) [Bug] dsh-desktop 0.2.2-rc.5 crashes on startup with uncaught ECONNRESET from internal fetch; stale processes after quit make it recurrent (Windows)
- [#14200](https://github.com/deepseek-ai/deepseek-harness/discussions/14200) [Bug] 多行 $$ 显示公式被整段吞进一个 KaTeX 错误：开围栏行带内容的 $$…$$ 无法闭合（0.2.3-alpha.2）
- [#11608](https://github.com/deepseek-ai/deepseek-harness/discussions/11608) [Bug] Eager projection-cache load dominates `dsh web` startup: 969 records / 209 MB → 5.3 s of validation (26%)
- [#13964](https://github.com/deepseek-ai/deepseek-harness/discussions/13964) [bug] 上下文打满后压缩永久失败（"Compaction could not produce a useful summary"），会话不可恢复
- [#14188](https://github.com/deepseek-ai/deepseek-harness/discussions/14188) [Bug] subagent 最终报告在最后一步为工具调用时被静默丢弃（0.2.2-rc.1 / rc.3 / master
- [#14195](https://github.com/deepseek-ai/deepseek-harness/discussions/14195) [Bug] 桌面端（dsh-app://app 源）粘贴图片 / 拖入文件上传失败；同一 Host 的 HTTP 入口上传成功
- [#14189](https://github.com/deepseek-ai/deepseek-harness/discussions/14189) [Bug] 插件市场：GitHub Git 索引源在下拉菜单中不显示索引标题
- [#14184](https://github.com/deepseek-ai/deepseek-harness/discussions/14184) [Bug] KV cache never hits: per-turn top-level system prompt breaks DeepSeek prefix cache
- [#14181](https://github.com/deepseek-ai/deepseek-harness/discussions/14181) [Bug] Mobile (Android Chrome): theme scrollbar skin forces classic scrollbars — both bars persist and clip the layout by ~5 px each way
- [#8631](https://github.com/deepseek-ai/deepseek-harness/discussions/8631) Bug: `persistence.list()` walks every session directory one libuv round-trip at a time (~2.3k event-loop turns per call), and `session_trace` has no `timeoutMs`
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#14086](https://github.com/deepseek-ai/deepseek-harness/discussions/14086) [Bug] 长转录会话里所有锚定浮层（`role="dialog"`）被定位到视口外，菜单/权限/模型/问答卡片全部点不开
- [#14170](https://github.com/deepseek-ai/deepseek-harness/discussions/14170) [Bug] 任务执行中拖拽会话跨工作区，导致孤儿会话并引发 sessionController 全局崩溃
- [#14168](https://github.com/deepseek-ai/deepseek-harness/discussions/14168) [Bug] OpenAI Responses 跨 item 的工具参数碎片导致整轮 MALFORMED_RESPONSE
- [#14090](https://github.com/deepseek-ai/deepseek-harness/discussions/14090) [Bug] 0.2.3-alpha.2 在启用插件dsh-mnemon的情况下无法使用
- [#14162](https://github.com/deepseek-ai/deepseek-harness/discussions/14162) [Bug] @deepseek-ai/dsh-client-ui-commands: 单个插件指令与宿主指令重名时直接 throw，导致整个 + / / 输入菜单（含文件上传）完全不可用
- [#14160](https://github.com/deepseek-ai/deepseek-harness/discussions/14160) [Bug] validateArgs names the missing field but not the remedy — the same missing "description" is 462/472 argument failures
- [#14158](https://github.com/deepseek-ai/deepseek-harness/discussions/14158) [Bug] 桌面端反复重启后启动 Web 认证失败（dsh-auth cookies 残留导致 16KB 请求头溢出）
- [#14157](https://github.com/deepseek-ai/deepseek-harness/discussions/14157) [bug] context length of alternative model
- [#13223](https://github.com/deepseek-ai/deepseek-harness/discussions/13223) [Bug] 0.2.2-rc.3：session-search 在旧 v0 会话上必然失败——一条不可读日志仍会拖垮整个索引（已二分定位）
- [#14155](https://github.com/deepseek-ai/deepseek-harness/discussions/14155) [Bug] 侧边栏 md/html/pdf 预览"文件资源服务不可用"：非标准 scheme 的 URL.hostname 在 HarmonyOS ArkWeb 上为空，导致资源协议解析失败
- [#14153](https://github.com/deepseek-ai/deepseek-harness/discussions/14153) [Bug] cua 工具的 JSON 值 schema 生成递归 $ref 环，Gemini 系模型携带该工具的所有请求被 400 拒绝（已复现 + 已验证修复）
- [#14152](https://github.com/deepseek-ai/deepseek-harness/discussions/14152) [Bug] Desktop 主会话上滑离开底部后，持续输出仍带动阅读位置
- [#14146](https://github.com/deepseek-ai/deepseek-harness/discussions/14146) [Bug] Desktop auto-update hangs forever on Windows: installer fails with error 32 (files in use), UI never reports failure
- [#14144](https://github.com/deepseek-ai/deepseek-harness/discussions/14144) [Bug] workspace.create does not update workspaceIds order, so the web GUI cannot default to the current folder
- [#14143](https://github.com/deepseek-ai/deepseek-harness/discussions/14143) [Bug] Default retry budget of 5 aborts the turn on transient network failure, terminating goal rounds
- [#14142](https://github.com/deepseek-ai/deepseek-harness/discussions/14142) [Bug] session/list re-reads every persisted session header on each call — Node main thread at 100% with many panels
- [#14112](https://github.com/deepseek-ai/deepseek-harness/discussions/14112) [Bug] 附件缺失被报成 "DeepSeek Messages transport failed"，把本地文件问题伪装成网络问题
- [#14133](https://github.com/deepseek-ai/deepseek-harness/discussions/14133) [Bug] Python 轮子单文件 runtime（Node SEA）在子进程 cwd 不在 C: 盘时无法加载 koffi.node
- [#14130](https://github.com/deepseek-ai/deepseek-harness/discussions/14130) [BUG] dsh always stops when spitting out: <</｜DSML｜ parameter> </｜DSML｜ invoke> </｜DSML｜ calls>
- [#14127](https://github.com/deepseek-ai/deepseek-harness/discussions/14127) [BUG] 插件能运行，配置却保存不了：同一个组件被两个插件包含
- [#13983](https://github.com/deepseek-ai/deepseek-harness/discussions/13983) [Bug] Parallel tool calls collapse when the gateway repeats tool_call index: arguments concatenate -> MALFORMED_RESPONSE kills the turn
- [#13836](https://github.com/deepseek-ai/deepseek-harness/discussions/13836) [Bug] 桌面端 0.2.2-rc.5 启动即崩溃：主进程 undici fetch 内置 Host 报 read ECONNRESET（每次必现）

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-24T08:00:35.838Z_