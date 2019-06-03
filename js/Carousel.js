export const Carousel = (function () {

    const DOM = {};
    let isDown = false;
    let carouselScroll;
    let startX;

    function cacheDOM() {
        DOM.indicators = document.querySelectorAll('.indicator');
        DOM.carousel = document.querySelector('.carousel');
    }

    function bindEvents() {
        DOM.indicators.forEach(indicator => indicator.addEventListener('click', (e) => {
            moveCarousel(e);
            activeIndicator(e);
        }));

        if ('ontouchstart' in window) {
            DOM.carousel.addEventListener('touchstart', (e) => {
                isDown = true;
                startX = e.targetTouches[0].pageX - DOM.carousel.offsetLeft;
                carouselScroll = DOM.carousel.scrollLeft;
            });

            DOM.carousel.addEventListener('touchmove', (e) => {
                if (!isDown) return; //stop from executing mousemove
                e.preventDefault();
                const x = e.targetTouches[0].pageX - DOM.carousel.offsetLeft;
                const walk = x - startX;
                DOM.carousel.scrollLeft = carouselScroll - walk;
            });

            DOM.carousel.addEventListener('touchend', (e) => {
                isDown = false;
            });

            DOM.carousel.addEventListener('touchleave', (e) => {
                isDown = false;
            });
        }
    }

    function moveCarousel(e) {
        const carousel_items = document.querySelectorAll('.carousel-item');
        const indicator = e.target;

        if (indicator.dataset.indicator === 'fcc') {
            carousel_items.forEach(item => item.style.transform = 'translateX(0)');
        }

        if (indicator.dataset.indicator === 'udacity') {
            carousel_items.forEach(item => item.style.transform = 'translateX(-100%)');
        }
    }

    function activeIndicator(e) {
        DOM.indicators.forEach(indicator => {
            if (indicator.classList.contains('active') && indicator !== e.target) {
                indicator.classList.remove('active');
            } else if (!indicator.classList.contains('active') && indicator == e.target) {
                indicator.classList.add('active');
            }
        });
    }

    function init() {
        cacheDOM();
        bindEvents();
    }

    return { init }
})();