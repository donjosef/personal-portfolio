import { TypeWriter } from './TypeWriter.js';
import { MobileNavigation } from './MobileNavigation.js';
import { Scroll } from './Scroll.js';
import { Carousel } from './Carousel.js';
import { Highlighter } from './Highlighter.js';
import { Form } from './Form.js';

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
Form.init();

/* Load particles-js */
particlesJS.load('particles-js', 'assets/particles.json');

/* MixItUp library for animating projects grid */
const containerEl = document.querySelector('.container');
mixitup(containerEl);