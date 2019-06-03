import { TypeWriter } from './TypeWriter.js';
import { MobileNavigation } from './MobileNavigation.js';
import { Scroll } from './Scroll.js';

/*After intro is shown smoothly with transition, invoke typer function*/
window.addEventListener('load', () => {
  const intro = document.querySelector('header .intro');
  intro.classList.add('show');

  intro.addEventListener('transitionend', (e) => {
    if (e.target === intro) {
      TypeWriter.init();
    }
  });
});

MobileNavigation.init();
Scroll.init();

/* Load particles-js */
particlesJS.load('particles-js', 'assets/particles.json');

/*Carousel Section*/
const indicators = document.querySelectorAll('.indicator');

indicators.forEach(indicator => indicator.addEventListener('click', (e) => {
  moveCarousel(e);
  activeIndicator(e);
}));

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
  indicators.forEach(indicator => {
    if (indicator.classList.contains('active') && indicator !== e.target) {
      indicator.classList.remove('active');
    } else if (!indicator.classList.contains('active') && indicator == e.target) {
      indicator.classList.add('active');
    }
  });
}

/* Check if touch events are supported. If yes, bind events to carousel for moving it*/
document.addEventListener('DOMContentLoaded', (e) => {
  if ('ontouchstart' in window) {
    const carousel = document.querySelector('.carousel');
    let isDown = false;
    let carouselScroll;
    let startX;

    carousel.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.targetTouches[0].pageX - carousel.offsetLeft;
      carouselScroll = carousel.scrollLeft;
    });

    carousel.addEventListener('touchmove', (e) => {
      if (!isDown) return; //stop from executing mousemove
      e.preventDefault();
      const x = e.targetTouches[0].pageX - carousel.offsetLeft;
      const walk = x - startX;
      carousel.scrollLeft = carouselScroll - walk;
    });

    carousel.addEventListener('touchend', (e) => {
      isDown = false;
    });

    carousel.addEventListener('touchleave', (e) => {
      isDown = false;
    });
  }
});

/* MixItUp library for animating projects grid */

const containerEl = document.querySelector('.container');
const mixer = mixitup(containerEl);

/* Animate highlighter of projects controls */
const highlighter = document.querySelector('.highlighter');
const controls = document.querySelector('.controls');
let activeButton;

function animateHighlighter(e) {
  activeButton = e.target;
  if (e.target.tagName == 'BUTTON') {
    const btnCoords = e.target.getBoundingClientRect();

    highlighter.style.width = btnCoords.width + 'px';
    highlighter.style.transform = `translateX(${btnCoords.left}px)`;
  }
}

function repaintHighlighter() {
  if (activeButton) {
    const btnCoords = activeButton.getBoundingClientRect();
    highlighter.style.transform = `translateX(${btnCoords.left}px)`;
  }
}
controls.addEventListener('click', animateHighlighter);
window.addEventListener('resize', repaintHighlighter);

/*Display loader on submit*/
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  const btn = document.querySelector('input[type="submit"]');
  const loader = document.querySelector('.lds-ellipsis');
  btn.style.display = 'none';
  loader.style.display = 'inline-block';
});

/*When user submit the form, before redirect happens, reset the form. */
window.addEventListener('beforeunload', () => {
  const contactForm = document.querySelector('.contact-form');
  contactForm.reset();
});
