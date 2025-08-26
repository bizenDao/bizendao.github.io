# GitHub Pages デプロイ手順

## セットアップ

1. **GitHub Secrets の設定**
   
   リポジトリの Settings > Secrets and variables > Actions で必要な環境変数を設定：

   **必須：**
   - `ARTICLE_REPO` - 記事管理システムのURL（末尾にスラッシュを含める）
     例: `https://api.example.com/`
   - `BOT_API_URL` - APIのベースURL
   - `RPC_URL` - ブロックチェーンRPCのURL

   **オプション：**
   - その他の環境変数は `.env.example` を参照

   ⚠️ **重要**: `ARTICLE_REPO`は記事データを取得するために必須です。設定されていない場合、アプリケーションは正常に動作しません。

2. **GitHub Pages の有効化**
   
   - Settings > Pages
   - Source: GitHub Actions

## デプロイ

main または master ブランチにプッシュすると自動的にデプロイされます。

```bash
git push origin main
```

## ローカルでのテスト

```bash
npm run build:github-pages
# dist/ ディレクトリに成果物が生成されます
```

## トラブルシューティング

### 環境変数が読み込まれない場合

1. **GitHub Secrets の確認**
   - Settings > Secrets and variables > Actions で設定されているか確認
   - 特に `ARTICLE_REPO` が正しく設定されているか確認

2. **デプロイされたenv.jsの確認**
   ```
   https://あなたのユーザー名.github.io/js/env.js
   ```
   このファイルを開いて、環境変数が正しく設定されているか確認

3. **ブラウザコンソールでの確認**
   ```javascript
   console.log(window.ENV);
   console.log(window.ENV.ARTICLE_REPO);
   ```

### よくある問題

- **環境変数に改行が含まれている場合**: GitHub Secretsの値を確認し、改行を削除してください
- **末尾のスラッシュ忘れ**: `ARTICLE_REPO`は末尾にスラッシュが必要です（例: `https://api.example.com/`）
- **JavaScriptエラー**: ブラウザのコンソールで `env.js` の構文エラーを確認してください