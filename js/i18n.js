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
      connect_wallet: '🦊 ウォレットを接続',
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
      tba_empty: 'このNFTにはまだ箱書がありません。',
      attributes: '属性',
      owner: '所有者',
      send_to: '送り先アドレス',
      send_confirm: 'このNFTを送信しますか？',
      burn_confirm: 'このNFTを燃焼（削除）しますか？この操作は取り消せません。',

      // Donation
      donate: '寄付する',
      donate_title: '寄付',
      donate_amount: '寄付額',
      donate_history: '寄付履歴',
      total_donated: '累計寄付額',
      total_donors: '寄付者数',
      donate_prompt: 'BizenDAOの活動を寄付で応援しましょう。',

      // Disconnect
      disconnect_title: 'アカウント切断',
      disconnect_sbt_warn: 'SBTを保有しています。切断前にSBTをBurnしてください。',
      disconnect_confirm: 'Discord連携を解除しますか？',
      disconnect_done: 'Discord連携を解除しました。',

      // Register
      register_title: 'Discord連携',
      register_desc: 'Discordアカウントとウォレットアドレスをリンクします。',
      register_done: '登録完了！',

      // Settings
      setting_admin: '管理者設定',
      setting_creator: '作家設定',
      setting_contract: 'コントラクト設定',
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
      connect_wallet: '🦊 Connect Wallet',
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
      tba_empty: 'No Hakogaki for this NFT yet.',
      attributes: 'Attributes',
      owner: 'Owner',
      send_to: 'Recipient Address',
      send_confirm: 'Send this NFT?',
      burn_confirm: 'Burn (destroy) this NFT? This action cannot be undone.',

      // Donation
      donate: 'Donate',
      donate_title: 'Donation',
      donate_amount: 'Amount',
      donate_history: 'Donation History',
      total_donated: 'Total Donated',
      total_donors: 'Total Donors',
      donate_prompt: 'Support BizenDAO\'s activities with a donation.',

      // Disconnect
      disconnect_title: 'Disconnect Account',
      disconnect_sbt_warn: 'You hold an SBT. Please burn it before disconnecting.',
      disconnect_confirm: 'Disconnect your Discord account?',
      disconnect_done: 'Discord account disconnected.',

      // Register
      register_title: 'Discord Link',
      register_desc: 'Link your Discord account with your wallet address.',
      register_done: 'Registration complete!',

      // Settings
      setting_admin: 'Admin Settings',
      setting_creator: 'Artist Settings',
      setting_contract: 'Contract Settings',
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
