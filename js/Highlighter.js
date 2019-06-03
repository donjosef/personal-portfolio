export const Highlighter = (function () {
    const DOM = {};
    let activeButton;

    function cacheDOM() {
        DOM.controls = document.querySelector('.controls');
        DOM.highlighter = document.querySelector('.highlighter');
    }

    function bindEvents() {
        DOM.controls.addEventListener('click', animateHighlighter);
        window.addEventListener('resize', repaintHighlighter);
    }

    function animateHighlighter(e) {
        activeButton = e.target;
        if (e.target.tagName == 'BUTTON') {
            const btnCoords = e.target.getBoundingClientRect();
            DOM.highlighter.style.width = btnCoords.width + 'px';
            DOM.highlighter.style.transform = `translateX(${btnCoords.left}px)`;
        }
    }

    function repaintHighlighter() {
        if (activeButton) {
            const btnCoords = activeButton.getBoundingClientRect();
            DOM.highlighter.style.transform = `translateX(${btnCoords.left}px)`;
        }
    }

    function init() {
        cacheDOM()
        bindEvents()
    }

    return { init }
})();