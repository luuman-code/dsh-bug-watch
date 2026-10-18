# DSH Bug Watch — 2026-10-18

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 58

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
- [#9966](https://github.com/deepseek-ai/deepseek-harness/discussions/9966) **[Bug] ACP profile: llm-deepseek-account 用 console.info 写 stdout，污染 ACP JSON-RPC 流（0.2.1-rc.2）**<br/>  分类：General · 标签：— · 最近更新：2026-10-17

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#9404](https://github.com/deepseek-ai/deepseek-harness/discussions/9404) **[Bug] dsh v0.2.1-alpha.2: 达到 40% 上下文（约 37.9k/96k）时触发连续/疯狂的上下文压缩死循环**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-17

## 📝 仅报告 — 无人互动
- [#10080](https://github.com/deepseek-ai/deepseek-harness/discussions/10080) [Bug] Local Ollama models answer injected runtime/skill/time context instead of the user's task, so no tool is ever called (0.2.1-rc.2)
- [#7792](https://github.com/deepseek-ai/deepseek-harness/discussions/7792) [Bug] Models settings shows DeepSeek twice with identical model lists (Web, 0.1.7-rc.2)
- [#10079](https://github.com/deepseek-ai/deepseek-harness/discussions/10079) [Bug] Desktop 0.2.1-rc.2 on macOS: host process pins one CPU core; settings.describe() ↔ config-editor.configuration() never settles
- [#10077](https://github.com/deepseek-ai/deepseek-harness/discussions/10077) [Bug] 混合 provider 会话切回 deepseek-official（Anthropic Messages）后必现 400：tool_use 历史缺 thinking 块
- [#10069](https://github.com/deepseek-ai/deepseek-harness/discussions/10069) [Bug] Desktop 0.2.1-rc.2: enabling the experimental "Developer tools" can crash the host after its inspector source closes — "inspector: Host source is closed"
- [#10070](https://github.com/deepseek-ai/deepseek-harness/discussions/10070) [Bug] Desktop 0.2.1-rc.2: persistent terminal leaks PSReadLine prediction ghosts (shell history) into the model context
- [#9184](https://github.com/deepseek-ai/deepseek-harness/discussions/9184) Bug: single-dollar math parsing swallows dollar amounts in assistant prose ($3,641 … $200/mo becomes KaTeX garbage)
- [#9904](https://github.com/deepseek-ai/deepseek-harness/discussions/9904) [Bug] Desktop host 进程因未捕获的 ECONNRESET 异常退出后 web 服务不自恢复（UI 假活、端口全断）
- [#10062](https://github.com/deepseek-ai/deepseek-harness/discussions/10062) Bug report: 0.2.1-rc.2 silently breaks deployments : webRuntime -webStartup
- [#10061](https://github.com/deepseek-ai/deepseek-harness/discussions/10061) [Bug] 长会话中已完成的 Codex 响应被误判 context overflow，随后模型反复自述「预算极低」
- [#9330](https://github.com/deepseek-ai/deepseek-harness/discussions/9330) [Bug] 未配置 websearch 的情况下，web_search 调用仍触发了提供商 Response API 侧的联网搜索并产生扣费
- [#10041](https://github.com/deepseek-ai/deepseek-harness/discussions/10041) [bug] Auto review: every remaining tool call returns "aborted before dispatch" after a mid-turn /permission auto switch
- [#10051](https://github.com/deepseek-ai/deepseek-harness/discussions/10051) [Bug][Desktop] Desktop app crashes on launch with STATUS_BREAKPOINT on Windows 11 build 26200 (Electron 44.7.0)
- [#10048](https://github.com/deepseek-ai/deepseek-harness/discussions/10048) [BUG]: The reasoning levels do not have any effect on custom API models when off is used
- [#10045](https://github.com/deepseek-ai/deepseek-harness/discussions/10045) [Bug] Claude 系模型在小参数工具调用中随机把数组/数字参数输出成 JSON 字符串 / Claude-family models randomly emit array/number tool arguments as JSON strings, even in small calls (follow-up to #4769)
- [#9936](https://github.com/deepseek-ai/deepseek-harness/discussions/9936) [Bug] Desktop profile 上插件市场更新任何插件都失败：install_bundle 因 HMR 可用而拒绝已安装包（already-installed）
- [#10040](https://github.com/deepseek-ai/deepseek-harness/discussions/10040) [Bug] 运行时重载导致权限选择器消失与工具永久失效：permission-presets 与 auto 预设的依赖死锁（0.2.1-rc.2 仍复现）
- [#10009](https://github.com/deepseek-ai/deepseek-harness/discussions/10009) [Bug] Windows 沙箱：workspace-write 下任何子进程都以 0xC0000142 死亡（read-only 正常）
- [#9876](https://github.com/deepseek-ai/deepseek-harness/discussions/9876) [Bug] exit_plan_mode presents a plan while the background subagents it depends on are still running — plan finalization must wait for all delegations
- [#10030](https://github.com/deepseek-ai/deepseek-harness/discussions/10030) [Bug] 桌面端自更新失败后连锁故障：沙箱常驻 Low 完整性标签把DSH与同目录程序一起降权
- [#10025](https://github.com/deepseek-ai/deepseek-harness/discussions/10025) [Bug] session/list fails for all sessions when one session's live and persisted headers disagree
- [#9971](https://github.com/deepseek-ai/deepseek-harness/discussions/9971) [bug] 一条 source.kind='plugin' 的入站消息会让整个 Session 永久停止写入磁盘（rc.1 复现，rc.2 代码未改；仅重启可恢复）
- [#10007](https://github.com/deepseek-ai/deepseek-harness/discussions/10007) [Bug]回合运行中改模型/思维强度/权限，会让会话所有工具调用失效（sessionProjections in inactive context）
- [#10018](https://github.com/deepseek-ai/deepseek-harness/discussions/10018) [Bug] libreoffice-kit: installedPackageExists() reports missing packages as installed inside an ASAR archive
- [#10016](https://github.com/deepseek-ai/deepseek-harness/discussions/10016) [Bug] desktop: package scripts pass a non-JavaScript npm_execpath to node as the entry point
- [#9957](https://github.com/deepseek-ai/deepseek-harness/discussions/9957) [Bug] 设置 → 通用设置 → 权限：默认权限预设永远保存不了 —— revision 校验落在插件树 reload 之后，且客户端把冲突静默抹掉（master 687f282e 仍在）
- [#9937](https://github.com/deepseek-ai/deepseek-harness/discussions/9937) [Bug] 插件「更新」从 0.2.1-alpha.3 起必然失败：installBundle 复用「新增安装」守卫，只比包名不比版本
- [#10012](https://github.com/deepseek-ai/deepseek-harness/discussions/10012) [Bug] Settings → 通用设置 → 权限: choosing 完全权限 does not persist (permission.defaultPreset never written to the profile patch)
- [#9915](https://github.com/deepseek-ai/deepseek-harness/discussions/9915) [Bug] 配置 API Key 后，无法切换回账号登录使用
- [#10003](https://github.com/deepseek-ai/deepseek-harness/discussions/10003) [Bug] Desktop auto-updater fails with "desktop update: task inspection timed out" due to live renderer connection deadlock in installDesktopUpdateTaskControl
- [#10000](https://github.com/deepseek-ai/deepseek-harness/discussions/10000) [Bug] Screen reader: keyboard commands interfere and keypresses are doubled
- [#9998](https://github.com/deepseek-ai/deepseek-harness/discussions/9998) [Bug] After a mid-turn crash + model continuation, the tool registry degrades 40→13 (bash/read → UNKNOWN_TOOL) and never rebinds
- [#9996](https://github.com/deepseek-ai/deepseek-harness/discussions/9996) [Bug] macOS desktop: double-clicking the top bar does not zoom/maximize the window
- [#9812](https://github.com/deepseek-ai/deepseek-harness/discussions/9812) [Bug] Live sessions become permanently tool-dead and lose the permission picker: cannot get required service "sessionProjections" in inactive context, turn/end still reports completed
- [#9986](https://github.com/deepseek-ai/deepseek-harness/discussions/9986) [Bug] WorkspaceController becomes unavailable when a decompressed JSONL file is left in the session directory
- [#9984](https://github.com/deepseek-ai/deepseek-harness/discussions/9984) [Bug] 0.2.1-rc.2 desktop: workspaceController unavailable — cannot add workspace (storage-domain disabled)
- [#9978](https://github.com/deepseek-ai/deepseek-harness/discussions/9978) [BUG]升级报错，桌面端升级0.2.1-rc.1报错Web RPC启动失败，回退0.2.0-rc.2后恢复
- [#6889](https://github.com/deepseek-ai/deepseek-harness/discussions/6889) [Bug] Live sessions have no retention policy: heap grows with opened-session count and OOMs at any heap cap (128 GB host, measured per-session costs)
- [#9289](https://github.com/deepseek-ai/deepseek-harness/discussions/9289) [Bug][高影响] 文档收尾期间 Stop 无法中断，消息注入与 /goal 无法启动下一轮（0.2.0-rc.2，附复现）
- [#9974](https://github.com/deepseek-ai/deepseek-harness/discussions/9974) [BUG] DSH桌面端应用内更新在 Windows 上必然失败：宿主完成收尾后进程不退出
- [#8991](https://github.com/deepseek-ai/deepseek-harness/discussions/8991) [Bug] workspace-write sandbox: every confined pwsh command exits with 0xC0000142 (STATUS_DLL_INIT_FAILED), no stderr
- [#9818](https://github.com/deepseek-ai/deepseek-harness/discussions/9818) [Bug] Windows 工作区供给：缺 world deny 时整树 ACL 重写会焊死宿主事件循环（0.2.0-rc.2 可复现，含源码定位）
- [#9961](https://github.com/deepseek-ai/deepseek-harness/discussions/9961) [Bug][Windows] workspace-write 下持久 pwsh 报 "PTY shell exited during startup"（ACL runner: GetStdHandle null stdin handle）
- [#9955](https://github.com/deepseek-ai/deepseek-harness/discussions/9955) [bug]DSH 0.2.1-rc.1（web profile）把会话权限设为「Auto」后，任何通过 run_code 调用的内层工具（PTC 子调用）都会在 dispatch 后约 1–2 秒被取消
- [#9949](https://github.com/deepseek-ai/deepseek-harness/discussions/9949) [Bug] `subagent_codex` fails on any model newer than the pinned Codex CLI (0.153.4)
- [#8409](https://github.com/deepseek-ai/deepseek-harness/discussions/8409) [Bug][Windows] Windows ACL 沙箱（workspace-write）三个授权缺陷：受保护 DACL 子目录永不获授权 / desktop 根授权缓存不复核不自愈 / 标准用户+非系统盘 grantWrite 失败（Win32 5）
- [#9943](https://github.com/deepseek-ai/deepseek-harness/discussions/9943) [Bug][Windows] 装在 Program Files 的 DSH 更新静默失效：nightly feed 缺 isAdminRightsRequired，安装器未提权、无法写入受保护目录
- [#9708](https://github.com/deepseek-ai/deepseek-harness/discussions/9708) [Bug][Web] Fuzzy search can match a Unicode character absent from the candidate
- [#9707](https://github.com/deepseek-ai/deepseek-harness/discussions/9707) [Bug][Preview] 1904-epoch XLS conversion adds the calendar offset to elapsed durations
- [#9706](https://github.com/deepseek-ai/deepseek-harness/discussions/9706) [Bug][Web] A successful plugin settings save silently discards edits made while it is pending
- [#9790](https://github.com/deepseek-ai/deepseek-harness/discussions/9790) [BUG] Windows：文件「打开方式」菜单列出了系统里全部注册处理器，而非推荐项（应使用 ASSOC_FILTER_RECOMMENDED）
- [#9934](https://github.com/deepseek-ai/deepseek-harness/discussions/9934) [Bug] Continuable subagent settlement can be silently dropped when the parent session is not live
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#9925](https://github.com/deepseek-ai/deepseek-harness/discussions/9925) [Bug] dsh web: heap grows unbounded to ~8 GB OOM — measurements and a local fix
- [#9916](https://github.com/deepseek-ai/deepseek-harness/discussions/9916) [bug] pwsh tool fails on every command on Windows 10 22H2 — exit code 3221225794 (0xC0000142), no output
- [#810](https://github.com/deepseek-ai/deepseek-harness/discussions/810) [Bug] Windows: sandboxed pwsh always dies with 0xC0000142 under console-less host (desktop launch path)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-18T02:33:36.285Z_