// ==UserScript==
// @name         Resizer for LastPass
// @namespace    https://kasiaizak.github.io/userscripts/
// @version      1.1
// @description  Changes the maximum width of the Edit Identity Popup
// @author       Kasia Izak
// @match        https://*.lastpass.com/*
// @updateURL    https://raw.githubusercontent.com/kasiaizak/userscripts/master/lastpass-resizer.user.js
// @downloadURL  https://raw.githubusercontent.com/kasiaizak/userscripts/master/lastpass-resizer.user.js
// @homepageURL  https://kasiaizak.github.io/userscripts/#resizer-for-lastpass
// ==/UserScript==

(function() {
    'use strict';

    function panelResizer(css) {
        const head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
    panelResizer('#identityDialog.dialog.responsive {max-width: 90vw;}');
})();