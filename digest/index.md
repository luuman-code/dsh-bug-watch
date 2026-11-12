# DSH Bug Watch — 2026-11-12

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 47

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#9524](https://github.com/deepseek-ai/deepseek-harness/discussions/9524) [Bug] 思考通道（reasoning）退化：中文思考下「最短独立句」自我复制，flash 系易发
- [#13037](https://github.com/deepseek-ai/deepseek-harness/discussions/13037) [Bug][Desktop][Windows] 自动更新 100% 失败：安装器 MoveFileExW error 32，10 次重试后回滚且不重启
- [#13036](https://github.com/deepseek-ai/deepseek-harness/discussions/13036) [Bug] 流式工具调用被截断后 UI 永久停留在「准备运行命令」，无失败回退
- [#11687](https://github.com/deepseek-ai/deepseek-harness/discussions/11687) [Bug] 升级至 0.2.1-rc.5 后，因第三方插件冲突导致启动崩溃 (1 required plugin did not activate)
- [#13035](https://github.com/deepseek-ai/deepseek-harness/discussions/13035) [Bug] Auto review 间歇性失败：reviewer 用散文回答会话提问而非返回 JSON / Auto review intermittently fails when the reviewer answers in prose instead of returning JSON
- [#13015](https://github.com/deepseek-ai/deepseek-harness/discussions/13015) [bug] 图片太大卡住session无法继续下去
- [#13010](https://github.com/deepseek-ai/deepseek-harness/discussions/13010) [Bug] 系统提示每次变化都往历史追加完整副本，Codex 车道下 19 份被拼进 instructions 超 1MiB，整会话 400（0.2.2-rc.1，含精确复算）
- [#13031](https://github.com/deepseek-ai/deepseek-harness/discussions/13031) [Bug] Desktop 0.2.2-rc.1: boot aborts with "entry did not activate" when a plugin peer dep is missing (dsh-skill-hub) + HTTP 431 from auth cookie accumulation
- [#4722](https://github.com/deepseek-ai/deepseek-harness/discussions/4722) [bug] In-memory session log is unbounded (append-only) and compaction never trims it - long/heavy sessions OOM the web process
- [#13026](https://github.com/deepseek-ai/deepseek-harness/discussions/13026) [Bug][Windows] 「在 VS Code 中打开」必定失败：宿主把 ELECTRON_RUN_AS_NODE=1 泄漏给子进程
- [#13022](https://github.com/deepseek-ai/deepseek-harness/discussions/13022) [Bug] Agent completion notification delivered 14s before child session created
- [#12985](https://github.com/deepseek-ai/deepseek-harness/discussions/12985) [Bug][0.2.1-rc.2] Inspector bundle injects a loopback-only endpoint (ws://127.0.0.1:9230/ingest); LAN/remote browsers get periodic mux disconnects
- [#13011](https://github.com/deepseek-ai/deepseek-harness/discussions/13011) [Bug][Windows] pwsh ENOENT obscures a nonexistent working directory
- [#13006](https://github.com/deepseek-ai/deepseek-harness/discussions/13006) [Bug] /compact 仍使用最近一次路由的模型压缩：会话内切换模型后手动压缩不跟随当前选择
- [#10655](https://github.com/deepseek-ai/deepseek-harness/discussions/10655) [Bug][0.2.1-rc.2] workflow fails as a whole when `maxConcurrentAgents` (auto-resolved on ≥11-core hosts) exceeds `maxActiveSubagents` (default 8)
- [#12991](https://github.com/deepseek-ai/deepseek-harness/discussions/12991) [Bug] Recurring reminders claim one extra turn per occurrence while the session is busy
- [#12989](https://github.com/deepseek-ai/deepseek-harness/discussions/12989) [Bug] PTC: run_code 内嵌套 wait_agent 的超时被执行期限截断，等待结果被丢弃（wait_agent 允许 1h，run_code 上限 10min）
- [#8453](https://github.com/deepseek-ai/deepseek-harness/discussions/8453) [Bug] Windows 11 sandbox bug: real folder permissions and the Low integrity label are permanently rewritten, with no revoke path —— Windows 11 沙箱 bug：真实目录的权限与 Low 完整性标签被永久改写，且无回收路径
- [#12974](https://github.com/deepseek-ai/deepseek-harness/discussions/12974) [Bug][Desktop/Windows] 应用内更新：安装器已启动但重命名安装目录失败（MoveFileExW error 32），失败后静默退出、不提示、不重启
- [#12987](https://github.com/deepseek-ai/deepseek-harness/discussions/12987) [BUG] 一条非法凭据记录 / 一个带 BOM 的 JSON 会让桌面端永久无法启动（0.2.2-rc.1）
- [#12510](https://github.com/deepseek-ai/deepseek-harness/discussions/12510) [Bug] pluginManager.updateBundle (HMR) re-activates dsh-web-app's directory-picker-auto and fails with duplicate "directoryPicker" service
- [#12971](https://github.com/deepseek-ai/deepseek-harness/discussions/12971) [bug]异常多的出现工具调用失败导致任务中断
- [#3457](https://github.com/deepseek-ai/deepseek-harness/discussions/3457) [Bug] ACP initialize reports a hardcoded agentInfo.version "0.0.1", not the release version
- [#12973](https://github.com/deepseek-ai/deepseek-harness/discussions/12973) [Bug][macOS arm64] Desktop fetch fails with ENOTCONN; same endpoint works with system Node / dsh web
- [#9322](https://github.com/deepseek-ai/deepseek-harness/discussions/9322) [Bug] Windows 沙箱临时目录缺失后，同一会话内所有命令持续失败
- [#12039](https://github.com/deepseek-ai/deepseek-harness/discussions/12039) [Bug] deepseek-search-api：已登录账号仅在会话路由为 deepseek-account 时生效，其他路由下 web_search 静默消失且无诊断
- [#12501](https://github.com/deepseek-ai/deepseek-harness/discussions/12501) [Bug][Localization][ru] 0.2.2-rc.1: native sidebar/Automations/Settings strings bypass locale overrides and have broken Russian plurals
- [#12961](https://github.com/deepseek-ai/deepseek-harness/discussions/12961) [Bug] Sidebar browser stays blank when the dsh UI runs inside a guest webview (iframe fallback, no error shown)
- [#12954](https://github.com/deepseek-ai/deepseek-harness/discussions/12954) [Bug] XLSX preview fails entirely on unsupported number format "#,##0.0#"
- [#12275](https://github.com/deepseek-ai/deepseek-harness/discussions/12275) [Bug] Microsoft Store 版 PowerShell 7 无法出现在终端 shell 菜单（App Execution Alias 的 `stat()` 抛 `EACCES`）
- [#12944](https://github.com/deepseek-ai/deepseek-harness/discussions/12944) [Bug][0.2.2-rc.1] 右侧栏打开文件预览时，输入区问答卡选项行上半部不可点击（光标停在下半部才变手形）
- [#12948](https://github.com/deepseek-ai/deepseek-harness/discussions/12948) [Bug] classifyPiAiError misses the codex backend's bare "Bad Request" body and WebSocket close codes
- [#11577](https://github.com/deepseek-ai/deepseek-harness/discussions/11577) [Bug][0.2.1-rc.5] 单条 tool_use 参数非法即整轮硬失败：MALFORMED_RESPONSE 仍不在默认重试码（汇总 #7705/#8920/#8976/#9402/#9503/#10406，附 rc.5 复现与补丁建议）
- [#10095](https://github.com/deepseek-ai/deepseek-harness/discussions/10095) [Bug]+小优化点请求：插件热重载后所有历史会话从侧边栏消失，无任何提示+优化 Windows 托盘缺重启入口
- [#9662](https://github.com/deepseek-ai/deepseek-harness/discussions/9662) [Bug] subagent: 空字符串的 provider/model/reasoning_effort 被当成显式选择而失败，且报错不给补救（0.2.0-rc.2）
- [#12936](https://github.com/deepseek-ai/deepseek-harness/discussions/12936) [Bug] Windows：文件「打开方式」菜单始终显示「无法获取应用列表」（SHAssocEnumHandlers → E_FAIL 0x80004005）
- [#12934](https://github.com/deepseek-ai/deepseek-harness/discussions/12934) [Bug] 会话最后一条助手回复不渲染（重建必复现，其余轮次正常）
- [#12933](https://github.com/deepseek-ai/deepseek-harness/discussions/12933) BUG: cua tools fail validation in 0.2.2-rc.1 — params object serialized to string in the tool-call bridge
- [#436](https://github.com/deepseek-ai/deepseek-harness/discussions/436) [Bug] 会话历史包含孤立 UTF-16 代理码元后，所有后续请求持续返回 HTTP 400 `INVALID_REQUEST`
- [#12841](https://github.com/deepseek-ai/deepseek-harness/discussions/12841) [Bug] Model picker: row under a pinned provider heading shows through the translucent fill (0.2.2-rc.1)
- [#10195](https://github.com/deepseek-ai/deepseek-harness/discussions/10195) [BUG][Windows 0.2.1-rc.2] DeepSeek Messages 流式 tool 参数 JSON 损坏 → MALFORMED_RESPONSE 整轮中止且不重试
- [#12929](https://github.com/deepseek-ai/deepseek-harness/discussions/12929) Bug: `todo_write` lists get stuck mid-plan when a long turn ends (74% of turns here)
- [#12596](https://github.com/deepseek-ai/deepseek-harness/discussions/12596) [Bug] dsh web auto-exits with SIGSEGV (signal 11) while idle on 0.2.2-rc.1
- [#11981](https://github.com/deepseek-ai/deepseek-harness/discussions/11981) [Bug] ptc 模式下中断/报错后 tool/ptc-dispatch* 落盘于 turn 之外，导致 session 历史永久无法加载
- [#11971](https://github.com/deepseek-ai/deepseek-harness/discussions/11971) [BUG] Gateway/internal: failed to create session
- [#12609](https://github.com/deepseek-ai/deepseek-harness/discussions/12609) [Bug] cordis 4.1.0: an un-awaited async ctx.effect() that rejects is silently dropped (no log, plugin stays ACTIVE)
- [#10559](https://github.com/deepseek-ai/deepseek-harness/discussions/10559) [Bug] 0.2.1-rc.2 / Windows 11: host 以 0xFFFF7003 (4294930435) 静默退出，三次冷启动 3/3 必现，无堆栈、无 hostDiagnostic、无 WER 记录

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-12T05:20:27.985Z_