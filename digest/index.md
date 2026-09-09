# DSH Bug Watch — 2026-09-09

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 27

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#5984](https://github.com/deepseek-ai/deepseek-harness/discussions/5984) **[Bug] `ensure-project-dir` bypasses the fs seam (host `node:fs.mkdir` on a remote workspace cwd)**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-09
- [#5952](https://github.com/deepseek-ai/deepseek-harness/discussions/5952) **[Bug] 会话日志损坏：长工具调用执行期间中断回合，导致 seq 重复（中断修复路径使用了过期的 seq 基线）**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-08

## 📝 仅报告 — 无人互动
- [#5976](https://github.com/deepseek-ai/deepseek-harness/discussions/5976) [Bug] Agent 在超长上下文 + max reasoning effort 下陷入思考退化循环：回合零产出、无自动熔断，需手动中止（v4.1-flash；同配置 v4-flash 3000+ 步未复发）
- [#5983](https://github.com/deepseek-ai/deepseek-harness/discussions/5983) [Bug] Custom providers are hidden and cannot be added in web UI (`llm-pi-ai` namespace not exposed in `settings/describe`)
- [#5862](https://github.com/deepseek-ai/deepseek-harness/discussions/5862) [Bug] MCP 工具的 inputSchema 未透出到模型侧工具声明（模型只能盲调参数、-32602 反复试错）
- [#5909](https://github.com/deepseek-ai/deepseek-harness/discussions/5909) [Bug] Broken sessions and v0→v1→v2 Migration Failure / 会话损坏及 v0→v1→v2 迁移失败
- [#5966](https://github.com/deepseek-ai/deepseek-harness/discussions/5966) bug: deepseek harness 现在对 AGENTS. md 的行为有问题。
- [#5978](https://github.com/deepseek-ai/deepseek-harness/discussions/5978) [Bug] 更新到最新 master 后，部分历史会话无法加载（v0 迁移校验过度严格）
- [#5977](https://github.com/deepseek-ai/deepseek-harness/discussions/5977) Bug: three native/landlock-run package.json files have a broken repository URL (deepseek-harness/deepseek-harness -> 404)
- [#5973](https://github.com/deepseek-ai/deepseek-harness/discussions/5973) [bug]SubAgent routing can use stale/wrong models and silently escalate cost
- [#5975](https://github.com/deepseek-ai/deepseek-harness/discussions/5975) [Bug] 内测模型 deepseek-v4.1-flash-expires-on-0910 reasoning 陷入"写/好/执行"无限重复
- [#2983](https://github.com/deepseek-ai/deepseek-harness/discussions/2983) [Bug] No GPU access
- [#5965](https://github.com/deepseek-ai/deepseek-harness/discussions/5965) [Bug] Web 设置弹窗：左侧子项较多时没有滚动条，底部选项被裁切（看不到也点不到）
- [#5964](https://github.com/deepseek-ai/deepseek-harness/discussions/5964) [Bug] WSL 下启动的 dsh，「在应用中打开」无法唤起 VS Code / 资源管理器（应用目录表缺少 WSL 感知）
- [#5963](https://github.com/deepseek-ai/deepseek-harness/discussions/5963) Bug: invalid stored llm-pi-ai section silently breaks Settings -> Models "Add provider"
- [#5954](https://github.com/deepseek-ai/deepseek-harness/discussions/5954) [Bug] 内置目录刷新后，settings 里引用的孤儿模型令 llm-pi-ai 整体激活失败（静默），Web 模型选择器只剩内置 DeepSeek 组 // hand-declared model absent from installed catalog silently kills the whole llm-pi-ai adapter at boot
- [#4059](https://github.com/deepseek-ai/deepseek-harness/discussions/4059) [Bug] Late ECONNRESET after an upgraded socket closes can terminate dsh web
- [#5046](https://github.com/deepseek-ai/deepseek-harness/discussions/5046) [Bug] persistent bash mis-expands ! in commands via history expansion; bash 3.2.57 (incl. macOS default) hangs until timeout (shebangs in heredocs) - one-line fix
- [#5907](https://github.com/deepseek-ai/deepseek-harness/discussions/5907) Bug: Chat view freezes after loading earlier history — root cause found, fix branch ready
- [#5884](https://github.com/deepseek-ai/deepseek-harness/discussions/5884) [Bug] Web Chat/Trajectory view stops mid-session when tool call ids repeat across steps | 工具调用ID跨step重复导致对话视图卡死
- [#5926](https://github.com/deepseek-ai/deepseek-harness/discussions/5926) [Bug] connection fails to start when a third-party plugin registers an HTTP channel: cannot get property 'webServer' without inject
- [#2763](https://github.com/deepseek-ai/deepseek-harness/discussions/2763) [Bug Report] 包族 npm dist-tag `latest` 不一致：全新项目按默认版本安装必然 ERESOLVE（0.0.1-rc.1 的 peer 引用已不存在的包名）
- [#5920](https://github.com/deepseek-ai/deepseek-harness/discussions/5920) [Bug] /compact fails forever after a plugin writes a marker with null turn/step
- [#5910](https://github.com/deepseek-ai/deepseek-harness/discussions/5910) [Bug] Commands/list Flood Pins CPU / 自持式 commands/list 洪泛占满 CPU
- [#5917](https://github.com/deepseek-ai/deepseek-harness/discussions/5917) [Bug] Saving a tool's image result can hang the session forever: no timeout on the storage step
- [#5916](https://github.com/deepseek-ai/deepseek-harness/discussions/5916) [Bug] Custom chat provider and built-in DeepSeek web search overwrite each other's API key
- [#5547](https://github.com/deepseek-ai/deepseek-harness/discussions/5547) [BUG] session_projcache.json — 每次会话更新全量重写 74MB（写放大 / SSD 磨损）

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-09T02:31:30.074Z_