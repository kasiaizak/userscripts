// ==UserScript==
// @name         Photopea Hide Ads
// @namespace    https://kasiaizak.github.io/userscripts/
// @version      2.2
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

    hideAds('.photopea.flexrow {overflow: hidden;}');
    hideAds('.photopea.flexrow > div:nth-of-type(2)[style] {display: none !important;}');
    hideAds('.photopea.flexrow > div:nth-of-type(1) {flex-basis: 100%;max-width:100vw;box-sizing: border-box;}');
    hideAds('.photopea.flexrow > div:nth-of-type(1) > div:nth-of-type(3)[style] {width: 100% !important;}');
    hideAds('.photopea.flexrow > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) {display: initial !important;}');
    hideAds('.photopea.flexrow > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(2)[style] {width:100% !important;}');
    hideAds('.photopea.flexrow > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(2) > div.confbar {width: 100%;}');
    hideAds('.photopea.flexrow > div:nth-of-type(1) > div.flexrow > div.sbar.toolbar[style] {overflow: initial !important;max-width: 4vw;box-sizing: border-box;}');
    hideAds('.photopea.flexrow > div:nth-of-type(1) > div.flexrow > div.panelblock.mainblock {width: 74vw;box-sizing: border-box;}');
    hideAds('.photopea.flexrow > div:nth-of-type(1) > div.flexrow > div.panelblock.mainblock > div.block > div:nth-of-type(2)[style] {width: auto !important;}');
    hideAds('.photopea.flexrow > div:nth-of-type(1) > div.flexrow > div.panelblock.mainblock > div.block > div.panelhead[style] {max-width: 100% !important;}');
    hideAds('.photopea.flexrow > div:nth-of-type(1) > div.flexrow > div.panelblock.mainblock > div.block > div:nth-of-type(2) > div.pbody > canvas[style] {width: 100% !important;}');
    hideAds('.photopea.flexrow > div:nth-of-type(1) > div.flexrow > div.rightbar {max-width: 31vw;box-sizing: border-box;}');
})();
