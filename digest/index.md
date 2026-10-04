# DSH Bug Watch — 2026-10-04

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 28

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#7032](https://github.com/deepseek-ai/deepseek-harness/discussions/7032) **[BUG]: Host-backed settings (Settings > Models/General) are impossible behind any reverse proxy — isLoopback gate tests the hostname string only, with no deployment override**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-03

## 📝 仅报告 — 无人互动
- [#4367](https://github.com/deepseek-ai/deepseek-harness/discussions/4367) Bug: DeepSeek WebSearchProvider drops the generated answer from native web search responses
- [#8794](https://github.com/deepseek-ai/deepseek-harness/discussions/8794) [Bug][0.2.0-rc.2] web_search: one failed query aborts the other queries and discards their (billed) results
- [#8793](https://github.com/deepseek-ai/deepseek-harness/discussions/8793) [Bug][0.2.0-rc.2] read_image passes only the first frame of an animated GIF, with no notice
- [#8792](https://github.com/deepseek-ai/deepseek-harness/discussions/8792) [Bug] 插件 id 冲突会让整个宿主崩溃：Cannot read properties of undefined (reading 'prepare')
- [#8708](https://github.com/deepseek-ai/deepseek-harness/discussions/8708) [Bug] Subagent model selection unreachable for UI-created and existing sessions (freshSession vs web constructor seed)
- [#7702](https://github.com/deepseek-ai/deepseek-harness/discussions/7702) [Bug] 工作区选择根目录后无法在该工作区创建对话，并跳转至其他工作区
- [#8783](https://github.com/deepseek-ai/deepseek-harness/discussions/8783) [Bug] SQLite session indexing cannot stabilize during active writes: corpus-wide historical revisions invalidate the entire first build (0.2.0-rc.2)
- [#8787](https://github.com/deepseek-ai/deepseek-harness/discussions/8787) [Bug] 桌面版在管理员权限下无法启动（renderer launch-failed / exitCode 18）
- [#8780](https://github.com/deepseek-ai/deepseek-harness/discussions/8780) [Bug][0.1.7-rc.2] barePackageName 内建模块判定未归一子路径 + routeScoped 无空值保护（msedge-tts 实崩）
- [#8778](https://github.com/deepseek-ai/deepseek-harness/discussions/8778) [Bug][0.1.7-rc.2 / 0.2.0-rc.1] 插件 pre-step 观测监听器返回 undefined 放倒全部会话：installModelSelection 中间件链无守卫
- [#8776](https://github.com/deepseek-ai/deepseek-harness/discussions/8776) [BUG] DeepSeek Harness Desktop 0.2.0-rc.2 在 Windows 11 上无法启动：V8 启动快照加载失败
- [#8763](https://github.com/deepseek-ai/deepseek-harness/discussions/8763) [Bug][0.2.0-rc.2] 桌面版 cordis preset 的 skill-filesystem 指向 app.asar，模型侧技能清单永不注入 · desktop packaging breaks the skill catalog
- [#8509](https://github.com/deepseek-ai/deepseek-harness/discussions/8509) [Bug] DSML-like tool markup returned as assistant text instead of native tool calls interrupts long-running tasks (0.1.7-rc.2)
- [#7310](https://github.com/deepseek-ai/deepseek-harness/discussions/7310) [Bug] 一次内容审核 400 会永久废掉整个会话 —— 需要「撤销被拒内容并继续」的回滚能力
- [#8757](https://github.com/deepseek-ai/deepseek-harness/discussions/8757) [Bug][0.2.0-rc.2] Windows 安装换目录只改名一次：安全软件扫描时在线升级静默失败且应用不重启
- [#5677](https://github.com/deepseek-ai/deepseek-harness/discussions/5677) [Bug] Web UI history never loads on Firefox-engine browsers (infinite "Loading history…") — Firefox-only failure in lossless-JSON validation
- [#8464](https://github.com/deepseek-ai/deepseek-harness/discussions/8464) [Bug] 依赖的生命周期脚本无超时挂死时，插件安装界面永久假死，「取消安装」也无法脱身
- [#8715](https://github.com/deepseek-ai/deepseek-harness/discussions/8715) [Bug] Windows 上单个损坏的 shell 关联 handler 会让原生打开能力全部消失（应用列表 500）
- [#8734](https://github.com/deepseek-ai/deepseek-harness/discussions/8734) [BUG][Web] 由 dsh web 启动时自动拉起 Chrome 浏览器后导致浏览器数据丢失
- [#8744](https://github.com/deepseek-ai/deepseek-harness/discussions/8744) [Bug] Cannot resume sessions that use llama.cpp (duplicate advertised tool-call ids) · 无法恢复使用 llama.cpp 的会话（广告工具调用 id 重复）
- [#8742](https://github.com/deepseek-ai/deepseek-harness/discussions/8742) [Bug] 输入框两个确定性缺陷：组合输入结算会绕过发送守卫；清空已提交前缀后光标被重置到开头
- [#8688](https://github.com/deepseek-ai/deepseek-harness/discussions/8688) Bug: `connection.rpc.handle()` from a plugin fiber throws `cannot get property "webServer" without inject` — `rpc-host.ts:192` reads `owner.webServer` against Connection's own injections
- [#8733](https://github.com/deepseek-ai/deepseek-harness/discussions/8733) Bug: repeated automatic compaction with little or no progress blocks chat execution
- [#8727](https://github.com/deepseek-ai/deepseek-harness/discussions/8727) [Bug][Web][0.2.0-rc.2] 预览版说明弹窗：确认状态保存失败被压成一句不可行动的「请重试」，且弹窗无法关闭
- [#8660](https://github.com/deepseek-ai/deepseek-harness/discussions/8660) [Bug] web-fetch-http 跨源重定向 notice 只带 origin，与自身重试指引矛盾（附一行修复）
- [#8728](https://github.com/deepseek-ai/deepseek-harness/discussions/8728) [Bug][Windows][0.2.0-rc.2] 共享 profiles/node_modules 跨版本升级后从不校验或重建：15 个悬空软链、缺 40 个包，启动零信号
- [#7894](https://github.com/deepseek-ai/deepseek-harness/discussions/7894) [Bug][0.1.7-rc.2] goal-round-driver + broken compaction caused runaway 642M token explosion in a single session (Continuing goal infinite loop)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-04T03:46:11.938Z_