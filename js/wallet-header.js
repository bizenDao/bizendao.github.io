// =================================================
// wallet-header.js — 共通ウォレットヘッダーコンポーネント
// config.js, wallet.js, i18n.js 必須
// =================================================

const WalletHeader = {
  template: `
    <div class="wh-container">
      <div class="wh-row">
        <span class="wh-address" @click="copyEoa" :title="address" style="cursor:pointer;">
          {{ nickname || shortAddr }} <span v-if="nicknameLoading" class="nickname-spinner"></span>
        </span>
        <div class="wh-right">
          <span v-if="viewMode" class="wh-badge wh-badge-view">{{ t('view_mode') }}</span>
          <a v-if="userType === 'admin'" :href="settingLink" class="wh-role wh-role-admin">admin</a>
          <a v-else-if="userType === 'creator'" :href="settingLink" class="wh-role wh-role-creator">creator</a>
          <slot></slot>
          <button class="wh-disconnect" @click="doDisconnect" :title="t('disconnect')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <!-- プラグ側（右上） -->
              <line x1="18" y1="3" x2="18" y2="7"/>
              <line x1="21" y1="3" x2="21" y2="7"/>
              <rect x="15" y="7" width="9" height="4" rx="1"/>
              <line x1="19.5" y1="11" x2="19.5" y2="14"/>
              <!-- コンセント側（左下） -->
              <rect x="1" y="14" width="10" height="8" rx="2"/>
              <line x1="4" y1="17" x2="4" y2="19"/>
              <line x1="8" y1="17" x2="8" y2="19"/>
              <!-- 切断線 -->
              <line x1="2" y1="2" x2="15" y2="15" stroke="#ff6b6b" stroke-width="2.5"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,

  props: {
    address: { type: String, default: '' },
    nickname: { type: String, default: null },
    nicknameLoading: { type: Boolean, default: false },
    userType: { type: String, default: 'user' },
    viewMode: { type: Boolean, default: false },
    settingBase: { type: String, default: 'setting/index.html' },
  },

  computed: {
    shortAddr() {
      if (!this.address) return '';
      return this.address.slice(0, 6) + '...' + this.address.slice(-4);
    },
    settingLink() {
      return this.settingBase;
    },
  },

  methods: {
    t(key) { return window.i18n ? window.i18n.t(key) : key; },
    doDisconnect() {
      this.$emit('disconnect');
      window.location.reload();
    },
    copyEoa() {
      if (!this.address) return;
      navigator.clipboard.writeText(this.address).then(() => {
        const toast = document.createElement('div');
        toast.className = 'wh-toast';
        toast.textContent = 'Copied!';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 1500);
      });
    },
  },
};

// CSS injection
(function() {
  const style = document.createElement('style');
  style.textContent = `
    .wh-container {
      margin-bottom: 16px;
    }

    .wh-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      flex-wrap: wrap;
      gap: 8px;
    }

    .wh-address {
      font-family: monospace;
      font-size: 14px;
      transition: opacity 0.2s;
    }

    .wh-address:hover { opacity: 0.7; }

    .wh-right {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .wh-badge {
      display: inline-flex;
      align-items: center;
      padding: 3px 10px;
      border-radius: 16px;
      font-size: 12px;
    }

    .wh-badge-view {
      background: rgba(107,182,255,0.12);
      border: 1px solid rgba(107,182,255,0.3);
      color: #6bb6ff;
    }

    .wh-role {
      display: inline-flex;
      align-items: center;
      padding: 3px 10px;
      border-radius: 16px;
      font-size: 12px;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .wh-role-admin {
      background: rgba(220,50,50,0.12);
      border: 1px solid rgba(220,50,50,0.3);
      color: #ff6b6b;
    }

    .wh-role-admin:hover {
      background: rgba(220,50,50,0.25);
    }

    .wh-role-creator {
      background: rgba(255,165,0,0.12);
      border: 1px solid rgba(255,165,0,0.3);
      color: #ffaa33;
    }

    .wh-role-creator:hover {
      background: rgba(255,165,0,0.25);
    }

    .wh-disconnect {
      background: none;
      border: 1px solid rgba(255,107,107,0.2);
      border-radius: 8px;
      padding: 5px 7px;
      cursor: pointer;
      color: rgba(255,255,255,0.4);
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .wh-disconnect:hover {
      background: rgba(255,107,107,0.1);
      border-color: rgba(255,107,107,0.4);
      color: #ff6b6b;
    }

    .wh-toast {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      padding: 8px 20px;
      background: rgba(111,207,138,0.9);
      color: #1a1a2e;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      z-index: 9999;
      animation: wh-fade 1.5s ease forwards;
    }

    @keyframes wh-fade {
      0%, 70% { opacity: 1; }
      100% { opacity: 0; }
    }

    /* 共通 balance-row / balance-card スタイル */
    .balance-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 20px;
    }

    .balance-card {
      padding: 16px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      text-align: center;
    }

    .balance-value {
      font-size: 24px;
      font-weight: 700;
      font-family: monospace;
      margin-bottom: 4px;
    }

    .balance-value small {
      font-size: 14px;
      font-weight: 400;
      opacity: 0.7;
    }

    .balance-label {
      font-size: 12px;
      opacity: 0.5;
    }

    @media (max-width: 480px) {
      .balance-row {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.appendChild(style);
})();
