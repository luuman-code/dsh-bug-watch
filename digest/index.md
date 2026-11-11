# DSH Bug Watch — 2026-11-11

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 81

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#9915](https://github.com/deepseek-ai/deepseek-harness/discussions/9915) **[Bug] 配置 API Key 后，无法切换回账号登录使用**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-10

## 📝 仅报告 — 无人互动
- [#10367](https://github.com/deepseek-ai/deepseek-harness/discussions/10367) [bug] Agent Teams 会话下 send_message 无法按 id 寻址子代理，但 subagent 工具描述声称可以，这个bug之前修复过一次，但没有修好
- [#12918](https://github.com/deepseek-ai/deepseek-harness/discussions/12918) [Bug][WSL] 「打开方式」应用列表必然失败：associations.ps1 的 Linux 临时路径被原样传给 Windows powershell.exe -File
- [#12916](https://github.com/deepseek-ai/deepseek-harness/discussions/12916) [Bug] 新建会话复用了空白子代理会话，报 `session/agent-busy: … is owned by subagent routing`，整个工作区无法新建会话
- [#11981](https://github.com/deepseek-ai/deepseek-harness/discussions/11981) [Bug] ptc 模式下中断/报错后 tool/ptc-dispatch* 落盘于 turn 之外，导致 session 历史永久无法加载
- [#12913](https://github.com/deepseek-ai/deepseek-harness/discussions/12913) [Bug] Agent loop has no no-progress / repetition guard: after the task was done, one turn spent ~50 min re-running identical checks and re-sending a near-identical final answer
- [#12912](https://github.com/deepseek-ai/deepseek-harness/discussions/12912) [Bug] bash tool output is rewritten into grep-style "N matches in NF" summaries, dropping the real stdout/stderr
- [#12739](https://github.com/deepseek-ai/deepseek-harness/discussions/12739) [Bug][Windows][Desktop 0.2.2-rc.1] 启动必崩：`dsh-auth-*` cookie 随 `--port 0` 无限累积，撑爆请求头后自家 web server 返回 431
- [#12649](https://github.com/deepseek-ai/deepseek-harness/discussions/12649) [Bug] Desktop 启动崩溃：dsh-auth-* cookie 随随机端口在 127.0.0.1 下累积，第 72 次启动必然 431（Web authentication failed）
- [#12015](https://github.com/deepseek-ai/deepseek-harness/discussions/12015) [Bug][Windows Desktop 0.2.1-rc.5] Proxy env vars pointing at a dead port make every model request fail with "DeepSeek Messages transport failed" (no direct fallback)
- [#12510](https://github.com/deepseek-ai/deepseek-harness/discussions/12510) [Bug] pluginManager.updateBundle (HMR) re-activates dsh-web-app's directory-picker-auto and fails with duplicate "directoryPicker" service
- [#12901](https://github.com/deepseek-ai/deepseek-harness/discussions/12901) [Bug] Parallel tool calls at a reused stream index are merged into one call, failing the turn
- [#12900](https://github.com/deepseek-ai/deepseek-harness/discussions/12900) [Bug] Trajectory shows the raw provider AUTH message for a failed compaction, bypassing the AUTH masking used everywhere else
- [#12889](https://github.com/deepseek-ai/deepseek-harness/discussions/12889) [Bug][Windows/macOS] apply_patch cannot rename a file when only the letter case changes ("cannot move ... to itself")
- [#12888](https://github.com/deepseek-ai/deepseek-harness/discussions/12888) [Bug][Windows] A ReplaceFileW failure with 1176/1177 deletes both the original file and the new content (edit/write data loss)
- [#12886](https://github.com/deepseek-ai/deepseek-harness/discussions/12886) [Bug][Windows] A file path whose case differs from the cwd (e.g. c:\ vs C:\) makes agent-instructions load AGENTS.md from outside the project
- [#12885](https://github.com/deepseek-ai/deepseek-harness/discussions/12885) [Bug] 插件致命失败后启动仍继续，主诊断可能变为 INACTIVE_EFFECT
- [#12884](https://github.com/deepseek-ai/deepseek-harness/discussions/12884) [Bug] A workspace session directory was removed and recreated; the logs are gone, stale projection-cache entries remain, and there is no warning
- [#12880](https://github.com/deepseek-ai/deepseek-harness/discussions/12880) [Bug] Desktop crash reports and the plugin-operation journal drop the information needed to diagnose a failure
- [#12879](https://github.com/deepseek-ai/deepseek-harness/discussions/12879) [Bug] sessionProjections.register does not validate the definition; a missing schema throws later on the first view
- [#1249](https://github.com/deepseek-ai/deepseek-harness/discussions/1249) [BUG] puppeteer MCP 断连导致 dsh web 整个进程崩溃退出（Windows）
- [#12810](https://github.com/deepseek-ai/deepseek-harness/discussions/12810) [Bug] 0.1.0-rc.7 → 0.2.2-rc.1 upgrade: seeded sessions show "Untitled" — projection-cache identity migration drops isSeeded
- [#10155](https://github.com/deepseek-ai/deepseek-harness/discussions/10155) [Bug] Command hooks run under the deployment sandbox policy, not the calling session's: in danger-full-access a hook still cannot write the session workspace
- [#9662](https://github.com/deepseek-ai/deepseek-harness/discussions/9662) [Bug] subagent: 空字符串的 provider/model/reasoning_effort 被当成显式选择而失败，且报错不给补救（0.2.0-rc.2）
- [#12845](https://github.com/deepseek-ai/deepseek-harness/discussions/12845) BUG: [Auto review] — PTC inner tool call — Reviewer denies with "No pending tool call"
- [#6275](https://github.com/deepseek-ai/deepseek-harness/discussions/6275) [Bug][Windows] 在 ACL 受限令牌沙箱下 Ninja 永久挂起：子命令已执行完毕，但 Ninja 永不退出
- [#4615](https://github.com/deepseek-ai/deepseek-harness/discussions/4615) [Bug] dsh-llm-pi-ai sends non png/jpeg/gif images as-is; LM Studio rejects webp with 400 "'url' field must be a base64 encoded image."
- [#12855](https://github.com/deepseek-ai/deepseek-harness/discussions/12855) [Bug] Windows workspace-write：工作区 ACL 授权物化缓存不校验目录对象，运行期间工作区目录被重建后 shell 写入被拒（重启应用自愈）
- [#12233](https://github.com/deepseek-ai/deepseek-harness/discussions/12233) [Bug]validation error for ResponseIncompleteEvent response.incomplete_details.reason Input should be 'max_output_tokens' or 'content_filter' [type=literal_error, input_value='length', input_type=str] For further information visit https://errors.pydantic.dev/2.13/v/literal_error
- [#12596](https://github.com/deepseek-ai/deepseek-harness/discussions/12596) [Bug] dsh web auto-exits with SIGSEGV (signal 11) while idle on 0.2.2-rc.1
- [#11441](https://github.com/deepseek-ai/deepseek-harness/discussions/11441) [Bug] 20–90 s blackout after the first Web UI load: sync process.report.getReport() in the flock libc probe (0.2.1-rc.2, WSL2 + Clash DNS)
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#12851](https://github.com/deepseek-ai/deepseek-harness/discussions/12851) [Bug][Desktop 0.2.2-rc.1] 应用内升级后官方按需插件（Claude Code / Codex 子智能体）未随版本更新，被静默禁用，设置页“子智能体 → 模型选择”整块消失
- [#10162](https://github.com/deepseek-ai/deepseek-harness/discussions/10162) [Bug] open-in-app: VS Code (and every Electron app) cannot be launched on Windows — ELECTRON_RUN_AS_NODE leaks into the child environment
- [#11623](https://github.com/deepseek-ai/deepseek-harness/discussions/11623) [BUG]pnpm dev:web  bug
- [#12831](https://github.com/deepseek-ai/deepseek-harness/discussions/12831) [BUG] 侧栏会话视图在「打开未完成」时被销毁，把主动取消当成打开失败打红
- [#12841](https://github.com/deepseek-ai/deepseek-harness/discussions/12841) [Bug] Model picker: row under a pinned provider heading shows through the translucent fill (0.2.2-rc.1)
- [#11784](https://github.com/deepseek-ai/deepseek-harness/discussions/11784) [Bug] Chat briefly renders two identical user bubbles before the durable user/message replaces the optimistic echo
- [#10095](https://github.com/deepseek-ai/deepseek-harness/discussions/10095) [Bug]+小优化点请求：插件热重载后所有历史会话从侧边栏消失，无任何提示+优化 Windows 托盘缺重启入口
- [#12827](https://github.com/deepseek-ai/deepseek-harness/discussions/12827) [Bug][0.2.2-rc.1] 不可用 MCP server 使启动阻塞 131s；前端重试预算耗尽后仅显示 loading 插件，无任何诊断
- [#7625](https://github.com/deepseek-ai/deepseek-harness/discussions/7625) [Bug][DSH Desktop 2.0.13] 已保存的 DeepSeek API 密钥无法删除，导致网络搜索优先走 DeepSeek 并报错
- [#8496](https://github.com/deepseek-ai/deepseek-harness/discussions/8496) [bug] dsh-mcp-client 写死 versionNegotiation: auto：对现代探测回 501 的 streamable-http 服务端永久连接失败（Sketch MCP 实测，附根因与修复方向）
- [#12819](https://github.com/deepseek-ai/deepseek-harness/discussions/12819) [Bug][0.2.2-rc.1] ui_render 参数尾部漏 "]" → MALFORMED_RESPONSE 整轮丢弃（llm-pi-ai 路径；该码仍不在默认重试表）
- [#12818](https://github.com/deepseek-ai/deepseek-harness/discussions/12818) [bug] 复用的 blank 会话应重新采样 subagent/model-selection-policy
- [#9610](https://github.com/deepseek-ai/deepseek-harness/discussions/9610) [Bug] Desktop: main window stays hidden indefinitely when Host startup stalls — no timeout, no feedback, tray "Open" does nothing
- [#11893](https://github.com/deepseek-ai/deepseek-harness/discussions/11893) [Bug] LocalSubprocessRuntime.spawn() drops the internals argument when calling launchWindowsJob/launchLinuxScope
- [#3410](https://github.com/deepseek-ai/deepseek-harness/discussions/3410) [BUG]When a session is not assigned to any workspace, the sidebar shows an Ungrouped group. Hovering that group still reveals a + button ("New session in Ungrouped"), but clicking it does nothing.
- [#12809](https://github.com/deepseek-ai/deepseek-harness/discussions/12809) [Bug] usage 基线与粗估保留预算不一致，导致每步重复压缩新摘要；上下文总量与分项不一致
- [#12798](https://github.com/deepseek-ai/deepseek-harness/discussions/12798) [Bug]: 压缩过于频繁，没有达到上下文的一半
- [#12796](https://github.com/deepseek-ai/deepseek-harness/discussions/12796) [Bug] Compaction 后 agent-instructions 全量重注入
- [#12784](https://github.com/deepseek-ai/deepseek-harness/discussions/12784) [Bug] 子代理（subagent）内无法执行 bash：无 sandbox 后端时 danger-full-access 提权被自动拒绝
- [#11943](https://github.com/deepseek-ai/deepseek-harness/discussions/11943) [Bug] DeepSeek V4.1 Flash (1017) — Reasoning Repetition Loop and Silent Completion During Tool Execution
- [#12773](https://github.com/deepseek-ai/deepseek-harness/discussions/12773) [Bug] dsh web: archived Session is reopened on reload and blocks the UI
- [#4059](https://github.com/deepseek-ai/deepseek-harness/discussions/4059) [Bug] Late ECONNRESET after an upgraded socket closes can terminate dsh web
- [#12557](https://github.com/deepseek-ai/deepseek-harness/discussions/12557) [Bug] [Desktop/Windows] 启用 @ysyyhhh/dsh-pet 后桌面宿主直接 abort（exit 134, napi_fatal_error）
- [#12517](https://github.com/deepseek-ai/deepseek-harness/discussions/12517) [Bug] --profile open-design silently hangs forever (any CLI invocation) - one-line fix included
- [#12601](https://github.com/deepseek-ai/deepseek-harness/discussions/12601) [Bug] App fails to launch silently after Windows disk cleanup and plugin install
- [#12653](https://github.com/deepseek-ai/deepseek-harness/discussions/12653) [Bug] deferLoading is stripped on providers without toolUpdate, so on-demand MCP injection still ships the full tool catalog
- [#12626](https://github.com/deepseek-ai/deepseek-harness/discussions/12626) [Bug] DeepSeek 长会话 400 INVALID_REQUEST：供应商报错体被吞、contextWindow 声明 1M 导致压缩不触发
- [#8844](https://github.com/deepseek-ai/deepseek-harness/discussions/8844) [Bug] pi-ai adapter discards the provider's stable error code, so upstream stream interruptions become non-retryable PI_AI_ERROR
- [#8827](https://github.com/deepseek-ai/deepseek-harness/discussions/8827) [Bug] workflow 工具调用永不返回，父 Agent 卡死在 step/start 后无事件
- [#11119](https://github.com/deepseek-ai/deepseek-harness/discussions/11119) [Bug] 更新器以"把整个安装目录改名到父目录"作为升级第一步，在 Windows 上极易失败且无法自诊断
- [#8020](https://github.com/deepseek-ai/deepseek-harness/discussions/8020) [Bug] Auto review 下 `ask_user_question` 的人类授权对 reviewer 不可见 / Human authorization via `ask_user_question` is invisible to the Auto review reviewer
- [#12754](https://github.com/deepseek-ai/deepseek-harness/discussions/12754) [bug] ACP session/new: one unreachable MCP server fails the whole session (failOnStartupError hard-coded to true)
- [#12747](https://github.com/deepseek-ai/deepseek-harness/discussions/12747) [Bug] 点击图片偶尔无法打开大图：轻微指针位移触发的 dragstart 会吞掉 click
- [#12746](https://github.com/deepseek-ai/deepseek-harness/discussions/12746) [Bug] session-query-sqlite: every search clones, stringifies and hashes every live session on the host main thread
- [#12745](https://github.com/deepseek-ai/deepseek-harness/discussions/12745) [Bug] Conversation width handle: wheel over the gutter handle scrolls stepwise instead of smoothly
- [#12744](https://github.com/deepseek-ai/deepseek-harness/discussions/12744) [Bug][Windows][0.2.1-rc.5] Every tool dispatch fails with "Cannot read properties of undefined (reading 'prepare')" — duplicate dsh-tools instances yield unequal Symbol keys
- [#12261](https://github.com/deepseek-ai/deepseek-harness/discussions/12261) [Bug][macOS] 0.2.2-rc.1 frameless window has no drag region — window cannot be moved by mouse (worked in 0.2.1-rc.5)
- [#12734](https://github.com/deepseek-ai/deepseek-harness/discussions/12734) [Bug][Windows][workspace-write] 中文路径工作区授权初始化失败（SetNamedSecurityInfoW Win32 5）
- [#9689](https://github.com/deepseek-ai/deepseek-harness/discussions/9689) [BUG]DSH Desktop 把 ELECTRON_RUN_AS_NODE=1 导出到整个进程树，导致从 DSH 启动的任何 Electron 应用（VS Code / Cursor / Zed）静默启动失败
- [#12732](https://github.com/deepseek-ai/deepseek-harness/discussions/12732) [Bug] 长时间运行后“新建会话”回到工作区选择、侧栏 fork 子会话找不到；重启恢复（0.2.2-rc.1）
- [#12682](https://github.com/deepseek-ai/deepseek-harness/discussions/12682) [bug]无视用户插话
- [#12727](https://github.com/deepseek-ai/deepseek-harness/discussions/12727) [Bug] 三个会话边界问题：fork 重放父任务、子模型选择失效、结束交接丢失唤醒（0.2.2-rc.1）
- [#12725](https://github.com/deepseek-ai/deepseek-harness/discussions/12725) [Bug] 插件启动不返回时，boot 会永久等待，而且完全静默
- [#12723](https://github.com/deepseek-ai/deepseek-harness/discussions/12723) [Bug] Assistant stream can stay silent indefinitely before the first content block — no first-token deadline, SSE heartbeats keep the idle watchdog alive
- [#12295](https://github.com/deepseek-ai/deepseek-harness/discussions/12295) [Bug]桌面端 0.2.2-rc.1：跟随尾部时 Turn 完成后的底部预留空白无法回收
- [#12318](https://github.com/deepseek-ai/deepseek-harness/discussions/12318) [Bug] Session resume fails permanently when cordis.patch.yml references a removed subpath export (0.2.2-rc.1)
- [#12201](https://github.com/deepseek-ai/deepseek-harness/discussions/12201) [Bug] 工作区被标记 Low 完整性后，Electron/Chromium 无法启动（exit 0x80000003，无日志）
- [#12712](https://github.com/deepseek-ai/deepseek-harness/discussions/12712) [Bug][桌面版] 持久 Cookie 无限堆积 → 请求头超 16KB 被拒（431）→ "desktop welcome: Web authentication failed" 启动死循环；恢复对话框的"禁用第三方插件"按钮在此类错误下误伤插件配置
- [#12234](https://github.com/deepseek-ai/deepseek-harness/discussions/12234) Bug: scrolling Chat shifts the session header (title row + view tabs) out of the window — 0.2.2-rc.1 on macOS

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-11T04:09:18.593Z_