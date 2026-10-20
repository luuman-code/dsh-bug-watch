# DSH Bug Watch — 2026-10-20

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 63

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
- [#9966](https://github.com/deepseek-ai/deepseek-harness/discussions/9966) **[Bug] ACP profile: llm-deepseek-account 用 console.info 写 stdout，污染 ACP JSON-RPC 流（0.2.1-rc.2）**<br/>  分类：General · 标签：— · 最近更新：2026-10-19

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#9682](https://github.com/deepseek-ai/deepseek-harness/discussions/9682) **[Bug] Windows: 受限沙箱档下子进程创建必现 0xC0000142 (STATUS_DLL_INIT_FAILED)，danger-full-access 档正常**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-19

## 📝 仅报告 — 无人互动
- [#8653](https://github.com/deepseek-ai/deepseek-harness/discussions/8653) Bug: 模型输出空 id 的 tool-call 会导致会话永久卡死（format v4 tool/result ... requires toolCallId matching its tool source）
- [#10364](https://github.com/deepseek-ai/deepseek-harness/discussions/10364) [Bug] 第三方插件引入旧版 dsh-tools，旧版组件因不兼容被禁用，导致启动失败
- [#10362](https://github.com/deepseek-ai/deepseek-harness/discussions/10362) [Bug] 桌面版 0.2.1-rc.2 / Windows：workspace-write 下所有 shell 命令 0xC0000142（独立复现）
- [#10266](https://github.com/deepseek-ai/deepseek-harness/discussions/10266) [Bug] 全新会话中斜杠命令不显示结果（0.2.1-rc.2，command-only 快照被判为不活跃）
- [#10349](https://github.com/deepseek-ai/deepseek-harness/discussions/10349) [Bug] 「打开方式」列出所有已注册处理器，选中非适用程序后助手进程永久挂起（Windows）
- [#10307](https://github.com/deepseek-ai/deepseek-harness/discussions/10307) [Bug] Persistence pipeline wedges permanently after one failed drain batch — session becomes a silent zombie until service restart
- [#10343](https://github.com/deepseek-ai/deepseek-harness/discussions/10343) [Bug] macOS Desktop ships without `CFBundleLocalizations`, so system dialogs and menus stay English on Chinese systems
- [#10357](https://github.com/deepseek-ai/deepseek-harness/discussions/10357) [Bug] Subagent epoch that burns its entire output budget on reasoning (zero tool calls, zero output) settles as `completed` with an empty closing message
- [#10354](https://github.com/deepseek-ai/deepseek-harness/discussions/10354) [Bug] Models add-provider card drops the declared flag for a configurable provider
- [#10352](https://github.com/deepseek-ai/deepseek-harness/discussions/10352) [Bug Report] Linux 微信截图无法粘贴进 composer：剪贴板对 image/* 请求一律返回 BMP 字节（Arch + WeChat Linux AppImage）
- [#10353](https://github.com/deepseek-ai/deepseek-harness/discussions/10353) [Bug] Web composer IME garbling is caused by browser page translation — root cause confirmed by controlled experiment, minimal fix included
- [#4276](https://github.com/deepseek-ai/deepseek-harness/discussions/4276) Bug: acp permission requests carry only toolCallId, so no client can describe what it is approving
- [#9290](https://github.com/deepseek-ai/deepseek-harness/discussions/9290) Bug Report: Windows 上「用 VS Code 打开」始终 502 Bad Gateway
- [#8783](https://github.com/deepseek-ai/deepseek-harness/discussions/8783) [Bug] Session indexing still fails on 0.2.1-alpha.2: historical revision churn + isolated in-memory Agent index
- [#10040](https://github.com/deepseek-ai/deepseek-harness/discussions/10040) [Bug] 运行时重载导致权限选择器消失与工具永久失效：permission-presets 与 auto 预设的依赖死锁（0.2.1-rc.2 仍复现）
- [#10323](https://github.com/deepseek-ai/deepseek-harness/discussions/10323) [Bug] 网络波动后，DSH 界面卡死或长时间无响应
- [#9695](https://github.com/deepseek-ai/deepseek-harness/discussions/9695) [Bug] session_search 永久 30s 超时：:memory: FTS 索引 + 单事务对账 + 工具超时中止，大语料必然死锁
- [#10245](https://github.com/deepseek-ai/deepseek-harness/discussions/10245) [Bug] ask_user_question 长内容时选项不可见，只能关面板放弃选择（0.2.1-rc.2）
- [#10279](https://github.com/deepseek-ai/deepseek-harness/discussions/10279) [Bug] 5-min /compact cancel on v0.2.1-rc.2 — streamIdleTimeoutMs patch not applied (regression)
- [#9949](https://github.com/deepseek-ai/deepseek-harness/discussions/9949) [Bug] `subagent_codex` fails on any model newer than the pinned Codex CLI (0.153.4)
- [#10319](https://github.com/deepseek-ai/deepseek-harness/discussions/10319) [Bug] cannot get required service "sessionProjections" in inactive context — terminal-bash 护栏在 owner scope 销毁后仍被全局派发触发
- [#9916](https://github.com/deepseek-ai/deepseek-harness/discussions/9916) [bug] Windows 沙箱 runner 启动失败 → pwsh 全部报 0xC0000142 (STATUS_DLL_INIT_FAILED)
- [#10318](https://github.com/deepseek-ai/deepseek-harness/discussions/10318) [Bug][Web Search settings] A refused API-key replacement is treated as saved when an old key exists
- [#10317](https://github.com/deepseek-ai/deepseek-harness/discussions/10317) [Bug] Desktop 0.2.1-rc.2 (Windows x64): renderer exits with "launch-failed" on every startup; main then crashes with "desktop welcome: Web RPC failed"
- [#9550](https://github.com/deepseek-ai/deepseek-harness/discussions/9550) Bug: ctx.skills.register() does not default `source`, so plugin-registered skills fail to load
- [#6934](https://github.com/deepseek-ai/deepseek-harness/discussions/6934) [Bug] Desktop shell: plugin host APIs 403 for the renderer, and shared web-profile plugins never load (patches attached)
- [#10302](https://github.com/deepseek-ai/deepseek-harness/discussions/10302) [Bug] Desktop 0.2.1-rc.2 (macOS): all /api requests return 403 (Origin: dsh-app://app) — 无法新建会话
- [#10300](https://github.com/deepseek-ai/deepseek-harness/discussions/10300) Bug report: live-streamed assistant text corrupted in the Web GUI (duplicated boundaries, dropped fragments) until reload
- [#10158](https://github.com/deepseek-ai/deepseek-harness/discussions/10158) [Bug] send_message to a continuable child fails with "subagent is unavailable" (NOT_RESUMABLE) after that child settles, and the real cause is swallowed
- [#10294](https://github.com/deepseek-ai/deepseek-harness/discussions/10294) [Bug] Windows 桌面版 Open In → VS Code 必然失败（dsh web 正常）：ELECTRON_RUN_AS_NODE 泄漏到被启动的 launcher
- [#10292](https://github.com/deepseek-ai/deepseek-harness/discussions/10292) [Bug] 运行中写入 profile 配置会让 permissionPresets 服务在实例运行期内永久消失（记忆中枢恒报 no-permission-service，重启才恢复）
- [#10293](https://github.com/deepseek-ai/deepseek-harness/discussions/10293) [Bug]pnpm run start:desktop 每次启动都重建 primary runtime，重启一次约 5–6 分钟
- [#10260](https://github.com/deepseek-ai/deepseek-harness/discussions/10260) [Bug] Workspace validation admits WSL UNC paths the file toolchain cannot serve
- [#10271](https://github.com/deepseek-ai/deepseek-harness/discussions/10271) [Bug][Desktop] removeBundle 先写盘后查 fiber：已加载插件更新必失败并留下「bundles 缺失、依赖还在」半状态（bundle-in-use）
- [#10276](https://github.com/deepseek-ai/deepseek-harness/discussions/10276) [BUG]v0.2.1-rc.2遇到完全权限下删除会话文件夹
- [#8312](https://github.com/deepseek-ai/deepseek-harness/discussions/8312) [Bug][Windows] workspace-write leaves a permanent Low integrity label on the project, breaking every other tool used on it — several reports, still unchanged in 0.2.0-rc.2
- [#10259](https://github.com/deepseek-ai/deepseek-harness/discussions/10259) [Bug] 0.2.1-rc.2: experimental Inspector terminates the Host at a ~69-byte retained-state budget gap (field crash, quantified)
- [#10257](https://github.com/deepseek-ai/deepseek-harness/discussions/10257) [Bug][Desktop/macOS] 第三方插件初始化等待交互时，启动停留在隐藏窗口状态，缺少超时诊断和恢复入口
- [#10254](https://github.com/deepseek-ai/deepseek-harness/discussions/10254) [Bug] macOS 添加工作区：系统文件夹选择框首次点击被吞，需再点一次或切换窗口
- [#10248](https://github.com/deepseek-ai/deepseek-harness/discussions/10248) [BUG] PC 客户端与 Web 环境下，会话反馈提交失败
- [#10253](https://github.com/deepseek-ai/deepseek-harness/discussions/10253) [Bug] Windows 杀软把「打开方式」生成的一次性 associations.ps1 判为 Trojan/PS.PsLoader.A，每次查询弹 2 个威胁且无法加白
- [#10247](https://github.com/deepseek-ai/deepseek-harness/discussions/10247) [Bug] dsh-workspace-changes 的会话快照在 %TEMP% 清理不彻底，长期堆积会把 Windows 登录拖慢到 90 秒以上
- [#10241](https://github.com/deepseek-ai/deepseek-harness/discussions/10241) [BUG] workspace-write 沙箱下所有子进程都以 0xC0000142 失败（含 cmd.exe）
- [#10240](https://github.com/deepseek-ai/deepseek-harness/discussions/10240) [Bug] PreToolUse hook exiting with code 2 does not block the tool (Windows)
- [#10233](https://github.com/deepseek-ai/deepseek-harness/discussions/10233) [Bug] 0.2.1-rc.2：permission-presets × auto-review 环形死锁导致 permissions 投影永久丢失（附 32 键判据与可复现证据）
- [#8844](https://github.com/deepseek-ai/deepseek-harness/discussions/8844) [Bug] pi-ai adapter discards the provider's stable error code, so upstream stream interruptions become non-retryable PI_AI_ERROR
- [#810](https://github.com/deepseek-ai/deepseek-harness/discussions/810) [Bug] Windows: sandboxed pwsh always dies with 0xC0000142 under console-less host (desktop launch path)
- [#10231](https://github.com/deepseek-ai/deepseek-harness/discussions/10231) [Bug] Desktop 0.2.1-rc.x: 插件市场更新全部失败 — installBundle 的 hmr 守卫把「升级已装插件」误判为「重复安装」
- [#10234](https://github.com/deepseek-ai/deepseek-harness/discussions/10234) [BUG] Windows：文件「打开方式」把列表第一项标成默认，认不出商店应用的真实默认程序
- [#10162](https://github.com/deepseek-ai/deepseek-harness/discussions/10162) [Bug] open-in-app: VS Code (and every Electron app) cannot be launched on Windows — ELECTRON_RUN_AS_NODE leaks into the child environment
- [#10216](https://github.com/deepseek-ai/deepseek-harness/discussions/10216) [Bug][Windows][FAT/exFAT] 两项静默失效：ACL 沙箱在不存储 DACL 的卷上"授权成功但零效果"（与出厂 README 的 "fails loudly" 相反）；版本令牌在 2 秒时间戳卷上漏检外部改动
- [#10113](https://github.com/deepseek-ai/deepseek-harness/discussions/10113) [Bug] macOS：/usr/local/bin 为 0700 时 “Manage dsh Command…” 安装失败（EACCES lstat）
- [#10209](https://github.com/deepseek-ai/deepseek-harness/discussions/10209) [Bug] Changed-files card 404s after Host restart: workspace/changes persists only {turn}, the summary lives in memory
- [#10129](https://github.com/deepseek-ai/deepseek-harness/discussions/10129) [Bug] 内置会话标题插件几乎从不更新：输出额度 64 个 token 被思考吃光，失败还完全静默（DSH 0.2.1-rc.2）
- [#10167](https://github.com/deepseek-ai/deepseek-harness/discussions/10167) [Bug] Gemini 3.x 在调用 cordis_inspect_query 后永久报 HTTP 400：工具返回的 JSON Schema `$ref: "#/$defs/loaderExpression"` 被误判为多模态 display_name（附根因与修复建议）
- [#10138](https://github.com/deepseek-ai/deepseek-harness/discussions/10138) [Bug] 网关 preflight 拒绝无法归类为上下文溢出，overflow 恢复不触发，会话永久卡死（附最小补丁）
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#10195](https://github.com/deepseek-ai/deepseek-harness/discussions/10195) [BUG][Windows 0.2.1-rc.2] DeepSeek Messages 流式 tool 参数 JSON 损坏 → MALFORMED_RESPONSE 整轮中止且不重试
- [#10217](https://github.com/deepseek-ai/deepseek-harness/discussions/10217) [bug] after click "check for updates", full screen DSH will black screen, and never come back
- [#9718](https://github.com/deepseek-ai/deepseek-harness/discussions/9718) [Bug] Windows desktop: "browser time zone is unavailable" blocks chat with British Columbia Standard Time
- [#10090](https://github.com/deepseek-ai/deepseek-harness/discussions/10090) [Bug] 宿主进程是 Electron 时，subprocess / sandbox runner 挂死（process.execPath 缺少 ELECTRON_RUN_AS_NODE）

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-20T02:59:46.668Z_