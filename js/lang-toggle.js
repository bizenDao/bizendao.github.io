/**
 * BizenDAO Language Toggle
 * 
 * Handles EN/JP switching for both content pages (ja/ ↔ en/)
 * and dapp pages (?lang=ja ↔ ?lang=en)
 * 
 * Include this script in all pages. It auto-detects page type
 * from the URL path.
 */
(function () {
  'use strict';

  var path = window.location.pathname;
  var search = window.location.search;
  var hash = window.location.hash;

  /**
   * Detect current language
   * - Content pages: from path (/ja/ or /en/)
   * - Dapp pages: from ?lang= param
   */
  function detectLang() {
    if (/\/ja\//.test(path)) return 'ja';
    if (/\/en\//.test(path)) return 'en';
    var params = new URLSearchParams(search);
    return params.get('lang') || 'ja';
  }

  /**
   * Get the URL for the opposite language
   */
  function getToggleUrl() {
    var current = detectLang();
    var target = current === 'ja' ? 'en' : 'ja';

    // Content pages: swap /ja/ ↔ /en/ in path
    if (/\/(ja|en)\//.test(path)) {
      return path.replace(/\/(ja|en)\//, '/' + target + '/') + search + hash;
    }

    // Dapp pages: swap ?lang= param
    var params = new URLSearchParams(search);
    params.set('lang', target);
    return path + '?' + params.toString() + hash;
  }

  /**
   * Update button label to show current state
   */
  function updateButton(btn) {
    var current = detectLang();
    btn.textContent = current === 'ja' ? 'EN' : 'JP';
    btn.title = current === 'ja' ? 'Switch to English' : '日本語に切り替え';
  }

  // Bind click handlers on DOMContentLoaded
  function init() {
    var buttons = document.querySelectorAll('.lang-toggle');
    for (var i = 0; i < buttons.length; i++) {
      updateButton(buttons[i]);
      buttons[i].addEventListener('click', function () {
        window.location.href = getToggleUrl();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
