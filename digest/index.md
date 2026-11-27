# DSH Bug Watch — 2026-11-27

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 27

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#4664](https://github.com/deepseek-ai/deepseek-harness/discussions/4664) **[Bug]？ goal 功能开启后 agent 无法被动等待后台任务：每次进入 idle 即被强制注入 <goal_round>，空转消耗轮次与 token**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-26
- [#14262](https://github.com/deepseek-ai/deepseek-harness/discussions/14262) **[Bug]分叉会话未继承工作区归属，全部落入侧栏“未分组”**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-26

## 📝 仅报告 — 无人互动
- [#8603](https://github.com/deepseek-ai/deepseek-harness/discussions/8603) [Bug] Flash 900-second processing timeout is masked as `SSE event type mismatch`
- [#14375](https://github.com/deepseek-ai/deepseek-harness/discussions/14375) [Bug] NodeJS 诊断组件在 Node 24 下因 accessor fetch 判定失败而异常（含修复补丁）
- [#14403](https://github.com/deepseek-ai/deepseek-harness/discussions/14403) [Bug] dsh-doc reports false success on Windows PowerShell 5.1
- [#14399](https://github.com/deepseek-ai/deepseek-harness/discussions/14399) [Bug] Windows 10：computer-use 所有窗口截图失败，报 WINDOW_CHANGED
- [#14401](https://github.com/deepseek-ai/deepseek-harness/discussions/14401) [Bug] 归档会话不释放 persistent PTC 运行时进程：宿主连续运行 5 天累积 44 个闲置 Node 进程
- [#14271](https://github.com/deepseek-ai/deepseek-harness/discussions/14271) [Bug] 主进程 installFailLoud 将未捕获 fetch ECONNRESET 映射为 proc.exit(1)，导致运行态反复崩溃（0.2.2-rc.5）
- [#14387](https://github.com/deepseek-ai/deepseek-harness/discussions/14387) [Bug] DSH API 请求失败后上下文占用显示归零：失败路径的零值 usage 被当作真实采样
- [#14381](https://github.com/deepseek-ai/deepseek-harness/discussions/14381) [Bug] Reusing a blank Session keeps a replaced preset definition: the new conversation runs the previous tool surface
- [#14389](https://github.com/deepseek-ai/deepseek-harness/discussions/14389) [Bug][goal] 自动续行缺少「只能由用户完成」的表达通道：连续两轮在正文里催问，界面不显示「等你回答」还是「无需回复」
- [#10532](https://github.com/deepseek-ai/deepseek-harness/discussions/10532) [Bug] Settings write fails ("Failed to save settings") due to case-sensitivity mismatch in Windows installation path
- [#14388](https://github.com/deepseek-ai/deepseek-harness/discussions/14388) [Bug][Desktop][Linux] Host crashes with SIGTRAP in libuv-worker after GLib-GObject assertion storm from sharp/libvips in Electron Node mode
- [#14378](https://github.com/deepseek-ai/deepseek-harness/discussions/14378) [Bug][macOS] 桌面端 0.2.2-rc.5 缺少 NSLocalNetworkUsageDescription，导致插件宿主与 stdio MCP 无法访问局域网设备（EHOSTUNREACH）
- [#1944](https://github.com/deepseek-ai/deepseek-harness/discussions/1944) [Bug] Compaction request misses provider prefix cache entirely — summarizer doesn't inherit reasoningEffort / adds maxTokens
- [#14372](https://github.com/deepseek-ai/deepseek-harness/discussions/14372) [Bug] 桌面端 0.2.2-rc.5 启动即崩溃：主进程 fetch failed / read ECONNRESET（自 2026-11-15 起，时好时坏）
- [#14369](https://github.com/deepseek-ai/deepseek-harness/discussions/14369) [Bug] Session permanently unusable after image + literal `<|image_pad|>` in history; Trajectory view hides the failure report
- [#14370](https://github.com/deepseek-ai/deepseek-harness/discussions/14370) [Bug][macOS][Computer Use] Native helper fails to compile on Xcode 26.3 / Swift 6.2.4 (SendingRisksDataRace in AXWorker.swift) — provider never activates
- [#14308](https://github.com/deepseek-ai/deepseek-harness/discussions/14308) [Bug][Desktop] 启动期 fetch failed 及排查出的原因
- [#13336](https://github.com/deepseek-ai/deepseek-harness/discussions/13336) [Bug] "Continue" after a failed turn persists an empty user message → session permanently 400s on strict gateways
- [#8409](https://github.com/deepseek-ai/deepseek-harness/discussions/8409) [Bug][Windows] Windows ACL 沙箱（workspace-write）三个授权缺陷：受保护 DACL 子目录永不获授权 / desktop 根授权缓存不复核不自愈 / 标准用户+非系统盘 grantWrite 失败（Win32 5）
- [#14357](https://github.com/deepseek-ai/deepseek-harness/discussions/14357) [Bug] Desktop 0.2.2-rc.5: 非正常退出后启动持续崩溃 (ECONNRESET)，必须重置用户数据才能恢复
- [#14355](https://github.com/deepseek-ai/deepseek-harness/discussions/14355) [Bug] Inspector Worker exit can crash Desktop Host through a late Cordis setState
- [#14354](https://github.com/deepseek-ai/deepseek-harness/discussions/14354) [Bug] mnemon idle review creates background sessions that race the main session's tool waterfall → next() called multiple times
- [#12798](https://github.com/deepseek-ai/deepseek-harness/discussions/12798) [Bug]: 压缩过于频繁，没有达到上下文的一半
- [#14343](https://github.com/deepseek-ai/deepseek-harness/discussions/14343) [BUG] Web UI freezes completely when opening a long history conversation (renderer pegged at 100% CPU)
- [#11058](https://github.com/deepseek-ai/deepseek-harness/discussions/11058) [Bug Report]：超长会话无法分叉，且 fork 失败完全静默（V8 字符串上限 + 客户端吞错）

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-27T06:14:41.340Z_