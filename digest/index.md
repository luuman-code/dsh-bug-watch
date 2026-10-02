# DSH Bug Watch — 2026-10-02

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 47

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#8485](https://github.com/deepseek-ai/deepseek-harness/discussions/8485) [BUG] (maybe) DSH Windows ACL sandbox: two defects make `workspace-write` unusable
- [#8617](https://github.com/deepseek-ai/deepseek-harness/discussions/8617) [Bug] DSH 0.2.0-rc.2 crashes (SIGABRT, exit 134) during session format v3→v4 migration — and older pinned versions can no longer read the store
- [#810](https://github.com/deepseek-ai/deepseek-harness/discussions/810) [Bug] Windows: sandboxed pwsh always dies with 0xC0000142 under console-less host (desktop launch path)
- [#8614](https://github.com/deepseek-ai/deepseek-harness/discussions/8614) Bug: web 重启后恢复的会话发送消息 → 客户端崩溃黑屏（uiConversation.binding: unknown session）
- [#7471](https://github.com/deepseek-ai/deepseek-harness/discussions/7471) [Bug] 内测声明弹窗在设置写入失败时永久锁死界面（无任何逃生口）
- [#8613](https://github.com/deepseek-ai/deepseek-harness/discussions/8613) [Bug] Windows: pwsh 工具在 workspace-write 沙箱下 100% 失败（0xC0000142），同参数 runner 直调正常
- [#4615](https://github.com/deepseek-ai/deepseek-harness/discussions/4615) [Bug] dsh-llm-pi-ai sends non png/jpeg/gif images as-is; LM Studio rejects webp with 400 "'url' field must be a base64 encoded image."
- [#8610](https://github.com/deepseek-ai/deepseek-harness/discussions/8610) [Bug] 桌面端侧栏：冷会话（未打开过）的标题一律显示"未命名"，投影缓存里的 title 行不被采用（0.2.0-rc.2）
- [#8603](https://github.com/deepseek-ai/deepseek-harness/discussions/8603) [Bug] Flash 900-second processing timeout is masked as `SSE event type mismatch`
- [#8599](https://github.com/deepseek-ai/deepseek-harness/discussions/8599) Bug: every command under `workspace-write` dies with `0xC0000142` (STATUS_DLL_INIT_FAILED) on Windows desktop
- [#860](https://github.com/deepseek-ai/deepseek-harness/discussions/860) [Bug Report] 欢迎弹窗（内测声明）在 settings 写入被拒时把用户永久锁死：无法关闭、只能无限重试"暂时无法保存确认状态，请重试"
- [#8594](https://github.com/deepseek-ai/deepseek-harness/discussions/8594) [Bug] 模型以旁白收尾（宣布动作、无 tool-call）时 turn 被正确关闭，宣布的动作消失 —— 机制已存在，缺的是判据
- [#8386](https://github.com/deepseek-ai/deepseek-harness/discussions/8386) [Bug] 近满窗会话死锁（下）：手动 /compact 的总结请求复用同一路由、继承塌陷的输出预算而必然失败（与 dsh-commandcode-provider#73 联动）
- [#7804](https://github.com/deepseek-ai/deepseek-harness/discussions/7804) [Bug] Windows：工作区位于非系统盘时 ACL 沙箱必然初始化失败（Win32 5 / grantWrite）/ ACL sandbox fails on non-system drives: the default ACL grants the caller no WRITE_OWNER
- [#8496](https://github.com/deepseek-ai/deepseek-harness/discussions/8496) [bug] dsh-mcp-client 写死 versionNegotiation: auto：对现代探测回 501 的 streamable-http 服务端永久连接失败（Sketch MCP 实测，附根因与修复方向）
- [#8591](https://github.com/deepseek-ai/deepseek-harness/discussions/8591) [Bug] macOS: persistent Bash tool hangs on commands containing ! in sdk-minimal
- [#8279](https://github.com/deepseek-ai/deepseek-harness/discussions/8279) [Bug] DeepSeek-V4.1-Flash display name misses the decimal point — still present in 0.2.0-rc.2
- [#8255](https://github.com/deepseek-ai/deepseek-harness/discussions/8255) [BUG] Windows 桌面端无法启动：GPU 进程初始化失败直接终止应用（Intel Arc + 多虚拟显示器环境）
- [#8392](https://github.com/deepseek-ai/deepseek-harness/discussions/8392) [Bug] Sidebar session list stays empty until a reconnect: a superseded `session/list` pull wedges the client's single-flight guard (0.2.0-rc.1)
- [#8459](https://github.com/deepseek-ai/deepseek-harness/discussions/8459) [Bug] Desktop 0.2.0-rc.2 (Windows x64): expanding the "ungrouped" sessions section crashes the renderer
- [#8521](https://github.com/deepseek-ai/deepseek-harness/discussions/8521) [Bug] Clean script cannot run due to the setting /types
- [#7650](https://github.com/deepseek-ai/deepseek-harness/discussions/7650) [BUG] Reaching context window 100% and not triggering auto-compaction
- [#8581](https://github.com/deepseek-ai/deepseek-harness/discussions/8581) [Bug] dsh + deepseek-v4-flash 复杂长任务中模型输出陷入重复死循环
- [#8580](https://github.com/deepseek-ai/deepseek-harness/discussions/8580) [Bug] grep skips gitignored children; README and glob include them
- [#8579](https://github.com/deepseek-ai/deepseek-harness/discussions/8579) [Bug] Desktop 0.2.0-rc.2：读 app.asar 内文件抛 TypeError: Cannot mix BigInt and other types（创造模式 skill 目录全空） / host reads of app.asar members fail
- [#8574](https://github.com/deepseek-ai/deepseek-harness/discussions/8574) [Bug] profile 的 package.json 带 UTF-8 BOM 时，桌面版启动即崩（连续崩溃且界面无提示）
- [#8571](https://github.com/deepseek-ai/deepseek-harness/discussions/8571) [Bug] Desktop app loses ClearType subpixel antialiasing on Windows at 150% scaling
- [#8570](https://github.com/deepseek-ai/deepseek-harness/discussions/8570) [Bug] subagent outcome drops turn-end error detail, so 429/quota failures arrive opaque
- [#8569](https://github.com/deepseek-ai/deepseek-harness/discussions/8569) [Bug] fs-search fails the whole tool call when ripgrep exits 2 with partial matches
- [#8568](https://github.com/deepseek-ai/deepseek-harness/discussions/8568) [Bug] 升级到 0.2.0 后用户设置被静默搬空：settings.yaml 迁移与 profile 写锁竞争，改名成功但零 section 导入
- [#8563](https://github.com/deepseek-ai/deepseek-harness/discussions/8563) [Bug] Cancelled plugin install leaves orphaned packages in node_modules (171 packages / 287 MB in one case)
- [#8562](https://github.com/deepseek-ai/deepseek-harness/discussions/8562) [BUG] Desktop 0.2.0-rc.2 config migration renames `settings.yaml` → `settings.yaml.imported` but drops hand-added pi-ai providers
- [#8559](https://github.com/deepseek-ai/deepseek-harness/discussions/8559) [Bug] 同一工作目录下多个 Session 的「已更改文件」卡片互相认领对方的改动（附修复分支）
- [#8560](https://github.com/deepseek-ai/deepseek-harness/discussions/8560) [Bug] Windows ACL 沙箱：Low 完整性标签只落在"授权后新建"的子项，已存在的子目录永远被拒写；Windows ACL sandbox: the Low integrity label only reaches children created after the grant, so pre-existing subdirectories stay unwritable
- [#8558](https://github.com/deepseek-ai/deepseek-harness/discussions/8558) [Bug] Aborted/errored assistant messages are dropped while their tool results are kept, emitting requests with orphaned tool results
- [#8557](https://github.com/deepseek-ai/deepseek-harness/discussions/8557) [Bug] 桌面版插件安装/卸载被无关依赖的 minimumReleaseAge 连坐失败，且 minimumReleaseAgeExclude 白名单本身被 "local policy" 拒绝
- [#8553](https://github.com/deepseek-ai/deepseek-harness/discussions/8553) [Bug] deepseek-flash：content 为空，最终答复出现在 reasoning_content
- [#8552](https://github.com/deepseek-ai/deepseek-harness/discussions/8552) [Bug] job_kill 未终止子进程；workspace-write 允许写 /tmp；npm 安装不触发审批
- [#423](https://github.com/deepseek-ai/deepseek-harness/discussions/423) [Bug Report] Windows 工作区：连接后外部创建/移入的子目录永远无法写入（capability ACE 永不补授）
- [#8546](https://github.com/deepseek-ai/deepseek-harness/discussions/8546) [Bug] protocolOf 依赖 URL.hostname，导致所有文件预览报「文件资源服务不可用」
- [#8130](https://github.com/deepseek-ai/deepseek-harness/discussions/8130) [Bug] workspace-write 下所有命令 0xC0000142 失败 / Windows ACL 沙箱环境变量泄漏
- [#8426](https://github.com/deepseek-ai/deepseek-harness/discussions/8426) [BUG] ACL 沙箱只给工作区根授权：老目录里写不进去，且失败以裸 Win32Error 抛出（连 pwd 都跑不了）
- [#8544](https://github.com/deepseek-ai/deepseek-harness/discussions/8544) [Bug] llm-pi-ai: 手工声明路由的模型缺 cost.tiers，导致 pi-ai 在成功响应后抛错、整个 step 被判失败
- [#7538](https://github.com/deepseek-ai/deepseek-harness/discussions/7538) [BUG REPORT] Windows 沙箱无法在用户自建目录上 provision 工作区 ACE → 该目录下所有 shell 命令失败
- [#8367](https://github.com/deepseek-ai/deepseek-harness/discussions/8367) [Bug] 桌面端「查询用量」只统计 DSH 专属 API Key，自带 API Key 的账号用量恒显示为 0
- [#8497](https://github.com/deepseek-ai/deepseek-harness/discussions/8497) [Bug][Windows 10] workspace-write 沙箱下所有子进程 0xC0000142（连 cmd.exe 都起不来）— Default DACL 使用 capability SID 所致
- [#8487](https://github.com/deepseek-ai/deepseek-harness/discussions/8487) [bug] 插件列表「禁用→启用」热切换时，带 prefix route 的插件激活失败：webserver: duplicate prefix route（0.1.7-rc.2 与 0.2.0-rc.2 均在）

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-02T03:33:32.187Z_