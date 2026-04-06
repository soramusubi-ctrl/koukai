# MVPデータモデル（論理）

## entities

### users
- id
- display_name
- role (`creator` / `viewer` / `both`)
- created_at

### viewer_profiles
- user_id (PK/FK users.id)
- category (enum)
- free_text
- updated_at

### apps
- id
- creator_user_id (FK users.id)
- title
- short_description
- description
- creator_comment
- status (`idea` / `building` / `beta` / `public`)
- tester_recruitment_enabled (bool)
- published_at
- created_at
- updated_at

### app_images
- id
- app_id (FK apps.id)
- image_url
- sort_order

### app_target_categories
- id
- app_id (FK apps.id)
- category (enum)

### reactions
- id
- app_id (FK apps.id)
- user_id (FK users.id)
- type (`want` / `support` / `tester`)
- created_at
- unique(app_id, user_id, type)

### support_payments (Phase 2)
- id
- app_id
- user_id
- amount_jpy
- status
- created_at

### contact_requests
- id
- app_id (FK apps.id)
- from_user_id (FK users.id)
- to_user_id (FK users.id)
- purpose (`tester` / `interview` / `collab` / `education_feedback` / `welfare_feedback` / `adoption`)
- message
- status (`pending` / `approved` / `rejected`)
- created_at
- handled_at

### contact_messages
- id
- contact_request_id (FK contact_requests.id)
- sender_user_id (FK users.id)
- body
- created_at

## 主要集計ロジック

### 1. 反応属性分布
- 母数: reactions where type = 'want' and app_id = ?
- viewer_profiles.category で group by
- 割合 = category_count / total_count

### 2. ターゲットとの差分（ズレ）
- expected_categories = app_target_categories
- actual_distribution = want反応の属性分布
- 表示: expectedに含まれるカテゴリの比率 + expected外で多いカテゴリ上位

### 3. 不正・ノイズ対策（MVP）
- 同一ユーザー同種リアクションは1回
- 通報導線のみ先行実装
- 厳密な本人確認は実施しない
