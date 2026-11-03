# DSH Bug Watch — 2026-11-03

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 41

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#11604](https://github.com/deepseek-ai/deepseek-harness/discussions/11604) **[Bug][Desktop] 特定旧会话只能输出 Reasoning，Text 正文通道持续缺失**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-02

## 📝 仅报告 — 无人互动
- [#10605](https://github.com/deepseek-ai/deepseek-harness/discussions/10605) [Bug] Kylin V10 / Chromium 128: three client-side failures (dsh-resource protocol, PDF worker features, session-log download)
- [#11943](https://github.com/deepseek-ai/deepseek-harness/discussions/11943) [Bug] DeepSeek V4.1 Flash (1017) — Reasoning Repetition Loop and Silent Completion During Tool Execution
- [#11941](https://github.com/deepseek-ai/deepseek-harness/discussions/11941) [Bug] Windows Host startup crashes with N-API fatal in the profile-resolution worker
- [#7944](https://github.com/deepseek-ai/deepseek-harness/discussions/7944) [Bug] V4 写侧 admission 不校验 tool-call 的 id/name：会话或永久打不开、或每次请求 400（0.1.7-rc.2 桌面端，含实测会话与帧级证据）
- [#3049](https://github.com/deepseek-ai/deepseek-harness/discussions/3049) [bug] sandbox-policy: workspace-write context embeds a JSON.stringify path - doubled backslashes reach the model on Windows
- [#11930](https://github.com/deepseek-ai/deepseek-harness/discussions/11930) [bug] session-snapshot: on Windows the normalizer never tokenizes the cwd that `working-directory` writes into runtime-context text (JSON-escaped spelling not covered by cwdSpellings)
- [#11577](https://github.com/deepseek-ai/deepseek-harness/discussions/11577) [Bug][0.2.1-rc.5] 单条 tool_use 参数非法即整轮硬失败：MALFORMED_RESPONSE 仍不在默认重试码（汇总 #7705/#8920/#8976/#9402/#9503/#10406，附 rc.5 复现与补丁建议）
- [#4485](https://github.com/deepseek-ai/deepseek-harness/discussions/4485) [Bug] dsh-file-reference-local: disposePrompt() throws on every agent disposal — .catch on undefined Cordis effect-disposer return
- [#441](https://github.com/deepseek-ai/deepseek-harness/discussions/441) [Bug] Profile `cordis.yml` is rewritten non-atomically on every boot, so concurrent launches intermittently fail to load
- [#11830](https://github.com/deepseek-ai/deepseek-harness/discussions/11830) [Bug] Desktop host aborts with "JavaScript heap out of memory" (~2.9 GB) and the 4 GB heap cap cannot be raised from outside
- [#11893](https://github.com/deepseek-ai/deepseek-harness/discussions/11893) [Bug] LocalSubprocessRuntime.spawn() drops the internals argument when calling launchWindowsJob/launchLinuxScope
- [#10467](https://github.com/deepseek-ai/deepseek-harness/discussions/10467) [Bug] Workspace loses session accounting after a host crash/relaunch (sessions fall into "Ungrouped", no way to re-attach)
- [#11890](https://github.com/deepseek-ai/deepseek-harness/discussions/11890) [Bug] Built-in str_replace_editor strips the UTF-8 BOM when editing a file
- [#11889](https://github.com/deepseek-ai/deepseek-harness/discussions/11889) [Bug] 同一进程内每新建一个会话，后续新建耗时线性增加（约 +0.27s/次、CPU +3.5s/次），重启才恢复
- [#11886](https://github.com/deepseek-ai/deepseek-harness/discussions/11886) [Bug][0.2.2-alpha.2] Failed rollback activation is reported as “plugin is not installed”; the suggested Add action then returns already-installed
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#10974](https://github.com/deepseek-ai/deepseek-harness/discussions/10974) [Bug] Forking a moved-but-running session produces an ungrouped child (child cwd from the live session, workspace membership from the stored record)
- [#11853](https://github.com/deepseek-ai/deepseek-harness/discussions/11853) [bug] DSH 0.2.1-rc.5：Web GUI 改模型配置必报 profile reload requires the root Include entry
- [#11883](https://github.com/deepseek-ai/deepseek-harness/discussions/11883) [Bug] 启动页 loading 圆环渲染成圆角方形 —— `corner-shape: superellipse(1.5)` 经 `border-radius: inherit` 刷到 `.spinner::after`
- [#11876](https://github.com/deepseek-ai/deepseek-harness/discussions/11876) [Bug] 手动排序下，另一浏览器/标签页创建的会话被追加到已保存列表末尾，刷新后不可见
- [#11583](https://github.com/deepseek-ai/deepseek-harness/discussions/11583) [Bug] 桌面端 0.2.1-rc.5：每次启动铸一枚带随机端口的 dsh-auth-* cookie，约 70 次后 Cookie 头达 16 KB → HTTP 431 → 误报 desktop welcome: Web authentication failed，且无法自愈
- [#11864](https://github.com/deepseek-ai/deepseek-harness/discussions/11864) [Bug] session/search 的 FTS5 索引构建在有常驻写入会话的部署上永远失败**（rc.5 / 0.2.1-rc.5，rc.2 同）`session/search` FTS index build never stabilizes when any session writes periodically (bot heartbeat) — `SESSION_QUERY_PERSISTENCE_FAILED: did not stabilize after one retry`
- [#11861](https://github.com/deepseek-ai/deepseek-harness/discussions/11861) [Bug] 自定义 pi-ai 路由 + 推理等级：系统提示词以 role=developer 发送被上游 422，设置页无 compat 入口、报错不可操作
- [#7735](https://github.com/deepseek-ai/deepseek-harness/discussions/7735) [Bug] Windows：沙箱给工作区根目录盖 Low 完整性标签后，目录内的 .bat/.cmd/.exe 双击弹「无法验证发布者」
- [#6964](https://github.com/deepseek-ai/deepseek-harness/discussions/6964) [Bug] claimed 的输入在 prepareRequest 抛错时会永久丢失：本机 154 份存档里 14 例
- [#11857](https://github.com/deepseek-ai/deepseek-harness/discussions/11857) [Bug] 每轮「改动文件」卡片会静默丢失，且同一工作区并发会话会互相串入对方的改动
- [#11835](https://github.com/deepseek-ai/deepseek-harness/discussions/11835) [Bug][Windows][附候选修复] 工作区 Low 完整性标签影响正常工具链（#7709 / #9086 / #9560 后续）
- [#10809](https://github.com/deepseek-ai/deepseek-harness/discussions/10809) [Bug] DSH 桌面端认证崩溃：dsh-auth-* Cookie 累积导致请求头超限
- [#11840](https://github.com/deepseek-ai/deepseek-harness/discussions/11840) [Bug] deepseek-harness桌面版,在win11场景下，调整窗口大小的时，会卡死无响应，只能重新启动
- [#9711](https://github.com/deepseek-ai/deepseek-harness/discussions/9711) [BUG] 回合被 dispose（配置热重载）时排队消息被静默丢弃，且事件标记 "canceled" 会误导成用户主动取消
- [#11843](https://github.com/deepseek-ai/deepseek-harness/discussions/11843) [Bug] MALFORMED_RESPONSE: "tool input is invalid JSON" on large tool-call arguments
- [#11816](https://github.com/deepseek-ai/deepseek-harness/discussions/11816) [bug] compaction-basic 摘要请求漏传 reasoningEffort，导致 provider 前缀缓存整体 miss
- [#11838](https://github.com/deepseek-ai/deepseek-harness/discussions/11838) [Bug] A retired provider model id fails every turn with the raw upstream body, and nothing re-validates a configured id
- [#10387](https://github.com/deepseek-ai/deepseek-harness/discussions/10387) [Bug] dsh-app-boot 0.2.1-rc.2：Profile 包里 require("punycode/") 导致导入崩溃（resolve.paths 返回 null）
- [#8674](https://github.com/deepseek-ai/deepseek-harness/discussions/8674) [Bug] dsh-app-boot 的 CJS 解析钩子被 require('process/') 打崩：resolve.paths() 返回 null → 插件 failed to import
- [#11833](https://github.com/deepseek-ai/deepseek-harness/discussions/11833) [BUG] workspace-write provisioning permanently relabels the workspace root to Low integrity — breaks every toolchain built from that workspace, outside DSH, across sessions and reboots, with no restore path and no audit trail
- [#9322](https://github.com/deepseek-ai/deepseek-harness/discussions/9322) [Bug] Windows 沙箱临时目录缺失后，同一会话内所有命令持续失败
- [#10234](https://github.com/deepseek-ai/deepseek-harness/discussions/10234) [BUG] Windows：文件「打开方式」把列表第一项标成默认，认不出商店应用的真实默认程序
- [#11780](https://github.com/deepseek-ai/deepseek-harness/discussions/11780) [Bug] 复制消息正文时行内代码前后被插入换行符（display:inline-flex 布局导致）
- [#11831](https://github.com/deepseek-ai/deepseek-harness/discussions/11831) [Bug] 工具结果里一个孤立的 UTF-16 代理项（半个 emoji）会让会话永久 400（INVALID_REQUEST）

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-03T04:57:37.835Z_