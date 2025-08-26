// 環境変数の型定義
declare global {
  interface Window {
    ENV: {
      HEADER_TITLE: string;
      DEFAULT_SYMBOL: string;
      DONATE_SYMBOL: string;
      API_BASE_URL: string;
      BOT_API_URL: string;
      ARTICLE_REPO: string;
      METABUILDER_URL: string;
      BC_NETWORK_ID: string;
      BC_NETWORK_NAME: string;
      RPC_URL: string;
      MANAGER_CA: string;
      MEMBERSCARD_CA: string;
      SOUL_BINDER_ROLE_ID: string;
      TBA_SALT: string;
      DISCORD_HOLDER_ROLL_ID: string;
      DISCORD_HOLDER_ROLL_NAME: string;
      CRYPTO_SECRET: string;
      SRC_VERSION: string;
    };
  }
}

// 環境変数を動的に取得するプロキシオブジェクト
export const CONST = new Proxy({} as any, {
  get(target, prop: string) {
    // デバッグ
    if (prop === 'ARTICLE_REPO') {
      console.log('[const.ts Proxy] Getting ARTICLE_REPO');
      console.log('[const.ts Proxy] window.ENV:', window.ENV);
      console.log('[const.ts Proxy] window.ENV?.ARTICLE_REPO:', window.ENV?.ARTICLE_REPO);
    }
    
    // 特別なケース
    if (prop === 'DEFAULT_CHAIN_ID') {
      return parseInt(window.ENV?.BC_NETWORK_ID || '1');
    }
    if (prop === 'CONTRACT_ADDRESS') {
      return window.ENV?.MANAGER_CA || '';
    }
    
    // window.ENVから値を取得、なければデフォルト値
    const defaults: Record<string, string> = {
      HEADER_TITLE: 'BizenDAO',
      DEFAULT_SYMBOL: 'BIZEN',
      DONATE_SYMBOL: 'dBIZ',
      API_BASE_URL: '',
      BOT_API_URL: '',
      ARTICLE_REPO: '',
      METABUILDER_URL: '',
      BC_NETWORK_ID: '1',
      BC_NETWORK_NAME: 'Ethereum Mainnet',
      RPC_URL: '',
      MANAGER_CA: '',
      MEMBERSCARD_CA: '',
      SOUL_BINDER_ROLE_ID: '1',
      TBA_SALT: '0',
      DISCORD_HOLDER_ROLL_ID: '',
      DISCORD_HOLDER_ROLL_NAME: 'Holder',
      CRYPTO_SECRET: '',
      SRC_VERSION: '1.0.0'
    };
    
    return window.ENV?.[prop] || defaults[prop] || '';
  }
});

export const SRC_VERSION = '1.0.0'; // 静的な値として定義
export default CONST;