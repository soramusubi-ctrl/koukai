export default function DashboardPage() {
  return (
    <section className="grid two">
      <article className="card">
        <h3>主要指標</h3>
        <ul>
          <li>欲しいよ: 42</li>
          <li>応援: 18</li>
          <li>テスター希望: 9</li>
          <li>連絡リクエスト: 5</li>
        </ul>
      </article>
      <article className="card">
        <h3>想定ターゲットとのズレ（例）</h3>
        <p className="muted">想定: ママ・パパ / 教員</p>
        <p>実反応: ママ35% / 個人開発者30% / 教員15% / その他20%</p>
      </article>
    </section>
  );
}
