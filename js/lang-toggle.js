/**
 * BizenDAO Language Toggle
 *
 * EN / JP / FR links — active language is white, inactive is gray.
 * Works for both content pages (jp/ ↔ en/ ↔ fr/) and dapp pages (?lang=).
 * Content pages also append ?lang=XX to the URL.
 */
(function () {
  'use strict';

  var path = window.location.pathname;
  var search = window.location.search;
  var hash = window.location.hash;

  function detectLang() {
    if (/\/jp\//.test(path)) return 'jp';
    if (/\/en\//.test(path)) return 'en';
    if (/\/fr\//.test(path)) return 'fr';
    var params = new URLSearchParams(search);
    return params.get('lang') || 'jp';
  }

  function getUrl(targetLang) {
    // Content pages: swap /jp/ ↔ /en/ ↔ /fr/ and append ?lang=XX
    if (/\/(jp|en|fr)\//.test(path)) {
      var newPath = path.replace(/\/(jp|en|fr)\//, '/' + targetLang + '/');
      return newPath + '?lang=' + targetLang + hash;
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
