param(
  [string]$Branch = "work"
)

$inside = git rev-parse --is-inside-work-tree 2>$null
if ($LASTEXITCODE -ne 0 -or $inside.Trim() -ne "true") {
  Write-Error "Not inside a git repository. Move to repo folder first."
  exit 1
}

$current = git branch --show-current
if (-not $current) {
  Write-Error "Cannot detect current branch."
  exit 1
}

if (-not (git show-ref --verify --quiet "refs/heads/$Branch")) {
  git checkout -b $Branch
} else {
  git checkout $Branch
}

$remote = git remote
if (-not ($remote -split "`n" | Where-Object { $_ -eq "origin" })) {
  Write-Error "origin remote is not configured. Run: git remote add origin <URL>"
  exit 1
}

git push -u origin $Branch
