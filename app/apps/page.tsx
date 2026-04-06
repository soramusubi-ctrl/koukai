import Link from "next/link";
import { mockApps } from "@/lib/mock";

export default function AppsPage() {
  return (
    <section>
      <h2>アプリ一覧</h2>
      {mockApps.map((app) => (
        <article className="card" key={app.id}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>{app.title}</h3>
            <span className="badge">{app.status}</span>
          </div>
          <p className="muted">{app.summary}</p>
          <p className="muted">欲しいよ: {app.wantCount} / 応援: {app.supportCount}</p>
          <Link className="btn" href={`/apps/${app.id}`}>
            詳細を見る
          </Link>
        </article>
      ))}
    </section>
  );
}
