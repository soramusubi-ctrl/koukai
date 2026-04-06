# Windows (PowerShell) クイックスタート

`/workspace/koukai` はこの実行環境（Linuxコンテナ）のパスです。
Windowsではそのパスは存在しないため、まずGitHubからcloneしてください。

## 1) 任意の作業フォルダへ移動

```powershell
cd $HOME
mkdir src -ErrorAction SilentlyContinue
cd src
```

## 2) リポジトリをclone

```powershell
git clone https://github.com/soramusubi-ctrl/koukai.git
cd koukai
```

## 3) ブランチ確認とpush

```powershell
git branch
git push -u origin work
```

> `work` ブランチが無い場合は、pushしたいブランチ名に置き換えてください。

## 4) ローカル起動

```powershell
npm install
npm run dev
```

ブラウザ: `http://localhost:3000`

## よくある詰まりポイント

- `cd /workspace/koukai` は Windows では無効（Linuxパス）。
- `git push -u origin work` は、**そのリポジトリをcloneしたディレクトリ内**で実行する必要があります。
- 認証で止まる場合は GitHub の PAT または Git Credential Manager を設定してください。


## あなたのログに対する対処

`fatal: not a git repository` は、リポジトリ外で `git push` した時のエラーです。

以下を**1行ずつ**実行してください。

```powershell
cd $HOME\src\koukai
git rev-parse --is-inside-work-tree
git branch
```

- `true` が返れば、その場所はGitリポジトリです。
- `work` ブランチが無ければ次を実行:

```powershell
git checkout -b work
git push -u origin work
```

既に `work` があるなら:

```powershell
git checkout work
git push -u origin work
```

> `>>` プロンプトが出た場合は、まず `Ctrl + C` で入力状態を解除してからコマンドを打ち直してください。


## ミスを減らす方法（PowerShellスクリプト）

```powershell
./scripts/push_work.ps1
```

- リポジトリ外実行を検出
- `work` ブランチが無ければ自動作成
- `origin` 未設定を検出
- 最後に `git push -u origin work` を実行
