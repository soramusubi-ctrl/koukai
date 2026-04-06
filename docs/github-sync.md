# GitHub同期手順

## 現状

このリポジトリはローカルGitのみで、`git remote -v` が空です。
つまり、**まだGitHubにはpushされていません**。

## GitHubへ反映する手順

1. GitHubで新規リポジトリを作成
2. このローカルに remote を追加

```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
```

3. 現在ブランチを push

```bash
git push -u origin work
```

4. 確認

```bash
git remote -v
git branch -vv
```

## 補足

- 既定ブランチ名を `main` にしたい場合は、`work` から `main` へrenameしてpushしてください。
- 今後は `git push` だけで更新可能になります（upstream設定後）。


## ワンコマンド（このリポジトリ用）

```bash
./scripts/connect_github.sh <YOUR_GITHUB_REPO_URL> work
```

- `origin` が未設定なら追加、設定済みならURL更新後にpushします。


## トラブルシュート

### `CONNECT tunnel failed, response 403`

- 実行環境のプロキシ/ネットワーク制限で GitHub への HTTPS 接続が拒否されています。
- 手元PCや許可済みネットワークで同じコマンドを実行してください。
- 企業環境では `github.com` へのHTTPS許可が必要です。


## Windows (PowerShell) の場合

- `cd /workspace/koukai` は使わず、`git clone` 後に `cd koukai` してください。
- 詳細手順は `docs/windows-quickstart.md` を参照。
