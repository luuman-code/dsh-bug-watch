# DSH Bug Watch — 2026-11-07

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 87

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#12191](https://github.com/deepseek-ai/deepseek-harness/discussions/12191) **[Bug][Desktop][macOS] rc.5：profile patch 被重写时丢失手写的 insert 条目，MCP 服务器静默消失**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-06
- [#11593](https://github.com/deepseek-ai/deepseek-harness/discussions/11593) **[Bug][Desktop 0.2.1-rc.3] Opening a single-turn session wedges the chat view on "Loading history…" forever, with no error shown**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-05

## 📝 仅报告 — 无人互动
- [#12510](https://github.com/deepseek-ai/deepseek-harness/discussions/12510) [Bug] pluginManager.updateBundle (HMR) re-activates dsh-web-app's directory-picker-auto and fails with duplicate "directoryPicker" service
- [#9619](https://github.com/deepseek-ai/deepseek-harness/discussions/9619) [Bug] 多行 $$ 公式块丢失开首行内容，并把后续正文一路吞成数学源码（渲染为红色原文）
- [#12507](https://github.com/deepseek-ai/deepseek-harness/discussions/12507) [Bug] Permissions row in Settings → General crashes with "Cannot read properties of undefined (reading 'volatile')"
- [#10259](https://github.com/deepseek-ai/deepseek-harness/discussions/10259) [Bug] 0.2.1-rc.2: experimental Inspector terminates the Host at a ~69-byte retained-state budget gap (field crash, quantified)
- [#9575](https://github.com/deepseek-ai/deepseek-harness/discussions/9575) [Bug Report] storage-json: writeAtomic 的 rename 在 Windows 上因目标文件被占用返回 EPERM，且失败即 fatal 终止宿主
- [#12438](https://github.com/deepseek-ai/deepseek-harness/discussions/12438) [Bug] macOS 桌面端右侧白色顶栏拖拽热区过窄（空白会话仅 40px）且部分主面板（如自动化任务）完全缺失 data-window-drag
- [#12261](https://github.com/deepseek-ai/deepseek-harness/discussions/12261) [Bug][macOS] 0.2.2-rc.1 frameless window has no drag region — window cannot be moved by mouse (worked in 0.2.1-rc.5)
- [#12501](https://github.com/deepseek-ai/deepseek-harness/discussions/12501) [Bug][Localization][ru] 0.2.2-rc.1: native sidebar/Automations/Settings strings bypass locale overrides and have broken Russian plurals
- [#12228](https://github.com/deepseek-ai/deepseek-harness/discussions/12228) [Bug]: Auto-review fails with 'reviewer must emit zero or more reasoning blocks followed by exactly one text block' when using models with reasoning/thinking
- [#11831](https://github.com/deepseek-ai/deepseek-harness/discussions/11831) [Bug] 工具结果里一个孤立的 UTF-16 代理项（半个 emoji）会让会话永久 400（INVALID_REQUEST）
- [#11159](https://github.com/deepseek-ai/deepseek-harness/discussions/11159) [Bug]发现 dsh 中非法 UTF-16 字符可能导致整个会话 400 无法使用（unpaired surrogate → Messages 400）
- [#12495](https://github.com/deepseek-ai/deepseek-harness/discussions/12495) [BUG] Auto review fails with ChatGPT/Codex: Unsupported parameter: temperature
- [#12169](https://github.com/deepseek-ai/deepseek-harness/discussions/12169) [bug] 1M 上下文下反复触发压缩、每次全量重读约 500K，prompt 水位不下降（压缩死循环）
- [#6157](https://github.com/deepseek-ai/deepseek-harness/discussions/6157) [Bug] Plugin slash-command output is invisible when the command is the first action in a blank session
- [#12487](https://github.com/deepseek-ai/deepseek-harness/discussions/12487) [Bug] File links with backslashes inside <> open a mangled path on Windows (preview shows "file not found")
- [#12485](https://github.com/deepseek-ai/deepseek-harness/discussions/12485) [Bug] Reasoning-only completion bypasses EMPTY_RESPONSE and ends the turn with no visible output
- [#12471](https://github.com/deepseek-ai/deepseek-harness/discussions/12471) [Bug] A Session that only edits a schedule stays attached forever: the sidebar clock badge shows the task on unrelated Sessions and cannot be detached
- [#12462](https://github.com/deepseek-ai/deepseek-harness/discussions/12462) [Bug] A lone UTF-16 surrogate in session history permanently breaks every request (HTTP 400)
- [#11890](https://github.com/deepseek-ai/deepseek-harness/discussions/11890) [Bug] Built-in str_replace_editor strips the UTF-8 BOM when editing a file
- [#12458](https://github.com/deepseek-ai/deepseek-harness/discussions/12458) [Bug] File previews never load on HarmonyOS ArkWeb — protocolOf relies on new URL() authority parsing
- [#12452](https://github.com/deepseek-ai/deepseek-harness/discussions/12452) [Bug] dsh-compaction-basic@0.2.1-rc.5 — compaction output violates protected system head contract, session permanently unloadable
- [#12433](https://github.com/deepseek-ai/deepseek-harness/discussions/12433) Bug: background jobs are SIGTERM-killed when the desktop window is reopened after tray-hide, breaking the "running tasks will not be interrupted" promise
- [#3542](https://github.com/deepseek-ai/deepseek-harness/discussions/3542) [Bug] Manual `/compact` aborts after 5–15s with "DeepSeek request aborted by caller" — 22/23 attempts fail (rc.7 & rc.8)
- [#12436](https://github.com/deepseek-ai/deepseek-harness/discussions/12436) [bug]: 0.21-rc5更新至0.22-rc1后session消失
- [#12271](https://github.com/deepseek-ai/deepseek-harness/discussions/12271) [Bug] 会话还有进行中的定时任务时，侧栏仍亮「已完成」绿点，定时任务时钟标记被盖住
- [#8088](https://github.com/deepseek-ai/deepseek-harness/discussions/8088) [BUG] Compaction happens every few steps for no reason, context is only around 50% of maximum
- [#7212](https://github.com/deepseek-ai/deepseek-harness/discussions/7212) [Bug] Compaction selects its own previous checkpoint as the whole span, so a long session never converges (59/79 attempts rejected, 44.6 min burned)
- [#11666](https://github.com/deepseek-ai/deepseek-harness/discussions/11666) [Bug][Desktop] open-in-app 无法启动 Electron 系编辑器：子进程继承 ELECTRON_RUN_AS_NODE 秒退（502 launch-failed）
- [#3410](https://github.com/deepseek-ai/deepseek-harness/discussions/3410) [BUG]When a session is not assigned to any workspace, the sidebar shows an Ungrouped group. Hovering that group still reveals a + button ("New session in Ungrouped"), but clicking it does nothing.
- [#11390](https://github.com/deepseek-ai/deepseek-harness/discussions/11390) [Bug] tok/s reading inflated by orders of magnitude on tool-call steps (decodeMs collapses to ~1ms)
- [#5630](https://github.com/deepseek-ai/deepseek-harness/discussions/5630) Bug: Chinese IME (Microsoft Pinyin) input corrupted in the Web GUI chat composer
- [#12389](https://github.com/deepseek-ai/deepseek-harness/discussions/12389) [bug]ds-bot 0.2.7 × 宿主 0.2.2-rc.1 会话崩溃根因
- [#12398](https://github.com/deepseek-ai/deepseek-harness/discussions/12398) [Bug] macOS 桌面版「Open In」会把 ELECTRON_RUN_AS_NODE=1 传给被启动的应用，导致 VS Code 等 Electron 应用闪退
- [#12396](https://github.com/deepseek-ai/deepseek-harness/discussions/12396) [Bug] macOS Desktop: one generic "exec" Dock icon per live Session (browser-use MCP children register as Foreground apps)
- [#9662](https://github.com/deepseek-ai/deepseek-harness/discussions/9662) [Bug] subagent: 空字符串的 provider/model/reasoning_effort 被当成显式选择而失败，且报错不给补救（0.2.0-rc.2）
- [#12179](https://github.com/deepseek-ai/deepseek-harness/discussions/12179) [Bug] 尾部为 pending 工具调用的会话被 crash-recovery 合成坏 tool/result ⇒ 会话永久不可读 / 不可 resume
- [#12387](https://github.com/deepseek-ai/deepseek-harness/discussions/12387) [Bug] dsh-atomic-write 0.2.2-rc.1：0 字节 / 损坏的陈旧 .lock 永不回收 → connection 激活超时 → desktop host 启动崩溃
- [#12388](https://github.com/deepseek-ai/deepseek-harness/discussions/12388) [Bug]: Experimental Inspector refuses to start when globalThis.fetch is an accessor (conflicts with fetch-chaining plugins)
- [#11121](https://github.com/deepseek-ai/deepseek-harness/discussions/11121) [Bug] dsh-hmr: 热重载后 apply() 定时器永久携带 executing=true，导致 runExclusive 嵌套报错
- [#12382](https://github.com/deepseek-ai/deepseek-harness/discussions/12382) [Bug] plugin-market: Discover search can't find words inside Thai/Lao/Khmer/Myanmar text
- [#12381](https://github.com/deepseek-ai/deepseek-harness/discussions/12381) [Bug] '/' command menu opens mid-word after a combining mark (Thai, Hindi, NFD Latin)
- [#11577](https://github.com/deepseek-ai/deepseek-harness/discussions/11577) [Bug][0.2.1-rc.5] 单条 tool_use 参数非法即整轮硬失败：MALFORMED_RESPONSE 仍不在默认重试码（汇总 #7705/#8920/#8976/#9402/#9503/#10406，附 rc.5 复现与补丁建议）
- [#12376](https://github.com/deepseek-ai/deepseek-harness/discussions/12376) [Bug] dsh-attachment-local 把 sharp 精确锁定，下游宿主无法去重：安装期即出现两份原生模块，且会被安全网关 403 阻断
- [#8904](https://github.com/deepseek-ai/deepseek-harness/discussions/8904) [Bug] Desktop 0.2.0-rc.2: one client entry left without a fiber is fatal — upgrading a plugin and reloading the document crashes the whole app
- [#12363](https://github.com/deepseek-ai/deepseek-harness/discussions/12363) [Bug] deepseek-flash 在 56.8 万 token 会话上静默断连（TRANSPORT），切 pro 可恢复
- [#12362](https://github.com/deepseek-ai/deepseek-harness/discussions/12362) [Bug] dsh-http-proxy: undici 10s connectTimeout causes false "Request timed out." under concurrency (connect-side follow-up to #8947)
- [#10003](https://github.com/deepseek-ai/deepseek-harness/discussions/10003) [Bug] Desktop auto-updater fails with "desktop update: task inspection timed out" due to live renderer connection deadlock in installDesktopUpdateTaskControl
- [#12358](https://github.com/deepseek-ai/deepseek-harness/discussions/12358) [Bug] ui-sidebar-files: unanchored `:has()` in FilesBody.module.css makes every DOM insert + layout read restyle the whole page
- [#12295](https://github.com/deepseek-ai/deepseek-harness/discussions/12295) [Bug]桌面端 0.2.2-rc.1：跟随尾部时 Turn 完成后的底部预留空白无法回收
- [#12353](https://github.com/deepseek-ai/deepseek-harness/discussions/12353) [Bug] Linux: dsh-subprocess transient scopes accumulate and keep the user manager busy
- [#10806](https://github.com/deepseek-ai/deepseek-harness/discussions/10806) [Bug] session_search fails intermittently on large histories: `persistence observation did not stabilize after one retry`
- [#12340](https://github.com/deepseek-ai/deepseek-harness/discussions/12340) [Bug] session-search：一个无法迁移的旧会话日志会让整个索引失效（core 0.2.1-rc.2）
- [#12335](https://github.com/deepseek-ai/deepseek-harness/discussions/12335) [Bug] llm-pi-ai silently sends max_completion_tokens=1 near the context limit, surfaced as misleading "Output token limit reached"
- [#12333](https://github.com/deepseek-ai/deepseek-harness/discussions/12333) [BUG] 0.2.2-rc.1出现一个状态同步异常
- [#12332](https://github.com/deepseek-ai/deepseek-harness/discussions/12332) [Bug] host 进程因未捕获的 ECONNRESET 整体退出（切换网络/代理时，来自模型列表刷新请求）
- [#11223](https://github.com/deepseek-ai/deepseek-harness/discussions/11223) [Bug] Windows workspace-write: 0xC0000142 comes from the token default DACL naming a non-restricting capability SID (corrected; follow-up to #8991 / #8067)
- [#8557](https://github.com/deepseek-ai/deepseek-harness/discussions/8557) [Bug] 桌面版插件安装/卸载被无关依赖的 minimumReleaseAge 连坐失败，且 minimumReleaseAgeExclude 白名单本身被 "local policy" 拒绝
- [#9718](https://github.com/deepseek-ai/deepseek-harness/discussions/9718) [Bug] Windows desktop: "browser time zone is unavailable" blocks chat with British Columbia Standard Time
- [#4811](https://github.com/deepseek-ai/deepseek-harness/discussions/4811) [Bug report] One persisted session with an unsupported event (demo/hello) can abort global reconciliation and make session search report storage unavailable
- [#9599](https://github.com/deepseek-ai/deepseek-harness/discussions/9599) [Bug] 桌面版「在编辑器中打开」对 Electron 系编辑器必然失败 —— ELECTRON_RUN_AS_NODE 泄漏到子进程
- [#12321](https://github.com/deepseek-ai/deepseek-harness/discussions/12321) [Bug] Workspace folder tint shows the selected session, not running activity — busy nested workspaces look idle
- [#12318](https://github.com/deepseek-ai/deepseek-harness/discussions/12318) [Bug] Session resume fails permanently when cordis.patch.yml references a removed subpath export (0.2.2-rc.1)
- [#7888](https://github.com/deepseek-ai/deepseek-harness/discussions/7888) [Bug] 桌面版预览版 win-x64 试用记录：装本地插件后冷启动崩、窗口按钮盖住右栏关闭、更新检查弹 EPIPE
- [#11971](https://github.com/deepseek-ai/deepseek-harness/discussions/11971) [BUG] Gateway/internal: failed to create session
- [#12275](https://github.com/deepseek-ai/deepseek-harness/discussions/12275) [Bug] Microsoft Store 版 PowerShell 7 无法出现在终端 shell 菜单（App Execution Alias 的 `stat()` 抛 `EACCES`）
- [#10458](https://github.com/deepseek-ai/deepseek-harness/discussions/10458) [Bug] Nested dsh-app-boot copy checks plugin compatibility against its own version, not the running launcher
- [#12286](https://github.com/deepseek-ai/deepseek-harness/discussions/12286) [Bug] file-reference-local 重载时向已关闭的 Agent scope 注册提示词，导致插件 Failed（0.2.2-rc.1）
- [#6374](https://github.com/deepseek-ai/deepseek-harness/discussions/6374) [Bug] Served index.html missing Cache-Control: no-store — cached documents break boot after rebuild
- [#12246](https://github.com/deepseek-ai/deepseek-harness/discussions/12246) [bug] dsh在进行任务时下面鲸鱼尾巴的计时出现问题
- [#12242](https://github.com/deepseek-ai/deepseek-harness/discussions/12242) [Bug] 插话 (steer / next-step) 仅在 Step 边界被动消费而不中断当前 Step，导致慢请求久等不生效、最终回答 Step 整轮答完才发出插话
- [#12272](https://github.com/deepseek-ai/deepseek-harness/discussions/12272) [Bug][UI] 统计页步骤表「缓存未命中」标签与「详情/时间戳」重叠，文字相互遮盖（0.2.2-rc.1）
- [#9695](https://github.com/deepseek-ai/deepseek-harness/discussions/9695) [Bug] session_search 永久 30s 超时：:memory: FTS 索引 + 单事务对账 + 工具超时中止，大语料必然死锁
- [#12278](https://github.com/deepseek-ai/deepseek-harness/discussions/12278) [bug]工具调用失导致败任务停滞的问题
- [#12273](https://github.com/deepseek-ai/deepseek-harness/discussions/12273) [Bug] 进入独立 worktree 后，forge 面板仍显示上一个检出里的变更请求
- [#12192](https://github.com/deepseek-ai/deepseek-harness/discussions/12192) [Bug] 一个第三方插件失败（如重复 id 注册）即可让整个 Desktop 拒绝启动
- [#12268](https://github.com/deepseek-ai/deepseek-harness/discussions/12268) [Bug] 会话日志被整包重写为单帧后，会话从侧栏/搜索中静默消失（含复现与修复建议）
- [#11187](https://github.com/deepseek-ai/deepseek-harness/discussions/11187) [Bug] macOS 桌面版：内置更新器因 host 优雅退出超过 10 秒而拒绝安装（即使最终 exit 0）
- [#4925](https://github.com/deepseek-ai/deepseek-harness/discussions/4925) [BUG] 会话中生成的markdown表格会从右侧超出规定的显示范围
- [#12210](https://github.com/deepseek-ai/deepseek-harness/discussions/12210) [Bug] Upgrading only @deepseek-ai/dsh* to 0.2.2-rc.1 leaves the cordis family at 4.0.x — pnpm exits 0, boot fails with version-unrelated errors
- [#12240](https://github.com/deepseek-ai/deepseek-harness/discussions/12240) [Bug] cjkFriendlyStrong.ts 仅实现了右闭合 (cjkStrongClose) 而漏了左开启 (cjkStrongOpen)，导致中文紧贴 `**“...”**` 原样裸露甚至跨段反相加粗
- [#11970](https://github.com/deepseek-ai/deepseek-harness/discussions/11970) [bug] dsh-superagent: GitHub Source silently drops a mention when its notification arrives late (race with the poll cursor)
- [#11763](https://github.com/deepseek-ai/deepseek-harness/discussions/11763) [Bug] settings/describe crashes on Standard Schema Config with toJSON
- [#11652](https://github.com/deepseek-ai/deepseek-harness/discussions/11652) [BUG]DSH 沙箱打低完整性标签导致程序无法启动0.2.1-rc.3
- [#11623](https://github.com/deepseek-ai/deepseek-harness/discussions/11623) [BUG]pnpm dev:web  bug
- [#1842](https://github.com/deepseek-ai/deepseek-harness/discussions/1842) Bug: profile package.json with UTF-8 BOM crashes dsh web (Unexpected token ... is not valid JSON)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-07T04:06:39.589Z_