# DSH Bug Watch — 2026-09-15

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 42

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
- [#3786](https://github.com/deepseek-ai/deepseek-harness/discussions/3786) **[Bug] npx @deepseek-ai/dsh web 无限卡死：npm 依赖解析死循环（CPU 100%、零网络流量、换镜像无效）**<br/>  分类：General · 标签：— · 最近更新：2026-09-14

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#6680](https://github.com/deepseek-ai/deepseek-harness/discussions/6680) Bug: dsh plugin add 会静默安装 host peer 范围无法满足的插件(dsh-win32 实测,零 warning)
- [#5673](https://github.com/deepseek-ai/deepseek-harness/discussions/5673) Bug: LLM requests die at ~302s with `terminated` when a provider needs >5min silent prefill
- [#6667](https://github.com/deepseek-ai/deepseek-harness/discussions/6667) Bug: versionless profile manifests break DeepSeek requests for local modules
- [#6661](https://github.com/deepseek-ai/deepseek-harness/discussions/6661) [Bug] Python code runtime child process becomes orphaned high-CPU zombie on macOS after host exits
- [#6659](https://github.com/deepseek-ai/deepseek-harness/discussions/6659) [Bug] 低并发场景下频繁出现服务器繁忙与turn error，零点时段规律性服务中断
- [#6217](https://github.com/deepseek-ai/deepseek-harness/discussions/6217) Bug: Web GUI file preview shows "file resource service unavailable" on Chromium <= 125 — protocolOf() relies on WHATWG URL host parsing for a non-special scheme
- [#6649](https://github.com/deepseek-ai/deepseek-harness/discussions/6649) [Bug] Windows NTFS: Spurious FS_STALE_VERSION from nanosecond timestamp jitter & module resolution fallback failure on non-C: drive checkouts
- [#6638](https://github.com/deepseek-ai/deepseek-harness/discussions/6638) [Bug] revealNativePath: explorer.exe /select, fails on Windows — path passed as a separate argv entry and as a percent-encoded file URL
- [#6629](https://github.com/deepseek-ai/deepseek-harness/discussions/6629) [Bug] Windows: "Reveal in File Explorer" silently fails - two causes: percent-encoded file:// URL AND windowsHide: true hiding explorer's own window
- [#6639](https://github.com/deepseek-ai/deepseek-harness/discussions/6639) [Bug] Body-only Skill updates can leave an ongoing conversation following stale instructions
- [#6636](https://github.com/deepseek-ai/deepseek-harness/discussions/6636) [Bug] Windows Job 主路径 launchWindowsJob 仍缺 windowsHide：0.1.5-rc.2 下每次命令仍弹出控制台窗口
- [#1839](https://github.com/deepseek-ai/deepseek-harness/discussions/1839) Bug report: New Session silently fails when the default agent preset no longer exists
- [#6497](https://github.com/deepseek-ai/deepseek-harness/discussions/6497) Bug: dsh_plugin_packages — one unresolvable active package fails every deepseek-official request (REQUEST_EXTENSION)
- [#6496](https://github.com/deepseek-ai/deepseek-harness/discussions/6496) Bug: session list shows no title for seeded (forked/resumed) sessions until opened
- [#6138](https://github.com/deepseek-ai/deepseek-harness/discussions/6138) [Bug] 输入法拼音未上屏时，输入框自动填充乱码汉字
- [#6539](https://github.com/deepseek-ai/deepseek-harness/discussions/6539) [Bug] Plugin/profile composition drift only surfaces as a fatal crash on the next boot — needs preflight validation and a dsh profile doctor
- [#6619](https://github.com/deepseek-ai/deepseek-harness/discussions/6619) [Bug] ChatView paints TurnStatus ("Deep diving…") above the pending submission echo — sent message looks missing until first print
- [#6277](https://github.com/deepseek-ai/deepseek-harness/discussions/6277) [Bug] session/fork inherits the source's pending inbox — a branch's first new message is answered as the source's queued question ｜ fork 继承未消费收件箱：分支首条新消息被当成源分支排队提问回答
- [#6262](https://github.com/deepseek-ai/deepseek-harness/discussions/6262) [Bug Report] session.fork 的 seed 多带一条 user prompt：turn/end 与下一个 turn/start 之间的事件被扫进子会话，子会话重跑父会话的下一条任务
- [#6197](https://github.com/deepseek-ai/deepseek-harness/discussions/6197) [Bug] 分叉（fork）会继承父会话"已入队未执行"的消息并在子会话自动重跑，且没有任何干预窗口
- [#6160](https://github.com/deepseek-ai/deepseek-harness/discussions/6160) [bug]新版本(dsh-v0.1.5-rc.1)在开展别的对话期间，fork之前会话并写入新的prompt会出bug
- [#6147](https://github.com/deepseek-ai/deepseek-harness/discussions/6147) [Bug] Forked session inherits the parent's queued next message and runs it as a phantom turn
- [#6022](https://github.com/deepseek-ai/deepseek-harness/discussions/6022) [Bug] Forking a session inherits the parent's queued prompts — the child executes them on first submit
- [#6185](https://github.com/deepseek-ai/deepseek-harness/discussions/6185) [BUG] 0.1.5-rc1 旧版本创建的preset加载错误
- [#4612](https://github.com/deepseek-ai/deepseek-harness/discussions/4612) Bug report draft: native read_image tool fails with "cannot get property 'fs' without inject" (all presets)
- [#6224](https://github.com/deepseek-ai/deepseek-harness/discussions/6224) [Bug] llm-pi-ai/opencode-go: missing x-opencode-session header and deepseek-v4.1-flash catalog entry
- [#6595](https://github.com/deepseek-ai/deepseek-harness/discussions/6595) [Bug] pi-ai localized timeout text is classified as PI_AI_ERROR and skips retry
- [#6603](https://github.com/deepseek-ai/deepseek-harness/discussions/6603) [BUG] Session history becomes unloadable ("corrupt") after a degenerate model tool call persists an empty callId
- [#6584](https://github.com/deepseek-ai/deepseek-harness/discussions/6584) Bug Report: dsh 0.1.5-rc.1 silently exits on Node.js v24.1.0 / 缺陷报告：dsh 0.1.5-rc.1 在 Node.js v24.1.0 上静默退出
- [#6589](https://github.com/deepseek-ai/deepseek-harness/discussions/6589) [Bug] Desktop packaging fails at prepare:dsh: runtime-payload-smoke.mjs still requires removed fs-ext
- [#6124](https://github.com/deepseek-ai/deepseek-harness/discussions/6124) [Bug] dsh 0.1.5-rc.1 在 Node.js < 24 上完全静默失败(import.meta.main 守卫 + 未声明 engines)
- [#4021](https://github.com/deepseek-ai/deepseek-harness/discussions/4021) [Bug] Same-mode sandbox_permissions hard-errors instead of running — loops GPT-family models
- [#6601](https://github.com/deepseek-ai/deepseek-harness/discussions/6601) [BUG] Windows Terminal 未显示在 DSH “打开方式”菜单
- [#5857](https://github.com/deepseek-ai/deepseek-harness/discussions/5857) [Bug Report] Seeded / forked sessions fallback to workspace name after restart (cached title skipped during cold listing)
- [#6593](https://github.com/deepseek-ai/deepseek-harness/discussions/6593) [Bug] pi-ai/OpenAI Responses: data-only keep-alives reach JSON.parse
- [#6594](https://github.com/deepseek-ai/deepseek-harness/discussions/6594) [Bug] OpenAI Responses final item completes but missing response.completed hangs until idle timeout
- [#5588](https://github.com/deepseek-ai/deepseek-harness/discussions/5588) Bug: same-mode sandbox_permissions is rejected as an invalid escalation
- [#6591](https://github.com/deepseek-ai/deepseek-harness/discussions/6591) [Bug] Windows: a drive root (`C:\`, `D:\`) cannot be used as a workspace — session creation fails with EPERM and reports nothing
- [#6583](https://github.com/deepseek-ai/deepseek-harness/discussions/6583) [Bug] Web GUI: parent-session crumb in the header breadcrumb does nothing when clicked inside a subagent session (no in-header way back to the parent)
- [#6581](https://github.com/deepseek-ai/deepseek-harness/discussions/6581) [Bug] dsh-tools commit() 无类型防御：工具返回非数组 content 会打死整个 dsh-web 进程
- [#6227](https://github.com/deepseek-ai/deepseek-harness/discussions/6227) [Bug] dsh-client-connection@0.1.5-rc.1 fix(client-connection): register() resolves webServer without inject, breaking every rpc.handle() consumer

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-15T02:51:51.469Z_