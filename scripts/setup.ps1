# scripts/setup.ps1
# 本机一次性初始化脚本：安装 npm 依赖、检查 Node 版本、跑一次 dry-run。
# 用法：
#   .\setup.ps1

param(
    [switch]$SkipInstall,
    [switch]$RunOnce
)

$ErrorActionPreference = 'Stop'
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Resolve-Path (Join-Path $ScriptDir '..')
Set-Location $RepoRoot

Write-Host "=== DSH Bug Watch 本机初始化 ===" -ForegroundColor Cyan

# Node 版本检查
$node = (& node --version) 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Error "未检测到 node，请先安装 Node.js 20+：https://nodejs.org/"
}
$major = [int]($node -replace 'v(\d+)\..*', '$1')
if ($major -lt 20) {
    Write-Error "Node 版本 $node 过低，需要 >= 20。请升级后重试。"
}
Write-Host "✅ Node 版本: $node" -ForegroundColor Green

# npm install
if (-not $SkipInstall) {
    Write-Host "📦 安装 npm 依赖..." -ForegroundColor Cyan
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Error "npm install 失败"
    }
    Write-Host "✅ 依赖已安装" -ForegroundColor Green
}

# 环境变量提示
Write-Host ""
Write-Host "💡 接下来：准备 GH_TOKEN 环境变量。" -ForegroundColor Yellow
Write-Host "   GitHub Action 自动提供 secrets.GITHUB_TOKEN，无需手动设置。" -ForegroundColor Yellow
Write-Host "   本地手动跑需要 Personal Access Token，scope: public_repo（或 repo 私有时）" -ForegroundColor Yellow
Write-Host ""

# 可选跑一次
if ($RunOnce) {
    if (-not $env:GH_TOKEN) {
        Write-Error "本机跑需要 `$env:GH_TOKEN=<your PAT>"
    }
    Write-Host "🚀 跑一次 fetch-bugs..." -ForegroundColor Cyan
    node scripts/fetch-bugs.mjs
    if ($LASTEXITCODE -ne 0) {
        Write-Error "fetch-bugs 失败"
    }
    Write-Host "✅ 完成。查看 digest/index.md" -ForegroundColor Green
}

Write-Host ""
Write-Host "✅ 初始化完成。下一步：" -ForegroundColor Green
Write-Host "   1) 编辑 maintainers.json 填几个 deepseek-ai 维护者 handle"
Write-Host "   2) git init && git add . && git commit -m 'init'"
Write-Host "   3) 在 GitHub 创建空仓库 dsh-bug-watch 并 push"
Write-Host "   4) GitHub 仓库 Settings → Actions → 启用 Read and write permissions"
Write-Host "   5) 手动触发一次 Action 验证 digest/ 产出"
Write-Host "   6) .\scripts\install-task.ps1 注册每日 09:00 的本地 triage 任务"