import { TypeWriter } from './TypeWriter.js';
import { MobileNavigation } from './MobileNavigation.js';
import { Scroll } from './Scroll.js';
import { Carousel } from './Carousel.js';
import { Highlighter } from './Highlighter.js';

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
Carousel.init();
Highlighter.init();

/* Load particles-js */
particlesJS.load('particles-js', 'assets/particles.json');

/* MixItUp library for animating projects grid */
const containerEl = document.querySelector('.container');
const mixer = mixitup(containerEl);



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
