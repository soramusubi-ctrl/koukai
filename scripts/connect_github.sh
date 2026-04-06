#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <github-repo-url> [branch]"
  echo "Example: $0 https://github.com/you/koukai.git work"
  exit 1
fi

REPO_URL="$1"
BRANCH="${2:-work}"

if git remote get-url origin >/dev/null 2>&1; then
  echo "origin already exists: $(git remote get-url origin)"
  git remote set-url origin "$REPO_URL"
  echo "origin updated to: $REPO_URL"
else
  git remote add origin "$REPO_URL"
  echo "origin added: $REPO_URL"
fi

git push -u origin "$BRANCH"

echo "Done. Current remotes:"
git remote -v
