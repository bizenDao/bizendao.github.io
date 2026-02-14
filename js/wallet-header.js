// =================================================
// wallet-header.js — 共通ウォレットヘッダーコンポーネント
// config.js, wallet.js, nft.js, i18n.js 必須
// =================================================

const WalletHeader = {
  template: `
    <div class="wh-container">
      <div class="wh-row">
        <span class="wh-address" @click="copyEoa" :title="address" style="cursor:pointer;">
          {{ nickname || shortAddr }} <span v-if="nicknameLoading" class="nickname-spinner"></span>
        </span>
        <div class="wh-right">
          <a v-if="userType === 'admin'" :href="settingLink" class="wh-role wh-role-admin">admin</a>
          <a v-else-if="userType === 'creator'" :href="settingLink" class="wh-role wh-role-creator">creator</a>
          <span v-if="showBalance" class="wh-balance">{{ balance }} POL</span>
        </div>
      </div>
    </div>
  `,

  props: {
    address: { type: String, default: '' },
    nickname: { type: String, default: null },
    nicknameLoading: { type: Boolean, default: false },
    userType: { type: String, default: 'user' },
    balance: { type: String, default: null },
    showBalance: { type: Boolean, default: false },
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
    }

    .wh-balance {
      font-size: 13px;
      opacity: 0.7;
      font-family: monospace;
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
  `;
  document.head.appendChild(style);
})();
