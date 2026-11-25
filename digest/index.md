# DSH Bug Watch — 2026-11-25

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 27

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#14213](https://github.com/deepseek-ai/deepseek-harness/discussions/14213) **[Bug][Plugin Manager] 安装 GitHub 插件时，已有私有源插件被发往公共 npm 镜像并报 404**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-25

## 📝 仅报告 — 无人互动
- [#14220](https://github.com/deepseek-ai/deepseek-harness/discussions/14220) [Bug] 助手回复会把下一轮用户消息和运行时上下文续写进正文
- [#14289](https://github.com/deepseek-ai/deepseek-harness/discussions/14289) [Bug][LiveShare] Local Markdown images fail to preview on viewer pages (`/api/file` is owner-only and not served over viewer channel)
- [#14288](https://github.com/deepseek-ai/deepseek-harness/discussions/14288) [Bug] 0.2.2-rc.5 on Windows: dsh web hangs silently before binding - stack stuck in installRuntimeInterception -> requireBuiltin
- [#12160](https://github.com/deepseek-ai/deepseek-harness/discussions/12160) [Bug] WebUI shows「已停止/Task stopped」 for long-running headless turns (false positive)
- [#14283](https://github.com/deepseek-ai/deepseek-harness/discussions/14283) Bug: ArkWeb (HarmonyOS) does not parse non-special scheme URLs — resource addresses resolve as provider-less
- [#14271](https://github.com/deepseek-ai/deepseek-harness/discussions/14271) [Bug] 主进程 installFailLoud 将未捕获 fetch ECONNRESET 映射为 proc.exit(1)，导致运行态反复崩溃（0.2.2-rc.5）
- [#758](https://github.com/deepseek-ai/deepseek-harness/discussions/758) [Bug Report] Windows sandbox (workspace-write): permanent crash after Temp cleanup (P0) + 4 related issues
- [#14275](https://github.com/deepseek-ai/deepseek-harness/discussions/14275) [Bug][Desktop] Windows: a single transient ECONNRESET during the host cookie handshake aborts the whole launch (no retry)
- [#13190](https://github.com/deepseek-ai/deepseek-harness/discussions/13190) [Bug] dsh-ssh streams fail on Electron hosts (Desktop app + CLI): BoringSSL has no TLS1.2 PSK ciphersuite — NO_CIPHER_MATCH before any network I/O (EN + 中文全文)
- [#14262](https://github.com/deepseek-ai/deepseek-harness/discussions/14262) [Bug]分叉会话未继承工作区归属，全部落入侧栏“未分组”
- [#10129](https://github.com/deepseek-ai/deepseek-harness/discussions/10129) [Bug] 内置会话标题插件几乎从不更新：输出额度 64 个 token 被思考吃光，失败还完全静默（DSH 0.2.1-rc.2）
- [#9662](https://github.com/deepseek-ai/deepseek-harness/discussions/9662) [Bug] subagent: 空字符串的 provider/model/reasoning_effort 被当成显式选择而失败，且报错不给补救（0.2.0-rc.2）
- [#13946](https://github.com/deepseek-ai/deepseek-harness/discussions/13946) Bug: Chinese IME commit after a mid-line Shift+Enter jumps the caret to the start of the next line (Lexical 0.49 element-point normalization)
- [#14247](https://github.com/deepseek-ai/deepseek-harness/discussions/14247) Bug: closing or refreshing the Web client crashes the host (typert gateway: Remote event was cancelled)
- [#14249](https://github.com/deepseek-ai/deepseek-harness/discussions/14249) [BUG] 0.2.2-rc.5 新建会话后「选择工作区」的选择结果不保留，且运行期间看不到该会话，须退出进程重进才归位
- [#8947](https://github.com/deepseek-ai/deepseek-harness/discussions/8947) [Bug] "DeepSeek Messages transport failed" is a masked transport timeout — undici's 300 s bodyTimeout silently caps streamIdleTimeoutMs（传输层 300 秒上限被误报为传输失败）
- [#14242](https://github.com/deepseek-ai/deepseek-harness/discussions/14242) [Bug] 凭据清洗剥掉 GIT_CONFIG_KEY_n，子进程内所有 git 命令 fatal（GIT_CONFIG_COUNT 残留）
- [#14241](https://github.com/deepseek-ai/deepseek-harness/discussions/14241) [Bug] Windows SSH 工作区新建会话失败，绑定时使用本地规则校验远端 cwd
- [#14229](https://github.com/deepseek-ai/deepseek-harness/discussions/14229) [Bug][Windows] workspace 授权递归写入 Low 完整性标签，导致目录被判为 Internet 区并弹「打开文件 - 安全警告」 | Workspace grant recursively applies a Low-integrity mandatory label → Internet Zone mapping → "Open File - Security Warning"
- [#14019](https://github.com/deepseek-ai/deepseek-harness/discussions/14019) [Bug] dsh-desktop 0.2.2-rc.5 crashes on startup with uncaught ECONNRESET from internal fetch; stale processes after quit make it recurrent (Windows)
- [#7123](https://github.com/deepseek-ai/deepseek-harness/discussions/7123) [bug]「只有 reasoning、无可见正文也无工具调用」的响应被判为成功 ⇒ 静默空回复
- [#14237](https://github.com/deepseek-ai/deepseek-harness/discussions/14237) [Bug] Sessions interrupted by a host restart become permanently read-only — service revival has no trigger (deadlock)
- [#14235](https://github.com/deepseek-ai/deepseek-harness/discussions/14235) [Bug] DEEPSEEK_BASE_URL silently overrides the provider endpoint → every provider fails with "Not Found (404)"
- [#7870](https://github.com/deepseek-ai/deepseek-harness/discussions/7870) [Bug] macOS arm64 平台包 @deepseek-ai/node-addon-system-darwin-arm64 内嵌 x86_64 二进制导致原生模块加载失败
- [#11707](https://github.com/deepseek-ai/deepseek-harness/discussions/11707) [Bug][rc.2] 中断恢复：合成闭包已落盘，续跑却按闭包前的长度编号 → seq 复用、会话历史永久不可加载（3 个实例已在盘上定位并修复）
- [#14227](https://github.com/deepseek-ai/deepseek-harness/discussions/14227) [Bug] persistent bash: a function or alias named printf/eval breaks the command framing (300 s hang, or later commands silently not run)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-25T06:33:19.302Z_