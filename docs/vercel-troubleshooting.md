# Vercelトラブルシュート

## 症状

ログに以下が出る:

- `Cloning ... (Branch: main, Commit: 0c7fe23)`
- `Build Completed in /vercel/output [13ms]`

## 原因

Vercelが**古い main ブランチ**（初期コミットのみ）をビルドしています。
そのため Next.js プロジェクトファイルが存在せず、超高速で空デプロイになります。

## 対処（どちらか）

### A. main に反映する（推奨）

1. GitHubで `work` → `main` のPRを作成
2. マージする
3. Vercelで再デプロイ

### B. VercelのProduction Branchを `work` に変更

1. Vercel Project Settings
2. Git > Production Branch
3. `work` を設定
4. Redeploy

## 最低確認

デプロイ後に以下が通ること:

- `/` が表示される
- `/apps` が表示される
- `/api/health` が `{"ok":true,...}` を返す

## 補足

`Commit: 0c7fe23` は初期コミットです。これが出ている間は最新アプリコードは反映されません。
