# DSH Bug Watch — 2026-09-25

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 59

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
- [#7436](https://github.com/deepseek-ai/deepseek-harness/discussions/7436) **[Bug] dsh@0.1.5-rc.2 / rc.3 not installable: missing @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.1.5-rc.3**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-24
- [#7448](https://github.com/deepseek-ai/deepseek-harness/discussions/7448) **[Bug] 0.1.5-rc.* 中任意一个版本都装不上：rc.3 是一次未完成的发布**<br/>  分类：General · 标签：— · 最近更新：2026-09-24

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#6226](https://github.com/deepseek-ai/deepseek-harness/discussions/6226) **Bug: subagent-codex runs intermittently never settle - the child completes its turn and exits, but the dsh-side run hangs until a server restart**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-24

## 📝 仅报告 — 无人互动
- [#7802](https://github.com/deepseek-ai/deepseek-harness/discussions/7802) [Bug] 「加载历史」偶发永久卡住、只有刷新能恢复 —— 加载态没有超时/重试，且复用挂起的 openPromise / Loading history can hang forever until a page refresh: no timeout, no retry, and a reused pending openPromise
- [#7699](https://github.com/deepseek-ai/deepseek-harness/discussions/7699) [Bug] [DSH 0.1.7-alpha.2] 默认开启的会话日志遥测字段把请求体撑到 205.87 MB，并永久锁死会话（可复现，附实测数据）
- [#6437](https://github.com/deepseek-ai/deepseek-harness/discussions/6437) [Bug] dsh-client-resources 的 protocolOf 依赖 new URL().hostname，Edge 129 下文件预览显示“文件资源服务不可用”
- [#7735](https://github.com/deepseek-ai/deepseek-harness/discussions/7735) [Bug] Windows：沙箱给工作区根目录盖 Low 完整性标签后，目录内的 .bat/.cmd/.exe 双击弹「无法验证发布者」
- [#7804](https://github.com/deepseek-ai/deepseek-harness/discussions/7804) [Bug] Windows：工作区在非系统盘时 ACL 沙箱必然初始化失败（Win32 5 / grantWrite）—— 非系统盘默认 ACL 不给调用者 WRITE_OWNER
- [#7803](https://github.com/deepseek-ai/deepseek-harness/discussions/7803) [Bug] Web 输入框：微软拼音打中文出现拼音落框、候选词错乱，换输入法即恢复（Lexical 0.49.0）
- [#7801](https://github.com/deepseek-ai/deepseek-harness/discussions/7801) [Bug] 网页端静默吞掉 session/create 错误；dsh-persona 预设 schema 把 text 改名为 prefix，旧预设无迁移提示直接失效
- [#7794](https://github.com/deepseek-ai/deepseek-harness/discussions/7794) [Bug] Compaction drops reasoning effort and busts KV cache; idle watchdog cancels active prefill / 压缩丢失推理强度并破坏 KV 缓存
- [#7800](https://github.com/deepseek-ai/deepseek-harness/discussions/7800) Bug: SessionFormatError "format v4 message requires a producer-owned source kind" - agent turns intermittently fail (core 0.1.7-rc.1)
- [#7797](https://github.com/deepseek-ai/deepseek-harness/discussions/7797) [Bug] Windows 桌面端高分屏缩放导致 Office 预览图截断/放大（LibreOfficeKit 1.5× DPI 缩放冲突）
- [#7792](https://github.com/deepseek-ai/deepseek-harness/discussions/7792) [Bug] Models settings shows DeepSeek twice with identical model lists (Web, 0.1.7-rc.2)
- [#7788](https://github.com/deepseek-ai/deepseek-harness/discussions/7788) [Bug] MCP tool results drop structuredContent — the official computer-use plugin can't reach its own element_token
- [#7787](https://github.com/deepseek-ai/deepseek-harness/discussions/7787) [Bug] dsh-api-session-controller publishes client types that import @deepseek-ai/dsh-client-store, a devDependency only
- [#7635](https://github.com/deepseek-ai/deepseek-harness/discussions/7635) [Bug] 0.1.7-rc.1 no longer heals $DSH_HOME/profiles/node_modules (0.1.6 did) — profiles with locally installed plugins break every child process: run_code and voice input die with "subprocess scope exited before its bootstrap consumed the launch request"
- [#7772](https://github.com/deepseek-ai/deepseek-harness/discussions/7772) [Bug] Cookbook still teaches the retired plugin message source; on 0.1.7+ following it fails the whole turn with "format v4 message requires a producer-owned source kind"
- [#4549](https://github.com/deepseek-ai/deepseek-harness/discussions/4549) [Bug] Scheduler failure leaves dangling tool/call — session permanently returns 400 INVALID_REQUEST (fix: append only the missing tool/result, #4017 follow-up)
- [#7785](https://github.com/deepseek-ai/deepseek-harness/discussions/7785) BUG: generated desktop dev bundle cannot cold start — launcher omits DSH_DESKTOP_PRIMARY_RUNTIME_DIR
- [#7782](https://github.com/deepseek-ai/deepseek-harness/discussions/7782) [Bug] Workspace registry becomes inconsistent after deleting workspace  4.
- [#7115](https://github.com/deepseek-ai/deepseek-harness/discussions/7115) [Bug] Host enters a CPU-bound loop and blocks the event loop when a turn starts in a large session (~700k+ tokens)
- [#7770](https://github.com/deepseek-ai/deepseek-harness/discussions/7770) [Bug][0.1.7-rc.2] Cold sessions with no projcache record render as the workspace folder name — every such conversation in one workspace becomes identically named
- [#7761](https://github.com/deepseek-ai/deepseek-harness/discussions/7761) [bug] bash tool stop working when /tmp full
- [#6539](https://github.com/deepseek-ai/deepseek-harness/discussions/6539) [Bug] Plugin/profile composition drift only surfaces as a fatal crash on the next boot — needs preflight validation and a dsh profile doctor
- [#158](https://github.com/deepseek-ai/deepseek-harness/discussions/158) Bug: 编排workflow 之后点击展开之后没法收起
- [#6659](https://github.com/deepseek-ai/deepseek-harness/discussions/6659) [Bug] 低并发场景下频繁出现服务器繁忙与turn error，零点时段规律性服务中断
- [#2977](https://github.com/deepseek-ai/deepseek-harness/discussions/2977) [BUG]历史加载失败：Failed to fetch（internal）
- [#7709](https://github.com/deepseek-ai/deepseek-harness/discussions/7709) [Bug] Windows: the workspace Low integrity label also lowers the user's own launches from that tree, silently degrading the toolchain inside it
- [#7658](https://github.com/deepseek-ai/deepseek-harness/discussions/7658) [Bug] 会话格式迁移后 dsh_session_log 水位失效：每次请求重发整份日志 → 413 且永久卡死
- [#7701](https://github.com/deepseek-ai/deepseek-harness/discussions/7701) [Bug] 0.1.7-rc.1：首次切换推理档位后 sessionController 失效，后续切换失败
- [#7751](https://github.com/deepseek-ai/deepseek-harness/discussions/7751) [Bug] 0.1.7-rc.1: a required MCP server (failOnStartupError: true) that fails to start no longer stops dsh
- [#7719](https://github.com/deepseek-ai/deepseek-harness/discussions/7719) [Bug][Desktop] subagent-codex spawns process.execPath without ELECTRON_RUN_AS_NODE — codex provider always fails with "app-server protocol stream closed"
- [#6454](https://github.com/deepseek-ai/deepseek-harness/discussions/6454) [Bug] dsh-llm-pi-ai: discoverModels 对目录内置 provider 直接短路，"获取可用模型"永远拿不到新模型（opencode-go / deepseek-v4.1-flash 为例）
- [#7720](https://github.com/deepseek-ai/deepseek-harness/discussions/7720) [Bug Report] Windows: workspace ACL with Modify-only (no WRITE_OWNER) makes the ACL sandbox fail at init, disabling all shell tools
- [#7732](https://github.com/deepseek-ai/deepseek-harness/discussions/7732) [bug] Windows workspace-write 沙箱下执行 npm 包装的 CLI 永久阻塞，并把整个 dsh web 进程拖死
- [#7731](https://github.com/deepseek-ai/deepseek-harness/discussions/7731) [Bug] 工作区快照超时后仍随每条新消息重试，反复阻塞工具执行
- [#7721](https://github.com/deepseek-ai/deepseek-harness/discussions/7721) [Bug] 宿主进程内引入 userland undici 8.11.0 会覆写 Node 内置 fetch 的全局调度槽位：Node 24.13.0（内置 undici 7.18.2）上丢失 content-encoding 解压，直连 fetch 的插件拿到裸 gzip
- [#6550](https://github.com/deepseek-ai/deepseek-harness/discussions/6550) [Bug] 安卓语音输入：输入法组字里带换行时，输入框只落地一部分文本（首段整段丢失）
- [#7669](https://github.com/deepseek-ai/deepseek-harness/discussions/7669) [Bug] 0.1.7-rc.1 待审计划卡片丢失「查看全文」且不再自动打开（slot 条目被永久退役）
- [#7330](https://github.com/deepseek-ai/deepseek-harness/discussions/7330) [Bug] dsh causes massive macOS Swap explosion (300GB+ System Data / 191GB kernel_task) even when using API-only mode
- [#7646](https://github.com/deepseek-ai/deepseek-harness/discussions/7646) [Bug] Windows: after upgrading to 0.1.7-rc.1 every shell command fails at the ACL grant with `SetNamedSecurityInfoW failed (Win32 5): grantWrite(<workspace>)` / 升级到 0.1.7 后所有 shell 命令在沙箱授权阶段立即失败（粘性，需手工修 ACL）
- [#7717](https://github.com/deepseek-ai/deepseek-harness/discussions/7717) [Bug] macOS Desktop：⌃⌘F 全屏快捷键未绑定，双击窗口顶部也无法缩放/填满屏幕（缺少基本窗口交互入口）
- [#7718](https://github.com/deepseek-ai/deepseek-harness/discussions/7718) [Bug] macOS Desktop：双击窗口顶部不会缩放/填满屏幕（标题栏隐藏 + 客户端只实现了拖动，没有缩放通道）
- [#6733](https://github.com/deepseek-ai/deepseek-harness/discussions/6733) [Bug] dsh-web-fetch-http：connect EACCES 时未处理的 'error' 事件导致整个 dsh 进程崩溃（Windows）
- [#7713](https://github.com/deepseek-ai/deepseek-harness/discussions/7713) [Bug] macOS Desktop：stdio MCP 服务器静默起不来 —— GUI 宿主 PATH 不含 homebrew，靠 shebang 找 node 的命令必然失败
- [#7708](https://github.com/deepseek-ai/deepseek-harness/discussions/7708) [Bug] v0.1.7-rc.1在内网/离线环境下 pnpm install 因 cdn.sheetjs.com 域名无法解析而失败
- [#7707](https://github.com/deepseek-ai/deepseek-harness/discussions/7707) [BUG]:最终回复被思考块吞掉
- [#7702](https://github.com/deepseek-ai/deepseek-harness/discussions/7702) [Bug] 工作区选择根目录后无法在该工作区创建对话，并跳转至其他工作区
- [#7682](https://github.com/deepseek-ai/deepseek-harness/discussions/7682) [Bug] Web 插件管理页在读取失败后一直显示“正在读取插件…”
- [#7692](https://github.com/deepseek-ai/deepseek-harness/discussions/7692) [bug] Windows 下 NPM_CONFIG_CACHE 盘符路径大小写不兼容
- [#7123](https://github.com/deepseek-ai/deepseek-harness/discussions/7123) [bug]「只有 reasoning、无可见正文也无工具调用」的响应被判为成功 ⇒ 静默空回复
- [#7622](https://github.com/deepseek-ai/deepseek-harness/discussions/7622) [Bug] Windows: `windows-acl` rung is auto-selected without a probe, but its host-side write grant always fails without SeSecurityPrivilege
- [#7398](https://github.com/deepseek-ai/deepseek-harness/discussions/7398) Bug: tool calls fail with "Cannot read properties of undefined (reading 'prepare')" when running from source (pnpm dsh web)
- [#7138](https://github.com/deepseek-ai/deepseek-harness/discussions/7138) [Bug] Turn changed-files card attributes a concurrent writer's changes to this session (workspace-wide git snapshot, no per-session attribution)
- [#7677](https://github.com/deepseek-ai/deepseek-harness/discussions/7677) [Bug] Firefox 特有：会话历史在"载入历史…"处无限卡住
- [#4178](https://github.com/deepseek-ai/deepseek-harness/discussions/4178) [BUG] 两个 dsh web 实例并发打开同一会话，导致会话日志 seq 冲突、历史记录损坏
- [#6144](https://github.com/deepseek-ai/deepseek-harness/discussions/6144) [Bug] v0→v1 迁移对单条不合规历史记录整体拒载，导致旧会话永久打不开 / Whole-log refusal on one non-conforming legacy record
- [#7493](https://github.com/deepseek-ai/deepseek-harness/discussions/7493) [BUG] Code block copy button fails with execCommand error; manual selection escapes block when overflow is active

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-25T02:55:13.445Z_