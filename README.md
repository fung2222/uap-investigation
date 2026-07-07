# 🛸 UAP 機密資料庫

> 整理美國政府公開嘅 UFO/UAP 檔案、分析、影片與相片
> 懸疑風格調查資料庫 — 繁體中文版

🌐 **網站連結：** https://fung2222.github.io/uap-investigation/

---

## 📖 簡介

本站系統性整理咗美國政府、五角大廈、NASA、國會聽證會等公開來源嘅
UFO / UAP 案件資料，包括 20 個已被官方確認嘅重要事件。

## 🗂️ 網站結構

```
uap-investigation/
├── index.html                    # 首頁
├── pages/
│   ├── database.html             # 機密資料庫 (20 個事件)
│   ├── event-01.html ~ 20.html   # 每個事件獨立頁面
│   ├── gallery-photos.html       # 相片庫
│   ├── gallery-videos.html       # 影片庫
│   ├── species.html              # 外星人種族分類
│   ├── ufo-types.html            # UFO 形態分類
│   ├── star-map.html             # 星際地圖
│   └── opinion.html              # 編輯部意見
├── assets/
│   ├── css/
│   │   ├── base.css              # 主題樣式
│   │   └── ufo-styles.css        # UFO 專用樣式
│   ├── js/
│   │   └── event-pager.js        # 動態載入
│   └── images/                   # 圖片庫
├── data/
│   └── events.json               # 事件資料庫 (結構化)
└── docs/                         # 開發文檔
```

## 📚 主要資料來源

- **Pentagon AARO** — 全域異常現象解析辦公室
- **U.S. Congress Hearings** — 國會 UAP 聽證會紀錄 (2022, 2023, 2024)
- **NASA UAP Independent Study** — NASA 獨立研究小組報告 (2023)
- **FOIA Releases** — 信息自由法公開文件
- **Former Military Personnel Testimony** — 前軍方人員證詞

## 🎨 設計風格

- 深空配色（#050a18 深藍黑 + 紫紅能量光 + 機密紅印章）
- 懸疑神秘氛圍，動態星空背景
- 簡約無花巧，資料為主
- 全部繁體中文 (zh-Hant)

## 🚀 部署

本站由 GitHub Pages 提供托管。每次 `git push` 到 `main` 分支即自動部署。

## 🛠️ 開發

```bash
# 本機預覽
python -m http.server 8000

# 訪問 http://localhost:8000/
```

## 📝 未來發展

- [ ] 新增更多已解密個案
- [ ] 多語言版本（英文/日文）
- [ ] 開放下載結構化 JSON 資料
- [ ] 整合 AARO 公開報告 PDF
- [ ] 建立用戶評論/討論區

## ⚖️ 免責聲明

本站所有內容均盡可能引用原始公開來源，僅供研究與教育用途。
本站對資料嘅詮釋並不代表任何政府機構之官方立場。

---

© 2025 UAP Investigation Project · Hermes
