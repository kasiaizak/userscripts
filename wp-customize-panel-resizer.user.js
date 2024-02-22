// ==UserScript==
// @name         WordPress Customize Panel Resizer
// @namespace    https://kasiaizak.github.io/userscripts/
// @version      1.2
// @description  Changes the minimum width of the customization panel in WordPress
// @author       Kasia Izak
// @match        */wp-admin/customize.php*
// @match        */wp/wp-admin/customize.php*
// @icon         https://kasiaizak.github.io/userscripts/img/wp.png
// @updateURL    https://raw.githubusercontent.com/kasiaizak/userscripts/master/wp-customize-panel-resizer.user.js
// @downloadURL  https://raw.githubusercontent.com/kasiaizak/userscripts/master/wp-customize-panel-resizer.user.js
// @homepageURL  https://kasiaizak.github.io/userscripts/#wordpress-customize-panel-resizer
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
    panelResizer('.wp-full-overlay.expanded {min-width: 25vw; margin-left: 25%;}');
    panelResizer('.wp-full-overlay-sidebar {min-width: 25vw;}');
    panelResizer('.expanded .wp-full-overlay-footer {max-width: 25vw; width: calc(25vw - 1px);}');
})();