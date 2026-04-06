import { mockApps } from "@/lib/mock";
import ReactionButtons from "./ReactionButtons";

export default function AppDetailPage({ params }: { params: { id: string } }) {
  const app = mockApps.find((a) => a.id === params.id);

  if (!app) {
    return <p>投稿が見つかりませんでした。</p>;
  }

  return (
    <section className="grid">
      <div className="card">
        <h2>{app.title}</h2>
        <p className="muted">{app.summary}</p>
        <p>想定ターゲット: {app.targetCategories.join(" / ")}</p>
      </div>

      <div className="card">
        <h3>反応</h3>
        <ReactionButtons initialWant={app.wantCount} initialSupport={app.supportCount} />
      </div>
    </section>
  );
}
