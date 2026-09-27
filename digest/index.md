# DSH Bug Watch — 2026-09-27

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 69

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#6483](https://github.com/deepseek-ai/deepseek-harness/discussions/6483) **Bug report: Windows windows-acl sandbox dies permanently for a session when its cached private temp dir disappears**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-27

## 📝 仅报告 — 无人互动
- [#7894](https://github.com/deepseek-ai/deepseek-harness/discussions/7894) [Bug][0.1.7-rc.2] goal-round-driver + broken compaction caused runaway 642M token explosion in a single session (Continuing goal infinite loop)
- [#8002](https://github.com/deepseek-ai/deepseek-harness/discussions/8002) [Bug] compact latestAnswer: empty last step (plugin same-turn steer) folds the real answer into 用时 and leaves a blank transcript
- [#8000](https://github.com/deepseek-ai/deepseek-harness/discussions/8000) [Bug] Windows 桌面端：打开设置等模态后，右上角窗口按钮带底色不随页面遮罩变暗（WCO 底色与页面 scrim 不同步）
- [#8001](https://github.com/deepseek-ai/deepseek-harness/discussions/8001) [Bug][Windows] 0.1.7-rc.2: 窗口关闭死锁 / ACL沙箱权限崩溃(Win32 5) / 子代理卡片失踪与硬锁8并发 / SSRF误杀TUN代理
- [#7998](https://github.com/deepseek-ai/deepseek-harness/discussions/7998) [Bug] skill-office 检具 check_office.py --out 在 Windows 落 CRLF（跨平台产出字节不稳）
- [#7797](https://github.com/deepseek-ai/deepseek-harness/discussions/7797) [Bug] Windows 桌面端高分屏缩放导致 Office 预览图截断/放大（LibreOfficeKit 1.5× DPI 缩放冲突）（v0.1.7-rc.2）
- [#7996](https://github.com/deepseek-ai/deepseek-harness/discussions/7996) [Bug] macOS 桌面端语音输入:麦克风权限首次授权死锁,系统弹窗永远无法触发(mic permission deadlock)
- [#5677](https://github.com/deepseek-ai/deepseek-harness/discussions/5677) [Bug] Web UI history never loads on Firefox-engine browsers (infinite "Loading history…") — Firefox-only failure in lossless-JSON validation
- [#7995](https://github.com/deepseek-ai/deepseek-harness/discussions/7995) [Bug] session search fails on any store that ever spawned a subagent — v0→v1 migration rejects `subagent/descriptor` version 2, the only version the writer emits
- [#7994](https://github.com/deepseek-ai/deepseek-harness/discussions/7994) Bug: dsh-token-meter yields NaN token totals for Codex (gpt-5.6-sol) usage, breaking session history load
- [#7800](https://github.com/deepseek-ai/deepseek-harness/discussions/7800) Bug: SessionFormatError "format v4 message requires a producer-owned source kind" - agent turns intermittently fail (core 0.1.7-rc.1)
- [#7871](https://github.com/deepseek-ai/deepseek-harness/discussions/7871) [Bug][Windows] Tools engine crashes: "Cannot read properties of undefined (reading 'kind')" in dsh-tools/lib/index.js:1260
- [#7857](https://github.com/deepseek-ai/deepseek-harness/discussions/7857) [Bug] attach 模式下浏览器工具对交互会话永久不可用：独占槽被桌面端启动时的「会话恢复/播种」激活占住且不释放（0.1.7-rc.2，附源码行号与现场证据）
- [#7833](https://github.com/deepseek-ai/deepseek-harness/discussions/7833) [BUG] [0.1.7-rc.1] strict-codec format change makes an out-of-tree Typert Remote plugin fail activation and blocks the whole Web UI
- [#7879](https://github.com/deepseek-ai/deepseek-harness/discussions/7879) [Bug] 内容审核按"单个字形"拦截 → 会话永久 400：最小复现仅 2 码位、跨端点/跨客户端一致（附可落地的三处修复）
- [#7860](https://github.com/deepseek-ai/deepseek-harness/discussions/7860) [Bug][Windows] "Open folder" spawns explorer.exe but does not open the directory (dsh-v0.1.7-rc.2)
- [#7885](https://github.com/deepseek-ai/deepseek-harness/discussions/7885) [Bug] 0.1.7-rc.1/rc.2 出口代理策略注入的 undici 8.x 全局分发器与 Node 内置 fetch 主版本错配：进程内所有响应头丢失（MCP HTTP 服务器永久断开、微信图片/文件发送失败）
- [#7989](https://github.com/deepseek-ai/deepseek-harness/discussions/7989) [Bug] macOS: 硬运行时缺少麦克风 entitlement，语音输入被永久拒绝且不弹授权窗（无用户侧绕过方案）
- [#7650](https://github.com/deepseek-ai/deepseek-harness/discussions/7650) [BUG] Reaching context window 100% and not triggering auto-compaction
- [#7986](https://github.com/deepseek-ai/deepseek-harness/discussions/7986) [Bug] Windows: image lightbox close button is 55% covered by the window-controls overlay (top 20px unclickable)
- [#7987](https://github.com/deepseek-ai/deepseek-harness/discussions/7987) [Bug] fs-local per-file watchers enumerate the entire parent directory independently, causing V8 OOM with large directories
- [#7985](https://github.com/deepseek-ai/deepseek-harness/discussions/7985) Bug: the session that creates a workspace is never registered in that workspace's `sessionIds` (it stays "Ungrouped")
- [#7983](https://github.com/deepseek-ai/deepseek-harness/discussions/7983) [Bug] 从 0.1.7-rc.2 回退到 0.1.5-rc.2 后左侧会话列表全空：两版共用 persist key `dsh.workspace.view.v5`，0.1.7 删掉了 sessionUpdatedAtByAccount / Empty session list after downgrading 0.1.7-rc.2 → 0.1.5-rc.2 (shared persist key, field deleted)
- [#7981](https://github.com/deepseek-ai/deepseek-harness/discussions/7981) [Bug] Web: Shift+Cmd+R (and Ctrl+Shift+R) hijacks browser hard refresh to open session rename dialog
- [#7980](https://github.com/deepseek-ai/deepseek-harness/discussions/7980) [BUG] Desktop: welcome window freezes on "Completing sign in…" after sign-out (stale account frame sent to reopened window)
- [#7802](https://github.com/deepseek-ai/deepseek-harness/discussions/7802) [Bug] 「加载历史」偶发永久卡住、只有刷新能恢复：等待 socket 的 waiter 永不 settle（含根因与社区补丁）/ Loading history hangs forever: waiters on the Remote stream socket are never settled (root cause & community patch available)
- [#7394](https://github.com/deepseek-ai/deepseek-harness/discussions/7394) [Bug] Second `@deepseek-ai/dsh-scope` instance from a profile plugin workspace registers preset personas unscoped, colliding with `deployment:persona` (rc.8: `deployment:persona`; master: `deployment:persona-prefix`/`-suffix`)
- [#7972](https://github.com/deepseek-ai/deepseek-harness/discussions/7972) [Bug][0.1.7-rc.2] Failed turn (HTTP 400/429) leaves all-zero usage samples; contextPressure projection permanently zeroed — ContextMeter shows 0%
- [#7709](https://github.com/deepseek-ai/deepseek-harness/discussions/7709) [Bug] Windows: the workspace Low integrity label also lowers the user's own launches from that tree, silently degrading the toolchain inside it
- [#7967](https://github.com/deepseek-ai/deepseek-harness/discussions/7967) [Bug] 配置 HTTP(S)_PROXY 后宿主 fetch 不再跟随任何 3xx：模型下载报 HTTP 308（app undici 8.11.0 × 运行时 undici 7.x）
- [#7966](https://github.com/deepseek-ai/deepseek-harness/discussions/7966) [Bug] 配置 HTTP(S)_PROXY 后宿主 fetch 不再跟随任何 3xx：模型下载报 HTTP 308（app undici 8.11.0 × 运行时 undici 7.x）
- [#7828](https://github.com/deepseek-ai/deepseek-harness/discussions/7828) [Bug][Desktop][Windows] App stays hidden after updating to 0.1.7-rc.2 instead of reopening
- [#7962](https://github.com/deepseek-ai/deepseek-harness/discussions/7962) [Bug] Web shell has no fallback when its own Vite entry/chunk fails to load — pure white page, zero diagnostics (0.1.2-rc.1)
- [#105](https://github.com/deepseek-ai/deepseek-harness/discussions/105) [Bug] Python SDK accepts malformed initialize.serverInfo responses
- [#7957](https://github.com/deepseek-ai/deepseek-harness/discussions/7957) [Bug] Windows: cancelling a running shell tool call kills the dsh web host (console-wide CTRL_C)
- [#7292](https://github.com/deepseek-ai/deepseek-harness/discussions/7292) [Bug][Windows] workspace-write sandbox: every spawned console app dies with 0xC0000142 and raises a modal Windows error dialog on each tool call
- [#7940](https://github.com/deepseek-ai/deepseek-harness/discussions/7940) [Bug] Resuming a session never joins its agent preset — ask_user_question and present silently disappear (0.1.5-rc.3, dsh-tui 0.8.1)
- [#7947](https://github.com/deepseek-ai/deepseek-harness/discussions/7947) [Bug] 带图 prompt 无法发送，报 `session/agent-busy`——实为准入 catch-all 包装，真实 reason 前后端不可见（0.1.7-rc.2 web 实测 + 源码定位）
- [#7950](https://github.com/deepseek-ai/deepseek-harness/discussions/7950) [bug]两个都是auto review的bug
- [#7946](https://github.com/deepseek-ai/deepseek-harness/discussions/7946) [Bug] 会话搜索必然失败：稳定性观测在存在活跃写入时不可能达成
- [#7931](https://github.com/deepseek-ai/deepseek-harness/discussions/7931) [Bug] 账号余额读失败后一直显示「前往开放平台查看」：登录时账号请求重复连发，平台回 202 后不再重试（0.1.7-rc.2）
- [#7944](https://github.com/deepseek-ai/deepseek-harness/discussions/7944) [Bug] V4 写侧 admission 不校验 tool-call 的 id/name：会话或永久打不开、或每次请求 400（0.1.7-rc.2 桌面端，含实测会话与帧级证据）
- [#7865](https://github.com/deepseek-ai/deepseek-harness/discussions/7865) [bug] 实验性 Playwright MCP 启动失败会导致所有会话创建失败（failOnStartupError: true + reconnect: false），并残留孤儿浏览器进程
- [#5976](https://github.com/deepseek-ai/deepseek-harness/discussions/5976) [Bug] Agent 在超长上下文 + max reasoning effort 下陷入思考退化循环：回合零产出、无自动熔断，需手动中止（v4.1-flash；同配置 v4-flash 3000+ 步未复发）
- [#7936](https://github.com/deepseek-ai/deepseek-harness/discussions/7936) [Bug] Rejected sibling messages leave cyclic ownership holds and suppress subagent settlement reports (0.1.7-rc.2)
- [#7938](https://github.com/deepseek-ai/deepseek-harness/discussions/7938) [Bug] dsh web 浏览器会话 cookie 硬编码 SameSite=Strict：Chrome for iPadOS 上干净 URL 永远 401（0.1.7-rc.2，含受控实验证据）
- [#7921](https://github.com/deepseek-ai/deepseek-harness/discussions/7921) [Bug] Data dir re-initialized during 0.1.7-rc.1 → rc.2 upgrade (Windows): all sessions / history / plugin state lost — forensics + reproduce commands attached
- [#201](https://github.com/deepseek-ai/deepseek-harness/discussions/201) [BUG] spamming Error: sandbox escalation to "workspace-write" is not strictly wider than this call's current "danger-full-access" mode
- [#7842](https://github.com/deepseek-ai/deepseek-harness/discussions/7842) [Bug] Windows: file-manager "Show file location" / default-app open silently fails (windowsHide hides Explorer's delegated window)
- [#7788](https://github.com/deepseek-ai/deepseek-harness/discussions/7788) [Bug] MCP tool results drop structuredContent — the official computer-use plugin can't reach its own element_token
- [#7792](https://github.com/deepseek-ai/deepseek-harness/discussions/7792) [Bug] Models settings shows DeepSeek twice with identical model lists (Web, 0.1.7-rc.2)
- [#7801](https://github.com/deepseek-ai/deepseek-harness/discussions/7801) [Bug] 网页端静默吞掉 session/create 错误；dsh-persona 预设 schema 把 text 改名为 prefix，旧预设无迁移提示直接失效
- [#7927](https://github.com/deepseek-ai/deepseek-harness/discussions/7927) [Bug] iPad/触屏：切换会话首击被 :hover 吞掉；快速双击落到 dblclick，误弹「重命名会话」
- [#4926](https://github.com/deepseek-ai/deepseek-harness/discussions/4926) [Bug] Client Cordis inspect query hangs Pending forever — no timeout, error answers discarded
- [#7924](https://github.com/deepseek-ai/deepseek-harness/discussions/7924) [Bug] 残留的空 .credentials.yaml.lock 让 web 宿主每次启动都失败：启动读取会话密钥也要拿写锁，而非原子创建留下的空锁不在 master 孤儿锁接管范围内（0.1.7-rc.1 实测，master 477b4f4 核对）
- [#7099](https://github.com/deepseek-ai/deepseek-harness/discussions/7099) [Bug] 从聊天引用点开文件时右侧预览失败：fs-error "… is not an absolute path"（Windows）
- [#7014](https://github.com/deepseek-ai/deepseek-harness/discussions/7014) BUG: 冷启动会话列表里，分叉（fork）会话的标题退化成目录名、时间退化成创建时间
- [#7803](https://github.com/deepseek-ai/deepseek-harness/discussions/7803) [Bug] Web 输入框：微软拼音打中文出现拼音落框、候选词错乱，换输入法即恢复（Lexical 0.49.0）
- [#7845](https://github.com/deepseek-ai/deepseek-harness/discussions/7845) [Bug] 仅用账号登录（未配置任何 API key）时 web_search 100% 失败于 WEB_PROVIDER_CREDENTIAL_MISSING，且界面无任何引导
- [#7834](https://github.com/deepseek-ai/deepseek-harness/discussions/7834) [Bug] 删除附件对象后会话每个请求都失败，并被误报为 "DeepSeek Messages transport failed"（附修复补丁）
- [#7782](https://github.com/deepseek-ai/deepseek-harness/discussions/7782) [Bug] Workspace registry becomes inconsistent after deleting workspace  4.
- [#7839](https://github.com/deepseek-ai/deepseek-harness/discussions/7839) [BUG]pnpm clean 在 dsh-v0.1.7-rc.2 上必然失败（tsconfig 的 outDir 与 clean.ts 规则冲突）
- [#7916](https://github.com/deepseek-ai/deepseek-harness/discussions/7916) [bug]Windows `workspace-write` 下所有被沙箱包裹的命令失败于 `SetNamedSecurityInfoW (Win32 5)
- [#7915](https://github.com/deepseek-ai/deepseek-harness/discussions/7915) [Bug] 工作区常驻 Low 完整性标签导致资源管理器把所有文件显示为"来自其他计算机"，且"解除锁定"显示找不到该文件必然失败，移动文件时警告"这些文件可能对你的计算机有害 你的Internet安全设置阻止打开一个或多个文件"
- [#7912](https://github.com/deepseek-ai/deepseek-harness/discussions/7912) [Bug] Windows 非系统盘工作区在 workspace-write 下全部命令不可用：grantWrite 需要 WRITE_OWNER，而工作区目录默认没有
- [#7911](https://github.com/deepseek-ai/deepseek-harness/discussions/7911) [Bug] ResolutionRouter 劫持 require.resolve 时丢失 .paths，导致插件加载期调用即崩
- [#6982](https://github.com/deepseek-ai/deepseek-harness/discussions/6982) [Bug] Android/Termux：0.1.6-alpha.2 完全无法启动 —— host preparation 依赖 node-addon-require-builtin，而它没有 android-arm64 绑定
- [#6767](https://github.com/deepseek-ai/deepseek-harness/discussions/6767) [Bug] Android/Termux：会话写入失败 — flock is not supported on android-arm64

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-27T03:00:32.272Z_