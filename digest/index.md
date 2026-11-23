# DSH Bug Watch — 2026-11-23

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 34

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#13785](https://github.com/deepseek-ai/deepseek-harness/discussions/13785) **Bug report: PowerShell console window flashes on Windows (DSH Desktop 44.7.0)**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-22

## 📝 仅报告 — 无人互动
- [#14019](https://github.com/deepseek-ai/deepseek-harness/discussions/14019) [Bug] dsh-desktop 0.2.2-rc.5 crashes on startup with uncaught ECONNRESET from internal fetch; stale processes after quit make it recurrent (Windows)
- [#14123](https://github.com/deepseek-ai/deepseek-harness/discussions/14123) [Bug] 桌面端应用内更新反复失败：第三方进程持有安装目录内句柄致 MoveFileExW 报 error 5
- [#14120](https://github.com/deepseek-ai/deepseek-harness/discussions/14120) [Bug] 0.2.2-rc.5 desktop: INACTIVE_EFFECT from dsh-working-directory.serialize() escapes as unhandledRejection and kills the host
- [#13836](https://github.com/deepseek-ai/deepseek-harness/discussions/13836) [Bug] 桌面端 0.2.2-rc.5 启动即崩溃：主进程 undici fetch 内置 Host 报 read ECONNRESET（每次必现）
- [#14118](https://github.com/deepseek-ai/deepseek-harness/discussions/14118) [Bug] 桌面宿主进程运行约 10 小时后 OOM 退出（ExternalEntityTable::AllocateEntry，0.2.2-rc.5）
- [#7123](https://github.com/deepseek-ai/deepseek-harness/discussions/7123) [bug]「只有 reasoning、无可见正文也无工具调用」的响应被判为成功 ⇒ 静默空回复
- [#1490](https://github.com/deepseek-ai/deepseek-harness/discussions/1490) [Bug][Windows sandbox] tempfile.mkdtemp creates unwritable directories
- [#11843](https://github.com/deepseek-ai/deepseek-harness/discussions/11843) [Bug] MALFORMED_RESPONSE: "tool input is invalid JSON" on large tool-call arguments
- [#10195](https://github.com/deepseek-ai/deepseek-harness/discussions/10195) [BUG][Windows 0.2.1-rc.2] DeepSeek Messages 流式 tool 参数 JSON 损坏 → MALFORMED_RESPONSE 整轮中止且不重试
- [#14113](https://github.com/deepseek-ai/deepseek-harness/discussions/14113) [Bug] macOS 桌面版 renderer 进程 SIGTRAP 崩溃（0.2.2-rc.5 / Electron 44.7.0），崩溃点固定
- [#14112](https://github.com/deepseek-ai/deepseek-harness/discussions/14112) [Bug] 附件缺失被报成 "DeepSeek Messages transport failed"，把本地文件问题伪装成网络问题
- [#14109](https://github.com/deepseek-ai/deepseek-harness/discussions/14109) [Bug] Default persona is rejected by upstream content filter (403 4100406) — trigger narrowed to the leading phrase "You are a coding agent"
- [#14039](https://github.com/deepseek-ai/deepseek-harness/discussions/14039) [Bug] A dangling image reference in a resumed session surfaces as "TRANSPORT: DeepSeek Messages transport failed" and is retried 5 times
- [#14041](https://github.com/deepseek-ai/deepseek-harness/discussions/14041) [Bug][Plugin Manager] 卸载插件时只用单一 registry，不经过 registryPlan，私有源下的 profile 必然失败（至 0.2.3-alpha.1 未修复）
- [#14099](https://github.com/deepseek-ai/deepseek-harness/discussions/14099) [Bug] 0.2.2-rc.5 冷启动从 ~9s 回归到 ~31–36s：约 20 秒纯 CPU 耗在 ESM 模块解析（Windows）
- [#14044](https://github.com/deepseek-ai/deepseek-harness/discussions/14044) [Bug] @deepseek-ai/dsh@0.2.3-alpha.1 可安装但所有命令无法启动：cordis-plugin-loader@1.1.0 是旧构建，缺少 EntryValidationError
- [#13906](https://github.com/deepseek-ai/deepseek-harness/discussions/13906) [Bug] Token meter underestimates real prompt tokens ~2.5x on CJK/JSON content (4 chars/token heuristic)
- [#14094](https://github.com/deepseek-ai/deepseek-harness/discussions/14094) [Bug] 每次工具调用固定 ~11.6s 调度等待：命令真实执行仅 0.2s，同机 WorkBuddy 1.8s
- [#14091](https://github.com/deepseek-ai/deepseek-harness/discussions/14091) [Bug]Cordis @Inject() 的两个问题：类依赖丢失和方法重复执行
- [#14090](https://github.com/deepseek-ai/deepseek-harness/discussions/14090) [Bug] 0.2.3-alpha.2 在启用插件dsh-mnemon的情况下无法使用
- [#14086](https://github.com/deepseek-ai/deepseek-harness/discussions/14086) [Bug] 长转录会话里所有锚定浮层（`role="dialog"`）被定位到视口外，菜单/权限/模型/问答卡片全部点不开
- [#14037](https://github.com/deepseek-ai/deepseek-harness/discussions/14037) [Bug] 非 UI 进程创建的会话永远不进工作区注册表：SDK/headless/嵌入器会话在桌面版与 Web 版侧栏永久不可见（registry 仅首次初始化时 bootstrap）
- [#13418](https://github.com/deepseek-ai/deepseek-harness/discussions/13418) [Bug] Composer draft is lost when a turn fails before the message is admitted (working-directory error)
- [#14077](https://github.com/deepseek-ai/deepseek-harness/discussions/14077) [Bug] Agent Teams 实验包 peer 写死 rc.1，官方无 rc.5 版本导致 profile 组合检查失败
- [#14006](https://github.com/deepseek-ai/deepseek-harness/discussions/14006) [Bug] Host process repeatedly crashes with V8 heap OOM (exit 134): heap dominated by ~8M string objects; skill-catalog system-reminder duplicated into Session.messages every turn
- [#14075](https://github.com/deepseek-ai/deepseek-harness/discussions/14075) [Bug] 工具子进程继承 NoDefaultCurrentDirectoryInExePath=1：经 DSH 启动的 Windows .bat「cd 后裸名调用本地 exe」报 9009（0.2.2-rc.3）
- [#13434](https://github.com/deepseek-ai/deepseek-harness/discussions/13434) [Bug] 自定义模型通道报 TRANSPORT 或 404
- [#14059](https://github.com/deepseek-ai/deepseek-harness/discussions/14059) [BUG] Auto review omits reasoning effort; forced-thinking models (GLM-5.3) reject every review request
- [#14050](https://github.com/deepseek-ai/deepseek-harness/discussions/14050) [Bug] session-title-all-prompts-llm: titles silently stop updating once the framed input exceeds maxInputBytes (4096)
- [#14058](https://github.com/deepseek-ai/deepseek-harness/discussions/14058) [Bug][Windows][Desktop 0.2.1-rc.2] workspace-write 下所有受限命令失败：TEMP 位于继承自 C:\ 的目录时，临时授权设低完整性标签被拒绝
- [#14056](https://github.com/deepseek-ai/deepseek-harness/discussions/14056) [Bug][0.2.2-rc.5] In-place plugin update fails with ENOENT and leaves the plugin stopped when pnpm moves a copy of one of its dependencies
- [#14055](https://github.com/deepseek-ai/deepseek-harness/discussions/14055) [Bug Report] 桌面版 HMR 重载失效：dsh-app-boot 双实例导致 "profile reload requires the root Include entry"，插件被移出 bundles 且无法自愈
- [#8902](https://github.com/deepseek-ai/deepseek-harness/discussions/8902) BUG: the plugin(inital) team:role cannot change there model use

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-23T05:11:37.810Z_