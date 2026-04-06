export default function ContactRequestsPage() {
  return (
    <section className="card">
      <h2>連絡リクエスト一覧</h2>
      <p className="muted">用途付きリクエスト（承認制）の受信箱。</p>
      <ul>
        <li>テスターになりたい（pending）</li>
        <li>教育現場として意見したい（approved）</li>
      </ul>
    </section>
  );
}
