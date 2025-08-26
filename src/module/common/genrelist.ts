// ジャンルリスト関連の定義と関数

// ジャンルタイプの定義
export const genre_names = [
  'Art',
  'Music',
  'Gaming',
  'Photography',
  'Writing',
  'Other'
];

export const type_names = [
  'NFT',
  'Token',
  'Membership',
  'Other'
];

export const sales_types = [
  'Fixed',
  'Auction',
  'Offer',
  'Free'
];

export const creator_types = [
  'Artist',
  'Musician',
  'Developer',
  'Writer',
  'Other'
];

export const contract_types = [
  'ERC721',
  'ERC1155',
  'ERC20',
  'Other'
];

export const gallary_type = [
  'Personal',
  'Collection',
  'Exhibition',
  'Other'
];

export const status_type = [
  'Active',
  'Inactive',
  'Pending',
  'Archived'
];

export const exclude_dir = [
  '.git',
  'node_modules',
  '.vscode'
];

export const page_dir = [
  'pages',
  'content',
  'articles'
];

// ジャンルリスト関連の関数
export function getGenreList() {
  return genre_names;
}

export function formatGenreList(list: any[]) {
  return list;
}

// その他の必要な関数
export default {
  getGenreList,
  formatGenreList,
  genre_names,
  type_names,
  sales_types,
  creator_types,
  contract_types,
  gallary_type,
  status_type,
  exclude_dir,
  page_dir
};