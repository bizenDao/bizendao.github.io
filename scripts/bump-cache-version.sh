#!/usr/bin/env bash
#
# bump-cache-version.sh — dapp静的アセット（js/css）のキャッシュバスティング版数を一括更新する。
#
# GitHub Pagesは静的ファイルをキャッシュ配信するため、JS/CSSを更新しても
# 再訪ユーザーには古いキャッシュが使われ続ける。各ローカルjs/css参照に
# ?v=<VERSION> を付与し、デプロイ毎にこのコマンドで版数を上げることで
# 確実に最新アセットを配信する（DRY: 1コマンドで全HTMLを更新）。
#
# 使い方:
#   ./scripts/bump-cache-version.sh            # 版数 = 当日(YYYYMMDD)
#   ./scripts/bump-cache-version.sh 20260622   # 版数を明示
#
# 冪等: 既存の ?v=NNN は新しい版数に置換される（重複付与しない）。
set -euo pipefail

VERSION="${1:-$(date +%Y%m%d)}"
cd "$(dirname "$0")/.."

# dapp配下の全HTMLの、ローカル(../ または ../../)js/css参照に ?v=<VERSION> を付与/更新
perl -i -pe \
  "s{((?:\.\./)+(?:js|css)/[A-Za-z0-9_.-]+\.(?:js|css))(?:\?v=[0-9]+)?\"}{\$1?v=${VERSION}\"}g" \
  dapp/*.html dapp/setting/*.html

echo "Cache version bumped to ?v=${VERSION}"
grep -rhoE '(src|href)="(\.\./)+(js|css)/[^"]+\?v=[0-9]+"' dapp/*.html dapp/setting/*.html \
  | wc -l | xargs echo "  updated references:"
