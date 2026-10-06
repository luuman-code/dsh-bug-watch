# DSH Bug Watch — 2026-10-06

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 55

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#8428](https://github.com/deepseek-ai/deepseek-harness/discussions/8428) **[Bug][Windows][桌面版] 在 VS Code / Cursor 中打开必现失败：宿主运行模式变量泄漏给子进程**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-05

## 📝 仅报告 — 无人互动
- [#7915](https://github.com/deepseek-ai/deepseek-harness/discussions/7915) [Bug] 工作区常驻 Low 完整性标签导致资源管理器把所有文件显示为"来自其他计算机"，且"解除锁定"显示找不到该文件必然失败，移动文件时警告"这些文件可能对你的计算机有害 你的Internet安全设置阻止打开一个或多个文件"
- [#8971](https://github.com/deepseek-ai/deepseek-harness/discussions/8971) [Bug][Windows] 桌面端 0.2.0-rc.2：workspace-write 下沙箱启动 pwsh 即以 0xC0000142 死亡，同机 0.1.5-rc.2 正常
- [#8955](https://github.com/deepseek-ai/deepseek-harness/discussions/8955) [Bug] update_goal 反复报 stale 错：模型拿着过期 revision 无限重试，不自愈
- [#7368](https://github.com/deepseek-ai/deepseek-harness/discussions/7368) [Bug] [0.1.6-alpha.2]Cannot read properties of undefined (reading 'prepare') on every tool call in web profile — dsh-tools Symbol identity mismatch
- [#7908](https://github.com/deepseek-ai/deepseek-harness/discussions/7908) [Bug] build:lib fails with MISSING_EXPORT "SettingsProvider" from dsh-settings on 0.1.7-rc.2
- [#8485](https://github.com/deepseek-ai/deepseek-harness/discussions/8485) [BUG] (maybe) DSH Windows ACL sandbox: two defects make `workspace-write` unusable
- [#8849](https://github.com/deepseek-ai/deepseek-harness/discussions/8849) [Bug] 子代理结算时 projection registration 失效会让整个进程致命退出（fatal load failure / exit 1）
- [#8846](https://github.com/deepseek-ai/deepseek-harness/discussions/8846) [Bug] read 工具按 UTF-16 码元截断会切开代理对，产生非法 JSON 并使会话永久 400
- [#7894](https://github.com/deepseek-ai/deepseek-harness/discussions/7894) [Bug][0.1.7-rc.2] goal-round-driver + broken compaction caused runaway 642M token explosion in a single session (Continuing goal infinite loop)
- [#8958](https://github.com/deepseek-ai/deepseek-harness/discussions/8958) [Bug] 桌面版 Windows 右上角"VS Code"打开失败：`ELECTRON_RUN_AS_NODE=1` 泄漏进子进程环境，Code.exe 以 Node 模式运行并退出 1
- [#8957](https://github.com/deepseek-ai/deepseek-harness/discussions/8957) [Bug][Windows][Desktop 0.2.0-rc.2] 启动后一段时间右上角窗口控件区未被壁纸覆盖
- [#8956](https://github.com/deepseek-ai/deepseek-harness/discussions/8956) [bug]依旧是low完整性标签的问题
- [#8810](https://github.com/deepseek-ai/deepseek-harness/discussions/8810) [Bug] Lossless JSON snapshots change raw values into objects: exact-integer transport
- [#8908](https://github.com/deepseek-ai/deepseek-harness/discussions/8908) [Bug] Image prompt admission reports infrastructure failures as session/agent-busy, and the UI drops details.reason
- [#8947](https://github.com/deepseek-ai/deepseek-harness/discussions/8947) [Bug] "DeepSeek Messages transport failed" is a masked transport timeout — undici's 300 s bodyTimeout silently caps streamIdleTimeoutMs（传输层 300 秒上限被误报为传输失败）
- [#8674](https://github.com/deepseek-ai/deepseek-harness/discussions/8674) [Bug] dsh-app-boot 的 CJS 解析钩子被 require('process/') 打崩：resolve.paths() 返回 null → 插件 failed to import
- [#8273](https://github.com/deepseek-ai/deepseek-harness/discussions/8273) [bug] The "Deep diving…" run status keeps showing 5–22 s after the answer is complete — the turn closes late in a workspace with many untracked files
- [#8927](https://github.com/deepseek-ai/deepseek-harness/discussions/8927) [Bug] Built-in `standard` preset fails to load — `computer-use` group rows "never started" (not the persona collision)
- [#8926](https://github.com/deepseek-ai/deepseek-harness/discussions/8926) [Bug][Linux] Empty XDG data variables hide registered file handlers and icons
- [#8924](https://github.com/deepseek-ai/deepseek-harness/discussions/8924) [Bug] All tool calls die with `Cannot read properties of undefined (reading 'prepare')` when web profile has its own dsh-tools copy (dual-package Symbol hazard)
- [#8503](https://github.com/deepseek-ai/deepseek-harness/discussions/8503) [Bug][Windows 10 19045] desktop launch path: workspace-write confined children die with 0xC0000142
- [#7123](https://github.com/deepseek-ai/deepseek-harness/discussions/7123) [bug]「只有 reasoning、无可见正文也无工具调用」的响应被判为成功 ⇒ 静默空回复
- [#8830](https://github.com/deepseek-ai/deepseek-harness/discussions/8830) [Bug] 会话永久锁死 / 每轮都 400：`Content Exists Risk`、`INVALID_REQUEST` —— 两种机制 · 三个毒源 · 三张面孔 ＋ 可落地的修复建议（更新 2026-10-06）
- [#8923](https://github.com/deepseek-ai/deepseek-harness/discussions/8923) [Bug] Web GUI composer: slash-token style leak, boundary-Backspace trigger revival, Safari caret desync swallowing edits（输入框光标失步/样式残留）
- [#8915](https://github.com/deepseek-ai/deepseek-harness/discussions/8915) [Bug] GUI「任务」面板在 turn/start 被清空：todos 投影只活一个 turn（清单"一发言就消失"）
- [#8839](https://github.com/deepseek-ai/deepseek-harness/discussions/8839) [Bug] "open in app" breaks due to one broken handler — `windowsFileApplications` fails on a stale COM handler (Windows)
- [#8910](https://github.com/deepseek-ai/deepseek-harness/discussions/8910) [Bug][Desktop 0.2.0-rc.2] 新会话继承工作区最近会话的 agentPreset，该预设被移除后新建会话硬失败（建议回退默认预设）
- [#8571](https://github.com/deepseek-ai/deepseek-harness/discussions/8571) [Bug] Desktop app loses ClearType subpixel antialiasing on Windows at 150% scaling
- [#423](https://github.com/deepseek-ai/deepseek-harness/discussions/423) [Bug Report] Windows 工作区：连接后外部创建/移入的子目录永远无法写入（capability ACE 永不补授）
- [#8312](https://github.com/deepseek-ai/deepseek-harness/discussions/8312) [Bug][Windows] workspace-write leaves a permanent Low integrity label on the project, breaking every other tool used on it — several reports, still unchanged in 0.2.0-rc.2
- [#8906](https://github.com/deepseek-ai/deepseek-harness/discussions/8906) [BUG]用户信息处头像可拖动，拖入对话后被当作图片附件
- [#7856](https://github.com/deepseek-ai/deepseek-harness/discussions/7856) [Bug] Desktop RC2: document reload after Client HMR boots with stale plugin graph URL (404)
- [#8904](https://github.com/deepseek-ai/deepseek-harness/discussions/8904) [Bug] Desktop 0.2.0-rc.2: one client entry left without a fiber is fatal — upgrading a plugin and reloading the document crashes the whole app
- [#8833](https://github.com/deepseek-ai/deepseek-harness/discussions/8833) [Bug] Markdown 文件链接含「反斜杠 + ASCII 标点」时丢一级路径分隔符，预览器报「文件不存在」
- [#8902](https://github.com/deepseek-ai/deepseek-harness/discussions/8902) BUG: the plugin(inital) team:role cannot change there model use
- [#8497](https://github.com/deepseek-ai/deepseek-harness/discussions/8497) [Bug][Windows 10] workspace-write 沙箱下所有子进程 0xC0000142（连 cmd.exe 都起不来）— Default DACL 使用 capability SID 所致
- [#7677](https://github.com/deepseek-ai/deepseek-harness/discussions/7677) [Bug] Firefox 特有：会话历史在"载入历史…"处无限卡住
- [#8476](https://github.com/deepseek-ai/deepseek-harness/discussions/8476) [Bug] Repeated HTTP 400 path-expansion error prevents subsequent turns in an existing conversation
- [#8440](https://github.com/deepseek-ai/deepseek-harness/discussions/8440) [Bug] ACP `session/list` 不返回 `SessionInfo.title` / `updatedAt`,Paseo客户端把所有会话显示成"未命名"
- [#8468](https://github.com/deepseek-ai/deepseek-harness/discussions/8468) [Bug] 子代理模型授权快照可能"出生即过期"：第三方插件重命名 provider id 后缺少诊断与迁移路径
- [#8410](https://github.com/deepseek-ai/deepseek-harness/discussions/8410) Bug: `[::1]` in child `NO_PROXY` breaks Python/httpx before any request
- [#8844](https://github.com/deepseek-ai/deepseek-harness/discussions/8844) [Bug] pi-ai adapter discards the provider's stable error code, so upstream stream interruptions become non-retryable PI_AI_ERROR
- [#8827](https://github.com/deepseek-ai/deepseek-harness/discussions/8827) [Bug] workflow 工具调用永不返回，父 Agent 卡死在 step/start 后无事件
- [#8829](https://github.com/deepseek-ai/deepseek-harness/discussions/8829) [Bug] `usage` in the session journal understates input cache-miss vs vendor billing ~26×
- [#8665](https://github.com/deepseek-ai/deepseek-harness/discussions/8665) [Bug Report] Windows ACL 沙箱：工作区被打上「可继承的 Low 完整性标签」→ 目录内所有 .lnk 变白图标；非预期目录亦会被静默改写 ACL
- [#8897](https://github.com/deepseek-ai/deepseek-harness/discussions/8897) [Bug][Windows 桌面端] workspace-write 沙箱下 pwsh 工具每次调用都崩溃（0xC0000142）
- [#8898](https://github.com/deepseek-ai/deepseek-harness/discussions/8898) [Bug] Plugin Manager rejects or misclassifies HTTP tarball URLs with query parameters
- [#8617](https://github.com/deepseek-ai/deepseek-harness/discussions/8617) [Bug] DSH 0.2.0-rc.2 crashes (SIGABRT, exit 134) during session format v3→v4 migration — and older pinned versions can no longer read the store
- [#8858](https://github.com/deepseek-ai/deepseek-harness/discussions/8858) [Bug] Windows：受限权限档（read-only / workspace-write）下持久终端无法启动
- [#8570](https://github.com/deepseek-ai/deepseek-harness/discussions/8570) [Bug] subagent outcome drops turn-end error detail, so 429/quota failures arrive opaque
- [#8675](https://github.com/deepseek-ai/deepseek-harness/discussions/8675) [Bug][Windows] 极简模式终端必然启动失败：沙箱 runner 以 Electron 主程序充当伪控制台客户端
- [#8599](https://github.com/deepseek-ai/deepseek-harness/discussions/8599) Bug: every command under `workspace-write` dies with `0xC0000142` (STATUS_DLL_INIT_FAILED) on Windows desktop
- [#8469](https://github.com/deepseek-ai/deepseek-harness/discussions/8469) [Bug] fs-observation guidance is sent twice every turn: section "tool:edit" duplicates what section "tool:write" already says
- [#8677](https://github.com/deepseek-ai/deepseek-harness/discussions/8677) [Bug] 新版界面渐变色显示有重影bug

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-06T04:17:35.058Z_