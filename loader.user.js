// ==UserScript==
// @name         Fencord Loader
// @namespace    fencord
// @version      1
// @description  Loads Fencord from GitHub automatically
// @match        https://fenrid.com/*
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/fencord/fencord-site/main/loader.user.js
// @downloadURL  https://raw.githubusercontent.com/fencord/fencord-site/main/loader.user.js
// ==/UserScript==

(function () {
  const s = document.createElement('script');
  s.src = 'https://raw.githubusercontent.com/fencord/fencord/main/fencord.user.js';
  document.documentElement.appendChild(s);
})();
