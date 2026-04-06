import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid">
      <div className="card">
        <h2>未完成でも出せる、需要が見える</h2>
        <p className="muted">
          個人開発のアプリや試作を日本語で公開し、「欲しいよ」「応援する」「テスターになる」の反応を集める場所。
        </p>
        <Link className="btn primary" href="/apps">
          アプリを見る
        </Link>
      </div>
    </section>
  );
}
