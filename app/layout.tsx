import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="container">
          <h1>Koukai（MVPプロトタイプ）</h1>
          <nav className="nav muted">
            <Link href="/">トップ</Link>
            <Link href="/apps">アプリ一覧</Link>
            <Link href="/submit">投稿フォーム</Link>
            <Link href="/me">マイページ</Link>
            <Link href="/dashboard">投稿者ダッシュボード</Link>
            <Link href="/contact-requests">連絡リクエスト</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
