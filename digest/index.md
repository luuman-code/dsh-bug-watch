# DSH Bug Watch — 2026-10-24

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 39

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#10835](https://github.com/deepseek-ai/deepseek-harness/discussions/10835) [Bug] Windows: workspace-write leaves a persistent Low integrity label on the workspace, making every file in it “untrusted” to other apps
- [#10834](https://github.com/deepseek-ai/deepseek-harness/discussions/10834) [Bug] DeepSeek DSML 标记泄漏进文本块（闭合标签与 think 标记）
- [#10830](https://github.com/deepseek-ai/deepseek-harness/discussions/10830) [Bug] 桌面端启动不可恢复：每次启动铸一枚 30 天 dsh-auth-* cookie，约 70 次后 Cookie 头越 16 KB → 431 → "desktop welcome: Web authentication failed"
- [#10632](https://github.com/deepseek-ai/deepseek-harness/discussions/10632) [Bug] 桌面端每次启动新发一枚认证 cookie，约 70 次后请求头超过 16 KB，启动直接失败（431 → "Web authentication failed"）
- [#10826](https://github.com/deepseek-ai/deepseek-harness/discussions/10826) [Bug] 0.2.1-rc.2：plugin_manager 切换 system-prompt 配置时整轮卡死，set_bundle 永不返回
- [#10823](https://github.com/deepseek-ai/deepseek-harness/discussions/10823) [Bug] Single large session OOMs at startup: agent-loop re-copies the whole event array even when closers is empty
- [#10816](https://github.com/deepseek-ai/deepseek-harness/discussions/10816) [BUG] "Open In → VS Code" never opens — Electron apps inherit `ELECTRON_RUN_AS_NODE=1`
- [#8312](https://github.com/deepseek-ai/deepseek-harness/discussions/8312) [Bug][Windows] workspace-write leaves a permanent Low integrity label on the project, breaking every other tool used on it — several reports, still unchanged in 0.2.0-rc.2
- [#10813](https://github.com/deepseek-ai/deepseek-harness/discussions/10813) [Bug][macOS] 固定浅色主题启动时短暂切回深色
- [#9552](https://github.com/deepseek-ai/deepseek-harness/discussions/9552) [Bug] 回归：0.2.0-rc.2 起，删除子代理会话目录不再从 UI 清除该条目
- [#10809](https://github.com/deepseek-ai/deepseek-harness/discussions/10809) [Bug] DSH 桌面端认证崩溃：dsh-auth-* Cookie 累积导致请求头超限
- [#10808](https://github.com/deepseek-ai/deepseek-harness/discussions/10808) [Bug] 发送消息后同一条用户消息出现两个气泡（数据层只有一条，疑似 queued 提交未参与去重）
- [#10806](https://github.com/deepseek-ai/deepseek-harness/discussions/10806) [Bug] session_search fails intermittently on large histories: `persistence observation did not stabilize after one retry`
- [#10757](https://github.com/deepseek-ai/deepseek-harness/discussions/10757) [Bug] macOS: Dock accumulates duplicate DeepSeek Harness icons — no single-instance lock, and 939 stale session.lock files never reclaimed
- [#10758](https://github.com/deepseek-ai/deepseek-harness/discussions/10758) [BUG]图片发送失败被误报为 session/agent-busy，且宿主图片管线没有对原生模块冲突做防护
- [#10799](https://github.com/deepseek-ai/deepseek-harness/discussions/10799) [Bug] workspace-changes 把「轮内被 git 忽略」的文件误报为删除
- [#9559](https://github.com/deepseek-ai/deepseek-harness/discussions/9559) [Bug Report] windows-acl: Low integrity label (and allow ACE) not applied to existing subfolders, so the confined child can write only the workspace root
- [#8323](https://github.com/deepseek-ai/deepseek-harness/discussions/8323) [Bug] Open Web UI goes permanently blank after dsh restarts from a reinstalled/copied install — in-place plugin swap throws uncaught SlotAssemblyError (0.1.7-rc.2)
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#10788](https://github.com/deepseek-ai/deepseek-harness/discussions/10788) [Bug][Web] CJK 加粗扩展只放宽了闭合一侧：汉字**“引号”** 不会加粗
- [#10765](https://github.com/deepseek-ai/deepseek-harness/discussions/10765) [Bug] Windows: TEMP moved to a data volume makes every workspace-write command fail before spawn
- [#10763](https://github.com/deepseek-ai/deepseek-harness/discussions/10763) [Bug][macOS][Desktop] 全屏状态下点「检查更新…」后整个 Harness 窗口消失，只能强制退出（0.2.1-rc.2）
- [#10762](https://github.com/deepseek-ai/deepseek-harness/discussions/10762) [Bug] turn/start 之後 0 個 step：turn 初始化死鎖（2 天內重現 2 次）
- [#10760](https://github.com/deepseek-ai/deepseek-harness/discussions/10760) [bug] Session permanently stuck with 400: tool_addition blocks serialized into a system-role message inside messages[]
- [#10660](https://github.com/deepseek-ai/deepseek-harness/discussions/10660) [Bug] run_code slice leaves a lone surrogate -> deepseek-official 400s every turn (0.2.0-rc.2; pi-ai routes already sanitize)
- [#10120](https://github.com/deepseek-ai/deepseek-harness/discussions/10120) [Bug][macOS][Desktop] 新建工作区时系统文件夹选择器始终英文：packaging 配置里重复的 extendInfo 覆盖了 CFBundleLocalizations
- [#10748](https://github.com/deepseek-ai/deepseek-harness/discussions/10748) [Bug] macOS 添加工作区：原生目录面板的侧边栏无法点击（非 key window，附修复）
- [#7520](https://github.com/deepseek-ai/deepseek-harness/discussions/7520) [Bug] Switching models mid-session can trigger false pi-ai context overflow
- [#8440](https://github.com/deepseek-ai/deepseek-harness/discussions/8440) [Bug] ACP `session/list` 不返回 `SessionInfo.title` / `updatedAt`,Paseo客户端把所有会话显示成"未命名"
- [#10749](https://github.com/deepseek-ai/deepseek-harness/discussions/10749) [Bug] 工具面翻转后所有工具被标记 defer_loading，会话永久 400（INVALID_REQUEST）
- [#10750](https://github.com/deepseek-ai/deepseek-harness/discussions/10750) [bug]Sandboxed tool processes run at Low integrity, poisoning files they create (breaks downstream apps on Windows)
- [#10746](https://github.com/deepseek-ai/deepseek-harness/discussions/10746) [BUG] 流式输出期间悬停消息内图片导致对话区跳动（补充 #5634 的另一种触发路径）
- [#10745](https://github.com/deepseek-ai/deepseek-harness/discussions/10745) [Bug][Windows Desktop] 原生插件更新可破坏 bundle，失败日志为 0 字节（含补丁与原生 CI）
- [#10716](https://github.com/deepseek-ai/deepseek-harness/discussions/10716) [Bug] 桌面版「Web authentication failed」：Host 已回 303，跟随重定向时历史 dsh-auth cookie 触发 431（0.2.1-rc.2）
- [#10744](https://github.com/deepseek-ai/deepseek-harness/discussions/10744) [Bug] Desktop first-run loading label (“正在加载设置…”) is pinned to the top edge instead of centered
- [#10740](https://github.com/deepseek-ai/deepseek-harness/discussions/10740) [Bug] Desktop terminal: mouse selection/copy blocked when an app enables mouse tracking (zellij, macOS)
- [#6591](https://github.com/deepseek-ai/deepseek-harness/discussions/6591) [Bug] Windows: a drive root (`C:\`, `D:\`) cannot be used as a workspace — session creation fails with EPERM and reports nothing
- [#609](https://github.com/deepseek-ai/deepseek-harness/discussions/609) [BUG] Firefox 无法打开，提示WebGL异常
- [#10723](https://github.com/deepseek-ai/deepseek-harness/discussions/10723) [Bug] Windows: every shell tool call dies with 0xC0000142 (STATUS_DLL_INIT_FAILED) in workspace-write mode

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-24T02:53:11.921Z_