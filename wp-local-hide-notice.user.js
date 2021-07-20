// ==UserScript==
// @name         WordPress Local Disable Notice
// @namespace    https://kasiaizak.github.io/userscripts/
// @version      1.0
// @description  Disable Notice on local domain
// @author       Kasia Izak
// @match        http://*.local/*
// @icon         https://kasiaizak.github.io/userscripts/img/wp.png
// @updateURL    https://raw.githubusercontent.com/kasiaizak/userscripts/master/wp-local-disable-notice.user.js
// @downloadURL  https://raw.githubusercontent.com/kasiaizak/userscripts/master/wp-local-disable-notice.user.js
// @homepageURL  https://kasiaizak.github.io/userscripts/#wordpress-local-disable-notice
// ==/UserScript==

(function() {
    'use strict';

    function disableNotice(css) {
        const head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
    disableNotice('table.xdebug-error.xe-notice {display: none;}');
})();