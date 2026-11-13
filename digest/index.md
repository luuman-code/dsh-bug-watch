# DSH Bug Watch — 2026-11-13

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 42

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#13060](https://github.com/deepseek-ai/deepseek-harness/discussions/13060) **[Bug] Windows 桌面端启动崩溃与依赖死锁完整报告**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-13

## 📝 仅报告 — 无人互动
- [#9086](https://github.com/deepseek-ai/deepseek-harness/discussions/9086) [BUG](windows沙箱问题)(DSH GUI模式)会话里跑在非「完全权限」模式在项目文件夹根目录生成Windows 强制完整性标签，导致二进制生成文件权限受限
- [#9662](https://github.com/deepseek-ai/deepseek-harness/discussions/9662) [Bug] subagent: 空字符串的 provider/model/reasoning_effort 被当成显式选择而失败，且报错不给补救（0.2.0-rc.2）
- [#12278](https://github.com/deepseek-ai/deepseek-harness/discussions/12278) [bug]工具调用失导致败任务停滞的问题
- [#13158](https://github.com/deepseek-ai/deepseek-harness/discussions/13158) [Bug] 会话包含 NUL（U+0000）字符时，复制为 Markdown 会静默截断剪贴板内容
- [#13157](https://github.com/deepseek-ai/deepseek-harness/discussions/13157) [Bug] 浮动面板拖出窗口后无法找回，重启后仍不可见
- [#12261](https://github.com/deepseek-ai/deepseek-harness/discussions/12261) [Bug][macOS] 0.2.2-rc.1 frameless window has no drag region — window cannot be moved by mouse (worked in 0.2.1-rc.5)
- [#13153](https://github.com/deepseek-ai/deepseek-harness/discussions/13153) [Bug] repeat-tool-reminder reads message.source.kind without a guard in agent/pre-step — same crash family as #7363
- [#10162](https://github.com/deepseek-ai/deepseek-harness/discussions/10162) [Bug] open-in-app: VS Code (and every Electron app) cannot be launched on Windows — ELECTRON_RUN_AS_NODE leaks into the child environment
- [#13114](https://github.com/deepseek-ai/deepseek-harness/discussions/13114) [Bug] dsh-client-test-runtime 发布包引用依赖的 TypeScript 源码，导致外部测试无法启动
- [#12153](https://github.com/deepseek-ai/deepseek-harness/discussions/12153) [Bug][macOS] 主窗口偶发无法点击或打字，原生菜单正常，新建窗口无效（0.2.1-rc.5）
- [#4485](https://github.com/deepseek-ai/deepseek-harness/discussions/4485) [Bug] dsh-file-reference-local: disposePrompt() throws on every agent disposal — .catch on undefined Cordis effect-disposer return
- [#13026](https://github.com/deepseek-ai/deepseek-harness/discussions/13026) [Bug][Windows] 「在 VS Code 中打开」必定失败：宿主把 ELECTRON_RUN_AS_NODE=1 泄漏给子进程
- [#9181](https://github.com/deepseek-ai/deepseek-harness/discussions/9181) [Bug][Windows] 被删除重建的目录让一个 fs.watch 句柄无限空转，dsh-desktop-host 空闲时常驻烧掉 ~2.2 核（附最小复现）
- [#9718](https://github.com/deepseek-ai/deepseek-harness/discussions/9718) [Bug] Windows desktop: "browser time zone is unavailable" blocks chat with British Columbia Standard Time
- [#13132](https://github.com/deepseek-ai/deepseek-harness/discussions/13132) [Bug][Windows] 桌面端每次更新都失败：Host 已回 shutdown-complete 却 10 s 内不退出，被 SIGTERM 硬杀判为 unclean exit（附根因与最小修法）
- [#10961](https://github.com/deepseek-ai/deepseek-harness/discussions/10961) [Bug] dsh-tool-skill: the model-facing skill catalog can emit a lone UTF-16 surrogate → deepseek-* sessions fail every turn with 400 INVALID_REQUEST
- [#13125](https://github.com/deepseek-ai/deepseek-harness/discussions/13125) [Bug] 非聊天 conversation.view 也渲染内容宽度拖拽手柄（媒体/审批/待办等所有 tab）
- [#13121](https://github.com/deepseek-ai/deepseek-harness/discussions/13121) [Bug] 统计页签「显示上下文增量」的增量被「上下文」列宽裁掉，正常窗口下只显示一个「…」
- [#13116](https://github.com/deepseek-ai/deepseek-harness/discussions/13116) [Bug] 任务面板（todo dock）永远停在第 1 步：todo_write 缺模型侧纪律 + turn/start 清空投影
- [#11831](https://github.com/deepseek-ai/deepseek-harness/discussions/11831) [Bug] 工具结果里一个孤立的 UTF-16 代理项（半个 emoji）会让会话永久 400（INVALID_REQUEST）
- [#11835](https://github.com/deepseek-ai/deepseek-harness/discussions/11835) [Bug][Windows][附候选修复] 工作区 Low 完整性标签影响正常工具链（#7709 / #9086 / #9560 后续）
- [#13035](https://github.com/deepseek-ai/deepseek-harness/discussions/13035) [Bug] Auto review 间歇性失败：reviewer 用散文回答会话提问而非返回 JSON / Auto review intermittently fails when the reviewer answers in prose instead of returning JSON
- [#13043](https://github.com/deepseek-ai/deepseek-harness/discussions/13043) [Bug] dsh-file-reference-local: agent/disposed listener throws "reading 'catch'" when fiber.dispose() returns undefined
- [#8409](https://github.com/deepseek-ai/deepseek-harness/discussions/8409) [Bug][Windows] Windows ACL 沙箱（workspace-write）三个授权缺陷：受保护 DACL 子目录永不获授权 / desktop 根授权缓存不复核不自愈 / 标准用户+非系统盘 grantWrite 失败（Win32 5）
- [#13105](https://github.com/deepseek-ai/deepseek-harness/discussions/13105) [Bug] 地图 getState：单个节点 AXEnabled 类型异常导致整棵 AX 树读取失败 / Maps: getState aborts with "Accessibility AXEnabled is not a boolean"
- [#13104](https://github.com/deepseek-ai/deepseek-harness/discussions/13104) [bug] minIdleSeconds never works: lastEventEpoch() only accepts string, session events use integer ms
- [#13102](https://github.com/deepseek-ai/deepseek-harness/discussions/13102) [Bug] dsh-hmr 热替换清掉经 ESM 导入的 CommonJS 包后，再次 import 读到半截 exports，插件升级 enable 失败并回滚
- [#12552](https://github.com/deepseek-ai/deepseek-harness/discussions/12552) [Bug] Cold-resumed local child loses `delivery`, so caller-delivery children emit per-turn settlement notices to the parent
- [#13096](https://github.com/deepseek-ai/deepseek-harness/discussions/13096) [Bug] agent-presets: every preset fails to mount — "Cannot read properties of undefined (reading 'parent')" in withinFiber; error never logged server-side
- [#11398](https://github.com/deepseek-ai/deepseek-harness/discussions/11398) [bug] anthropic-messages: tool-result pruning rewrites history without invalidating replayed thinking signatures
- [#13081](https://github.com/deepseek-ai/deepseek-harness/discussions/13081) [Bug][Desktop rc.1 → rc.2] 官方 CUA 旧依赖残留禁用 storage-domain，导致工作区/历史全空
- [#13078](https://github.com/deepseek-ai/deepseek-harness/discussions/13078) bug:  服务启动时，JSON 存储把「整表读进内存」做成了一次无界 Promise.all，本地会话较多导致进程起不来
- [#11825](https://github.com/deepseek-ai/deepseek-harness/discussions/11825) [Bug] macOS 0.2.1-rc.2：dsh-workspace-changes-* 临时目录无上限累积，两次将 926 GB 系统盘可用空间降至 <1 GB
- [#13066](https://github.com/deepseek-ai/deepseek-harness/discussions/13066) [Bug][Desktop 0.2.2-rc.2] 切换模型后上下文占用仍使用上次请求容量，未与新选择同步
- [#13065](https://github.com/deepseek-ai/deepseek-harness/discussions/13065) [Bug][Responses/pi-ai] NanoGPT mirrored reasoning deltas double the live thinking preview, then collapse on completion
- [#10974](https://github.com/deepseek-ai/deepseek-harness/discussions/10974) [Bug] Forking a moved-but-running session produces an ungrouped child (child cwd from the live session, workspace membership from the stored record)
- [#13055](https://github.com/deepseek-ai/deepseek-harness/discussions/13055) [Bug][0.2.2-rc.1] 会话全文检索在活跃会话里失败：检索窗口内语料有任何变化即 SESSION_QUERY_PERSISTENCE_FAILED（实测 75.5s，吃光 PTC run_code 120s 预算）
- [#11577](https://github.com/deepseek-ai/deepseek-harness/discussions/11577) [Bug][0.2.1-rc.5] 单条 tool_use 参数非法即整轮硬失败：MALFORMED_RESPONSE 仍不在默认重试码（汇总 #7705/#8920/#8976/#9402/#9503/#10406，附 rc.5 复现与补丁建议）
- [#13051](https://github.com/deepseek-ai/deepseek-harness/discussions/13051) [Bug] 思考翻译（cot-translation）插件无法启用：启用始终 overridden，bundle 与插件行报告的版本号不一致
- [#13047](https://github.com/deepseek-ai/deepseek-harness/discussions/13047) [Bug] 点击 cold 会话后它从侧边栏永久消失，重启才回来 / Clicking a cold Session removes it from the sidebar until reconnect
- [#10475](https://github.com/deepseek-ai/deepseek-harness/discussions/10475) [Bug] Cordis loader fails to import a valid ESM plugin entry point (failed to import)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-13T04:37:13.548Z_