// ==UserScript==
// @name         WordPress Customize Panel Resizer
// @version      0.1
// @description  Changes the minimum width of the customization panel in WordPress
// @author       Kasia Izak
// @homepageURL  https://github.com/kasiaizak/WordPress-Customize-Panel-Resizer
// @match        */wp-admin/customize.php*
// @grant        panelResizer
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
    panelResizer('.wp-full-overlay.expanded {margin-left: 400px;}');
    panelResizer('.wp-full-overlay-sidebar {min-width: 400px;}');
})();