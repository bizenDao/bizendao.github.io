# BizenDAO 多言語対応設計

## 方針

- **コンテンツページ**: `ja/` `en/` でディレクトリ分離、生HTML
  - DAO メンバーが直接編集可能、翻訳も自由
- **システムページ（dapp）**: 共有1コピー、`?lang=` パラメータで切り替え
  - ブロックチェーン接続あり、ロジック複雑 → 二重管理を避ける
- **言語判定**: 遷移元ページ（EN/JP）がリンクに `?lang=` を付与

## ディレクトリ構造

```
bizendao.github.io/
├── index.html              ← リダイレクト（Accept-Language → /ja/ or /en/）
├── .htaccess               ← RewriteRule（corp.bon-soleil.com用）
├── 404.html                ← GH Pages SPA fallback
│
├── ja/                     ← 日本語コンテンツ（生HTML）
│   ├── index.html
│   ├── bizenyaki.html
│   ├── artist-list.html
│   ├── product-list.html
│   ├── merchandise1.html
│   └── creators/
│       ├── mori-toshiaki.html
│       ├── mori-taiga.html
│       ├── hozangama.html
│       └── fujita-sho.html
│
├── en/                     ← 英語コンテンツ（生HTML）
│   ├── index.html
│   ├── bizenyaki.html
│   ├── artist-list.html
│   ├── product-list.html
│   ├── merchandise1.html
│   └── creators/
│       └── ...
│
├── dapp/                   ← システムページ（共有、lang=パラメータ）
│   ├── account.html        ← NFTポートフォリオ
│   ├── token.html          ← NFT詳細 + TBA
│   ├── donation.html       ← 寄付
│   ├── disconnect/
│   │   └── index.html      ← SBT burn + Discord切断
│   ├── regist/
│   │   └── index.html      ← Discord EOA登録
│   └── setting/
│       ├── admin.html       ← 管理者CRUD
│       ├── creator.html     ← 作家CRUD
│       └── contract.html    ← コントラクトCRUD
│
├── js/                     ← 共有JS
│   ├── config.js            ← チェーン・コントラクト・ABI
│   ├── wallet.js            ← MetaMask接続
│   ├── nft.js               ← NFT/TBAヘルパー
│   ├── cache.js             ← localStorageキャッシュ
│   ├── manager.js           ← Managerコントラクト
│   └── i18n.js              ← NEW: 言語切り替えモジュール
│
├── css/                    ← 共有CSS
├── img/                    ← 共有画像
└── docs/                   ← 設計ドキュメント
```

## 言語切り替えの仕組み

### コンテンツページ（ja/ ↔ en/）
- ヘッダーの EN/JP ボタンで対応する同一ページに遷移
- 例: `/ja/index.html` → `/en/index.html`

### システムページ（dapp/）
- URLパラメータ `?lang=ja` / `?lang=en` で切り替え
- コンテンツページからのリンク: `../dapp/account.html?lang=ja`
- UIテキスト（ボタン、ラベル等）は `js/i18n.js` の辞書で差し替え

### i18n.js 設計

```js
const LANG = new URLSearchParams(location.search).get('lang') || 'ja';
const T = {
  ja: { connect: 'ウォレット接続', owned: '所有NFT', donate: '寄付する', ... },
  en: { connect: 'Connect Wallet', owned: 'Owned NFTs', donate: 'Donate', ... }
};
const t = (key) => T[LANG]?.[key] || T.ja[key];
```

### ルート index.html
- `Accept-Language` ヘッダーを見て `/ja/` or `/en/` にリダイレクト
- JavaScript fallback: `navigator.language` で判定

## ファイル移動計画

| 現在の場所 | 移動先 |
|-----------|--------|
| account.html | dapp/account.html |
| token.html | dapp/token.html |
| donation.html | dapp/donation.html |
| disconnect/ | dapp/disconnect/ |
| regist/ | dapp/regist/ |
| setting/ | dapp/setting/ |
| index.html（コンテンツ） | ja/index.html |
| bizenyaki.html | ja/bizenyaki.html |
| artist-list.html | ja/artist-list.html |
| product-list.html | ja/product-list.html |
| merchandise1.html | ja/merchandise1.html |
| creators/ | ja/creators/ |

## リンクパス変更

コンテンツページ（ja/en内）から:
- JS/CSS: `../js/config.js`, `../css/style.css`
- 画像: `../img/...`
- dapp: `../dapp/account.html?lang=ja`

dappページから:
- JS/CSS: `../js/config.js`, `../css/style.css`
- 画像: `../img/...`
- コンテンツ: `../ja/index.html` or `../en/index.html`（langに応じて）
