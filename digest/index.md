# DSH Bug Watch — 2026-08-23

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 48

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
- [#3786](https://github.com/deepseek-ai/deepseek-harness/discussions/3786) **[Bug] npx @deepseek-ai/dsh web 无限卡死：npm 依赖解析死循环（CPU 100%、零网络流量、换镜像无效）**<br/>  分类：General · 标签：— · 最近更新：2026-08-22

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#4083](https://github.com/deepseek-ai/deepseek-harness/discussions/4083) Bug: \b in a template literal is backspace, not a word boundary — generated type-closure regex can never match
- [#4080](https://github.com/deepseek-ai/deepseek-harness/discussions/4080) Bug: case-fold lexical fast path lets writes land OUTSIDE every writable root while passing the workspace-write fence
- [#4077](https://github.com/deepseek-ai/deepseek-harness/discussions/4077) BUG: Spawned subagents inherit `agent.options` stamped at agent creation, not the agent's current model selection
- [#4073](https://github.com/deepseek-ai/deepseek-harness/discussions/4073) Bug: LSP server stdout has no error listener — one transport failure crashes the whole host process
- [#4072](https://github.com/deepseek-ai/deepseek-harness/discussions/4072) Bug: one failing projection unit silently corrupts every unit after it, and snapshots overclaim freshness
- [#4068](https://github.com/deepseek-ai/deepseek-harness/discussions/4068) [Bug] Read tool code viewer shows Chinese labels when locale is English
- [#4064](https://github.com/deepseek-ai/deepseek-harness/discussions/4064) [Bug] tsdown 在 proot 环境下无法识别 @deepseek-ai/dsh-api-remotes 包（已尝试多种配置调整）
- [#4055](https://github.com/deepseek-ai/deepseek-harness/discussions/4055) [Bug] client-hmr's SSE channel burns one HTTP connection per frontend, capping how many DSH frontends can coexist on one origin
- [#4059](https://github.com/deepseek-ai/deepseek-harness/discussions/4059) [Bug] Late ECONNRESET after an upgraded socket closes can terminate dsh web
- [#4062](https://github.com/deepseek-ai/deepseek-harness/discussions/4062) [Bug] SSE tool_calls delta 解析未防御空字符串 id/name，导致第三方供应商流式响应解析失败
- [#4048](https://github.com/deepseek-ai/deepseek-harness/discussions/4048) Bug: Failed tool call causing session dead lock
- [#3911](https://github.com/deepseek-ai/deepseek-harness/discussions/3911) [Bug] run_code 里调用 pwsh 杀进程后会话卡死，工具调用永不返回
- [#3542](https://github.com/deepseek-ai/deepseek-harness/discussions/3542) [Bug] Manual `/compact` aborts after 5–15s with "DeepSeek request aborted by caller" — 22/23 attempts fail (rc.7 & rc.8)
- [#3222](https://github.com/deepseek-ai/deepseek-harness/discussions/3222) [Bug] HTTP 403 授权拒绝被归类为 AUTH，UI 显示 "API key is invalid"，原始错误不可见
- [#3662](https://github.com/deepseek-ai/deepseek-harness/discussions/3662) [Bug] Cancelling a task that spawned subagents permanently corrupts session persistence — production data integrity failure, no recovery path for operators
- [#4047](https://github.com/deepseek-ai/deepseek-harness/discussions/4047) [Bug] pnpm run build 静默退出，5 个 CLI 脚本入口不执行（Node 24.0.x import.meta.main 兼容问题）
- [#758](https://github.com/deepseek-ai/deepseek-harness/discussions/758) [Bug Report] Windows sandbox (workspace-write): permanent crash after Temp cleanup (P0) + 4 related issues
- [#3405](https://github.com/deepseek-ai/deepseek-harness/discussions/3405) [Bug] dsh plugin add fails at the profile workspace root without -w (ERR_PNPM_ADDING_TO_ROOT)
- [#1450](https://github.com/deepseek-ai/deepseek-harness/discussions/1450) Bug: skill discovery silently drops skills whose frontmatter description contains ASCII ": " (yaml parse error)
- [#4037](https://github.com/deepseek-ai/deepseek-harness/discussions/4037) [bug] `skill-filesystem` silently drops skills whose frontmatter `description` contains a colon+space ("Nested mappings are not allowed in compact mappings")
- [#3633](https://github.com/deepseek-ai/deepseek-harness/discussions/3633) [Bug] [Update] Missing session-level lock silently corrupts shared-home deployments — impact upgrade: any multi-writer topology destroys the durable work record (self-review of our own bug report)
- [#4021](https://github.com/deepseek-ai/deepseek-harness/discussions/4021) [Bug] Same-mode sandbox_permissions hard-errors instead of running — loops GPT-family models
- [#580](https://github.com/deepseek-ai/deepseek-harness/discussions/580) [bug] Win32 原生目录选择器在 U+XX00（如「开」）处截断 UTF-16 路径 — 附可 cherry-pick 修复
- [#3984](https://github.com/deepseek-ai/deepseek-harness/discussions/3984) [Bug] mcp-client: activeServerNames 生命周期泄漏导致无法创建新会话
- [#4024](https://github.com/deepseek-ai/deepseek-harness/discussions/4024) [Bug] Windows: dsh CLI 插件管理 spawnSync("pnpm", ..., { shell: true }) 未设置 windowsHide，安装插件时弹出 CMD 窗口
- [#4023](https://github.com/deepseek-ai/deepseek-harness/discussions/4023) [Bug] Windows: dsh-subprocess-local 的 spawn()/taskkill 未设置 windowsHide，重启 Harness 时弹出空白 CMD 窗口
- [#1180](https://github.com/deepseek-ai/deepseek-harness/discussions/1180) [BUG]一直出现Error: invalid arguments: missing required property "description"
- [#4012](https://github.com/deepseek-ai/deepseek-harness/discussions/4012) [Bug] Agent 杀死自身宿主后，用户无法得知任务完成状态：崩溃恢复不指名被中断的工具、无恢复通知
- [#483](https://github.com/deepseek-ai/deepseek-harness/discussions/483) [bug] After a force-kill of the DSH host (deadlocked agents) + restart, user input appears late or never - write-behind batching loses the un-flushed tail
- [#4004](https://github.com/deepseek-ai/deepseek-harness/discussions/4004) [BUG] 「新建会话」按钮在某些工作区点击无反应（New Session silent no-op）
- [#3632](https://github.com/deepseek-ai/deepseek-harness/discussions/3632) [Bug] [Update] Orphan agent/inbox/spliced splits log validity from session readability — impact upgrade: a routine post-incident repair can produce a durably intact but unreadable session (self-review of our own bug report)
- [#3994](https://github.com/deepseek-ai/deepseek-harness/discussions/3994) [Bug] Terminal background-job records are never reclaimed in a live session: unbounded store growth, O(n) list/start scans, and a silent memory footprint that grows with session age
- [#468](https://github.com/deepseek-ai/deepseek-harness/discussions/468) [Bug Report] danger-full-access 下模型重试带 `sandbox_permissions` 的调用被"not strictly wider"拒绝——升级面不随当前模式裁剪，错误文案被误读为权限系统失效
- [#3993](https://github.com/deepseek-ai/deepseek-harness/discussions/3993) Bug: PTC (Code) mode crashes when an MCP tool description contains literal {{...}} text
- [#3988](https://github.com/deepseek-ai/deepseek-harness/discussions/3988) [Bug][Web GUI]：会话在所属 workspace 开始后刷新即变空，浏览器侧会话状态未按 workspace 作用域化
- [#3985](https://github.com/deepseek-ai/deepseek-harness/discussions/3985) [BUG] 代理环境下 LLM API 请求全部失败：Node fetch (undici) 不读取 HTTP_PROXY/HTTPS_PROXY 环境变量
- [#3983](https://github.com/deepseek-ai/deepseek-harness/discussions/3983) Bug: web-e2e fixture splice breaks JSON on Windows paths (25 scenario files fail)
- [#3872](https://github.com/deepseek-ai/deepseek-harness/discussions/3872) [Bug] 打断后的迟到流式事件破坏会话日志序号连续性，整个会话变得无法读取 | Late streaming events after interruption corrupt session-log seq continuity, making the whole session unreadable
- [#3971](https://github.com/deepseek-ai/deepseek-harness/discussions/3971) [Bug] 自定义提供方创建卡片缺少 env 只读防护：密钥写入被拒、创建半途失败、UI 无路可配
- [#1550](https://github.com/deepseek-ai/deepseek-harness/discussions/1550) [Bug] Cold history loading fully materializes large/corrupt logs and can stall the entire Web server
- [#3963](https://github.com/deepseek-ai/deepseek-harness/discussions/3963) [BUG] 升级 0.1.1-rc 后 Web 每轮 agent run 失败(registration.adapter.reprepareCall is not a function)；Desktop 卡 Loading
- [#3966](https://github.com/deepseek-ai/deepseek-harness/discussions/3966) [Bug] Community Market discovery always empty under fake-IP DNS proxies - catalog requests rejected as blocked-address, error flattened to generic 400
- [#3797](https://github.com/deepseek-ai/deepseek-harness/discussions/3797) [bug] 打开大会话时 history 页把全部 assistant/chunk 送进浏览器，UI 看起来像没回复 — 附可 cherry-pick 修复
- [#3749](https://github.com/deepseek-ai/deepseek-harness/discussions/3749) BUG: 超出工作区（Windows·SMB映射驱动器）File operations judged as "out of workspace"
- [#2343](https://github.com/deepseek-ai/deepseek-harness/discussions/2343) [bug] Tool call Error: unknown tool ""
- [#2751](https://github.com/deepseek-ai/deepseek-harness/discussions/2751) [Bug] 插件 Config 非 Standard Schema 时抛裸 TypeError 无修复指引，建议提供 dsh doctor 诊断命令
- [#2851](https://github.com/deepseek-ai/deepseek-harness/discussions/2851) [Bug] rc.7 breaks the persistent PTY shell on Windows (pid 0), node-pty 1.1.0 → 1.2.0-beta.15

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-08-23T00:55:31.253Z_