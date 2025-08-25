#!/bin/bash

# GitHub Pages用のビルドスクリプト
echo "Building for GitHub Pages..."

# 依存関係のインストール
npm install

# TypeScriptのビルド
npx webpack --config webpack.config.js

# index.html.tmplからindex.htmlを生成
# バージョンをタイムスタンプに設定
VERSION=$(date +%s)
sed "s/###VERSION###/$VERSION/g" public/index.html.tmpl > public/index.html

# GitHub Pages用のnojekyllファイルを作成（_で始まるファイルを処理するため）
touch public/.nojekyll

echo "Build completed!"