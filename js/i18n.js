/**
 * BizenDAO i18n — lightweight translation for dapp pages
 * 
 * Usage:
 *   <script src="../js/i18n.js"></script>
 *   - HTML: <span data-i18n="connect_wallet">ウォレットを接続</span>
 *   - JS:   t('connect_wallet')
 *   - Navigation links auto-updated based on lang
 */

(function () {
  'use strict';

  // Detect language from URL param, fallback to ja
  var params = new URLSearchParams(window.location.search);
  var LANG = params.get('lang') || 'ja';

  // Translation dictionary
  var T = {
    ja: {
      // Navigation
      nav_top: 'トップページ',
      nav_artists: '作家紹介',
      nav_company: '会社概要',
      nav_discord: 'Discordリンク',
      nav_meta: '作品使用歴作成',
      nav_donate: '寄付ポイント',
      nav_mypage: 'マイページ',

      // Wallet
      connect_wallet: 'ウォレットを接続',
      connecting: '接続中...',
      disconnect: '切断',
      connect_own: '自分のウォレットで接続',
      wallet_prompt: 'ウォレットを接続して、備前焼NFTコレクションを確認しましょう。',

      // Account
      owned_nft: '所有NFT',
      artists: '作家',
      no_nft: 'まだ備前焼NFTを所有していません。',
      view_artists: '作家紹介を見る',
      sbt_badge: 'SBT',
      progress: '進捗',

      // Token
      send: '送信',
      burn: '燃焼',
      cancel: 'キャンセル',
      confirm: '確認',
      close: '閉じる',
      tba_title: '箱書（TBA）',
      tba_hakogaki: 'TBA (箱書き)',
      unit_pieces: '点',
      tba_empty: 'このNFTにはまだ箱書がありません。',
      attributes: '属性',
      owner: '所有者',
      send_to: '送り先アドレス',
      send_confirm: '{dest} に送信しますか？',
      burn_confirm: 'このNFTをBurn（焼却）します。この操作は取り消すことができません。本当によろしいですか？',

      // Donation
      donate: '寄付する',
      donate_title: '寄付',
      donate_amount: '寄付金額',
      donate_history: 'あなたの寄付履歴',
      total_donated: '累計寄付額',
      total_used: '累計使用ポイント',
      current_balance: '現在の残高',
      total_donors: '寄付者数',
      donate_prompt: 'BizenDAOの活動を寄付で応援しましょう。',
      donate_subtitle: '備前焼の文化を守り、デジタル技術で世界に届ける。<br>あなたの寄付がDAOの活動を支えます。',
      donate_mission: 'BizenDAOは、備前焼の伝統文化をブロックチェーン技術で保存・発信するコミュニティです。作家のNFT作品の発行支援、箱書き（SBT）による来歴証明、そしてメタデータの永続化（Arweave）を通じて、備前焼の価値を次世代に繋げます。寄付金はアーティスト支援、インフラ維持、コミュニティ運営に使われます。',
      donate_thanks: 'ありがとうございます！',
      view_on_polygonscan: 'Polygonscanで確認',
      connect_to_donate: 'ウォレットを接続して寄付する',
      no_metamask: 'MetaMaskがインストールされていません。',
      install_metamask: 'MetaMaskをインストール',
      custom_amount: 'カスタム金額',
      message_optional: 'メッセージ（任意）',
      message_placeholder: '応援メッセージなど',
      donate_button: '{amount} POL を寄付する',
      no_history: 'まだ寄付履歴がありません',

      // Disconnect
      disconnect_title: 'ウォレット接続解除',
      disconnect_sbt_warn: 'SBTを保有しています。切断前にSBTをBurnしてください。',
      disconnect_confirm: '本当に接続解除しますか？',
      disconnect_done: '接続解除が完了しました',
      discord_disconnected: 'Discord連携が解除されました。',
      dc_current_status: '現在の状態',
      dc_member_sbt: 'メンバーSBT',
      dc_owned: '所有あり',
      dc_none: 'なし',
      dc_not_linked: '未連携',
      dc_burn_title: 'メンバーカードのBURN',
      dc_burn_desc: 'ウォレット解除を行うためにはメンバーカード（SBT）のBURNが必要です。',
      dc_burn_link: 'こちらからメンバーカードのSBTを開き、BURNを行なってください',
      dc_disconnect_title: 'Discord連携解除',
      dc_disconnect_desc: 'こちらのウォレット接続を解除します。',
      dc_disconnect_warn: 'この操作は取り消せません。再度連携するにはDiscordで /regist コマンドを実行してください。',
      dc_processing: '処理中...',
      dc_registerable: '登録可能',
      dc_registerable_desc: 'は登録可能です。',
      dc_regist_prompt: 'Discordにて /regist コマンドを実行してください。',
      dc_check_failed: '状態確認に失敗しました',
      dc_disconnect_failed: '解除に失敗しました',

      // Register
      register_title: 'ウォレット連携',
      register_desc: 'Discordアカウントとウォレットアドレスをリンクします。',
      register_done: '登録が完了しました',
      regist_desc: 'Discordアカウントとウォレットアドレスを紐付けます。<br>Discordで <strong>/regist</strong> コマンドを実行して取得したSECRETを入力してください。',
      regist_secret_placeholder: 'SECRETコード',
      regist_failed: '登録に失敗しました',

      // Settings
      setting_admin: '管理者設定',
      setting_creator: '作家設定',
      setting_contract: 'コントラクト設定',
      setting_proxy_donate: '代理寄付',
      add: '追加',
      remove: '削除',
      save: '保存',
      visibility: '表示/非表示',
      admin_only: '管理者のみアクセス可能です。',

      // Token page
      token_contract_addr: 'NFTコントラクトアドレス',
      token_id_optional: 'トークンID（オプション）',
      token_fetch: 'NFT情報を取得',

      // Donation page
      donate_support: 'BizenDAOを応援する',
      donate_desc: 'BizenDAOの活動',

      // Disconnect page
      connect_wallet_please: 'ウォレットを接続してください',
      no_metamask: 'MetaMaskがインストールされていません',
      discord_disconnected: 'Discord連携が解除されました。',

      // Register page
      register_linked: 'ウォレットとDiscordが紐付けられました。',
      back_to_top: 'トップへ戻る',
      registering: '登録中...',
      regist_discord_id: 'Discordの /regist コマンドで表示されたID',
      regist_secret: 'Discordの /regist コマンドで表示されたSECRETコード',

      // Settings
      no_admins: '管理者が登録されていません',
      no_creators: '作家が登録されていません',
      no_contracts: 'コントラクトが登録されていません',
      visible: '公開',
      hidden: '非公開',
      edit: '編集',
      contract_list: 'コントラクト一覧',
      add_contract: 'コントラクト追加',
      edit_contract: 'コントラクト編集',
      address: 'アドレス',
      name_label: '名前',
      type_label: 'タイプ',
      update: '更新',
      add: '追加',
      config_diff_title: 'config.js / Manager 差分検出',
      config_only_label: 'config.js のみ',
      manager_only_label: 'Manager のみ',
      config_only_msg: 'config.js にあるが Manager に未登録',
      manager_only_msg: 'Manager に登録済みだが config.js に未反映',
      contract_updated: 'コントラクト情報を更新しました',
      contract_added: 'コントラクトを追加しました',
      contract_deleted: 'コントラクトを削除しました',
      contract_public: '公開にしました',
      contract_hidden_done: '非公開にしました',
      confirm_delete_contract: 'を削除しますか？',
      contract_name_placeholder: 'コントラクト名',

      // UI Common
      logo_alt: 'ロゴ',
      toggle_menu: 'メニューを開閉',
      site_menu: 'サイトメニュー',
      view_on_polygonscan: 'PolygonScanで確認',
      description: '説明',
      contract_info: 'コントラクト情報',
      view_3d: '3Dモデルを表示',
      show_sample: 'サンプルNFTを表示',
      clear: 'クリア',
      searching: '検索中...',
      unregistered_address: '未登録のアドレスです',
      send_nft: 'NFTを送信',
      token_id_placeholder: '特定のトークンIDを表示',
      status_connected: '接続完了',
      status_loaded: '取得完了',
      sending: '送信中...',

      // Transaction
      tx_invalid_address: '無効なアドレスです',
      tx_sending: 'トランザクション送信中...',
      tx_sent: '送信完了！',
      tx_burning: 'Burn トランザクション送信中...',
      tx_burned: 'Burn完了',
      tx_cancelled: 'キャンセルされました',
      donate_failed: '寄付に失敗しました',

      // Mint
      mint_subtitle: 'NFTをミントして新しいトークンを発行します',
      mint_select_contract: 'コントラクトを選択',
      mint_to: 'ミント先アドレス',
      mint_to_self: '自分宛て',
      mint_loading_meta: 'メタデータ読み込み中...',
      mint_button: 'Mint',
      mint_minting: 'ミント中...',
      mint_success: 'ミント完了',
      mint_pol_balance: 'POL 残高',
      mint_donate_points: '寄付ポイント',
      mint_need_points: '必要ポイント',
      mint_no_points_needed: 'ポイント不要',
      mint_creator_only_label: 'Creator/Owner 限定',
      mint_creator_only: 'このコントラクトは Creator/Owner のみミント可能です',
      mint_creator_only_detail: 'Creator 限定: あなたは登録 Creator ({creator}) ではありません',
      mint_you_are_creator: 'あなたは登録 Creator です — ミント可能',
      mint_you_are_owner: 'あなたは Owner です — ミント可能',
      mint_admin_override: 'Admin 権限でミント可能',
      mint_open: '誰でもミント可能',
      mint_open_label: 'オープン',
      mint_insufficient_points: 'ポイント不足（必要: {need} pt / 所持: {have} pt）',
      mint_mintable: 'ミント可能',
      mint_no_permission: 'Admin または Creator 権限が必要です',

      // Setting - Proxy Donate
      proxy_title: '代理寄付 & NFT送信',
      proxy_desc: 'お客様の代わりに寄付（ガスキャッシュバック付き）とNFT送信を一括処理します。',
      proxy_step1: '1. お客様のウォレットアドレス',
      proxy_step2: '2. 送信するNFTを選択',
      proxy_step3: '3. 寄付額 (POL)',
      proxy_step4: '4. ガスキャッシュバック',
      proxy_step5: '5. 詳細 / メモ',
      proxy_loading_nfts: 'NFTを読み込み中...',
      proxy_no_nfts: 'NFTが見つかりません。',
      proxy_select_nft: '-- NFTを選択 --',
      proxy_custom_amount: 'カスタム金額',
      proxy_memo_placeholder: 'お客様名、購入詳細など',
      proxy_breakdown: '内訳',
      proxy_total_sent: '送金額',
      proxy_gas_cashback: 'ガスキャッシュバック',
      proxy_donation_points: '寄付（ポイント）',
      proxy_admin: '管理者',
      proxy_treasury: 'トレジャリー',
      proxy_customer: 'お客様',
      proxy_cashback: 'キャッシュバック',
      proxy_processing: '処理中...',
      proxy_history: '代理寄付履歴',
      proxy_select_options: '上記を入力してください',

      // Loading
      loading_nft: 'NFTを検索中...',
      loading_membership: 'メンバーシップを確認中...',
      loading_owned: '所有NFTを検索中...',
      loading_metadata: 'メタデータを取得中...',
      loading_error: 'ポートフォリオの読み込みに失敗しました: ',

      // Common
      loading: '読み込み中...',
      error: 'エラーが発生しました。',
      copy: 'コピー',
      copied: 'コピーしました！',
    },
    en: {
      // Navigation
      nav_top: 'Home',
      nav_artists: 'Artists',
      nav_company: 'About',
      nav_discord: 'Discord',
      nav_meta: 'Usage History',
      nav_donate: 'Donate',
      nav_mypage: 'My Page',

      // Wallet
      connect_wallet: 'Connect Wallet',
      connecting: 'Connecting...',
      disconnect: 'Disconnect',
      connect_own: 'Connect with your wallet',
      wallet_prompt: 'Connect your wallet to view your Bizen-yaki NFT collection.',

      // Account
      owned_nft: 'Owned NFTs',
      artists: 'Artists',
      no_nft: 'You don\'t own any Bizen-yaki NFTs yet.',
      view_artists: 'View Artists',
      sbt_badge: 'SBT',
      progress: 'Progress',

      // Token
      send: 'Send',
      burn: 'Burn',
      cancel: 'Cancel',
      confirm: 'Confirm',
      close: 'Close',
      tba_title: 'Hakogaki (TBA)',
      tba_hakogaki: 'TBA (Hakogaki)',
      unit_pieces: ' pcs',
      tba_empty: 'No Hakogaki for this NFT yet.',
      attributes: 'Attributes',
      owner: 'Owner',
      send_to: 'Recipient Address',
      send_confirm: 'Send to {dest}?',
      burn_confirm: 'This will permanently burn (destroy) this NFT. This action CANNOT be undone. Are you absolutely sure?',

      // Donation
      donate: 'Donate',
      donate_title: 'Donation',
      donate_amount: 'Donation Amount',
      donate_history: 'Your Donation History',
      total_donated: 'Total Donated',
      total_used: 'Total Used Points',
      current_balance: 'Current Balance',
      total_donors: 'Total Donors',
      donate_prompt: 'Support BizenDAO\'s activities with a donation.',
      donate_subtitle: 'Preserving Bizen-yaki culture and sharing it with the world through digital technology.<br>Your donation supports the DAO\'s activities.',
      donate_mission: 'BizenDAO is a community that preserves and promotes the traditional culture of Bizen-yaki through blockchain technology. Through supporting artists\' NFT works, provenance certification via Hakogaki (SBT), and metadata permanence (Arweave), we connect the value of Bizen-yaki to the next generation. Donations are used for artist support, infrastructure maintenance, and community operations.',
      donate_thanks: 'Thank you!',
      view_on_polygonscan: 'View on Polygonscan',
      connect_to_donate: 'Connect wallet to donate',
      no_metamask: 'MetaMask is not installed.',
      install_metamask: 'Install MetaMask',
      custom_amount: 'Custom amount',
      message_optional: 'Message (optional)',
      message_placeholder: 'Your support message',
      donate_button: 'Donate {amount} POL',
      no_history: 'No donation history yet',

      // Disconnect
      disconnect_title: 'Disconnect Wallet',
      disconnect_sbt_warn: 'You hold an SBT. Please burn it before disconnecting.',
      disconnect_confirm: 'Are you sure you want to disconnect?',
      disconnect_done: 'Disconnection complete',
      discord_disconnected: 'Discord account has been disconnected.',
      dc_current_status: 'Current Status',
      dc_member_sbt: 'Member SBT',
      dc_owned: 'Owned',
      dc_none: 'None',
      dc_not_linked: 'Not linked',
      dc_burn_title: 'Burn Member Card',
      dc_burn_desc: 'You need to burn your Member Card (SBT) before disconnecting your wallet.',
      dc_burn_link: 'Open your Member Card SBT and burn it here',
      dc_disconnect_title: 'Disconnect Discord',
      dc_disconnect_desc: 'This will disconnect your wallet.',
      dc_disconnect_warn: 'This action cannot be undone. To re-link, run the /regist command on Discord.',
      dc_processing: 'Processing...',
      dc_registerable: 'Available',
      dc_registerable_desc: 'is available for registration.',
      dc_regist_prompt: 'Please run the /regist command on Discord.',
      dc_check_failed: 'Failed to check status',
      dc_disconnect_failed: 'Failed to disconnect',

      // Register
      register_title: 'Link Wallet',
      register_desc: 'Link your Discord account with your wallet address.',
      register_done: 'Registration complete!',
      regist_desc: 'Link your Discord account with your wallet address.<br>Enter the SECRET obtained by running the <strong>/regist</strong> command on Discord.',
      regist_secret_placeholder: 'SECRET code',
      regist_failed: 'Registration failed',

      // Settings
      setting_admin: 'Admin Settings',
      setting_creator: 'Artist Settings',
      setting_contract: 'Contract Settings',
      setting_proxy_donate: 'Proxy Donate',
      add: 'Add',
      remove: 'Remove',
      save: 'Save',
      visibility: 'Show/Hide',
      admin_only: 'Admin access only.',

      // Token page
      token_contract_addr: 'NFT Contract Address',
      token_id_optional: 'Token ID (optional)',
      token_fetch: 'Fetch NFT Info',

      // Donation page
      donate_support: 'Support BizenDAO',
      donate_desc: 'BizenDAO Activities',

      // Disconnect page
      connect_wallet_please: 'Please connect your wallet',
      no_metamask: 'MetaMask is not installed',
      discord_disconnected: 'Discord account has been disconnected.',

      // Register page
      register_linked: 'Your wallet and Discord have been linked.',
      back_to_top: 'Back to Home',
      registering: 'Registering...',
      regist_discord_id: 'ID shown by Discord /regist command',
      regist_secret: 'SECRET code shown by Discord /regist command',

      // Settings
      no_admins: 'No admins registered',
      no_creators: 'No artists registered',
      no_contracts: 'No contracts registered',
      visible: 'Visible',
      hidden: 'Hidden',
      edit: 'Edit',
      contract_list: 'Contract List',
      add_contract: 'Add Contract',
      edit_contract: 'Edit Contract',
      address: 'Address',
      name_label: 'Name',
      type_label: 'Type',
      update: 'Update',
      add: 'Add',
      config_diff_title: 'config.js / Manager Discrepancy',
      config_only_label: 'config.js only',
      manager_only_label: 'Manager only',
      config_only_msg: 'In config.js but not registered in Manager',
      manager_only_msg: 'Registered in Manager but not in config.js',
      contract_updated: 'Contract info updated',
      contract_added: 'Contract added',
      contract_deleted: 'Contract deleted',
      contract_public: 'Set to visible',
      contract_hidden_done: 'Set to hidden',
      confirm_delete_contract: ' — delete this contract?',
      contract_name_placeholder: 'Contract name',

      // UI Common
      logo_alt: 'Logo',
      toggle_menu: 'Toggle menu',
      site_menu: 'Site menu',
      view_on_polygonscan: 'View on PolygonScan',
      description: 'Description',
      contract_info: 'Contract Info',
      view_3d: 'View 3D Model',
      show_sample: 'Show Sample NFT',
      clear: 'Clear',
      searching: 'Searching...',
      unregistered_address: 'Unregistered address',
      send_nft: 'Send NFT',
      token_id_placeholder: 'Enter a specific Token ID',
      status_connected: 'Connected',
      status_loaded: 'Loaded',
      sending: 'Sending...',

      // Transaction
      tx_invalid_address: 'Invalid address',
      tx_sending: 'Sending transaction...',
      tx_sent: 'Sent successfully!',
      tx_burning: 'Sending burn transaction...',
      tx_burned: 'Burn complete',
      tx_cancelled: 'Cancelled',
      donate_failed: 'Donation failed',

      // Mint
      mint_subtitle: 'Mint new NFT tokens to any address',
      mint_select_contract: 'Select Contract',
      mint_to: 'Mint To',
      mint_to_self: 'Self',
      mint_loading_meta: 'Loading metadata...',
      mint_button: 'Mint',
      mint_minting: 'Minting...',
      mint_success: 'Mint Complete',
      mint_pol_balance: 'POL Balance',
      mint_donate_points: 'Donate Points',
      mint_need_points: 'Required Points',
      mint_no_points_needed: 'No points required',
      mint_creator_only_label: 'Creator/Owner only',
      mint_creator_only: 'This contract is restricted to Creator/Owner',
      mint_creator_only_detail: 'Creator only: you are not the registered Creator ({creator})',
      mint_you_are_creator: 'You are the registered Creator — mintable',
      mint_you_are_owner: 'You are the Owner — mintable',
      mint_admin_override: 'Admin override — mintable',
      mint_open: 'Open to everyone — mintable',
      mint_open_label: 'Open',
      mint_insufficient_points: 'Insufficient points (need: {need} pt / have: {have} pt)',
      mint_mintable: 'Mintable',
      mint_no_permission: 'Admin or Creator permission required',

      // Setting - Proxy Donate
      proxy_title: 'Proxy Donate & NFT Transfer',
      proxy_desc: 'Process a customer purchase: donate on their behalf (with gas cashback) and send the NFT in one step.',
      proxy_step1: '1. Customer Wallet Address',
      proxy_step2: '2. Select NFT to send',
      proxy_step3: '3. Donation Amount (POL)',
      proxy_step4: '4. Gas Cashback',
      proxy_step5: '5. Detail / Memo',
      proxy_loading_nfts: 'Loading your NFTs...',
      proxy_no_nfts: 'No NFTs found.',
      proxy_select_nft: '-- Select NFT --',
      proxy_custom_amount: 'Custom amount',
      proxy_memo_placeholder: 'Customer name, purchase details, etc.',
      proxy_breakdown: 'Breakdown',
      proxy_total_sent: 'Total Sent',
      proxy_gas_cashback: '− Gas Cashback',
      proxy_donation_points: '= Donation (Points)',
      proxy_admin: 'Admin',
      proxy_treasury: 'Treasury',
      proxy_customer: 'Customer',
      proxy_cashback: 'cashback',
      proxy_processing: 'Processing...',
      proxy_history: 'Proxy Donation History',
      proxy_select_options: 'Select options above',

      // Loading
      loading_nft: 'Searching NFTs...',
      loading_membership: 'Checking membership...',
      loading_owned: 'Searching owned NFTs...',
      loading_metadata: 'Fetching metadata...',
      loading_error: 'Failed to load portfolio: ',

      // Common
      loading: 'Loading...',
      error: 'An error occurred.',
      copy: 'Copy',
      copied: 'Copied!',
    }
  };

  /**
   * Get translated string
   * @param {string} key
   * @returns {string}
   */
  function t(key) {
    return (T[LANG] && T[LANG][key]) || T.ja[key] || key;
  }

  /**
   * Get current language
   * @returns {string} 'ja' or 'en'
   */
  function getLang() {
    return LANG;
  }

  /**
   * Get content page base path (relative to dapp/)
   * @returns {string} '../ja' or '../en'
   */
  function contentBase() {
    return '../' + LANG;
  }

  /**
   * Append ?lang= to a dapp-internal URL
   * @param {string} url
   * @returns {string}
   */
  function dappLink(url) {
    var sep = url.indexOf('?') === -1 ? '?' : '&';
    return url + sep + 'lang=' + LANG;
  }

  /**
   * Apply translations to all [data-i18n] elements
   */
  function applyTranslations() {
    var elems = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elems.length; i++) {
      var key = elems[i].getAttribute('data-i18n');
      if (key) {
        elems[i].textContent = t(key);
      }
    }

    // Update data-i18n-placeholder
    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < placeholders.length; j++) {
      var pkey = placeholders[j].getAttribute('data-i18n-placeholder');
      if (pkey) {
        placeholders[j].placeholder = t(pkey);
      }
    }
  }

  /**
   * Update navigation links for current language
   * Rewrites href on links with [data-nav] attribute
   */
  function applyNavLinks() {
    var base = contentBase();
    var navMap = {
      'top': base + '/index.html',
      'artists': base + '/artist-list.html',
      'company': base + '/index.html#company',
      'discord': base + '/index.html#discord',
      'meta': base + '/index.html#meta',
      'bizenyaki': base + '/bizenyaki.html',
    };

    var links = document.querySelectorAll('[data-nav]');
    for (var i = 0; i < links.length; i++) {
      var nav = links[i].getAttribute('data-nav');
      if (navMap[nav]) {
        links[i].href = navMap[nav];
      }
    }

    // dapp-internal links: append ?lang=
    var dappLinks = document.querySelectorAll('[data-dapp]');
    for (var j = 0; j < dappLinks.length; j++) {
      var href = dappLinks[j].getAttribute('data-dapp');
      if (href) {
        dappLinks[j].href = dappLink(href);
      }
    }
  }

  // Auto-apply on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyTranslations();
      applyNavLinks();
    });
  } else {
    applyTranslations();
    applyNavLinks();
  }

  // Export globals
  window.i18n = {
    t: t,
    lang: getLang,
    contentBase: contentBase,
    dappLink: dappLink,
    apply: applyTranslations
  };
})();
