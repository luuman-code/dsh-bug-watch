# DSH Bug Watch — 2026-08-28

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 36

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
- [#3786](https://github.com/deepseek-ai/deepseek-harness/discussions/3786) **[Bug] npx @deepseek-ai/dsh web 无限卡死：npm 依赖解析死循环（CPU 100%、零网络流量、换镜像无效）**<br/>  分类：General · 标签：— · 最近更新：2026-08-28

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#4855](https://github.com/deepseek-ai/deepseek-harness/discussions/4855) **[BUG]昨天正常使用完关闭后就无法再次打开**<br/>  分类：Q&A · 标签：— · 最近更新：2026-08-28
- [#4473](https://github.com/deepseek-ai/deepseek-harness/discussions/4473) **[Bug] spawn 子代理未继承 agent-default-model：主会话走自定义 provider， spawn 子代理被路由到 deepseek-official**<br/>  分类：Q&A · 标签：— · 最近更新：2026-08-27

## 📝 仅报告 — 无人互动
- [#4878](https://github.com/deepseek-ai/deepseek-harness/discussions/4878) Bug: Win32 folder picker truncates paths at U+XX00 chars — fix 51c24274 never shipped in npm releases
- [#4178](https://github.com/deepseek-ai/deepseek-harness/discussions/4178) [BUG] 两个 dsh web 实例并发打开同一会话，导致会话日志 seq 冲突、历史记录损坏
- [#3021](https://github.com/deepseek-ai/deepseek-harness/discussions/3021) [Bug] rc.7: reasoning (thinking) intermittently stored and rendered as text blocks - thinking leaks into the visible transcript
- [#4767](https://github.com/deepseek-ai/deepseek-harness/discussions/4767) [Bug] seq gap + 跨 session 内容串写 -> 手动修复后单文件损坏导致 dsh web 启动崩溃
- [#4819](https://github.com/deepseek-ai/deepseek-harness/discussions/4819) Bug: dsh-agent-loop auto-continue notice messages lack message.id, corrupting session history
- [#1452](https://github.com/deepseek-ai/deepseek-harness/discussions/1452) BUG: 同一 DSH_HOME 下多进程并发写同一会话日志，导致 seq 重复、整段历史无法加载
- [#4862](https://github.com/deepseek-ai/deepseek-harness/discussions/4862) [BUG]: Filesystem tools treat HTTP(S) URLs as local relative paths and return misleading errors.
- [#4807](https://github.com/deepseek-ai/deepseek-harness/discussions/4807) [Bug report] 0.1.1-rc.2 macOS: web backend crash loop & hotfix-reversion issues (repro + local fixes attached)
- [#4811](https://github.com/deepseek-ai/deepseek-harness/discussions/4811) [Bug report] One persisted session with an unsupported event (demo/hello) can abort global reconciliation and make session search report storage unavailable
- [#4859](https://github.com/deepseek-ai/deepseek-harness/discussions/4859) [BUG] Failed to re-run `pnpm dsh web`
- [#4858](https://github.com/deepseek-ai/deepseek-harness/discussions/4858) [BUG]dsh-v0.1.2-alpha.1 中对话标签新增的调整宽度功能在由插件提供的标签页中意外出现
- [#4854](https://github.com/deepseek-ai/deepseek-harness/discussions/4854) [BUG] markdown 渲染：单个 `~` 被当删除线，gfm() 未传 singleTilde:false 违反 GFM 规范
- [#4851](https://github.com/deepseek-ai/deepseek-harness/discussions/4851) [BUG] llm-deepseek 在网关发送"空字符串续块"时会丢失工具调用的 id/name（聚合中转站）
- [#4612](https://github.com/deepseek-ai/deepseek-harness/discussions/4612) Bug report draft: native read_image tool fails with "cannot get property 'fs' without inject" (all presets)
- [#4826](https://github.com/deepseek-ai/deepseek-harness/discussions/4826) [Bug] 上下文超过100%未触发自动压缩
- [#4830](https://github.com/deepseek-ai/deepseek-harness/discussions/4830) [Bug] Web UI conversation rendering silently stalls: all subsequent messages (including new user messages) stop displaying; survives refresh; self-heals later
- [#4798](https://github.com/deepseek-ai/deepseek-harness/discussions/4798) [Bug Report] Switching default agent preset to cordis while a standard session runs wedges new-session creation (tool pwsh already registered, dsh 0.1.1-rc.2)
- [#1839](https://github.com/deepseek-ai/deepseek-harness/discussions/1839) Bug report: New Session silently fails when the default agent preset no longer exists
- [#998](https://github.com/deepseek-ai/deepseek-harness/discussions/998) [BUG] "Add Workspace" silently does nothing when dsh web is launched as a detached or background process on Windows or macOS
- [#4666](https://github.com/deepseek-ai/deepseek-harness/discussions/4666) [bug] Spawn-backed subagents drop reasoningEffort; endpoints that require thinking reject every delegation
- [#3984](https://github.com/deepseek-ai/deepseek-harness/discussions/3984) [Bug] mcp-client: activeServerNames 生命周期泄漏导致无法创建新会话
- [#4789](https://github.com/deepseek-ai/deepseek-harness/discussions/4789) [Bug Report] 15 列的 markdown 表格完全不渲染（显示原始 | 文本），12 列正常
- [#4788](https://github.com/deepseek-ai/deepseek-harness/discussions/4788) [Bug Report] 宽表（≥4 列）在 Firefox 滚动到底后最后一列仍被裁剪，关闭右侧栏后更严重
- [#3760](https://github.com/deepseek-ai/deepseek-harness/discussions/3760) [Bug] 重启后孤儿会话（磁盘存在但未登记工作区）不再出现在侧栏
- [#4773](https://github.com/deepseek-ai/deepseek-harness/discussions/4773) Bug: multi-line $$...$$ display math (with \begin{aligned}) swallows the rest of the message
- [#4729](https://github.com/deepseek-ai/deepseek-harness/discussions/4729) [Bug] Settings page left plugin nav overflows with no scrollbar — items clipped & unclickable
- [#469](https://github.com/deepseek-ai/deepseek-harness/discussions/469) [BUG] workspace-write 调用外部工具可能导致卡死
- [#4763](https://github.com/deepseek-ai/deepseek-harness/discussions/4763) Bug: sandbox_permissions/justification break every tool call on Full access - sanitize no-op escalation requests
- [#4760](https://github.com/deepseek-ai/deepseek-harness/discussions/4760) [Bug] Windows 原生目录选择器:路径含 U+XX00 字符时被截断,添加"报销"工作区失败
- [#902](https://github.com/deepseek-ai/deepseek-harness/discussions/902) [Bug Report] 运行中热重载 cordis.patch.yml 插入 MCP 插件后，新建会话/选择工作区失败（界面闪回未选择状态）
- [#1032](https://github.com/deepseek-ai/deepseek-harness/discussions/1032) [Bug Report] `npx @deepseek-ai/dsh web` 在干净环境必然崩溃：`cordis-plugin-group` 是静态导入依赖却只声明为 peerDependency（发布配置缺陷）
- [#4737](https://github.com/deepseek-ai/deepseek-harness/discussions/4737) [Bug] WebView 渲染进程 MutationObserver 微任务死循环导致 UI 完全卡死（CPU 100%），归档会话后恢复
- [#4695](https://github.com/deepseek-ai/deepseek-harness/discussions/4695) [Bug] 非 loopback 访问时 Settings 面板报错 "settings are unavailable in this browser"

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-08-28T08:24:36.847Z_