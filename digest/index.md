# DSH Bug Watch — 2026-09-12

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 59

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#4664](https://github.com/deepseek-ai/deepseek-harness/discussions/4664) **[Bug]？ goal 功能开启后 agent 无法被动等待后台任务：每次进入 idle 即被强制注入 <goal_round>，空转消耗轮次与 token**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-11

## 📝 仅报告 — 无人互动
- [#6376](https://github.com/deepseek-ai/deepseek-harness/discussions/6376) [BUG] An agent acted on an instruction the user never sent, and the assembled prompt is not recorded
- [#6378](https://github.com/deepseek-ai/deepseek-harness/discussions/6378) [BUG] An agent acted on an instruction the user never sent, and the assembled prompt is not recorded
- [#6377](https://github.com/deepseek-ai/deepseek-harness/discussions/6377) [BUG] An agent acted on an instruction the user never sent, and the assembled prompt is not recorded
- [#6374](https://github.com/deepseek-ai/deepseek-harness/discussions/6374) [Bug] Served index.html missing Cache-Control: no-store — cached documents break boot after rebuild
- [#6373](https://github.com/deepseek-ai/deepseek-harness/discussions/6373) [Bug] pnpm run build silently does nothing under tsx (import.meta.main guard never true)
- [#3504](https://github.com/deepseek-ai/deepseek-harness/discussions/3504) [Bug] Web 界面中文输入法（IME）失效：拼音字母直接上屏，无候选词
- [#2848](https://github.com/deepseek-ai/deepseek-harness/discussions/2848) [Bug] Agent output enters an infinite repetition loop that runs for ~10 minutes with no circuit breaker — only a manual abort stops it
- [#6372](https://github.com/deepseek-ai/deepseek-harness/discussions/6372) [Bug] 0.1.5-rc.2 桌面端 prepare:dsh 必然失败：payload smoke 断言已被移除的 fs-ext，无法产出 resources/dsh
- [#6368](https://github.com/deepseek-ai/deepseek-harness/discussions/6368) [Bug] DSH说已写入文档但并没有写入
- [#6297](https://github.com/deepseek-ai/deepseek-harness/discussions/6297) [BUG] v0→v1 迁移拒绝 0.1.0 / 0.1.1 写出的 v0 会话：subagent/descriptor v2 与 permission/preset 的 origin
- [#5926](https://github.com/deepseek-ai/deepseek-harness/discussions/5926) [Bug] connection fails to start when a third-party plugin registers an HTTP channel: cannot get property 'webServer' without inject
- [#6141](https://github.com/deepseek-ai/deepseek-harness/discussions/6141) [Bug]分叉正在运行的或者发送消息但是终止运行的会话的行为和以前不一致了
- [#6356](https://github.com/deepseek-ai/deepseek-harness/discussions/6356) [Bug] v0.1.5-rc.1/rc.2: "agent.session.events is not iterable" in headless mode
- [#4178](https://github.com/deepseek-ai/deepseek-harness/discussions/4178) [BUG] 两个 dsh web 实例并发打开同一会话，导致会话日志 seq 冲突、历史记录损坏
- [#6349](https://github.com/deepseek-ai/deepseek-harness/discussions/6349) [Bug] Windows：「在本地打开」不打开目录，反而把已打开的目录窗口隐藏
- [#6064](https://github.com/deepseek-ai/deepseek-harness/discussions/6064) Bug: directory-specifier loader rows fail every DeepSeek request with REQUEST_EXTENSION
- [#5978](https://github.com/deepseek-ai/deepseek-harness/discussions/5978) [Bug] 更新到最新 master 后，部分历史会话无法加载（v0 迁移校验过度严格）
- [#5864](https://github.com/deepseek-ai/deepseek-harness/discussions/5864) [bug] Plugin-tree boot crash-loops when a plugin imports an export the bundled @deepseek-ai package no longer provides (dsh-run2skill ↔ dsh-typert-protocol RemoteError)
- [#5813](https://github.com/deepseek-ai/deepseek-harness/discussions/5813) [Bug] npm `latest` dist-tag on @deepseek-ai plugin packages is stuck on 0.0.1-rc.1, so `dsh plugin add` installs a stale/broken build
- [#6339](https://github.com/deepseek-ai/deepseek-harness/discussions/6339) [BUG] [v0.1.5-rc.1] `agent-presets.default: standard` 新会话切到 `ptc` 缺失工具：`subagent`、`list_subagent_models`
- [#6336](https://github.com/deepseek-ai/deepseek-harness/discussions/6336) [Bug] Pending inbox queue is inherited by forked sessions, so stale prompts get re-sent 排队输入跨会话泄漏 —— fork 出来的会话会把用户早已发过的消息重新投递一次
- [#6314](https://github.com/deepseek-ai/deepseek-harness/discussions/6314) [Bug][0.1.5-rc.x] Fork 出的会话发送新消息时重放源会话旧 prompt（A），新 prompt（B/C）永久滞留队列不执行
- [#6311](https://github.com/deepseek-ai/deepseek-harness/discussions/6311) [BUG] v2→v3 会话迁移对插件自定义的 message source kind 直接拒载，导致旧会话永久无法加载
- [#6101](https://github.com/deepseek-ai/deepseek-harness/discussions/6101) [Bug][gateway/internal] DSH 历史加载失败：cannot safely transform unclassified message source
- [#6328](https://github.com/deepseek-ai/deepseek-harness/discussions/6328) [Bug] One unmigratable v0 artifact (subagent/descriptor v2) disables all content search
- [#6327](https://github.com/deepseek-ai/deepseek-harness/discussions/6327) [Bug]session.fork 切点跨过排队中的 user/message：子会话被塞进下一轮的用户输入
- [#6316](https://github.com/deepseek-ai/deepseek-harness/discussions/6316) [Bug][0.1.5-rc.1] Cold session list titles seeded sessions with the workspace folder name until each is opened
- [#5976](https://github.com/deepseek-ai/deepseek-harness/discussions/5976) [Bug] Agent 在超长上下文 + max reasoning effort 下陷入思考退化循环：回合零产出、无自动熔断，需手动中止（v4.1-flash；同配置 v4-flash 3000+ 步未复发）
- [#6160](https://github.com/deepseek-ai/deepseek-harness/discussions/6160) [bug]新版本(dsh-v0.1.5-rc.1)在开展别的对话期间，fork之前会话并写入新的prompt会出bug
- [#6300](https://github.com/deepseek-ai/deepseek-harness/discussions/6300) [Bug][0.1.5-rc.1]畸形 tool-call（空 id/name）被持久化进会话日志，导致会话永久不可恢复（每次回放 400 `missing field tool_call_id`）
- [#6259](https://github.com/deepseek-ai/deepseek-harness/discussions/6259) [Bug] revealNativePath ("Show in File Explorer") silently fails for non-ASCII/CJK paths on Windows
- [#6301](https://github.com/deepseek-ai/deepseek-harness/discussions/6301) [bug] fork 出的会话会在处理用户真正发给它的第一条消息之前，先重放父会话排队的下一条消息
- [#6298](https://github.com/deepseek-ai/deepseek-harness/discussions/6298) [Bug] 改写 cordis.patch.yml 触发热重载，静默销毁所有存活会话的在途回合（aborted/disposed）
- [#6272](https://github.com/deepseek-ai/deepseek-harness/discussions/6272) [Bug] 桌面打包 prepare:dsh 必然失败：烟雾测试仍在 require 已被替换的 fs-ext
- [#6296](https://github.com/deepseek-ai/deepseek-harness/discussions/6296) [Bug]   todo 清单在 agent 长时间不同步时会静默过期（附修复与实测）
- [#6295](https://github.com/deepseek-ai/deepseek-harness/discussions/6295) [Bug][SDK 0.1.5-rc.2] Persisted session resume fails after runtime restart
- [#6294](https://github.com/deepseek-ai/deepseek-harness/discussions/6294) [BUG]切换模型不能全部生效
- [#6288](https://github.com/deepseek-ai/deepseek-harness/discussions/6288) [Bug] 版本0.1.5-rc.1 Windows 沙盒下原生命令输出无法被 PowerShell 变量捕获（静默返回空值 + 0xC0000142 弹框）
- [#6030](https://github.com/deepseek-ai/deepseek-harness/discussions/6030) [bug][agent-loop] steer 在阻塞式 job_output(wait) 期间无法抢占:next-step 只在 step 边界消费,会话最长 10 分钟对用户输入无响应(0.1.5-alpha.1 实测)
- [#5909](https://github.com/deepseek-ai/deepseek-harness/discussions/5909) [Bug] Broken sessions and v0→v1→v2 Migration Failure / 会话损坏及 v0→v1→v2 迁移失败
- [#6124](https://github.com/deepseek-ai/deepseek-harness/discussions/6124) [Bug] dsh 0.1.5-rc.1 在 Node.js < 24 上完全静默失败(import.meta.main 守卫 + 未声明 engines)
- [#6283](https://github.com/deepseek-ai/deepseek-harness/discussions/6283) [Bug][0.1.2-rc.1] Seeded continuation writer restarts at a regressed seq counter (duplicate/off-by-N seqs, 3rd occurrence)
- [#6282](https://github.com/deepseek-ai/deepseek-harness/discussions/6282) [Bug][0.1.5-rc.2] Reader rejects all 0.1.2-rc.1-written sessions: header isSeeded must be a boolean
- [#5754](https://github.com/deepseek-ai/deepseek-harness/discussions/5754) Bug: in-process subagent failures drop the child's error diagnostic — delegating tool shows only "subagent run failed"
- [#6252](https://github.com/deepseek-ai/deepseek-harness/discussions/6252) [BUG]升级到0.1.5-rc.1后原有会话无法正常读取和显示，报错提示原session中缺少surfaceOp
- [#6278](https://github.com/deepseek-ai/deepseek-harness/discussions/6278) [Bug] 含"被中断轮次"（缺 turn/end）的历史会话升级后无法打开：v2→v3 迁移报 turn/start N does not open expected turn N-1 ｜ Sessions with an interrupted turn fail to open after upgrading
- [#6277](https://github.com/deepseek-ai/deepseek-harness/discussions/6277) [Bug] session/fork inherits the source's pending inbox — a branch's first new message is answered as the source's queued question ｜ fork 继承未消费收件箱：分支首条新消息被当成源分支排队提问回答
- [#6227](https://github.com/deepseek-ai/deepseek-harness/discussions/6227) [Bug] dsh-client-connection@0.1.5-rc.1 fix(client-connection): register() resolves webServer without inject, breaking every rpc.handle() consumer
- [#6275](https://github.com/deepseek-ai/deepseek-harness/discussions/6275) [Bug][Windows] 在 ACL 受限令牌沙箱下 Ninja 永久挂起：子命令已执行完毕，但 Ninja 永不退出
- [#6269](https://github.com/deepseek-ai/deepseek-harness/discussions/6269) [Bug] 启用带连字（ligature/calt）的字体后，Web 输入框开头字符不显示
- [#6264](https://github.com/deepseek-ai/deepseek-harness/discussions/6264) [Bug] 摘要调用丢失 reasoningEffort，导致 /compact 在 provider 默认档位不被支持时必然失败，并被报成「could not produce a useful summary」
- [#5818](https://github.com/deepseek-ai/deepseek-harness/discussions/5818) [Bug] Session history fails to load after upgrading: the v0 migration inventory refuses released payload members (permission/preset origin, flat pi-ai replayState)
- [#6262](https://github.com/deepseek-ai/deepseek-harness/discussions/6262) [Bug Report] session.fork 的 seed 多带一条 user prompt：turn/end 与下一个 turn/start 之间的事件被扫进子会话，子会话重跑父会话的下一条任务
- [#6260](https://github.com/deepseek-ai/deepseek-harness/discussions/6260) [Bug]dsh删了我的文件,如果反馈有帮助，希望可以修复。
- [#6256](https://github.com/deepseek-ai/deepseek-harness/discussions/6256) [Bug] Wide markdown tables (4+ columns) shift all content 8px while the pointer is near the bottom edge
- [#6246](https://github.com/deepseek-ai/deepseek-harness/discussions/6246) [Bug] 远程 Web 界面混用浏览器与服务端时钟，导致对话、后台任务、子智能体耗时及定时任务逾期提示错误（0.1.5-rc.1 / rc.2）
- [#6244](https://github.com/deepseek-ai/deepseek-harness/discussions/6244) [bug] Forked session inherits the source session's queued (pending) input — the child's first new turn runs the parent's message
- [#6240](https://github.com/deepseek-ai/deepseek-harness/discussions/6240) Bug:windows点击在资源管理器中显示无法打开资源管理器

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-12T02:33:54.933Z_