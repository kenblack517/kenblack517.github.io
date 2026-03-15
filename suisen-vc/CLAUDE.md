# SUISEN Volleyball Club HP

## サーバー起動
```bash
npx http-server . -p 3000 --cors
```
ブラウザで http://localhost:3000 にアクセス。

## ファイル構成
```
suisen-vc/
├── index.html        # TOPページ（スプラッシュ・スライドショー・ヒーロー）
├── about.html        # チーム紹介・歴史・練習情報
├── players.html      # 選手一覧（ポジション別）
├── schedule.html     # 試合日程・結果
├── css/
│   ├── style.css     # 共通スタイル（ヘッダー・ヒーロー・フッター等）
│   ├── about.css     # ABOUTページ専用
│   ├── players.css   # PLAYERSページ専用
│   └── schedule.css  # SCHEDULEページ専用
└── js/
    └── main.js       # 全ページ共通JS
```

## チーム情報
- チーム名：SUISEN Volleyball Club
- カテゴリ：社会人男子バレーボール
- チームカラー：水色（#29b6d8）
- スローガン：昼も夜も日本一

## main.js の機能
- **スプラッシュスクリーン**：初回アクセス時のみロゴ表示（sessionStorage管理）
- **スライドショー**：ヒーロー背景を5秒ごとに切り替え（3枚）
- **パララックス**：スクロールで背景がゆっくり動く
- **ハンバーガーメニュー**：スマホ用メニュー開閉
- **スクロールアニメーション**：要素が画面に入ったときフェードイン

## CSS キャッシュ注意
style.css を変更したら `index.html` の CSS リンクのバージョンを上げる。
```html
<link rel="stylesheet" href="css/style.css?v=3">  ← 数字を上げる
```

## 既知の注意点
- ヒーロー背景は現在グラデーション（ダミー）。実際の写真に差し替え可能
- 選手アバターは絵文字（ダミー）。写真に差し替え可能
- スプラッシュはブラウザセッション単位で1回表示（タブを閉じると次回また表示）
