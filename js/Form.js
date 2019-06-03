export const Form = (function () {
    const DOM = {};

    function cacheDOM() {
        DOM.form = document.querySelector('.contact-form');
        DOM.submitBtn = document.querySelector('input[type="submit"]');
        DOM.loader = document.querySelector('.lds-ellipsis');
    }

    function bindEvents() {
        DOM.form.addEventListener('submit', showLoader);
        /*When user submit the form, before redirect happens, reset the form. */
        window.addEventListener('beforeunload', () => {
            DOM.form.reset();
        });
    }

    function showLoader() {
        DOM.submitBtn.style.display = 'none';
        DOM.loader.style.display = 'inline-block';
    }

    function init() {
        cacheDOM();
        bindEvents();
    }

    return { init }
})();