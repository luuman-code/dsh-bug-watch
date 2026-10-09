# DSH Bug Watch — 2026-10-09

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 41

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#9017](https://github.com/deepseek-ai/deepseek-harness/discussions/9017) **[Bug] 第三方 Electron 宿主（Electron-as-node）下 dsh 全量启动失败：require-builtin 指纹门补丁精确 + app-boot 无 --expose-internals 回退**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-08

## 📝 仅报告 — 无人互动
- [#9216](https://github.com/deepseek-ai/deepseek-harness/discussions/9216) [Bug] 桌面打包版：系统提示词宣传的 implementation checkout 指向 app.asar 内部虚拟路径，agent 工具全部无法访问（0.2.0-rc.2，master 未修）
- [#9124](https://github.com/deepseek-ai/deepseek-harness/discussions/9124) [Bug] Terminated sub-agent output is unrecoverable: no closing message, no registry entry, no read-back path
- [#9215](https://github.com/deepseek-ai/deepseek-harness/discussions/9215) [Bug] 空 id/name 伪 tool-call 落盘后 tool/result 校验永久失败，会话从该 seq 起卡死（0.1.7-rc.2 → 0.2.1-alpha.1 均未修，附本地已验证补丁）
- [#9099](https://github.com/deepseek-ai/deepseek-harness/discussions/9099) [Bug] Message injected without producer-owned `source.kind` violates v4 format and drops sessions
- [#810](https://github.com/deepseek-ai/deepseek-harness/discussions/810) [Bug] Windows: sandboxed pwsh always dies with 0xC0000142 under console-less host (desktop launch path)
- [#7398](https://github.com/deepseek-ai/deepseek-harness/discussions/7398) Bug: tool calls fail with "Cannot read properties of undefined (reading 'prepare')" when running from source (pnpm dsh web)
- [#9206](https://github.com/deepseek-ai/deepseek-harness/discussions/9206) [Bug] 慢链路下 mux 心跳掐断 WebSocket，前端反复重连重放 MB 级历史，侧栏会话标题在真名与「未命名」间闪动
- [#8581](https://github.com/deepseek-ai/deepseek-harness/discussions/8581) [Bug] dsh + deepseek-v4-flash 复杂长任务中模型输出陷入重复死循环
- [#9089](https://github.com/deepseek-ai/deepseek-harness/discussions/9089) [Bug] 出站消息含孤立代理(lone surrogate)时 400 无定位信息，且污染历史后会话永久失败不可恢复
- [#9103](https://github.com/deepseek-ai/deepseek-harness/discussions/9103) [Bug] Settings are unavailable to non-loopback browsers: trusted-host deployments lose the Models page and every per-plugin configuration page (Subagent → Model selection)
- [#9075](https://github.com/deepseek-ai/deepseek-harness/discussions/9075) [Bug] postinstall fails on Windows: install-lefthook lock ownership check compares fstat vs stat dev values
- [#9102](https://github.com/deepseek-ai/deepseek-harness/discussions/9102) [Bug] v0.2.1-alpha.1- Process freeze in custom plugin creation during install_bundle
- [#9177](https://github.com/deepseek-ai/deepseek-harness/discussions/9177) [bug] Hooks on Windows fall back to the deployment default sandbox (workspace-write), so hooks that spawn background tasks fail with silent `spawn EPERM`
- [#9186](https://github.com/deepseek-ai/deepseek-harness/discussions/9186) [Bug][Windows] workspace-write 下 restricting 列表含 1 个 S-1-4 capability SID 即致任何子进程 0xC0000142 秒退 — 最小复现与精确定位（关联 #8991）
- [#9189](https://github.com/deepseek-ai/deepseek-harness/discussions/9189) [Bug] Composed filesystem throws "Cannot mix BigInt and other types" on app.asar paths, which silently empties the whole skill catalog
- [#8991](https://github.com/deepseek-ai/deepseek-harness/discussions/8991) [Bug] workspace-write sandbox: every confined pwsh command exits with 0xC0000142 (STATUS_DLL_INIT_FAILED), no stderr
- [#9184](https://github.com/deepseek-ai/deepseek-harness/discussions/9184) Bug: single-dollar math parsing swallows dollar amounts in assistant prose ($3,641 … $200/mo becomes KaTeX garbage)
- [#9181](https://github.com/deepseek-ai/deepseek-harness/discussions/9181) [Bug][Windows] 被删除重建的目录让一个 fs.watch 句柄无限空转，dsh-desktop-host 空闲时常驻烧掉 ~2.2 核（附最小复现）
- [#9179](https://github.com/deepseek-ai/deepseek-harness/discussions/9179) [Bug] 摘要压缩保留了「选中的选项」却丢掉了提问正文、header 与选项清单，导致手打回答引用的选项成为悬空引用
- [#9178](https://github.com/deepseek-ai/deepseek-harness/discussions/9178) [BUG] 插件管理器裸包名安装受 pnpm 11 minimumReleaseAge 默认值影响：新版本发布 24 小时内静默降级到上一版并被判不兼容
- [#8947](https://github.com/deepseek-ai/deepseek-harness/discussions/8947) [Bug] "DeepSeek Messages transport failed" is a masked transport timeout — undici's 300 s bodyTimeout silently caps streamIdleTimeoutMs（传输层 300 秒上限被误报为传输失败）
- [#9167](https://github.com/deepseek-ai/deepseek-harness/discussions/9167) [Bug] 第三方脚本污染 `String.prototype.replaceAll` 会让整个 conversation slot 崩溃/正文消失（0.2.0-rc.2）
- [#3994](https://github.com/deepseek-ai/deepseek-harness/discussions/3994) [Bug] Terminal background-job records are never reclaimed in a live session: unbounded store growth, O(n) list/start scans, and a silent memory footprint that grows with session age
- [#3662](https://github.com/deepseek-ai/deepseek-harness/discussions/3662) [Bug] Cancelling a task that spawned subagents permanently corrupts session persistence — production data integrity failure, no recovery path for operators
- [#3633](https://github.com/deepseek-ai/deepseek-harness/discussions/3633) [Bug] [Update 2026-09-19] Missing session-level lock silently corrupts shared-home deployments — impact upgrade: any multi-writer topology destroys the durable work record (self-review of our own bug report)
- [#8568](https://github.com/deepseek-ai/deepseek-harness/discussions/8568) [Bug] 升级到 0.2.0 后用户设置被静默搬空：settings.yaml 迁移与 profile 写锁竞争，改名成功但零 section 导入
- [#3632](https://github.com/deepseek-ai/deepseek-harness/discussions/3632) [Bug] [Update] Orphan agent/inbox/spliced splits log validity from session readability — impact upgrade: a routine post-incident repair can produce a durably intact but unreadable session (self-review of our own bug report)
- [#9056](https://github.com/deepseek-ai/deepseek-harness/discussions/9056) [BUG] subagent 派出的子代理不可寻址：send_message / interrupt_agent 均报 active teammate not found，父 Agent 无法终止它
- [#9156](https://github.com/deepseek-ai/deepseek-harness/discussions/9156) [Bug] Conversation pane goes blank on all sessions — TypeError: Cannot read properties of null (reading 'kind')
- [#7213](https://github.com/deepseek-ai/deepseek-harness/discussions/7213) [Bug] llm-pi-ai silently resolves an unconfigured route to a 262144 context window while the provider declares 1048576
- [#1005](https://github.com/deepseek-ai/deepseek-harness/discussions/1005) Bug: session resume fails — "agent-presets: refusing to compose an unscoped context" after upgrade
- [#8562](https://github.com/deepseek-ai/deepseek-harness/discussions/8562) [BUG] Desktop 0.2.0-rc.2 config migration renames `settings.yaml` → `settings.yaml.imported` but drops hand-added pi-ai providers
- [#9100](https://github.com/deepseek-ai/deepseek-harness/discussions/9100) [Bug] Live profile reload leaves session-scoped services unavailable: session/follow fails with gateway/service-unavailable
- [#9149](https://github.com/deepseek-ai/deepseek-harness/discussions/9149) [Bug][Desktop] 宿主进程异常退出后残留占用 127.0.0.1:19387，重启应用必失败，只能重启电脑
- [#9134](https://github.com/deepseek-ai/deepseek-harness/discussions/9134) [Bug] workspace-write 沙箱拦掉 pwsh 7 启动，报 0xC0000135 (3221225794)，工作区内终端不可用
- [#8654](https://github.com/deepseek-ai/deepseek-harness/discussions/8654) [Bug][Windows] 中文输入法替换选中文字时误删后文（含已验证修复）
- [#9136](https://github.com/deepseek-ai/deepseek-harness/discussions/9136) [Bug] Presented-file card's open control sticks in loading and becomes unclickable (open-in-app)
- [#9132](https://github.com/deepseek-ai/deepseek-harness/discussions/9132) [Bug] /compact collapses a dozen distinct failures into one message: "could not produce a useful summary"
- [#8617](https://github.com/deepseek-ai/deepseek-harness/discussions/8617) [Bug] DSH 0.2.0-rc.2 crashes (SIGABRT, exit 134) during session format v3→v4 migration — and older pinned versions can no longer read the store
- [#9112](https://github.com/deepseek-ai/deepseek-harness/discussions/9112) [Bug][Desktop][macOS] 窗口完全无法拖动：连标记了 data-window-drag 的 chrome 行也拖不动（0.2.0-rc.2 / Electron 44）

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-09T04:03:34.856Z_