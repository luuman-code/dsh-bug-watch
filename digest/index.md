# DSH Bug Watch — 2026-09-13

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 53

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#5952](https://github.com/deepseek-ai/deepseek-harness/discussions/5952) **[Bug] 会话日志损坏：长工具调用执行期间中断回合，导致 seq 重复（中断修复路径使用了过期的 seq 基线）**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-12

## 📝 仅报告 — 无人互动
- [#6221](https://github.com/deepseek-ai/deepseek-harness/discussions/6221) Bug: a settings write deletes an external edit that added a key inside the namespace it writes (still live on 0.1.5-rc.2)
- [#6219](https://github.com/deepseek-ai/deepseek-harness/discussions/6219) [Bug] 会话 token 计数不含 teammates：一次 Agent Teams 运行实测低估 2.3×（17.8M vs 41.1M）
- [#6217](https://github.com/deepseek-ai/deepseek-harness/discussions/6217) Bug: Web GUI file preview shows "file resource service unavailable" on Chromium <= 125 — protocolOf() relies on WHATWG URL host parsing for a non-special scheme
- [#6459](https://github.com/deepseek-ai/deepseek-harness/discussions/6459) [Bug] Coexisting dsh installations sharing one $DSH_HOME rewrite the shared profiles/node_modules fallback links on every launch
- [#6438](https://github.com/deepseek-ai/deepseek-harness/discussions/6438) [Bug] "Show in File Explorer" on Windows reveals the file in an invisible window (and never reveals non-ASCII paths)
- [#6478](https://github.com/deepseek-ai/deepseek-harness/discussions/6478) [Bug] Gemini compaction uses unsupported MINIMAL thinking level and ends in context overflow
- [#1839](https://github.com/deepseek-ai/deepseek-harness/discussions/1839) Bug report: New Session silently fails when the default agent preset no longer exists
- [#6454](https://github.com/deepseek-ai/deepseek-harness/discussions/6454) [Bug] dsh-llm-pi-ai: discoverModels 对目录内置 provider 直接短路，"获取可用模型"永远拿不到新模型（opencode-go / deepseek-v4.1-flash 为例）
- [#6475](https://github.com/deepseek-ai/deepseek-harness/discussions/6475) [Bug] 工具结果里的图片块只有 read_image 会被渲染，其他工具（含插件工具）返回的图片被静默丢弃
- [#6474](https://github.com/deepseek-ai/deepseek-harness/discussions/6474) [Bug] 右侧栏页签条 CSS 两处缺陷：tab 高度与 padding 自相矛盾导致 ×/+ 被裁 5px；绝对定位的关闭键恒定压住标题尾部 14px
- [#6166](https://github.com/deepseek-ai/deepseek-harness/discussions/6166) [Bug] Switching a blank session to an already-loaded preset drops subagent tools
- [#6469](https://github.com/deepseek-ai/deepseek-harness/discussions/6469) [Bug] dsh-compaction reads the removed Session.events accessor -> every compress crashes with TypeError
- [#6467](https://github.com/deepseek-ai/deepseek-harness/discussions/6467) Bug: OpenCode Go requests fail with MissingSessionID
- [#6466](https://github.com/deepseek-ai/deepseek-harness/discussions/6466) [bug]dsh web 运行中进程意外退出
- [#6328](https://github.com/deepseek-ai/deepseek-harness/discussions/6328) [Bug] One unmigratable v0 artifact (subagent/descriptor v2) disables all content search
- [#6458](https://github.com/deepseek-ai/deepseek-harness/discussions/6458) [Bug] Todo list does not update incrementally during long-running tasks
- [#6455](https://github.com/deepseek-ai/deepseek-harness/discussions/6455) [Bug] 重启后子代理列表全部显示"不可用"：v0 日志的 `header.system` 无法迁移到 v3，且错误被降级为可重试的 `unavailable`
- [#6461](https://github.com/deepseek-ai/deepseek-harness/discussions/6461) [Bug][Windows] koffi is load-bearing (session JSONL atomic writes, win32 process/acl) but fails late and confusingly under embedded Node
- [#6403](https://github.com/deepseek-ai/deepseek-harness/discussions/6403) [Bug] workspace-write 沙箱下一切 schannel TLS 失败（受限令牌 restricting SID 导致 SSPI 无凭据）
- [#6407](https://github.com/deepseek-ai/deepseek-harness/discussions/6407) [Bug] Session log becomes permanently unloadable after interrupt + background-job resume: "corrupt session log: seq gap in committed region"
- [#6441](https://github.com/deepseek-ai/deepseek-harness/discussions/6441) [Bug][WSL2] dsh web freeze: sync reverse DNS in flock libc probe (missing excludeNetwork)
- [#6453](https://github.com/deepseek-ai/deepseek-harness/discussions/6453) [Bug]：在WebUI中光标位于行末使用backspace无法删除字符，在下一行首使用backspace光标会在不删除任何字符时回退到上一行的行末
- [#4615](https://github.com/deepseek-ai/deepseek-harness/discussions/4615) [Bug] dsh-llm-pi-ai sends non png/jpeg/gif images as-is; LM Studio rejects webp with 400 "'url' field must be a base64 encoded image."
- [#6368](https://github.com/deepseek-ai/deepseek-harness/discussions/6368) [Bug] DSH说已写入文档但并没有写入
- [#2658](https://github.com/deepseek-ai/deepseek-harness/discussions/2658) [Bug] New Session implicitly falls back to `recentWorkspaceId` — sessions spawned into unrelated projects (root cause + one-line fix)
- [#3410](https://github.com/deepseek-ai/deepseek-harness/discussions/3410) [BUG]When a session is not assigned to any workspace, the sidebar shows an Ungrouped group. Hovering that group still reveals a + button ("New session in Ungrouped"), but clicking it does nothing.
- [#6447](https://github.com/deepseek-ai/deepseek-harness/discussions/6447) [Bug] Sessions hang on the goal-loop + a blocking wait (unfinished tool-call / unanswered `ask_user_question`); the server does not release the turn
- [#6446](https://github.com/deepseek-ai/deepseek-harness/discussions/6446) [Bug] `session/create` with only `cwd` (no `workspaceId`) does not attach the session to the owning workspace
- [#6445](https://github.com/deepseek-ai/deepseek-harness/discussions/6445) [Bug] Cannot move a session between workspaces; renaming a workspace folder breaks session binding
- [#6444](https://github.com/deepseek-ai/deepseek-harness/discussions/6444) [Bug] Inter-session coordination degrades: handoffs are not picked up, goals stall instead of polling, cross-session messages duplicate
- [#6409](https://github.com/deepseek-ai/deepseek-harness/discussions/6409) [Bug] Web sessions (agent preset) expose `subagent_fork` but not `subagent` (spawn) — tool is configured and enabled everywhere, but never registers
- [#6402](https://github.com/deepseek-ai/deepseek-harness/discussions/6402) [Bug] 「在新对话中分支」会把分叉点之后的下一条用户消息带进新会话，并在新会话里重新执行它
- [#6437](https://github.com/deepseek-ai/deepseek-harness/discussions/6437) [Bug] dsh-client-resources 的 protocolOf 依赖 new URL().hostname，Edge 129 下文件预览显示“文件资源服务不可用”
- [#6398](https://github.com/deepseek-ai/deepseek-harness/discussions/6398) [Bug] 0.1.5 模型目录缓存失败状态，“重试”无法重新加载第三方模型
- [#6227](https://github.com/deepseek-ai/deepseek-harness/discussions/6227) [Bug] dsh-client-connection@0.1.5-rc.1 fix(client-connection): register() resolves webServer without inject, breaking every rpc.handle() consumer
- [#6427](https://github.com/deepseek-ai/deepseek-harness/discussions/6427) [Bug][性能] 0.1.5-rc.2 Web UI 空闲态主线程占用约 50%、布局约 144 次/秒（≈每帧一次），拖拽窗口 resize 明显卡顿
- [#5976](https://github.com/deepseek-ai/deepseek-harness/discussions/5976) [Bug] Agent 在超长上下文 + max reasoning effort 下陷入思考退化循环：回合零产出、无自动熔断，需手动中止（v4.1-flash；同配置 v4-flash 3000+ 步未复发）
- [#6419](https://github.com/deepseek-ai/deepseek-harness/discussions/6419) [Bug][WebUI] 会话宽度调整Handler会遮挡会话内垂直导航轨道
- [#6231](https://github.com/deepseek-ai/deepseek-harness/discussions/6231) [Bug] Web composer stuck in IME composition — Enter stops submitting, keystrokes duplicate (Windows + Microsoft Pinyin / 微软拼音)
- [#6262](https://github.com/deepseek-ai/deepseek-harness/discussions/6262) [Bug Report] session.fork 的 seed 多带一条 user prompt：turn/end 与下一个 turn/start 之间的事件被扫进子会话，子会话重跑父会话的下一条任务
- [#6316](https://github.com/deepseek-ai/deepseek-harness/discussions/6316) [Bug][0.1.5-rc.1] Cold session list titles seeded sessions with the workspace folder name until each is opened
- [#6406](https://github.com/deepseek-ai/deepseek-harness/discussions/6406) [BUG] selectCompactableRange compares a real-window token budget against heuristic node prices
- [#6356](https://github.com/deepseek-ai/deepseek-harness/discussions/6356) [Bug] v0.1.5-rc.1/rc.2: "agent.session.events is not iterable" in headless mode
- [#6376](https://github.com/deepseek-ai/deepseek-harness/discussions/6376) [BUG] An agent acted on an instruction the user never sent, and the assembled prompt is not recorded
- [#6400](https://github.com/deepseek-ai/deepseek-harness/discussions/6400) [Bug] Directory picker is a silent no-op on Windows Session-0 service deployments (fix: pin -browse)
- [#6401](https://github.com/deepseek-ai/deepseek-harness/discussions/6401) [Bug] TRANSPORT retries reuse a CLOSED HTTP/2 session after the process loses a local address
- [#6372](https://github.com/deepseek-ai/deepseek-harness/discussions/6372) [Bug] 0.1.5-rc.2 桌面端 prepare:dsh 必然失败：payload smoke 断言已被移除的 fs-ext，无法产出 resources/dsh
- [#6196](https://github.com/deepseek-ai/deepseek-harness/discussions/6196) [BUG] dsh web 启动到打印 URL 约 18s，其中约 9.3s 来自 client-modules 每次启动重复 8 次全量重建组合包
- [#6374](https://github.com/deepseek-ai/deepseek-harness/discussions/6374) [Bug] Served index.html missing Cache-Control: no-store — cached documents break boot after rebuild
- [#6373](https://github.com/deepseek-ai/deepseek-harness/discussions/6373) [Bug] pnpm run build silently does nothing under tsx (import.meta.main guard never true)
- [#6378](https://github.com/deepseek-ai/deepseek-harness/discussions/6378) [BUG] An agent acted on an instruction the user never sent, and the assembled prompt is not recorded
- [#6377](https://github.com/deepseek-ai/deepseek-harness/discussions/6377) [BUG] An agent acted on an instruction the user never sent, and the assembled prompt is not recorded

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-13T02:32:38.257Z_