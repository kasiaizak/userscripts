// ==UserScript==
// @name         Photopea Hide Ads
// @namespace    https://kasiaizak.github.io/userscripts/
// @version      1.2
// @description  Hide Ads on Photopea
// @author       Kasia Izak
// @match        *www.photopea.com/*
// @icon         https://www.photopea.com/promo/thumb256.png
// @updateURL    https://raw.githubusercontent.com/kasiaizak/userscripts/master/photopea-hide-ads.user.js
// @downloadURL  https://raw.githubusercontent.com/kasiaizak/userscripts/master/photopea-hide-ads.user.js
// @homepageURL  https://kasiaizak.github.io/userscripts/#photopea-hide-ads
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

    hideAds('.photopea.flexrow > div:nth-of-type(2)[style] {display: none !important;}');
})();
