# scripts/run-e2e.ps1
# 一次性跑完所有 e2e 验证：纯函数单测 + mock GraphQL + 真 fetch-bugs.mjs + 产物断言。
# 不需要 GitHub PAT（mock 自带假数据）；结束后自动还原 maintainers.local.json。
#
# 用法：
#   .\scripts\run-e2e.ps1
#   .\scripts\run-e2e.ps1 -SkipUnit          # 跳过单测
#   .\scripts\run-e2e.ps1 -ShowDigest 30     # e2e 通过后再多打印 30 行 index.md

param(
    [switch]$SkipUnit,
    [int]$ShowDigest = 40
)

$ErrorActionPreference = 'Stop'
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Resolve-Path (Join-Path $ScriptDir '..')
Set-Location $RepoRoot

# --- 前置：Node 版本 ---
$node = (& node --version) 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Error "未检测到 node，请先安装 Node.js 20+。"
}
Write-Host "✅ Node 版本: $node" -ForegroundColor Green

$overall = $true

# --- 阶段 1：纯函数单测 ---
if (-not $SkipUnit) {
    Write-Host ""
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkCyan
    Write-Host "阶段 1/3：纯函数单测" -ForegroundColor Cyan
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkCyan
    node scripts/test-classify.mjs
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ 单测失败，跳过 e2e" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "⏭  跳过单测" -ForegroundColor Yellow
}

# --- 阶段 2：端到端（mock GraphQL + 真脚本 + 断言） ---
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkCyan
Write-Host "阶段 2/3：端到端测试（mock GraphQL + fetch-bugs.mjs）" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkCyan
node scripts/test-e2e.mjs
$e2e_rc = $LASTEXITCODE
if ($e2e_rc -ne 0) {
    $overall = $false
    Write-Host "❌ e2e 失败" -ForegroundColor Red
}

# --- 阶段 3：展示产物 ---
if ($overall) {
    Write-Host ""
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkCyan
    Write-Host "阶段 3/3：digest/index.md 前 $ShowDigest 行预览" -ForegroundColor Cyan
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkCyan
    $indexPath = Join-Path $RepoRoot 'digest\index.md'
    if (Test-Path $indexPath) {
        Get-Content -LiteralPath $indexPath -TotalCount $ShowDigest
        $lines = (Get-Content -LiteralPath $indexPath).Count
        Write-Host ""
        Write-Host "(共 $lines 行；完整文件：$indexPath)" -ForegroundColor DarkGray
    } else {
        Write-Host "⚠️  未找到 $indexPath" -ForegroundColor Yellow
    }
}

Write-Host ""
if ($overall) {
    Write-Host "🎉 全部通过" -ForegroundColor Green
    exit 0
} else {
    Write-Host "💥 有失败，请查看上面日志" -ForegroundColor Red
    exit 1
}