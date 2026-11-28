# DSH Bug Watch — 2026-11-28

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 25

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#14343](https://github.com/deepseek-ai/deepseek-harness/discussions/14343) [BUG] Web UI freezes completely when opening a long history conversation (renderer pegged at 100% CPU)
- [#14470](https://github.com/deepseek-ai/deepseek-harness/discussions/14470) [bug] ContextMeter disappears from composer dock while voice input is active
- [#13055](https://github.com/deepseek-ai/deepseek-harness/discussions/13055) [Bug][0.2.2-rc.1] 会话全文检索在活跃会话里失败：检索窗口内语料有任何变化即 SESSION_QUERY_PERSISTENCE_FAILED（实测 75.5s，吃光 PTC run_code 120s 预算）
- [#14459](https://github.com/deepseek-ai/deepseek-harness/discussions/14459) [Bug] Startup crash: profile package.json with UTF-8 BOM causes JSON.parse failure (Unexpected token '﻿')
- [#9905](https://github.com/deepseek-ai/deepseek-harness/discussions/9905) [Bug][macOS] 局域网访问被系统静默阻断（errno 65）：Info.plist 缺少 NSLocalNetworkUsageDescription
- [#14454](https://github.com/deepseek-ai/deepseek-harness/discussions/14454) [Bug][0.2.2-rc.5][macOS] Desktop Host idles at ~100% CPU due to client-hmr polling 113 ASAR bundles
- [#14453](https://github.com/deepseek-ai/deepseek-harness/discussions/14453) [Bug][0.2.3-alpha.2] 异常退出 Plan 模式后，恢复原会话无法通过 /plan off 退出计划模式
- [#11111](https://github.com/deepseek-ai/deepseek-harness/discussions/11111) Bug report: dollar signs in prose are rendered as inline LaTeX
- [#7899](https://github.com/deepseek-ai/deepseek-harness/discussions/7899) Bug: 工具调用把系统键盘焦点移到自己的窗口，导致输入被投递到别处并污染用户文本 — 模型无法判断用户是否在打字
- [#14442](https://github.com/deepseek-ai/deepseek-harness/discussions/14442) [Bug] Windows Job runner "managed range empty" failures: surface the runner stderr and status instead of only a generic fail-closed message
- [#14220](https://github.com/deepseek-ai/deepseek-harness/discussions/14220) [Bug] 助手回复会把下一轮用户消息和运行时上下文续写进正文
- [#14059](https://github.com/deepseek-ai/deepseek-harness/discussions/14059) [BUG] Auto review omits reasoning effort; forced-thinking models (GLM-5.3) reject every review request
- [#14369](https://github.com/deepseek-ai/deepseek-harness/discussions/14369) [Bug] Session permanently unusable after image + literal `<|image_pad|>` in history; Trajectory view hides the failure report
- [#14432](https://github.com/deepseek-ai/deepseek-harness/discussions/14432) [Bug] web_fetch: script text media types (application/javascript) are rejected, and binary rejections name no alternative
- [#14429](https://github.com/deepseek-ai/deepseek-harness/discussions/14429) [Bug] web boot names the wrong plugin: a dead batch script is reported as import failed (see console …) on innocent entries
- [#14426](https://github.com/deepseek-ai/deepseek-harness/discussions/14426) [Bug] workspace-write on a WSL UNC workspace root fails with a misleading ACL permission error — coded diagnosis proposed
- [#14422](https://github.com/deepseek-ai/deepseek-harness/discussions/14422) [Bug] Auto review: the reviewer request drops the session reasoningEffort, so thinking-only routes block every reviewed tool
- [#14421](https://github.com/deepseek-ai/deepseek-harness/discussions/14421) [Bug] cordis_inspect: a JSON-encoded object `input` is rejected after passing tool validation
- [#12798](https://github.com/deepseek-ai/deepseek-harness/discussions/12798) [Bug]: 压缩过于频繁，没有达到上下文的一半
- [#12532](https://github.com/deepseek-ai/deepseek-harness/discussions/12532) [Bug] LocalSubprocessRuntime.spawn() 未透传 WindowsJobInternals / LinuxScopeInternals，导致 runner 启动 seam 在生产路径不可达
- [#11608](https://github.com/deepseek-ai/deepseek-harness/discussions/11608) [Bug] Eager projection-cache load dominates `dsh web` startup: 969 records / 209 MB → 5.3 s of validation (26%)
- [#12438](https://github.com/deepseek-ai/deepseek-harness/discussions/12438) [Bug] macOS 桌面端右侧白色顶栏拖拽热区过窄（空白会话仅 40px）且部分主面板（如自动化任务）完全缺失 data-window-drag
- [#11893](https://github.com/deepseek-ai/deepseek-harness/discussions/11893) [Bug] LocalSubprocessRuntime.spawn() drops the internals argument when calling launchWindowsJob/launchLinuxScope
- [#14414](https://github.com/deepseek-ai/deepseek-harness/discussions/14414) [Bug] /compact on a large Session: summarization bypasses the provider retry policy, and the failure text hides the cause
- [#14387](https://github.com/deepseek-ai/deepseek-harness/discussions/14387) [Bug] DSH API 请求失败后上下文占用显示归零：失败路径的零值 usage 被当作真实采样

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-28T05:55:26.636Z_