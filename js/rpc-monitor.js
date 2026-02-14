// =================================================
// rpc-monitor.js — RPC接続状況モニタ
// 半透明オーバーレイで問い合わせ状況を表示
// =================================================

const RPCMonitor = {
  _el: null,
  _count: 0,        // アクティブなコール数
  _startTime: 0,
  _timerId: null,
  _showTimer: null,
  _hideTimer: null,
  _method: '',
  _detail: '',

  SHOW_DELAY: 300,   // 0.3秒後に表示（短いコールはスキップ）
  HIDE_DELAY: 400,   // フェードアウト時間

  // コール開始
  show(method, detail) {
    this._count++;
    this._method = method || '';
    this._detail = detail || '';

    // hideタイマーがあればキャンセル
    if (this._hideTimer) {
      clearTimeout(this._hideTimer);
      this._hideTimer = null;
    }

    // ログ記録
    this._addLog(method || 'RPC', detail || '', 'pending');

    // 既に表示中なら内容更新のみ
    if (this._el && this._el.classList.contains('rpc-mon--visible')) {
      this._updateContent();
      return;
    }

    // 初回開始時刻
    if (this._count === 1) this._startTime = Date.now();

    // 遅延表示
    if (this._showTimer) clearTimeout(this._showTimer);
    this._showTimer = setTimeout(() => {
      this._create();
      this._updateContent();
      requestAnimationFrame(() => {
        if (this._el) this._el.classList.add('rpc-mon--visible');
      });
      // 経過時間更新タイマー
      this._timerId = setInterval(() => this._updateContent(), 100);
    }, this.SHOW_DELAY);
  },

  // コール終了
  hide() {
    this._count = Math.max(0, this._count - 1);
    if (this._count > 0) return;

    // showタイマーがまだ発火してなければキャンセル
    if (this._showTimer) {
      clearTimeout(this._showTimer);
      this._showTimer = null;
    }

    // 最後のログエントリを完了にする
    for (let i = this._log.length - 1; i >= 0; i--) {
      if (this._log[i].status === 'pending') { this._log[i].status = 'done'; break; }
    }

    // pinned mode: 消さずにアイドル表示に切替
    if (this._pinned) {
      this._updateContent();
      return;
    }

    if (this._timerId) {
      clearInterval(this._timerId);
      this._timerId = null;
    }

    if (this._el) {
      this._el.classList.remove('rpc-mon--visible');
      this._el.classList.add('rpc-mon--hiding');
      this._hideTimer = setTimeout(() => {
        if (this._el) {
          this._el.remove();
          this._el = null;
        }
      }, this.HIDE_DELAY);
    }
  },

  _create() {
    if (this._el) return;
    const el = document.createElement('div');
    el.className = 'rpc-mon';
    el.innerHTML = `
      <div class="rpc-mon__inner">
        <div class="rpc-mon__spinner"></div>
        <div class="rpc-mon__text">
          <div class="rpc-mon__status"></div>
          <div class="rpc-mon__detail"></div>
        </div>
      </div>`;
    document.body.appendChild(el);
    this._el = el;
  },

  // 常時表示モード
  _pinned: false,
  _log: [],          // RPCコールログ
  _logMax: 50,

  // コンソールから: disp('rpcmonitor')
  pin() {
    this._pinned = true;
    this._startTime = this._startTime || Date.now();
    this._create();
    this._el.classList.add('rpc-mon--visible', 'rpc-mon--pinned');
    this._updateContent();
    if (!this._timerId) {
      this._timerId = setInterval(() => this._updateContent(), 1000);
    }
    console.log('%c[RPCMonitor] Pinned — always visible. Use hide() or disp("rpcmonitor") to toggle off.', 'color:#7eb8f7');
  },

  unpin() {
    this._pinned = false;
    if (this._count === 0) {
      if (this._timerId) { clearInterval(this._timerId); this._timerId = null; }
      if (this._el) {
        this._el.classList.remove('rpc-mon--visible', 'rpc-mon--pinned');
        this._el.classList.add('rpc-mon--hiding');
        setTimeout(() => { if (this._el && !this._pinned) { this._el.remove(); this._el = null; } }, this.HIDE_DELAY);
      }
    }
    console.log('%c[RPCMonitor] Unpinned.', 'color:#7eb8f7');
  },

  // ログ追加
  _addLog(method, detail, status) {
    const entry = { time: new Date().toISOString().slice(11, 23), method, detail, status };
    this._log.push(entry);
    if (this._log.length > this._logMax) this._log.shift();
    return entry;
  },

  // コンソールからログ確認
  logs() {
    if (this._log.length === 0) { console.log('No RPC calls logged.'); return; }
    console.table(this._log);
  },

  _updateContent() {
    if (!this._el) return;
    const status = this._el.querySelector('.rpc-mon__status');
    const detail = this._el.querySelector('.rpc-mon__detail');

    if (this._count > 0) {
      const elapsed = ((Date.now() - this._startTime) / 1000).toFixed(1);
      if (status) status.textContent = `Querying blockchain... ${elapsed}s`;
      if (detail) {
        const parts = [];
        if (this._method) parts.push(this._method);
        if (this._detail) parts.push(this._detail);
        if (this._count > 1) parts.push(`(${this._count} active)`);
        detail.textContent = parts.join(' — ');
      }
    } else if (this._pinned) {
      // 常時表示: アイドル状態
      const last = this._log[this._log.length - 1];
      if (status) status.textContent = 'RPC Monitor — Idle';
      if (detail) detail.textContent = last ? `Last: ${last.method} ${last.status}` : 'Waiting for calls...';
    }
  },
};

// ── Console command: disp('rpcmonitor') ──
window.disp = function(target) {
  if (target === 'rpcmonitor' || target === 'rpc') {
    if (RPCMonitor._pinned) RPCMonitor.unpin();
    else RPCMonitor.pin();
  } else {
    console.log('Available: disp("rpcmonitor") or disp("rpc")');
  }
};

// ── CSS injection ──
(function() {
  const style = document.createElement('style');
  style.textContent = `
.rpc-mon {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  z-index: 10000;
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s ease, transform .3s ease;
}
.rpc-mon--visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}
.rpc-mon--hiding {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}
.rpc-mon__inner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: rgba(17, 19, 24, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  max-width: 420px;
}
.rpc-mon__spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-top-color: #7eb8f7;
  border-radius: 50%;
  animation: rpc-spin .8s linear infinite;
  flex-shrink: 0;
}
@keyframes rpc-spin {
  to { transform: rotate(360deg); }
}
.rpc-mon__status {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
}
.rpc-mon__detail {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.45);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
}
@media (max-width: 480px) {
  .rpc-mon__inner { max-width: calc(100vw - 32px); padding: 10px 16px; }
  .rpc-mon__detail { max-width: 200px; }
}
`;
  document.head.appendChild(style);
})();
