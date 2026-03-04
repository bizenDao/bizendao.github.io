# Proposal: NFTミント・チャットボット

**作成者:** 彰子 / マスター（goodsun）
**日付:** 2026-03-05

---

## 概要

陶芸家がチャット形式でAIと対話するだけで、NFTのメタデータ作成からArweaveへのアップロード、ミントまでを完結できるシステム。

> **「備前焼のNFT化を、陶芸家が陶芸家のまま完結できる」**

---

## 背景・課題

現状、NFTミントには以下のような技術的ハードルがある：

- ウォレットの作成・管理
- スマートコントラクトの操作
- メタデータJSONのフォーマット理解
- Arweave等への分散ストレージへのアップロード

これらは現代の陶芸家・工芸作家にとって現実的に高いハードルであり、BizenDAOへの参加障壁になっている。

---

## 提案内容

AIアシスタント（彰子）がインタビュー形式で作家から必要情報を収集し、NFTミントまでを代行する。

### フロー

```
作家「ミントしたい」
  ↓
彰子「作品名を教えてください」
彰子「作家名は？」
彰子「サイズを教えてください」
彰子「制作年は？」
彰子「作品についてのコメントをどうぞ」
彰子「画像URLを貼ってください（静止画）」
彰子「動画URLはありますか？（任意）」
彰子「箱書き写真のURLはありますか？（任意）」
  ↓
彰子がメタデータJSONを生成・表示
彰子「内容を確認してください。よろしければArweaveにアップロードします」
  ↓
作家「OK」
  ↓
彰子がArweaveにアップロード → tokenURI取得
彰子「内容を最終確認します」→ メタデータ内容を表示
  ↓
作家「ミントして」
  ↓
彰子がコントラクトのmint関数を呼び出し → 完了
```

### 生成されるメタデータ（ERC-721準拠）

```json
{
  "name": "作品名（EN）　作品名（JA）",
  "description": "作品説明（EN）\n\n作品説明（JA）",
  "image": "https://arweave.net/{hash}",
  "animation_url": "https://arweave.net/{hash}",
  "attributes": [
    { "trait_type": "Artist", "value": "作家名（EN）　作家名（JA）" },
    { "trait_type": "Size", "value": "W × H × D mm" },
    { "trait_type": "Creation Year", "value": "YYYY" },
    { "trait_type": "Category", "value": "tea bowl / plate / etc." },
    { "trait_type": "With box photo", "value": "https://arweave.net/{hash}" },
    { "trait_type": "Story", "value": "作家コメント" }
  ]
}
```

---

## 対応コンテンツ

- **静止画NFT** → `image` フィールド
- **動画NFT** → `animation_url` フィールド
- **両方セット** → `image` + `animation_url` の組み合わせ（既存作品でも実績あり）

---

## 期待される効果

- 作家が技術知識ゼロでNFTを発行できる
- BizenDAOへの参加作家を大幅に増やせる
- メタデータの品質・フォーマットを統一できる
- 日英バイリンガルのメタデータを自然に生成できる

---

## 実装候補

- **チャットUI**: bizeny.bon-soleil.com のチャットボット機能を拡張
- **Arweaveアップロード**: Irys（旧Bundlr）SDK
- **ミント**: BizenDAO既存コントラクトのmint関数を呼び出し
- **AIエージェント**: 彰子（OpenClaw）

---

## ステータス

`[ ] 検討中`
