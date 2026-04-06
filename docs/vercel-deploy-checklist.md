# Vercelデプロイチェックリスト

## 結論

**この構成なら Vercel デプロイ可能です。**
（Next.js App Router構成 + `package.json` scripts + `vercel.json` あり）

ただし、現状はモックデータ中心のため「本番運用できる完成版」ではなく、
**プロトタイプとしての公開**が適切です。

## 事前チェック

- `package.json` に `build` / `start` scripts がある
- Next.js / React / ReactDOM の依存がある
- `app/` ディレクトリと `layout.tsx` / `page.tsx` がある
- API Route (`/api/health`) がある
- Node.jsバージョンを `.nvmrc` で固定（20）

## Vercel手順

1. GitHubリポジトリをVercelへImport
2. Framework Preset: Next.js（自動検出）
3. Build Command: `npm run build`
4. Install Command: `npm install`
5. Deploy

## デプロイ後の確認

- `/` が表示される
- `/apps` 一覧が表示される
- `/apps/1` で「欲しいよ」「応援する」が動く
- `/api/health` が `{"ok":true,...}` を返す

## 注意

- `ReactionButtons` は現状DB永続化なし（ブラウザ内状態のみ）
- MVP本番運用には認証・DB・不正対策の追加が必要


## 失敗時

- ブランチ/コミットの取り違いは `docs/vercel-troubleshooting.md` を参照してください。
