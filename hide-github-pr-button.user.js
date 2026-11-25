// ==UserScript==
// @name         Hide PR message on GitHub
// @namespace    https://kasiaizak.github.io/userscripts/
// @version      1.0.2
// @description  Hide 'Compare & pull request' button on GitHub
// @author       Kasia Izak
// @match        https://github.com/*
// @icon         https://kasiaizak.github.io/userscripts/img/github.png
// @updateURL    https://github.com/kasiaizak/userscripts/raw/refs/heads/master/hide-github-pr-button.user.js
// @downloadURL  https://github.com/kasiaizak/userscripts/raw/refs/heads/master/hide-github-pr-button.user.js
// @homepageURL  https://kasiaizak.github.io/userscripts/#hide-pr-message-on-github
// ==/UserScript==

(function() {
    'use strict';

    function hideButton(css) {
        const head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
    hideButton('[class^="OverviewHeader"] > [class*="RecentlyTouchedBranches"] {display: none;}');
})();