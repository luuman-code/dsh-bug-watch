# DSH Bug Watch — 2026-09-30

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 37

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#8366](https://github.com/deepseek-ai/deepseek-harness/discussions/8366) [Bug] 性能问题：桌面端插件路由的 fetch 中继会剥掉 content-length，并把每个响应体搬过 主进程↔渲染进程边界（附最小复现）
- [#8354](https://github.com/deepseek-ai/deepseek-harness/discussions/8354) [Bug][Windows][Desktop 0.2.0-rc.2] 全新安装在 96% 误报“DeepSeek Harness 无法关闭”
- [#8356](https://github.com/deepseek-ai/deepseek-harness/discussions/8356) [Bug] Windows：双击启动桌面端时受限令牌沙箱子进程 100% 无法创建（0xC0000142），从控制台启动则完全正常 / restricted-token sandbox spawn fails on double-click launch but works from a console
- [#8334](https://github.com/deepseek-ai/deepseek-harness/discussions/8334) [Bug][Windows 11 26100][nightly 0.2.0-rc.2] workspace-write 沙箱授权成功，但任何子进程仍以 0xC0000142 死亡（read-only 正常；宿主 UAC 关闭）
- [#8352](https://github.com/deepseek-ai/deepseek-harness/discussions/8352) [BUG] 工具输出含未配对 UTF-16 代理项会让整个会话永久 HTTP 400（错误信息无法诊断）
- [#8349](https://github.com/deepseek-ai/deepseek-harness/discussions/8349) [Bug] Three upgrade blockers from 0.1.1-rc.1 to 0.2.0-rc.2, plus a silent plugin-API break (local fixes included)
- [#7650](https://github.com/deepseek-ai/deepseek-harness/discussions/7650) [BUG] Reaching context window 100% and not triggering auto-compaction
- [#6296](https://github.com/deepseek-ai/deepseek-harness/discussions/6296) [Bug]   todo 清单在 agent 长时间不同步时会静默过期（附修复与实测）
- [#423](https://github.com/deepseek-ai/deepseek-harness/discussions/423) [Bug Report] Windows 工作区：连接后外部创建/移入的子目录永远无法写入（capability ACE 永不补授）
- [#8327](https://github.com/deepseek-ai/deepseek-harness/discussions/8327) [Bug] 侧栏「未分组」分组渲染出一个点了没反应的「新会话」按钮 (0.2.0-rc.2)
- [#7735](https://github.com/deepseek-ai/deepseek-harness/discussions/7735) [Bug] Windows：沙箱给工作区根目录盖 Low 完整性标签后，目录内的 .bat/.cmd/.exe 双击弹「无法验证发布者」
- [#8312](https://github.com/deepseek-ai/deepseek-harness/discussions/8312) [Bug][Windows] workspace-write leaves a permanent Low integrity label on the project, breaking every other tool used on it — several reports, still unchanged in 0.2.0-rc.2
- [#8323](https://github.com/deepseek-ai/deepseek-harness/discussions/8323) [Bug] Open Web UI goes permanently blank after dsh restarts from a reinstalled/copied install — in-place plugin swap throws uncaught SlotAssemblyError (0.1.7-rc.2)
- [#8056](https://github.com/deepseek-ai/deepseek-harness/discussions/8056) [Bug] dsh-http-proxy 把 undici 专用的 `[::1]` 写进通用 NO_PROXY，Python httpx 等非 Node 子进程直接构不出 client
- [#8320](https://github.com/deepseek-ai/deepseek-harness/discussions/8320) [Bug] Sessions from older releases can't be resumed or opened after upgrading (unknown preset `standard-tools`; v0 subagent descriptor v2 refused)
- [#860](https://github.com/deepseek-ai/deepseek-harness/discussions/860) [Bug Report] 欢迎弹窗（内测声明）在 settings 写入被拒时把用户永久锁死：无法关闭、只能无限重试"暂时无法保存确认状态，请重试"
- [#8193](https://github.com/deepseek-ai/deepseek-harness/discussions/8193) [Bug][Desktop][0.2.0-rc.1] Windows ACL sandbox cannot start any child under an Electron host (0xC0000142)
- [#7534](https://github.com/deepseek-ai/deepseek-harness/discussions/7534) [Bug] 0.1.7-alpha.1 and alpha.2: a failed startup still consumes settings.yaml - legacy sections import into a disposed context and are lost permanently
- [#8272](https://github.com/deepseek-ai/deepseek-harness/discussions/8272) [Bug Report] Windows `workspace-write`：目录 DACL 缺少 `WRITE_OWNER` 时，所有受限 shell 调用以原始 `SetNamedSecurityInfoW Win32 5` 失败（0.1.7-rc.2 无内置诊断/修复路径）
- [#8293](https://github.com/deepseek-ai/deepseek-harness/discussions/8293) [Bug] Windows「在文件资源管理器中显示」对非 ASCII 路径失效（file:// URL + windowsHide:true 两个缺陷叠加）
- [#8105](https://github.com/deepseek-ai/deepseek-harness/discussions/8105) [Bug] Firefox: plain objects rejected as "not losslessly JSON-serializable" — native-constructor check compares Function.prototype.toString against V8 formatting
- [#8279](https://github.com/deepseek-ai/deepseek-harness/discussions/8279) [Bug] DeepSeek-V4.1-Flash display name misses the decimal point — still present in 0.2.0-rc.2
- [#8273](https://github.com/deepseek-ai/deepseek-harness/discussions/8273) [bug] The "Deep diving…" run status keeps showing 5–22 s after the answer is complete — the turn closes late in a workspace with many untracked files
- [#8271](https://github.com/deepseek-ai/deepseek-harness/discussions/8271) [Bug] Entry#disabled 会被 fiber.dispose()+init() 永久污染并自锁：一行插件"显示已停用"但实际仍在运行
- [#7802](https://github.com/deepseek-ai/deepseek-harness/discussions/7802) [Bug] 「加载历史」偶发永久卡住、只有刷新能恢复：等待 socket 的 waiter 永不 settle（含根因与社区补丁）/ Loading history hangs forever: waiters on the Remote stream socket are never settled (root cause & community patch available)
- [#8256](https://github.com/deepseek-ai/deepseek-harness/discussions/8256) [Bug] v0.2.0-rc.2：新建/恢复任何会话都失败——persona 提示词段 "deployment:persona-prefix" 重复注册
- [#8257](https://github.com/deepseek-ai/deepseek-harness/discussions/8257) [Bug] 0.2.0-rc.2 无法安装：@deepseek-ai/dsh-client-ui-settings-account 没有发布 rc.2
- [#8255](https://github.com/deepseek-ai/deepseek-harness/discussions/8255) [BUG] Windows 桌面端无法启动：GPU 进程初始化失败直接终止应用（Intel Arc + 多虚拟显示器环境）
- [#8242](https://github.com/deepseek-ai/deepseek-harness/discussions/8242) [BUG]deepseek harness本地启动命令失效
- [#6751](https://github.com/deepseek-ai/deepseek-harness/discussions/6751) [Bug] 空白新会话切换 Agent Preset 后，新 preset 的 modelSelectionSettings 型 delegation 工具完全未安装（subagent / list_subagent_models 缺失）
- [#7995](https://github.com/deepseek-ai/deepseek-harness/discussions/7995) [Bug] session search fails on any store that ever spawned a subagent — v0→v1 migration rejects `subagent/descriptor` version 2, the only version the writer emits
- [#8234](https://github.com/deepseek-ai/deepseek-harness/discussions/8234) [Bug] HOME 下同名 package.json 被当作 profile 树自引用，导致该包无法解析（plugin-manager → 插件页/市场/预设同时失效）
- [#8224](https://github.com/deepseek-ai/deepseek-harness/discussions/8224) [Bug] macOS 桌面版：原生全屏下点「检查更新…」，在弹窗点确认后整屏变黑且无法恢复
- [#8220](https://github.com/deepseek-ai/deepseek-harness/discussions/8220) [Bug][0.2.0-rc.1] Plugin install rejected by rows the bundle itself disables (plugin-manager checks every patch-inserted name)
- [#8208](https://github.com/deepseek-ai/deepseek-harness/discussions/8208) [BUG] dsh桌面版下面无害命令(pwsh/cmd echo在内)都报错 `0xC0000142`(STATUS_DLL_INIT_FAILED)
- [#5630](https://github.com/deepseek-ai/deepseek-harness/discussions/5630) Bug: Chinese IME (Microsoft Pinyin) input corrupted in the Web GUI chat composer
- [#8174](https://github.com/deepseek-ai/deepseek-harness/discussions/8174) [Bug] Desktop leaks ELECTRON_RUN_AS_NODE into every child process - Electron apps launched from a DSH shell start as Node

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-30T03:26:55.774Z_