# NFTギャラリー更新ガイド

新しい作品NFTがコントラクトに追加されたときに、ギャラリーページを更新する手順。

## 対象ファイル

各コントラクトごとに以下の3ファイル（en/ja/fr）を更新する：

```
en/nft-gallery_0x{CA}.html
ja/nft-gallery_0x{CA}.html
fr/nft-gallery_0x{CA}.html
```

コントラクト一覧は `docs/contracts.md` を参照。

---

## Step 1: 総供給数を確認する

```bash
RPC="https://1rpc.io/matic"
CA="0x{コントラクトアドレス}"

# totalSupply() = 0x18160ddd
DATA="0x18160ddd"
curl -s -X POST -H "Content-Type: application/json" \
  -d "{\"jsonrpc\":\"2.0\",\"method\":\"eth_call\",\"params\":[{\"to\":\"$CA\",\"data\":\"$DATA\"},\"latest\"],\"id\":1}" \
  "$RPC" | python3 -c "
import sys, json
r = json.load(sys.stdin)
print('totalSupply:', int(r['result'], 16))
"
```

---

## Step 2: 各トークンのtokenURIを取得する

```bash
for i in $(seq 1 {totalSupply}); do
  PADDED=$(printf '%064x' $i)
  DATA="0xc87b56dd$PADDED"
  result=$(curl -s -X POST -H "Content-Type: application/json" \
    -d "{\"jsonrpc\":\"2.0\",\"method\":\"eth_call\",\"params\":[{\"to\":\"$CA\",\"data\":\"$DATA\"},\"latest\"],\"id\":1}" \
    "$RPC")
  echo -n "Token #$i: "
  echo "$result" | python3 -c "
import sys, json
r = json.load(sys.stdin)
result = r.get('result','')
if result and result != '0x':
    data = bytes.fromhex(result[2:])
    length = int.from_bytes(data[32:64], 'big')
    s = data[64:64+length].decode('utf-8', errors='replace')
    print(s)
else:
    print('None (未ミントまたはburn済み)')
"
done
```

`None` が返ったトークンは未ミントまたはburn済み → **ギャラリーには追加しない**。

---

## Step 3: メタデータを取得する

tokenURIがArweaveのURLの場合：

```bash
curl -sL --max-time 20 \
  -H "User-Agent: Mozilla/5.0" \
  "https://arweave.net/{hash}" | python3 -m json.tool
```

> ⚠️ `curl` に `-H "User-Agent: Mozilla/5.0"` が必須。なしだと CDN77エラーページが返る。

取得した JSON から以下を確認：
- `name` — 作品名（英語）
- `image` — 画像URL

### imageがbase64だった場合

`image` フィールドが `data:image/...` で始まる場合は巨大すぎてHTMLに埋め込めない。

→ 代替画像URL（マスターに確認）を使い、JSコメントを添える：

```javascript
// オリジナルの記述がbase64のため代替え画像を利用しています
{id:1, name:"...", nameJa:"...", image:"https://arweave.net/{代替画像hash}"},
```

---

## Step 4: ギャラリーHTMLを更新する

各HTMLファイルの `<script>` 内の `nfts` 配列にエントリを追加する。

**id順に並べること。**

```javascript
const nfts = [
  {id:1, name:"White Bizen Ware Tea Bowl No.1", nameJa:"白備前茶盌No.1", image:"https://arweave.net/..."},
  {id:2, name:"...", nameJa:"...", image:"https://arweave.net/..."},
  // ...
];
```

3言語分（en/ja/fr）すべて同じ内容で更新する。

---

## Step 5: CSSの確認

背景透過画像（白い作品など）の場合は `.nft-card img` の `background` を確認する。

```css
/* 白い作品・透過PNGの場合 → 黒背景推奨 */
.nft-card img { background: #000; }

/* 通常の場合 */
.nft-card img { background: #F5F0E8; }
```

全ギャラリー一括変更する場合：

```bash
find ~/workspace/projects/bizendao.github.io/{en,ja,fr} -name 'nft-gallery_*.html' \
  | xargs sed -i 's/background: #F5F0E8/background: #000/'
```

---

## Step 6: コミット＆プッシュ

```bash
cd ~/workspace/projects/bizendao.github.io
git add {en,ja,fr}/nft-gallery_0x{CA}*.html
git commit -m "feat: add token #{id} to 0x{CA} gallery"
git push
```

stagingで確認 → マスターの承認後にmasterへマージ。

---

## よくあるトラブル

| 症状 | 原因 | 対処 |
|------|------|------|
| `curl` がHTMLを返す | User-Agentなし | `-H "User-Agent: Mozilla/5.0"` を追加 |
| `polygon-rpc.com` が403 | テナント無効 | `https://1rpc.io/matic` を使う |
| tokenURIが `None` | 未ミントまたはburn済み | ギャラリーに追加しない |
| imageがbase64 | メタデータの仕様 | 代替画像URLに差し替え＋コメント記入 |
