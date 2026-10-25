# DSH Bug Watch — 2026-10-25

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 35

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#6483](https://github.com/deepseek-ai/deepseek-harness/discussions/6483) **Bug report: Windows windows-acl sandbox dies permanently for a session when its cached private temp dir disappears**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-24

## 📝 仅报告 — 无人互动
- [#10927](https://github.com/deepseek-ai/deepseek-harness/discussions/10927) Bug: "Load earlier" on a long session throws "system-message withdrew materialized target chat" and breaks Trajectory
- [#10925](https://github.com/deepseek-ai/deepseek-harness/discussions/10925) Bug: goal edit can lower maxGoalRounds below roundsStarted, persisting a schema-violating projection checkpoint that never heals
- [#10924](https://github.com/deepseek-ai/deepseek-harness/discussions/10924) Bug: one unreadable skill file wipes every filesystem skill from the catalog (EACCES/EMFILE aborts whole discovery)
- [#10861](https://github.com/deepseek-ai/deepseek-harness/discussions/10861) [Bug] Windows 自动更新到 0.2.1-rc.3 后 resources\runtime 为空，启动即崩溃（ENOENT: office-skills\office\SKILL.md）
- [#9925](https://github.com/deepseek-ai/deepseek-harness/discussions/9925) [Bug] dsh web: heap grows unbounded to ~8 GB OOM — measurements and a local fix
- [#10913](https://github.com/deepseek-ai/deepseek-harness/discussions/10913) [Bug][Windows] 0.2.1-rc.2 桌面版启动静默崩溃 exit 0x80000003：被 Defender 行为引擎静默拒绝 IPC，建议优雅降级而非 BreakDebugger
- [#10907](https://github.com/deepseek-ai/deepseek-harness/discussions/10907) [Bug] Fetch API 用 404 顶替所有抓取失败：真实 404 / 上游 403·5xx / 空正文无法区分，且出口在境内机房导致主流站点整体不可达
- [#10167](https://github.com/deepseek-ai/deepseek-harness/discussions/10167) [Bug] Gemini 3.x 在调用 cordis_inspect_query 后永久报 HTTP 400：工具返回的 JSON Schema `$ref: "#/$defs/loaderExpression"` 被误判为多模态 display_name（附根因与修复建议）
- [#10902](https://github.com/deepseek-ai/deepseek-harness/discussions/10902) [Bug] windows-acl sandbox writes an inheritable *Low* mandatory label on the workspace root → every Office document opens in Protected View, Explorer loses the localized folder name
- [#10898](https://github.com/deepseek-ai/deepseek-harness/discussions/10898) [Bug] shell 工具 100% 失败 (0xC0000142)；重装后应用无法启动 (0.2.1-rc.3 / Win11)
- [#10877](https://github.com/deepseek-ai/deepseek-harness/discussions/10877) [Bug] agent.inject() accepts malformed messages: one missing `role` permanently breaks the session (422, no recovery)
- [#10883](https://github.com/deepseek-ai/deepseek-harness/discussions/10883) [Bug] 0.2.1-rc.3 Windows 启动必崩：profile 清单带 U+FEFF，JSON.parse 直接失败
- [#10894](https://github.com/deepseek-ai/deepseek-harness/discussions/10894) [Bug] Web UI 的 Markdown 把普通正文里的单个 ~ 当成删除线（GFM 只应认成对 ~~）
- [#10367](https://github.com/deepseek-ai/deepseek-harness/discussions/10367) [bug] Agent Teams 会话下 send_message 无法按 id 寻址子代理，但 subagent 工具描述声称可以，这个bug之前修复过一次，但没有修好
- [#10809](https://github.com/deepseek-ai/deepseek-harness/discussions/10809) [Bug] DSH 桌面端认证崩溃：dsh-auth-* Cookie 累积导致请求头超限
- [#10889](https://github.com/deepseek-ai/deepseek-harness/discussions/10889) [Bug] 新建会话会复用「只有命令、没有 turn」的旧会话，导致新对话里出现旧内容；一条坏日志还会让新建会话整体失败
- [#10884](https://github.com/deepseek-ai/deepseek-harness/discussions/10884) [Bug] Experimental inspector cannot activate when a plugin installs globalThis.fetch as an accessor (captureFetch: true)
- [#10874](https://github.com/deepseek-ai/deepseek-harness/discussions/10874) [Bug] 桌面版认证 cookie 按启动端口命名且 30 天不过期，无界堆积撑爆 16KB 请求头 → host 返回 431 → 启动崩溃循环（desktop welcome: Web authentication failed）
- [#10823](https://github.com/deepseek-ai/deepseek-harness/discussions/10823) [Bug] Single large session OOMs at startup: agent-loop re-copies the whole event array even when closers is empty
- [#8312](https://github.com/deepseek-ai/deepseek-harness/discussions/8312) [Bug][Windows] workspace-write leaves a permanent Low integrity label on the project, breaking every other tool used on it — several reports, still unchanged in 0.2.0-rc.2
- [#10870](https://github.com/deepseek-ai/deepseek-harness/discussions/10870) [Bug] dsh-workspace-changes 快照无上限堆叠：rc.2 单日 103 个 / 25.79 GB 写满系统盘，rc.3 仍可复现
- [#10868](https://github.com/deepseek-ai/deepseek-harness/discussions/10868) [Bug][Windows Desktop 0.2.1-rc.3] 本地认证 Cookie 随端口积累，HTTP 431 导致启动失败
- [#10204](https://github.com/deepseek-ai/deepseek-harness/discussions/10204) [Bug] 桌面版更新被永久拒绝：Host 已确认 shutdown-complete，却因 10 秒内未退出被 SIGTERM（0.2.0-rc.2 → 0.2.1-rc.2）
- [#10863](https://github.com/deepseek-ai/deepseek-harness/discussions/10863) [Bug] Desktop: 卷根 ACL 含包 SID 但缺 ALL APPLICATION PACKAGES 时启动即崩；自动更新后必现「双击无反应」
- [#10862](https://github.com/deepseek-ai/deepseek-harness/discussions/10862) [Bug] Session resume drops all core tools from the tool registry (48 to 19), with direct registry-diff evidence
- [#10851](https://github.com/deepseek-ai/deepseek-harness/discussions/10851) [Bug] Windows auto-update to 0.2.1-rc.3 overwrites install dir D:\dsh and deletes workspaces stored inside it (data loss)
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#10845](https://github.com/deepseek-ai/deepseek-harness/discussions/10845) [Bug] 网络切换或长时间空闲后连接池复用失效连接，模型请求全部报 TRANSPORT
- [#10844](https://github.com/deepseek-ai/deepseek-harness/discussions/10844) [Bug] Claude Opus（Kiro Max 渠道）在 dsh 中每轮请求后上下文即超窗，压缩后无法恢复，会话完全不可用；同渠道 Claude CLI 正常
- [#9876](https://github.com/deepseek-ai/deepseek-harness/discussions/9876) [Bug] exit_plan_mode presents a plan while the background subagents it depends on are still running — plan finalization must wait for all delegations
- [#10632](https://github.com/deepseek-ai/deepseek-harness/discussions/10632) [Bug] 桌面端每次启动新发一枚认证 cookie，约 70 次后请求头超过 16 KB，启动直接失败（431 → "Web authentication failed"）
- [#1315](https://github.com/deepseek-ai/deepseek-harness/discussions/1315) [Bug] 项目目录迁移后 dsh 启动崩溃（corrupt session log），希望支持会话重新归属
- [#4900](https://github.com/deepseek-ai/deepseek-harness/discussions/4900) [Bug] Web ChatView 全量渲染无虚拟化：渲染进程内存随会话长度线性增长（Safari 实测峰值 6.6GB+，5 天触发 16 次强制重载）
- [#4722](https://github.com/deepseek-ai/deepseek-harness/discussions/4722) [bug] In-memory session log is unbounded (append-only) and compaction never trims it - long/heavy sessions OOM the web process

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-25T02:44:01.410Z_