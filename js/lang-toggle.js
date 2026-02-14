/**
 * BizenDAO Language Toggle
 * 
 * EN / JP links — active language is white, inactive is gray.
 * Works for both content pages (ja/ ↔ en/) and dapp pages (?lang=).
 */
(function () {
  'use strict';

  var path = window.location.pathname;
  var search = window.location.search;
  var hash = window.location.hash;

  function detectLang() {
    if (/\/ja\//.test(path)) return 'ja';
    if (/\/en\//.test(path)) return 'en';
    var params = new URLSearchParams(search);
    return params.get('lang') || 'ja';
  }

  function getUrl(targetLang) {
    // Content pages: swap /ja/ ↔ /en/
    if (/\/(ja|en)\//.test(path)) {
      return path.replace(/\/(ja|en)\//, '/' + targetLang + '/') + search + hash;
    }
    // Dapp pages: swap ?lang= param
    var params = new URLSearchParams(search);
    params.set('lang', targetLang);
    return path + '?' + params.toString() + hash;
  }

  function init() {
    var current = detectLang();
    var buttons = document.querySelectorAll('.lang-btn');

    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var lang = btn.getAttribute('data-lang');

      // Set href
      btn.href = getUrl(lang);

      // Active state
      if (lang === current) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
