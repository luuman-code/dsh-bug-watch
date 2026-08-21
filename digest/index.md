# DSH Bug Watch — 2026-08-21

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 56

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#3226](https://github.com/deepseek-ai/deepseek-harness/discussions/3226) Bug: adopted vision models lose input modalities during discovery (MODEL_DOES_NOT_SUPPORT_IMAGES)
- [#3717](https://github.com/deepseek-ai/deepseek-harness/discussions/3717) [Bug Report] 自定义agent删除后， 界面无法恢复为默认agent
- [#3719](https://github.com/deepseek-ai/deepseek-harness/discussions/3719) [Bug][POSIX] storage-json can overwrite a published write after directory fsync failure
- [#3687](https://github.com/deepseek-ai/deepseek-harness/discussions/3687) [Bug] 大型冷态子代理历史因 30 秒 unary 时限无法加载
- [#201](https://github.com/deepseek-ai/deepseek-harness/discussions/201) [BUG] spamming Error: sandbox escalation to "workspace-write" is not strictly wider than this call's current "danger-full-access" mode
- [#3466](https://github.com/deepseek-ai/deepseek-harness/discussions/3466) [Bug][Windows] ACL sandbox spawn failure paths can leak native handles and clobber primary errors
- [#3662](https://github.com/deepseek-ai/deepseek-harness/discussions/3662) [Bug] Cancelling a task that spawned subagents permanently corrupts session persistence — production data integrity failure, no recovery path for operators
- [#3660](https://github.com/deepseek-ai/deepseek-harness/discussions/3660) [Bug][MCP] Repeated nextCursor can make tools/list synchronization loop indefinitely
- [#3657](https://github.com/deepseek-ai/deepseek-harness/discussions/3657) [Bug] persistent bash each command waits 3.5s: CONTROLLED_PROMPT mismatch SHELL_PROMPT
- [#3655](https://github.com/deepseek-ai/deepseek-harness/discussions/3655) [Bug][web] npm rc.8 ???????:slot entry crashed in 'conversation.composer.bar'
- [#3606](https://github.com/deepseek-ai/deepseek-harness/discussions/3606) [BUG]conversation Context 9:tool-callcall_0 received more than one start Match（internal）
- [#1180](https://github.com/deepseek-ai/deepseek-harness/discussions/1180) [BUG]一直出现Error: invalid arguments: missing required property "description"
- [#441](https://github.com/deepseek-ai/deepseek-harness/discussions/441) [Bug] Profile `cordis.yml` is rewritten non-atomically on every boot, so concurrent launches intermittently fail to load
- [#3650](https://github.com/deepseek-ai/deepseek-harness/discussions/3650) Bug: ask_user_question card hides options and footer when the question is long (fix prepared)
- [#3649](https://github.com/deepseek-ai/deepseek-harness/discussions/3649) [Bug] 设置页滚动长列表卡顿（遮罩层 backdrop-filter 导致）
- [#3646](https://github.com/deepseek-ai/deepseek-harness/discussions/3646) [Bug] Build fails with standalone pnpm @pnpm/exe because npm_execpath is executed through Node
- [#3428](https://github.com/deepseek-ai/deepseek-harness/discussions/3428) [Bug] Windows 下「极简模式」preset 的 bash 工具 100% 失败：subprocess-local: terminal inspection is unsupported on platform win32
- [#3636](https://github.com/deepseek-ai/deepseek-harness/discussions/3636) Bug: profile agent-presets custom roots get overwritten by the shipped root after restart
- [#3632](https://github.com/deepseek-ai/deepseek-harness/discussions/3632) [Bug] Conversation UI hard-fails (blank paging) on orphan agent/inbox/spliced ops with no insert
- [#3633](https://github.com/deepseek-ai/deepseek-harness/discussions/3633) [Bug] No session-level locking: two running instances silently corrupt the same session log
- [#3631](https://github.com/deepseek-ai/deepseek-harness/discussions/3631) [bug]History paging freezes when a session ends with aborted turns
- [#3604](https://github.com/deepseek-ai/deepseek-harness/discussions/3604) [Bug] llm-deepseek: OpenAI 兼容端点的续传分片带空串 id/name，流式工具调用全部变成 unknown tool ""
- [#3494](https://github.com/deepseek-ai/deepseek-harness/discussions/3494) [Bug][NixOS] rc.7 dsh web crashes because disabled HMR is recreated without loader internals
- [#387](https://github.com/deepseek-ai/deepseek-harness/discussions/387) [Bug] Agent 重启 DSH 时会杀死自身宿主，导致会话永久停留在“运行中”
- [#3615](https://github.com/deepseek-ai/deepseek-harness/discussions/3615) [Bug] rc.8: 空白会话切换 Agent Preset 后，旧 preset 的 agent-scoped 工具注册/restrict 残留形成杂交工具面；header agentPreset 与实际 mount 不符
- [#3565](https://github.com/deepseek-ai/deepseek-harness/discussions/3565) [Bug] Manual /compact on a resumed session summarizes through the session's stale routed provider, with zero cache reuse
- [#3607](https://github.com/deepseek-ai/deepseek-harness/discussions/3607) [Bug] Composer 组字时看不见正在输入的中文，草稿还会与 placeholder 叠印
- [#3591](https://github.com/deepseek-ai/deepseek-harness/discussions/3591) [Bug] Agent loop: dangling tool/call without paired tool/result when a parallel tool call fails mid-dispatch — deriveMessages() builds a provider-invalid transcript
- [#3590](https://github.com/deepseek-ai/deepseek-harness/discussions/3590) [Bug] Python SDK: concurrent start() spawns duplicate runtimes — orphaned subprocesses survive close()
- [#3588](https://github.com/deepseek-ai/deepseek-harness/discussions/3588) [Bug] Python SDK: Session.run() hangs forever when the runtime stalls — request_timeout_seconds doesn't bound the turn
- [#3597](https://github.com/deepseek-ai/deepseek-harness/discussions/3597) [Bug] Web 产出文件面板"在文件夹中显示"打开的是服务器启动目录，而非会话工作区
- [#3560](https://github.com/deepseek-ai/deepseek-harness/discussions/3560) [Bug] dsh web 反复 OOM：dsh-fs-local listDirectory 跟随符号链接环无限遍历
- [#3568](https://github.com/deepseek-ai/deepseek-harness/discussions/3568) [BUG]mcp-client 工具调用参数流式传输断裂，导致空参数和死循环
- [#3250](https://github.com/deepseek-ai/deepseek-harness/discussions/3250) [Bug][Fix available] pnpm add -g 后 native binding 解析失败，dsh web 找不到已安装插件
- [#1944](https://github.com/deepseek-ai/deepseek-harness/discussions/1944) [Bug] Compaction request misses provider prefix cache entirely — summarizer doesn't inherit reasoningEffort / adds maxTokens
- [#3542](https://github.com/deepseek-ai/deepseek-harness/discussions/3542) [Bug] Manual `/compact` aborts after 5–15s with "DeepSeek request aborted by caller" — 22/23 attempts fail (rc.7 & rc.8)
- [#3562](https://github.com/deepseek-ai/deepseek-harness/discussions/3562) [Bug] 工作区新会话建立后被收进左侧边栏折叠栏，而非位于最上方
- [#3561](https://github.com/deepseek-ai/deepseek-harness/discussions/3561) Bug report + fix: image-bearing session deadlocks when switching to a text-only model (Web GUI)
- [#3530](https://github.com/deepseek-ai/deepseek-harness/discussions/3530) [Bug] 会话日志 seq 重叠导致历史加载失败，且错误信息掩盖真实原因
- [#3532](https://github.com/deepseek-ai/deepseek-harness/discussions/3532) [BUG] 发现构建脚本在 pnpm 11 下失败的问题：runScript 错误地用 Node 执行包管理器
- [#3536](https://github.com/deepseek-ai/deepseek-harness/discussions/3536) [Bug] 浏览器端插件代码错误致 UI 白屏且零可恢复性（FISH_CSS is not defined 实例），建议 client 错误隔离 + 安全模式
- [#2343](https://github.com/deepseek-ai/deepseek-harness/discussions/2343) [bug] Tool call Error: unknown tool ""
- [#3528](https://github.com/deepseek-ai/deepseek-harness/discussions/3528) [Bug] Web UI stuck on "HARNESS Loading plugins…" — profile module fallback fails to resolve pnpm workspace symlinks (Windows)
- [#2752](https://github.com/deepseek-ai/deepseek-harness/discussions/2752) [Bug] 浏览器端插件服务名冲突致 UI 白屏，报错无冲突来源信息，服务端日志完全无感知
- [#3535](https://github.com/deepseek-ai/deepseek-harness/discussions/3535) [Bug] hooks-claude-code bridge should align with the documented Claude Code hook payload contract (`model`, `prompt_id`, failure events, `SessionEnd`)
- [#3525](https://github.com/deepseek-ai/deepseek-harness/discussions/3525) [BUG][BENCHMARK] dsh (with headless profile) is useless for benchmarks
- [#3498](https://github.com/deepseek-ai/deepseek-harness/discussions/3498) [Bug Report] npm 发布包缺少 @deepseek-ai/dsh-workflow 导致预设加载失败 (agent-preset-invalid) 及 dsh web 选择工作区静默退回
- [#3519](https://github.com/deepseek-ai/deepseek-harness/discussions/3519) [Bug] Repeated sandbox_permissions causes subagent Bash/Write/Edit calls to fail repeatedly
- [#3504](https://github.com/deepseek-ai/deepseek-harness/discussions/3504) [Bug] Web 界面中文输入法（IME）失效：拼音字母直接上屏，无候选词
- [#3489](https://github.com/deepseek-ai/deepseek-harness/discussions/3489) [Bug] Expired MCP session causes repeated tool-call failures without reconnect or circuit breaking
- [#3508](https://github.com/deepseek-ai/deepseek-harness/discussions/3508) [BUG]  工作区目录路径中间不能有中文，否则解析失败，已修复
- [#403](https://github.com/deepseek-ai/deepseek-harness/discussions/403) [Bug] agent-presets.roots user config is overwritten by composeProfile — custom preset roots never take effect
- [#3477](https://github.com/deepseek-ai/deepseek-harness/discussions/3477) [bug] async 工具 execute() 内 spawnSync → 事件循环死锁（microtask checkpoint 内嵌套 uv_run 重入）
- [#466](https://github.com/deepseek-ai/deepseek-harness/discussions/466) [Bug Report] 宿主被沙箱内 agent 重启杀死后，会话日志留下未闭合的 turn——冷启动无协调闭合，会话永久"运行中"
- [#3419](https://github.com/deepseek-ai/deepseek-harness/discussions/3419) Bug: native directory picker truncates paths containing U+XX00 CJK chars (e.g. 开 U+5F00) — workspace create fails on Windows
- [#3424](https://github.com/deepseek-ai/deepseek-harness/discussions/3424) [BUG]任务已全部输出完成，任务列表最后一步仍显示进行中

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-08-21T00:55:34.877Z_