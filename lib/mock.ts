export type Category = "ママ・パパ" | "学生" | "教員" | "個人開発者" | "会社員";

export type AppPost = {
  id: string;
  title: string;
  summary: string;
  status: "アイデア段階" | "制作中" | "ベータ版" | "公開中";
  targetCategories: Category[];
  wantCount: number;
  supportCount: number;
};

export const mockApps: AppPost[] = [
  {
    id: "1",
    title: "宿題サポートノート",
    summary: "保護者が子どもの宿題状況を簡単に記録できる試作アプリ",
    status: "ベータ版",
    targetCategories: ["ママ・パパ", "教員"],
    wantCount: 42,
    supportCount: 18
  },
  {
    id: "2",
    title: "農作業メモ共有",
    summary: "小規模農家向けに日々の作業メモを共有するツール",
    status: "制作中",
    targetCategories: ["会社員"],
    wantCount: 16,
    supportCount: 7
  }
];
