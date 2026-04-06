export default function SubmitPage() {
  return (
    <section className="card">
      <h2>投稿フォーム（MVP）</h2>
      <p className="muted">実装前のため、ここでは入力項目の確認のみ行えます。</p>
      <ul>
        <li>アプリ名 / 一言説明 / 詳細説明</li>
        <li>スクリーンショット2〜5枚</li>
        <li>想定ターゲット / 作者コメント / 公開ステータス</li>
        <li>（任意）テスター募集設定</li>
      </ul>
    </section>
  );
}
