# DSH Bug Watch — 2026-09-11

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 57

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#5926](https://github.com/deepseek-ai/deepseek-harness/discussions/5926) [Bug] connection fails to start when a third-party plugin registers an HTTP channel: cannot get property 'webServer' without inject
- [#6234](https://github.com/deepseek-ai/deepseek-harness/discussions/6234) [bug] Windows: "reveal in file manager" is a silent no-op — percent-encoded file URL falls back to Desktop, and windowsHide:true creates the window hidden (SW_HIDE)
- [#6209](https://github.com/deepseek-ai/deepseek-harness/discussions/6209) [Bug]: Windows native Job subprocess flashes console windows under console-less GUI hosts
- [#6231](https://github.com/deepseek-ai/deepseek-harness/discussions/6231) [Bug] Web composer stuck in IME composition — Enter stops submitting, keystrokes duplicate (Windows + Microsoft Pinyin / 微软拼音)
- [#6082](https://github.com/deepseek-ai/deepseek-harness/discussions/6082) [Bug] 0.1.5-alpha.2: published dsh-client-store omits Zustand/Immer runtime dependencies
- [#6227](https://github.com/deepseek-ai/deepseek-harness/discussions/6227) [Bug] dsh-client-connection@0.1.5-rc.1 fix(client-connection): register() resolves webServer without inject, breaking every rpc.handle() consumer
- [#6124](https://github.com/deepseek-ai/deepseek-harness/discussions/6124) [Bug] dsh 0.1.5-rc.1 在 Node.js < 24 上完全静默失败(import.meta.main 守卫 + 未声明 engines)
- [#6226](https://github.com/deepseek-ai/deepseek-harness/discussions/6226) Bug: subagent-codex runs intermittently never settle - the child completes its turn and exits, but the dsh-side run hangs until a server restart
- [#6218](https://github.com/deepseek-ai/deepseek-harness/discussions/6218) Bug: reasoning-only completions are reported as successful - the EMPTY_RESPONSE guard tests order.length, which counts the reasoning block
- [#6225](https://github.com/deepseek-ai/deepseek-harness/discussions/6225) [Bug] PM2 托管下 `dsh web` 静默空转：PM2 的 fork 容器用 `import()` 加载 `bin.ts`，`import.meta.main` 为 false（online 但不监听、日志 0 字节）
- [#6224](https://github.com/deepseek-ai/deepseek-harness/discussions/6224) [Bug] llm-pi-ai/opencode-go: missing x-opencode-session header and deepseek-v4.1-flash catalog entry
- [#6223](https://github.com/deepseek-ai/deepseek-harness/discussions/6223) [Bug] /compact says a compaction is active when the agent is simply mid-turn
- [#6221](https://github.com/deepseek-ai/deepseek-harness/discussions/6221) Bug: a settings write deletes an external edit that added a key inside the namespace it writes (still live on 0.1.5-rc.2)
- [#6219](https://github.com/deepseek-ai/deepseek-harness/discussions/6219) [Bug] 会话 token 计数不含 teammates：一次 Agent Teams 运行实测低估 2.3×（17.8M vs 41.1M）
- [#3253](https://github.com/deepseek-ai/deepseek-harness/discussions/3253) Bug: workspace creation fails on macOS for paths with spaces (firmlinked APFS volume trailing colon)
- [#6197](https://github.com/deepseek-ai/deepseek-harness/discussions/6197) [Bug] 分叉（fork）会继承父会话"已入队未执行"的消息并在子会话自动重跑，且没有任何干预窗口
- [#6217](https://github.com/deepseek-ai/deepseek-harness/discussions/6217) Bug: Web GUI file preview shows "file resource service unavailable" on Chromium <= 125 — protocolOf() relies on WHATWG URL host parsing for a non-special scheme
- [#6185](https://github.com/deepseek-ai/deepseek-harness/discussions/6185) [BUG] 0.1.5-rc1 旧版本创建的preset加载错误
- [#4926](https://github.com/deepseek-ai/deepseek-harness/discussions/4926) [Bug] Client Cordis inspect query hangs Pending forever — no timeout, error answers discarded
- [#6189](https://github.com/deepseek-ai/deepseek-harness/discussions/6189) [BUG] 0.1.5-rc.1 会话历史永久无法加载:v0→v1 拒绝已发布的 v0 形状(permission/preset 带 origin)
- [#6201](https://github.com/deepseek-ai/deepseek-harness/discussions/6201) [Bug] dsh web 0.1.5-rc.1: silent process death (0xC0000409) loses in-flight turns - 12 deaths / 8 days
- [#6196](https://github.com/deepseek-ai/deepseek-harness/discussions/6196) [BUG] dsh web 启动到打印 URL 约 18s，其中约 9.3s 来自 client-modules 每次启动重复 8 次全量重建组合包
- [#6059](https://github.com/deepseek-ai/deepseek-harness/discussions/6059) [Bug] Runaway tool-call arguments consume the full output budget before validation
- [#6192](https://github.com/deepseek-ai/deepseek-harness/discussions/6192) [BUG] 行尾处理：read 把「仅 CR 换行」的文件算成 1 行；edit 把「首 4KB 无换行」的 CRLF 文件整份改写成 LF
- [#6187](https://github.com/deepseek-ai/deepseek-harness/discussions/6187) [Bug] Windows 上「在文件资源管理器中显示」在含中文/非 ASCII 的路径下只打开默认文件夹，不定位文件
- [#6184](https://github.com/deepseek-ai/deepseek-harness/discussions/6184) [Bug] /compact reports transport failures as "could not produce a useful summary"
- [#6182](https://github.com/deepseek-ai/deepseek-harness/discussions/6182) [Bug] Windows: revealNativePath never shows a window, and opens the Desktop instead of the target folder
- [#6141](https://github.com/deepseek-ai/deepseek-harness/discussions/6141) [Bug]分叉正在运行的或者发送消息但是终止运行的会话的行为和以前不一致了
- [#6107](https://github.com/deepseek-ai/deepseek-harness/discussions/6107) [Bug] TOOL_OUTCOME_UNKNOWN / TOOL_NOT_STARTED 合成结果缺少恢复语义：用户与模型都误判为真实工具失败（0.1.5-rc.1）
- [#6171](https://github.com/deepseek-ai/deepseek-harness/discussions/6171) [Bug] Windows 桌面端：agent 每次执行命令都会弹出控制台黑窗（0.1.5-rc.1 回归）
- [#6169](https://github.com/deepseek-ai/deepseek-harness/discussions/6169) [Bug] goal-round-driver 无时间节流：轮次按「回合结束」触发，等待外部时钟的目标会在分钟级耗尽 maxGoalRounds 预算
- [#6166](https://github.com/deepseek-ai/deepseek-harness/discussions/6166) [Bug] Switching a blank session to an already-loaded preset drops subagent tools
- [#6102](https://github.com/deepseek-ai/deepseek-harness/discussions/6102) [Bug] dsh 0.1.2-rc.1 + V4.1：reasoning 正常但正文 content 未落地（合并后仍复现；V4-Pro 9/14 起全量路由）
- [#6162](https://github.com/deepseek-ai/deepseek-harness/discussions/6162) [Bug Report] 会话接续后，后台子代理的完成报告仍投递给旧会话；父会话不在册时通知被静默丢弃
- [#6160](https://github.com/deepseek-ai/deepseek-harness/discussions/6160) [bug]新版本(dsh-v0.1.5-rc.1)在开展别的对话期间，fork之前会话并写入新的prompt会出bug
- [#6144](https://github.com/deepseek-ai/deepseek-harness/discussions/6144) [Bug] v0→v1 迁移对单条不合规历史记录整体拒载，导致旧会话永久打不开 / Whole-log refusal on one non-conforming legacy record
- [#6157](https://github.com/deepseek-ai/deepseek-harness/discussions/6157) [Bug] Plugin slash-command output is invisible when the command is the first action in a blank session
- [#6155](https://github.com/deepseek-ai/deepseek-harness/discussions/6155) [Bug] Continuing web session loses 25 native tools and matching prompt sections between turns
- [#5818](https://github.com/deepseek-ai/deepseek-harness/discussions/5818) [Bug] Session history fails to load after upgrading: the v0 migration inventory refuses released payload members (permission/preset origin, flat pi-ai replayState)
- [#6154](https://github.com/deepseek-ai/deepseek-harness/discussions/6154) [Bug] Web 交付卡片的「在文件资源管理器中显示」只创建隐藏窗口（Windows）
- [#6147](https://github.com/deepseek-ai/deepseek-harness/discussions/6147) [Bug] Forked session inherits the parent's queued next message and runs it as a phantom turn
- [#6145](https://github.com/deepseek-ai/deepseek-harness/discussions/6145) [Bug] settings overlay / omitted inputModalities marks vision models as text-only (UI: 当前模型不支持图片)
- [#6140](https://github.com/deepseek-ai/deepseek-harness/discussions/6140) [Bug] Web UI 长任务运行几十分钟后停止更新，重启后显示已完成（0.1.2-rc.1，附持久化日志时间线）
- [#6138](https://github.com/deepseek-ai/deepseek-harness/discussions/6138) [Bug] 输入法拼音未上屏时，输入框自动填充乱码汉字
- [#6133](https://github.com/deepseek-ai/deepseek-harness/discussions/6133) [Bug] Locale `fr-be` (Belgian French) incorrectly served as Belarusian (`be`) UI
- [#6127](https://github.com/deepseek-ai/deepseek-harness/discussions/6127) [Bug] 工具执行中途崩溃的轮会留下悬空 tool_calls：切到 deepseek-official 重放历史必 400（repair 只补尾部 turn，deepseek 适配器无 sanitizer）
- [#6123](https://github.com/deepseek-ai/deepseek-harness/discussions/6123) [Bug] update_goal blocked 接受未经验证的"上下文预算已耗尽"：自主轮次缺少非 blocker 收尾出口
- [#6099](https://github.com/deepseek-ai/deepseek-harness/discussions/6099) [Bug][Windows] skill-filesystem watcher can hit a high-CPU rename-event storm on a custom Codex skills root
- [#6114](https://github.com/deepseek-ai/deepseek-harness/discussions/6114) [Bug] DeepSeek-V4.1-Flash display name misses decimal point
- [#6106](https://github.com/deepseek-ai/deepseek-harness/discussions/6106) [Bug] web_search 每条查询各发一次独立计费请求，叠加子代理嵌套后单会话 854 次请求并耗尽余额
- [#6101](https://github.com/deepseek-ai/deepseek-harness/discussions/6101) [Bug][gateway/internal] DSH 历史加载失败：cannot safely transform unclassified message source
- [#6108](https://github.com/deepseek-ai/deepseek-harness/discussions/6108) [Bug] v2.0.6: skill-registry BigInt type error breaks all requests (REQUEST_EXTENSION failed)
- [#6092](https://github.com/deepseek-ai/deepseek-harness/discussions/6092) Bug: mux heartbeat kills a healthy browser WebSocket (endless ~10s reconnect loop)
- [#5983](https://github.com/deepseek-ai/deepseek-harness/discussions/5983) [Bug] Custom providers are hidden and cannot be added in web UI (`llm-pi-ai` namespace not exposed in `settings/describe`)
- [#6098](https://github.com/deepseek-ai/deepseek-harness/discussions/6098) [bug][http-proxy] 导出给子进程的 NO_PROXY 携带方括号条目 [::1],Python httpx 直接拒收整个变量(0.1.5-rc.1 复现)
- [#6030](https://github.com/deepseek-ai/deepseek-harness/discussions/6030) [bug][agent-loop] steer 在阻塞式 job_output(wait) 期间无法抢占:next-step 只在 step 边界消费,会话最长 10 分钟对用户输入无响应(0.1.5-alpha.1 实测)
- [#6084](https://github.com/deepseek-ai/deepseek-harness/discussions/6084) Bug: Web GUI "Load earlier" silently no-ops and gets permanently stuck on long sessions (`request-prompt` definition withdraws a materialized target)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-11T02:27:04.832Z_