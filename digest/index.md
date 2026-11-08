# DSH Bug Watch — 2026-11-08

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 41

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#12581](https://github.com/deepseek-ai/deepseek-harness/discussions/12581) [Bug] Memory exhaustion from high-frequency dsh-subprocess spawning (546 in 27 min, mostly git) on dsh 0.2.2-rc.1
- [#12578](https://github.com/deepseek-ai/deepseek-harness/discussions/12578) [BUG]dsh-session-log-deepseek 在接近 maxBytes(8 MiB) 时生成非法 JSON，导致整个/anthropic/v1/messages 请求被 400 拒绝
- [#5885](https://github.com/deepseek-ai/deepseek-harness/discussions/5885) [Bug] GUI: 权限审批弹窗不弹出，Agent 卡住只能靠刷新恢复
- [#12601](https://github.com/deepseek-ai/deepseek-harness/discussions/12601) [Bug] App fails to launch silently after Windows disk cleanup and plugin install
- [#12596](https://github.com/deepseek-ai/deepseek-harness/discussions/12596) [Bug] dsh web auto-exits with SIGSEGV (signal 11) while idle on 0.2.2-rc.1
- [#12598](https://github.com/deepseek-ai/deepseek-harness/discussions/12598) [Bug] 输出崩坏未被拦截：special-token 泄漏、U+FFFD 与碎片复读——REPETITIVE_OUTPUT 只覆盖「整段重复」
- [#12595](https://github.com/deepseek-ai/deepseek-harness/discussions/12595) [Bug] MCP streamable-http client never recovers from an expired server session (404 "Session not found")
- [#11688](https://github.com/deepseek-ai/deepseek-harness/discussions/11688) [Bug] report: DeepSeek UI served in Arabic when browser locale is es-AR / es_AR
- [#11835](https://github.com/deepseek-ai/deepseek-harness/discussions/11835) [Bug][Windows][附候选修复] 工作区 Low 完整性标签影响正常工具链（#7709 / #9086 / #9560 后续）
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#12398](https://github.com/deepseek-ai/deepseek-harness/discussions/12398) [Bug] macOS 桌面版「Open In」会把 ELECTRON_RUN_AS_NODE=1 传给被启动的应用，导致 VS Code 等 Electron 应用闪退
- [#12582](https://github.com/deepseek-ai/deepseek-harness/discussions/12582) Bug: CUA getApp() cannot start Electron apps on macOS - backend ELECTRON_RUN_AS_NODE leaks into the native NSWorkspace launch
- [#11876](https://github.com/deepseek-ai/deepseek-harness/discussions/11876) [Bug] 手动排序下，另一浏览器/标签页创建的会话被追加到已保存列表末尾，刷新后不可见
- [#12561](https://github.com/deepseek-ai/deepseek-harness/discussions/12561) [Bug] /compact 失败提示吞掉上游错误：429 prefill_cap_refused 被显示为「could not produce a useful summary」
- [#12555](https://github.com/deepseek-ai/deepseek-harness/discussions/12555) Bug: profile HMR leaves stale Fiber inject dependency after removing a bundle (Web routes 404)
- [#9434](https://github.com/deepseek-ai/deepseek-harness/discussions/9434) [Bug] opencode-go/deepseek-v4.1-flash: prompt_tokens + max_tokens > 2^20 时上游 400，错误体被截成 31 字节（UI 显示 "400 status code (no body)"），可用上下文只剩 63%
- [#11826](https://github.com/deepseek-ai/deepseek-harness/discussions/11826) [Bug] pwsh rejects a repeated sandbox mode with a blank justification, while bash and fs accept it
- [#10266](https://github.com/deepseek-ai/deepseek-harness/discussions/10266) [Bug] 全新会话中斜杠命令不显示结果（0.2.1-rc.2，command-only 快照被判为不活跃）
- [#12569](https://github.com/deepseek-ai/deepseek-harness/discussions/12569) [Bug] 历史图片附件在本机缺失时，本地失败被误报为 `DeepSeek Messages transport failed` / `TRANSPORT`，并白白重试 5 次
- [#11621](https://github.com/deepseek-ai/deepseek-harness/discussions/11621) Bug Report: Auto Review Failures Permanently Block Tool Execution / 自动审查失败导致工具调用被永久阻断
- [#11970](https://github.com/deepseek-ai/deepseek-harness/discussions/11970) [bug] dsh-superagent: GitHub Source silently drops a mention when its notification arrives late (race with the poll cursor)
- [#12563](https://github.com/deepseek-ai/deepseek-harness/discussions/12563) [Bug] 长会话界面卡顿：拖动侧栏分隔条仅 5–6 FPS（所有插件已排除）
- [#12562](https://github.com/deepseek-ai/deepseek-harness/discussions/12562) [Bug] Changing "Work Steps Display" setting silently aborts an active Agent turn without any warning
- [#11271](https://github.com/deepseek-ai/deepseek-harness/discussions/11271) [Bug] Sidebar terminal output stream permanently freezes after concurrent terminal/attach streams are disposed (isolated repro 3/3)
- [#12558](https://github.com/deepseek-ai/deepseek-harness/discussions/12558) [Bug] Silent bootstrap when DSH_HOME points to an empty dir — UI is indistinguishable from "all data lost" (dsh 0.2.1-rc.2)
- [#12557](https://github.com/deepseek-ai/deepseek-harness/discussions/12557) [Bug] [Desktop/Windows] 启用 @ysyyhhh/dsh-pet 后桌面宿主直接 abort（exit 134, napi_fatal_error）
- [#11893](https://github.com/deepseek-ai/deepseek-harness/discussions/11893) [Bug] LocalSubprocessRuntime.spawn() drops the internals argument when calling launchWindowsJob/launchLinuxScope
- [#12532](https://github.com/deepseek-ai/deepseek-harness/discussions/12532) [Bug] LocalSubprocessRuntime.spawn() 未透传 WindowsJobInternals / LinuxScopeInternals，导致 runner 启动 seam 在生产路径不可达
- [#12553](https://github.com/deepseek-ai/deepseek-harness/discussions/12553) [Bug] Windows: dsh web spams "whoami: extra operand '/user'" errors due to PATH conflict
- [#12552](https://github.com/deepseek-ai/deepseek-harness/discussions/12552) [Bug] Cold-resumed local child loses `delivery`, so caller-delivery children emit per-turn settlement notices to the parent
- [#11390](https://github.com/deepseek-ai/deepseek-harness/discussions/11390) [Bug] tok/s reading inflated by orders of magnitude on tool-call steps (decodeMs collapses to ~1ms)
- [#12547](https://github.com/deepseek-ai/deepseek-harness/discussions/12547) [Bug] [0.2.2-rc.1] 侧边栏终端在 VTE 环境下每条命令回显内部 PS0 采样文本（bash）
- [#12546](https://github.com/deepseek-ai/deepseek-harness/discussions/12546) [Bug] 0.2.1-rc.3：裸 UUID 命名的旧会话在工作区记账中丢失，侧边栏点击即消失
- [#8420](https://github.com/deepseek-ai/deepseek-harness/discussions/8420) [Bug] 桌面版：沙箱模式下所有命令派生失败（exit code 3221225794 / 0xC0000142），被迫开全盘权限才能工作
- [#10889](https://github.com/deepseek-ai/deepseek-harness/discussions/10889) [Bug] 新建会话会复用「只有命令、没有 turn」的旧会话，导致新对话里出现旧内容；一条坏日志还会让新建会话整体失败
- [#10806](https://github.com/deepseek-ai/deepseek-harness/discussions/10806) [Bug] session_search fails intermittently on large histories: `persistence observation did not stabilize after one retry`
- [#9718](https://github.com/deepseek-ai/deepseek-harness/discussions/9718) [Bug] Windows desktop: "browser time zone is unavailable" blocks chat with British Columbia Standard Time
- [#10699](https://github.com/deepseek-ai/deepseek-harness/discussions/10699) [Bug] Queue edit acknowledgements discard text typed while a save is pending
- [#12518](https://github.com/deepseek-ai/deepseek-harness/discussions/12518) [Bug] Extensionless image attachment objects are not recognized by sidebar image preview (Desktop and Web)
- [#12517](https://github.com/deepseek-ai/deepseek-harness/discussions/12517) [Bug] --profile open-design silently hangs forever (any CLI invocation) - one-line fix included
- [#12516](https://github.com/deepseek-ai/deepseek-harness/discussions/12516) [Bug] @deepseek-ai/dsh-subagent-codex bundle fails to load in a profile — subagent_codex tool never registers (peer dependencies unresolvable)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-08T03:52:17.295Z_