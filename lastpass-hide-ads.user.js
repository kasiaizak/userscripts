// ==UserScript==
// @name         LastPass Hide Ads
// @namespace    https://kasiaizak.github.io/userscripts/
// @version      1.1
// @description  Hide Ads on LastPass
// @author       Kasia Izak
// @match        https://lastpass.com/*
// @updateURL    https://raw.githubusercontent.com/kasiaizak/userscripts/master/lastpass-hide-ads.user.js
// @downloadURL  https://raw.githubusercontent.com/kasiaizak/userscripts/master/lastpass-hide-ads.user.js
// @homepageURL  https://kasiaizak.github.io/userscripts/#lastpass-hide-ads
// ==/UserScript==

(function() {
    'use strict';

    function hideAds(css) {
        const head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    hideAds('div#ad.middlePosition {display: none;}');
    hideAds('#options {width: 100%;}');
    hideAds('#main {width: 100%;}');
})();
