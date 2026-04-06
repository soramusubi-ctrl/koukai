"use client";

import { useState } from "react";

type Props = {
  initialWant: number;
  initialSupport: number;
};

export default function ReactionButtons({ initialWant, initialSupport }: Props) {
  const [wantCount, setWantCount] = useState(initialWant);
  const [supportCount, setSupportCount] = useState(initialSupport);
  const [wanted, setWanted] = useState(false);

  const onWant = () => {
    setWanted((prev) => {
      const next = !prev;
      setWantCount((count) => (next ? count + 1 : Math.max(initialWant, count - 1)));
      return next;
    });
  };

  return (
    <div className="grid" style={{ gap: 8 }}>
      <div className="muted">欲しいよ: {wantCount} / 応援: {supportCount}</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button className="btn" onClick={onWant}>
          {wanted ? "欲しいよ（取消）" : "欲しいよ"}
        </button>
        <button className="btn" onClick={() => setSupportCount((v) => v + 1)}>
          応援する
        </button>
        <button className="btn">テスターになる</button>
        <button className="btn">連絡リクエスト</button>
      </div>
    </div>
  );
}
