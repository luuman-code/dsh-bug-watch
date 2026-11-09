# DSH Bug Watch — 2026-11-09

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 45

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#12682](https://github.com/deepseek-ai/deepseek-harness/discussions/12682) [bug]无视用户插话
- [#11471](https://github.com/deepseek-ai/deepseek-harness/discussions/11471) [Bug] WebSocket 会话被服务端反复关闭，前端「新建会话」死锁（Windows 11 / iOS / Android 全部实测复现）
- [#11809](https://github.com/deepseek-ai/deepseek-harness/discussions/11809) [Bug] 主进程启动时 electron-updater 写已断开 stdout 管道触发未捕获 EPIPE 崩溃
- [#11784](https://github.com/deepseek-ai/deepseek-harness/discussions/11784) [Bug] Chat briefly renders two identical user bubbles before the durable user/message replaces the optimistic echo
- [#8710](https://github.com/deepseek-ai/deepseek-harness/discussions/8710) [Bug] engines 和代码对不上：Node 24.0/24.1 没有 import.meta.main，dsh 启动后无输出直接退出
- [#12507](https://github.com/deepseek-ai/deepseek-harness/discussions/12507) [Bug] Permissions row in Settings → General crashes with "Cannot read properties of undefined (reading 'volatile')"
- [#12701](https://github.com/deepseek-ai/deepseek-harness/discussions/12701) [Bug] 0.2.2-rc.1: Assistant replies disappear after switching sessions, plus a general responsiveness regression
- [#12596](https://github.com/deepseek-ai/deepseek-harness/discussions/12596) [Bug] dsh web auto-exits with SIGSEGV (signal 11) while idle on 0.2.2-rc.1
- [#4059](https://github.com/deepseek-ai/deepseek-harness/discussions/4059) [Bug] Late ECONNRESET after an upgraded socket closes can terminate dsh web
- [#12686](https://github.com/deepseek-ai/deepseek-harness/discussions/12686) [Bug] bundled 技能 diagnose-windows-sandbox-acl：SKILL.md 说「脚本没有模式」，但它自己打印的 ROLLBACK 命令用的就是 -Restore
- [#8827](https://github.com/deepseek-ai/deepseek-harness/discussions/8827) [Bug] workflow 工具调用永不返回，父 Agent 卡死在 step/start 后无事件
- [#12683](https://github.com/deepseek-ai/deepseek-harness/discussions/12683) [Bug] 会话从桌面端永久消失、手机端却能看到：workspace 归属只在首次初始化 bootstrap，且 mutate() 会把校验失败的候选静默剪掉（0.2.2-rc.1）
- [#12555](https://github.com/deepseek-ai/deepseek-harness/discussions/12555) Bug: profile HMR leaves stale Fiber inject dependency after removing a bundle (Web routes 404)
- [#11621](https://github.com/deepseek-ai/deepseek-harness/discussions/11621) Bug Report: Auto Review Failures Permanently Block Tool Execution / 自动审查失败导致工具调用被永久阻断
- [#10870](https://github.com/deepseek-ai/deepseek-harness/discussions/10870) [Bug] dsh-workspace-changes 快照无上限堆叠：rc.2 单日 103 个 / 25.79 GB 写满系统盘，rc.3 仍可复现
- [#10503](https://github.com/deepseek-ai/deepseek-harness/discussions/10503) [Bug] `grep`/`glob` tools turn a partially-successful search into a whole failure on unreadable directories
- [#12636](https://github.com/deepseek-ai/deepseek-harness/discussions/12636) [Bug] grep: one file with a non-UTF-8 name makes the whole search fail with `SEARCH_FAILED`
- [#12665](https://github.com/deepseek-ai/deepseek-harness/discussions/12665) [Bug] Right sidebar becomes unreachable when a rightbar Slot entry is abdicated after a render crash
- [#12663](https://github.com/deepseek-ai/deepseek-harness/discussions/12663) [Bug] 断网安装插件导致本地依赖全毁，覆盖重装客户端无效（171个核心模块报错 ERR_MODULE_NOT_FOUND）  正文内容：
- [#6552](https://github.com/deepseek-ai/deepseek-harness/discussions/6552) [Bug] 安卓语音输入：输入法组字里带换行时，输入框只落地一部分文本（首段整段丢失）
- [#12653](https://github.com/deepseek-ai/deepseek-harness/discussions/12653) [Bug] deferLoading is stripped on providers without toolUpdate, so on-demand MCP injection still ships the full tool catalog
- [#11063](https://github.com/deepseek-ai/deepseek-harness/discussions/11063) [Bug] 失败请求/重试耗尽后上下文占用显示为 0%（contextPressure 采纳 assistant/attempt 的零 usage 样本）
- [#12649](https://github.com/deepseek-ai/deepseek-harness/discussions/12649) [Bug] Desktop 启动崩溃：dsh-auth-* cookie 随随机端口在 127.0.0.1 下累积，第 72 次启动必然 431（Web authentication failed）
- [#12647](https://github.com/deepseek-ai/deepseek-harness/discussions/12647) [Bug] Provider `Retry-After` is dropped or truncated — 429/503 retries fire early and re-trigger rate limits (root cause + patch + 123 tests)
- [#11864](https://github.com/deepseek-ai/deepseek-harness/discussions/11864) [Bug] session/search 的 FTS5 索引构建在有常驻写入会话的部署上永远失败**（rc.5 / 0.2.1-rc.5，rc.2 同）`session/search` FTS index build never stabilizes when any session writes periodically (bot heartbeat) — `SESSION_QUERY_PERSISTENCE_FAILED: did not stabilize after one retry`
- [#12645](https://github.com/deepseek-ai/deepseek-harness/discussions/12645) Bug: web_fetch drops error.cause.code, so every transport failure looks identical
- [#9179](https://github.com/deepseek-ai/deepseek-harness/discussions/9179) [Bug] 摘要压缩保留了「选中的选项」却丢掉了提问正文、header 与选项清单，导致手打回答引用的选项成为悬空引用
- [#12641](https://github.com/deepseek-ai/deepseek-harness/discussions/12641) [BUG] 超大会话日志导致 dsh 宿主 OOM（exit 134），打开即崩
- [#12640](https://github.com/deepseek-ai/deepseek-harness/discussions/12640) [Bug] 切换会话后内容短暂冻结在视口顶部，需手动滚动才恢复（0.2.2-rc.1，Windows Web GUI）
- [#12462](https://github.com/deepseek-ai/deepseek-harness/discussions/12462) [Bug] A lone UTF-16 surrogate in session history permanently breaks every request (HTTP 400)
- [#12638](https://github.com/deepseek-ai/deepseek-harness/discussions/12638) [Bug] Background / promoted bash output: CJK and emoji split across polls turn into U+FFFD
- [#12637](https://github.com/deepseek-ai/deepseek-harness/discussions/12637) [Bug] `edit` / `apply_patch` rewrite the line endings of lines they did not touch (mixed-EOL files)
- [#12635](https://github.com/deepseek-ai/deepseek-harness/discussions/12635) [Bug] llm-deepseek: an empty `error.message` turns any HTTP error (401/402/400) into a retried `TRANSPORT`
- [#9314](https://github.com/deepseek-ai/deepseek-harness/discussions/9314) [BUG] Workspace-write provisioning leaves a persistent Low integrity label on the workspace root — executables built in the workspace run at Low IL and fail all writes outside the sandbox
- [#12626](https://github.com/deepseek-ai/deepseek-harness/discussions/12626) [Bug] DeepSeek 长会话 400 INVALID_REQUEST：供应商报错体被吞、contextWindow 声明 1M 导致压缩不触发
- [#9695](https://github.com/deepseek-ai/deepseek-harness/discussions/9695) [Bug] session_search 永久 30s 超时：:memory: FTS 索引 + 单事务对账 + 工具超时中止，大语料必然死锁
- [#12578](https://github.com/deepseek-ai/deepseek-harness/discussions/12578) [BUG]dsh-session-log-deepseek 在接近 maxBytes(8 MiB) 时生成非法 JSON，导致整个/anthropic/v1/messages 请求被 400 拒绝
- [#9609](https://github.com/deepseek-ai/deepseek-harness/discussions/9609) [Bug] Desktop (Windows): per-record storage loads every record file at once → EMFILE during Host startup (14k session_projcache files)
- [#7924](https://github.com/deepseek-ai/deepseek-harness/discussions/7924) [Bug] 残留的空 .credentials.yaml.lock 让 web 宿主每次启动都失败：启动读取会话密钥也要拿写锁，而非原子创建留下的空锁不在 master 孤儿锁接管范围内（0.1.7-rc.1 实测，master 477b4f4 核对）
- [#12516](https://github.com/deepseek-ai/deepseek-harness/discussions/12516) [Bug] @deepseek-ai/dsh-subagent-codex bundle fails to load in a profile — subagent_codex tool never registers (peer dependencies unresolvable)
- [#12518](https://github.com/deepseek-ai/deepseek-harness/discussions/12518) [Bug] Extensionless image attachment objects are not recognized by sidebar image preview (Desktop and Web)
- [#12224](https://github.com/deepseek-ai/deepseek-harness/discussions/12224) [Bug] 插件更新后宿主原生崩溃：dsh-hmr 的 evict() 把 .node 清出 require.cache，原生模块被二次 dlopen 后断言失败
- [#12612](https://github.com/deepseek-ai/deepseek-harness/discussions/12612) [Bug] 新启用的空白会话保留旧子智能体模型策略，未应用界面已保存的设置
- [#12581](https://github.com/deepseek-ai/deepseek-harness/discussions/12581) [Bug] Memory exhaustion from high-frequency dsh-subprocess spawning (546 in 27 min, mostly git) on dsh 0.2.2-rc.1
- [#12609](https://github.com/deepseek-ai/deepseek-harness/discussions/12609) [Bug] cordis 4.1.0: an un-awaited async ctx.effect() that rejects is silently dropped (no log, plugin stays ACTIVE)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-09T04:04:43.957Z_