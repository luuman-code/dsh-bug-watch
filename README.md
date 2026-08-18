# DSH Bug Watch

持续监控 [`deepseek-ai/deepseek-harness`](https://github.com/deepseek-ai/deepseek-harness/discussions) 的 Discussions，按维护者信号 / 已采纳答案 / 已合并 PR **分级置信度**输出 bug 摘要，用于迭代 DSH 本体。

## 三层架构

```
┌────────────────────────────────────────────────────────────┐
│  GitHub Actions（云端，每 6 小时）                            │
│  scripts/fetch-bugs.mjs                                     │
│   └─→ digest/index.md + digest/YYYY-MM-DD.md + history.jsonl│
└────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────┐
│  本地 Windows 任务计划（每日 09:00）                          │
│  scripts/triage.ps1                                         │
│   └─→ triage/prompt-YYYY-MM-DD.md                           │
└────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────┐
│  DSH Web GUI（你每天手动贴 prompt）                          │
│   └─→ triage/report-YYYY-MM-DD.md                           │
└────────────────────────────────────────────────────────────┘
```

## 文件结构

```
dsh-bug-watch/
├── .github/workflows/dsh-bug-watch.yml   # GitHub Action 定时任务
├── scripts/
│   ├── fetch-bugs.mjs                    # 采集脚本（Node 20）
│   ├── triage.ps1                        # 本地分诊 prompt 生成
│   └── install-task.ps1                  # 注册 Windows 计划任务
├── prompts/triage-prompt.md              # DSH subagent 分诊 prompt 模板
├── maintainers.json                      # 维护者名单（commit 入仓）
├── maintainers.local.json                # 本机覆盖（不入仓）
├── digest/                               # Action 输出（自动 commit）
│   ├── .cursor                           # 增量游标
│   ├── index.md                          # 最新扫描摘要
│   ├── YYYY-MM-DD.md                     # 每日快照
│   └── history.jsonl                     # 原始条目（追加）
├── triage/                               # 本地脚本输出
│   ├── prompt-YYYY-MM-DD.md              # 给 DSH 用的 prompt
│   └── report-YYYY-MM-DD.md              # DSH 产出的报告
├── package.json
└── README.md
```

## 一次性安装步骤

### 1. 创建 GitHub 仓库并推送

```powershell
cd C:\Users\LWB\dsh-bug-watch
git init
git add .
git commit -m "init: dsh-bug-watch"
# 在 GitHub 网页上创建一个空仓库 dsh-bug-watch（公开或私有都行）
git remote add origin https://github.com/<your-username>/dsh-bug-watch.git
git branch -M main
git push -u origin main
```

> **首次推送前**，把 `maintainers.json` 的 `logins` 数组填上几个已知的 `deepseek-ai` 维护者 GitHub handle，
> 不填也能跑，只是所有命中都会降到 medium / weak。

### 2. 启用 GitHub Action 权限

仓库 → **Settings** → **Actions** → **General**:
- "Workflow permissions" 选择 **Read and write permissions**
- 勾选 "Allow GitHub Actions to create and approve pull requests"

如果不改这个，Action 会因为写不进去 `digest/` 而失败。

### 3. 触发一次手动运行验证

仓库 → **Actions** → **DSH Bug Watch** → **Run workflow** → 选 `since` 留空 → **Run**

等 1-2 分钟后看：
- `digest/index.md` 是否生成了
- `digest/history.jsonl` 是否有内容
- workflow 日志是否有错

### 4. 安装本地分诊任务

```powershell
cd C:\Users\LWB\dsh-bug-watch\scripts
.\install-task.ps1
```

这会在 Windows 任务计划程序里注册一个 `DSH-BugWatch-Triage` 任务，每日上午 09:00 自动跑 `triage.ps1 -AutoClipboard`。

测试立即跑一次：
```powershell
.\install-task.ps1 -RunNow
```

卸载：
```powershell
.\install-task.ps1 -Uninstall
```

### 5. 日常使用流程

每天早上：
1. 打开 DSH Web GUI（http://127.0.0.1:3080）
2. 新建会话，第一条 user 消息粘贴 `triage/prompt-<今天>.md` 内容
3. 让 DSH 子代理读取 → 生成 `triage/report-<今天>.md`
4. 读报告，挑本周要修的 1-2 个 bug 开干

## 置信度（confidence）分级规则

| 等级 | 触发条件 |
|---|---|
| 🟢 **strong** | ① 引用了已合并 PR / ② 已采纳答案且答案是维护者写的 / ③ 有维护者评论 |
| 🟡 **medium** | 已采纳答案，但作者不是维护者 |
| 🔴 **weak** | 仅 `[Bug]` 报告，无任何修复信号 |

维护者判定：
- `maintainers.json` 里的 `logins` 数组（小写 handle）
- 或 `maintainers.json` 里的 `orgs` 里的组织成员（当前仅按字面匹配，PR/评论作者与 org 一致即算）

如果你想用本机覆盖（不入仓），新建 `maintainers.local.json`，结构相同。`scripts/fetch-bugs.mjs` 会优先合并两者。

## 常见操作

**重新拉全量（清掉游标再跑）：**
1. 删除 `digest/.cursor`
2. 手动触发 Action 或本地跑 `node scripts/fetch-bugs.mjs`

**只关心某个标签：**
编辑 `scripts/fetch-bugs.mjs` 的 `LABEL_BUG` 正则。

**加 Slack / Discord 通知：**
在 `.github/workflows/dsh-bug-watch.yml` 末尾加：
```yaml
      - name: Slack notify (strong only)
        if: success()
        uses: slackapi/slack-github-action@v1
        with:
          payload: |
            {"text": "🟢 DSH Bug Watch: ${{ steps.fetch.outputs.count }} bug discussions refreshed"}
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

## 故障排查

| 现象 | 排查 |
|---|---|
| Action 报 `401 Unauthorized` | Token 没给 `discussions: read` 权限，或仓库私有但 token 缺 scope |
| `digest/index.md` 是空的 | `maintainers.json` 没配且 `BUG_TITLE` 正则没命中；试试手动跑一次 |
| 任务计划程序跑了但没 prompt 文件 | 任务历史里看错误码 0x1 通常是 ExecutionPolicy；脚本已用 `-ExecutionPolicy Bypass` |
| DSH 没启动 | 先起 `dsh web`，再贴 prompt |
| 我手动改过 digest 想保留 | Action 用了 `git-auto-commit`，它只会 commit `digest/*` 路径下的变更，不会冲掉你本地其它修改 |

## 扩展方向

- 接入 Issues API：把已关闭但没讨论的 bug 也聚合
- 加一个 `triage/report-history/` 目录，按月归档，方便年终复盘
- 把 `report-*.md` 通过 webhook 推到企业微信 / 钉钉
- 写一个 `scripts/post-triage-issue.ps1`，把 DSH 生成的报告自动开成 issue 跟踪