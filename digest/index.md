# DSH Bug Watch — 2026-08-29

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 47

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#4990](https://github.com/deepseek-ai/deepseek-harness/discussions/4990) Bug: sandbox escalation error occurs when current mode is already danger-full-access
- [#4984](https://github.com/deepseek-ai/deepseek-harness/discussions/4984) Bug: wide-table hover flicker on the bottom border (>=4-column tables)
- [#4127](https://github.com/deepseek-ai/deepseek-harness/discussions/4127) [Bug] 同一 workspace 多开 dsh 实例导致会话日志 seq 重复损坏:历史会话 seq gap 打不开,且单帧重写可致整个 web 启动崩溃
- [#1497](https://github.com/deepseek-ai/deepseek-harness/discussions/1497) Bug: corrupt session log after unclean exit — replayed events cause seq gap in committed region, history unrecoverable
- [#4966](https://github.com/deepseek-ai/deepseek-harness/discussions/4966) [Bug] Web GUI: all client RPC calls (slash commands, permission chip) fail silently behind a path-prefix reverse proxy
- [#4969](https://github.com/deepseek-ai/deepseek-harness/discussions/4969) [Bug] Web GUI：挂在路径前缀反向代理后，所有客户端 RPC 调用（斜杠命令、权限切换按钮）静默失败
- [#4956](https://github.com/deepseek-ai/deepseek-harness/discussions/4956) Bug: context-window-exceeded errors aren't recovered when the provider is self-hosted vLLM
- [#4959](https://github.com/deepseek-ai/deepseek-harness/discussions/4959) [Bug] Node 24.0–24.11.1 下  dsh web 0.1.2 alpha.1 启动失败，前端报 "HTML did not preload @deepseek-ai/dsh-client-modules/client.js"
- [#4951](https://github.com/deepseek-ai/deepseek-harness/discussions/4951) Bug: web renderer mangles dollar amounts (Dollar sign is parsed as math)
- [#1586](https://github.com/deepseek-ai/deepseek-harness/discussions/1586) [bug] 会话历史加载失败：崩溃恢复与残留执行流并发写同一日志，seq 重叠（corrupt session log: seq gap in committed region）
- [#2649](https://github.com/deepseek-ai/deepseek-harness/discussions/2649) [Bug] rc.6: force-kill during an active turn replays stale deltas → "corrupt session log: seq gap in committed region" (expected 600, got 598) with no supported recovery
- [#4506](https://github.com/deepseek-ai/deepseek-harness/discussions/4506) [Bug] Multi-process shared session root: concurrent writes corrupt the JSONL session log (seq gap); history/resume fail
- [#4767](https://github.com/deepseek-ai/deepseek-harness/discussions/4767) [Bug] seq gap + 跨 session 内容串写 -> 手动修复后单文件损坏导致 dsh web 启动崩溃
- [#1433](https://github.com/deepseek-ai/deepseek-harness/discussions/1433) Bug: 同一会话被两个 dsh 进程并发写入导致会话日志损坏（seq 撞号）
- [#4178](https://github.com/deepseek-ai/deepseek-harness/discussions/4178) [BUG] 两个 dsh web 实例并发打开同一会话，导致会话日志 seq 冲突、历史记录损坏
- [#3530](https://github.com/deepseek-ai/deepseek-harness/discussions/3530) [Bug] 会话日志 seq 重叠导致历史加载失败，且错误信息掩盖真实原因
- [#3142](https://github.com/deepseek-ai/deepseek-harness/discussions/3142) [Bug] 会话续接（resume）写入与中断回合的收尾写入竞态，导致会话日志 seq 重叠损坏
- [#3872](https://github.com/deepseek-ai/deepseek-harness/discussions/3872) [Bug] 打断后的迟到流式事件破坏会话日志序号连续性，整个会话变得无法读取 | Late streaming events after interruption corrupt session-log seq continuity, making the whole session unreadable
- [#333](https://github.com/deepseek-ai/deepseek-harness/discussions/333) [Bug] 工具被中断后会话日志写入重复 seq，导致会话损坏无法恢复（resume 报 seq gap）
- [#1305](https://github.com/deepseek-ai/deepseek-harness/discussions/1305) [Bug] 中断工具运行后迟到的真实结果以陈旧 seq 基准续写，导致日志 seq 重复、历史无法加载
- [#4208](https://github.com/deepseek-ai/deepseek-harness/discussions/4208) [bug] Concurrent session writers cause corrupt session log (seq collision) - history/model fail to load
- [#3401](https://github.com/deepseek-ai/deepseek-harness/discussions/3401) [Bug] Concurrent writing to the same session log corrupts seq (corrupt session log: seq gap in committed region)
- [#2727](https://github.com/deepseek-ai/deepseek-harness/discussions/2727) Bug report: session log `seq` continuity is broken by three lifecycle paths, making history unloadable
- [#4932](https://github.com/deepseek-ai/deepseek-harness/discussions/4932) Bug: 在 gpt-5.6-sol 路由下 /compact 汇总仅输出推理块时报"无文本内容"失败
- [#1472](https://github.com/deepseek-ai/deepseek-harness/discussions/1472) [Bug] Subagents inherit session-start options.model instead of the current UI-selected model (causes unexpected v4-pro billing)
- [#2006](https://github.com/deepseek-ai/deepseek-harness/discussions/2006) Bug Report: Subagent 未正确继承父 Agent 的模型配置
- [#4311](https://github.com/deepseek-ai/deepseek-harness/discussions/4311) [Bug] 子代理默认委派失败：子代理继承的是过期的 base 默认模型，而非父代理实际运行的模型
- [#4819](https://github.com/deepseek-ai/deepseek-harness/discussions/4819) Bug: dsh-agent-loop auto-continue notice messages lack message.id, corrupting session history
- [#4927](https://github.com/deepseek-ai/deepseek-harness/discussions/4927) [Bug] 工作区父子目录同名时，项目节点位置错误
- [#4906](https://github.com/deepseek-ai/deepseek-harness/discussions/4906) [Bug]: tools/pre-execute 等 waterfall 被坏监听器短路后,所有工具返回 Cannot read properties of undefined (reading 'kind')——需要一个消费侧防护与不变式
- [#3812](https://github.com/deepseek-ai/deepseek-harness/discussions/3812) [BUG] JavaScript heap out of memory
- [#4900](https://github.com/deepseek-ai/deepseek-harness/discussions/4900) [Bug] Web ChatView 全量渲染无虚拟化：渲染进程内存随会话长度线性增长（Safari 实测峰值 6.6GB+，5 天触发 16 次强制重载）
- [#4917](https://github.com/deepseek-ai/deepseek-harness/discussions/4917) [Bug] Ordered list numbers clipped on the left edge in the web chat (Safari only)
- [#4926](https://github.com/deepseek-ai/deepseek-harness/discussions/4926) [Bug] Client Cordis inspect query hangs Pending forever — no timeout, error answers discarded
- [#4925](https://github.com/deepseek-ai/deepseek-harness/discussions/4925) [BUG] 会话中生成的markdown表格会从右侧超出规定的显示范围
- [#4924](https://github.com/deepseek-ai/deepseek-harness/discussions/4924) [Bug][Windows] read-only pwsh pollutes stderr with ConstrainedLanguage encoding errors
- [#4915](https://github.com/deepseek-ai/deepseek-harness/discussions/4915) [Bug] v0.1.2-alpha.1 新建会话后不出现在会话列表
- [#3966](https://github.com/deepseek-ai/deepseek-harness/discussions/3966) [Bug] Community Market discovery always empty under fake-IP DNS proxies - catalog requests rejected as blocked-address, error flattened to generic 400
- [#4907](https://github.com/deepseek-ai/deepseek-harness/discussions/4907) [BUG] Native Win32 folder picker truncates paths containing characters whose UTF-16LE low byte is 0x00 (e.g. 「一」 U+4E00)
- [#4535](https://github.com/deepseek-ai/deepseek-harness/discussions/4535) [Bug] Typert strict object codecs silently strip unknown fields / 未知字段被静默删除
- [#4902](https://github.com/deepseek-ai/deepseek-harness/discussions/4902) [BUG] Node 24 下模块热重载静默失效：hmr 的 resolveSync 调用与运行时签名不符
- [#4901](https://github.com/deepseek-ai/deepseek-harness/discussions/4901) Bug: leftover deleted-package dirs make tsdown fail with missing CallId export
- [#4763](https://github.com/deepseek-ai/deepseek-harness/discussions/4763) Bug: sandbox_permissions/justification break every tool call on Full access - sanitize no-op escalation requests
- [#1485](https://github.com/deepseek-ai/deepseek-harness/discussions/1485) [Bug]: Concurrent dsh instances sharing one DSH_HOME wipe each other’s workspace session membership
- [#3984](https://github.com/deepseek-ai/deepseek-harness/discussions/3984) [Bug] mcp-client: activeServerNames 生命周期泄漏导致无法创建新会话
- [#4789](https://github.com/deepseek-ai/deepseek-harness/discussions/4789) [Bug Report] 15 列的 markdown 表格完全不渲染（显示原始 | 文本），12 列正常
- [#4788](https://github.com/deepseek-ai/deepseek-harness/discussions/4788) [Bug Report] 宽表（≥4 列）在 Firefox 滚动到底后最后一列仍被裁剪，关闭右侧栏后更严重

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-08-29T05:05:25.307Z_