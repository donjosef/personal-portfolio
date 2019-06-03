export const MobileNavigation = (function () {

    const DOM = {};

    function cacheDOM() {
        DOM.btn = document.getElementById('toggle-nav');
        DOM.navList = document.getElementById('nav-list');
    }

    function bindEvents() {
        DOM.btn.addEventListener('click', toggleNav);
        DOM.navList.addEventListener('click', closeNav);
    }

    function toggleNav() {
        if (DOM.navList.style.height) {
            DOM.navList.style.height = null;
        } else {
            DOM.navList.style.height = DOM.navList.scrollHeight + 'px';
        }
    }

    function closeNav(e) {
        if (e.target.tagName == 'A') {
            DOM.navList.style.height = null;
        }
    }

    function init() {
        cacheDOM();
        bindEvents();
    }

    return { init }
})();


