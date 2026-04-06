# ローカル起動ガイド

## 1) 前提

- Node.js 20.x（`.nvmrc`）
- npm が利用できること

## 2) 起動手順（最短）

```bash
nvm use || true
make setup
make dev
```

ブラウザで以下を開く:

- `http://localhost:3000/`
- `http://localhost:3000/apps`
- `http://localhost:3000/apps/1`

## 3) APIヘルス確認

別ターミナルで:

```bash
make health
```

期待値:

```json
{"ok":true,"service":"koukai","message":"API is alive"}
```

## 4) よくあるエラー

### npm install で 403 が出る

企業ネットワークやCIポリシーで `registry.npmjs.org` が制限される場合があります。
このリポジトリでは `.npmrc` で npm公式レジストリを指定していますが、
それでも失敗する場合はネットワークポリシー確認が必要です。

### ポート3000が使用中

```bash
PORT=3001 npm run dev
```

## 5) Vercelへ上げる場合

`docs/vercel-deploy-checklist.md` の手順でそのままデプロイ可能です。
