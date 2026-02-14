// =================================================
// manager.js — Manager コントラクト操作共通モジュール
// config.js, wallet.js 必須
// =================================================

const Manager = {
  // Read用コントラクト（RPC直接）
  _readContract: null,
  getReadContract() {
    if (!this._readContract) {
      const web3 = NFTHelper.getWeb3();
      this._readContract = new web3.eth.Contract(ABI.Manager, CONFIG.contracts.manager.address);
    }
    return this._readContract;
  },

  // Write用コントラクト（MetaMask経由）
  async getWriteContract() {
    const web3 = new Web3(window.ethereum);
    return new web3.eth.Contract(ABI.Manager, CONFIG.contracts.manager.address);
  },

  // ── Read ──

  // ユーザー種別: "admin" | "creator" | "user" | "none"
  async checkUser() {
    try {
      const contract = await this.getWriteContract();
      const result = await contract.methods.checkUser().call({ from: Wallet.getAddress() });
      return result || 'none';
    } catch (e) {
      console.warn('checkUser error:', e);
      return 'none';
    }
  },

  // Admin一覧
  async getAdmins() {
    try {
      const contract = this.getReadContract();
      const result = await contract.methods.getAdmins().call();
      return result[0] || [];
    } catch (e) {
      console.error('getAdmins error:', e);
      return [];
    }
  },

  // コントラクト一覧 → [{address, name, type, visible}]
  async getAllContracts() {
    try {
      const contract = this.getReadContract();
      const result = await contract.methods.getAllContracts().call();
      const list = [];
      for (let i = 0; i < result[0].length; i++) {
        list.push({
          address: result[0][i],
          name: result[1][i],
          type: result[2][i],
          visible: result[3][i],
        });
      }
      return list;
    } catch (e) {
      console.error('getAllContracts error:', e);
      return [];
    }
  },

  // 作家一覧 → [{address, name, type, visible}]
  async getAllCreators() {
    try {
      const contract = this.getReadContract();
      const result = await contract.methods.getAllCreators().call();
      const list = [];
      for (let i = 0; i < result[0].length; i++) {
        list.push({
          address: result[0][i],
          name: result[1][i],
          type: result[2][i],
          visible: result[3][i],
        });
      }
      return list;
    } catch (e) {
      console.error('getAllCreators error:', e);
      return [];
    }
  },

  // ── Write (tx) ──

  async sendTx(methodName, args) {
    const contract = await this.getWriteContract();
    const from = Wallet.getAddress();
    const gasParams = await Wallet.getGasParams();
    return contract.methods[methodName](...args).send({ from, ...gasParams });
  },

  // Admin
  async setAdmin(address) { return this.sendTx('setAdmin', [address]); },
  async delAdmin(address) { return this.sendTx('delAdmin', [address]); },

  // Creator
  async setCreator(address, name, type) { return this.sendTx('setCreator', [address, name, type]); },
  async setCreatorInfo(address, name, type) { return this.sendTx('setCreatorInfo', [address, name, type]); },
  async delCreator(address) { return this.sendTx('delCreator', [address]); },
  async hiddenCreator(address) { return this.sendTx('hiddenCreator', [address]); },
  async publicCreator(address) { return this.sendTx('publicCreator', [address]); },

  // ── Utility: コントラクト一覧をリッチ情報付きで取得 ──
  // Returns [{address, name, type, visible, symbol, contractName}]
  async getContractsWithMeta() {
    const contracts = await this.getAllContracts();
    const web3 = NFTHelper.getWeb3();
    const results = [];
    for (const c of contracts) {
      let symbol = '';
      let contractName = c.name;
      try {
        const contract = new web3.eth.Contract(ABI.ERC721, c.address);
        symbol = await contract.methods.symbol().call();
        contractName = await contract.methods.name().call();
      } catch (e) { /* skip */ }

      // Parse i18n name JSON
      let nameJa = c.name, nameEn = c.name;
      try {
        const parsed = JSON.parse(c.name);
        nameJa = parsed.ja || c.name;
        nameEn = parsed.en || c.name;
      } catch (e) { /* plain string, use as-is */ }

      results.push({
        address: c.address,
        name: nameJa,
        nameEn: nameEn,
        nameRaw: c.name,
        type: c.type,
        visible: c.visible,
        symbol,
        contractName,
      });
    }
    return results;
  },

  // name の i18n パースヘルパー
  parseName(name) {
    try {
      const obj = JSON.parse(name);
      return obj;
    } catch (e) {
      return { ja: name, en: name };
    }
  },

  // 言語に応じた名前を返す
  getLocalizedName(name) {
    const parsed = this.parseName(name);
    const lang = window.i18n ? window.i18n.lang() : 'ja';
    return lang === 'en' ? (parsed.en || parsed.ja || name) : (parsed.ja || parsed.en || name);
  },

  // Contract
  async setContract(address, name, type) { return this.sendTx('setContract', [address, name, type]); },
  async setContractInfo(address, name, type) { return this.sendTx('setContractInfo', [address, name, type]); },
  async deleteContract(address) { return this.sendTx('deleteContract', [address]); },
  async hiddenContract(address) { return this.sendTx('hiddenContract', [address]); },
  async publicContract(address) { return this.sendTx('publicContract', [address]); },
};
