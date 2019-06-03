

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


/* Load particles-js */
particlesJS.load('particles-js', 'assets/particles.json');

/* fix mobile bar */
const nav = document.querySelector('.navigation');
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY > topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    nav.classList.add('fixed');
  } else {
    document.body.style.paddingTop = "0";
    nav.classList.remove('fixed');
  }
}
window.addEventListener('scroll', fixNav);


/*Icons & Bars Animation*/
const iconsContainer = document.querySelector('.about-icons');
const icons = document.querySelectorAll('.icon');
const skillsList = document.getElementById('skills-list');
const bars = document.querySelectorAll('.bar');
const percentages = document.querySelectorAll('.value');
const projContainer = document.querySelector('.projects .container');
const projects = document.querySelectorAll('.mix');
const skillsValues = [
  { val: 90 },
  { val: 80 },
  { val: 80 },
  { val: 70 },
  { val: 50 },
  { val: 40 },
  { val: 50 }
];

window.addEventListener('scroll', function scrollListener() {
  const topOfIconsContainer = iconsContainer.getBoundingClientRect().top;
  /* When scroll pass the half of icons container */
  if (topOfIconsContainer < (window.innerHeight - (iconsContainer.offsetHeight / 1.5))) {
    icons.forEach(icon => icon.classList.add('show'));
  }
  const topOfList = skillsList.getBoundingClientRect().top;
  /* When scroll pass the half of skills list */
  if (topOfList < (window.innerHeight - (skillsList.offsetHeight / 2))) {
    bars.forEach((bar, ind) => {
      bar.style.width = skillsValues[ind].val + '%';
      bar.style.transitionDelay = ind * '0.1' + 's';
      percentages[ind].textContent = skillsValues[ind].val + '%';
    });
  }

  const topOfProj = projContainer.getBoundingClientRect().top;
  if (topOfProj <= window.innerHeight / 2) {
    projects.forEach((proj, ind) => {
      proj.classList.add('show');
      proj.style.transition = 'all 0.3s ease-out';
      proj.style.transitionDelay = ind * 0.25 + 's';
    });
  }

  const form = document.querySelector('.contact-form');
  const topOfForm = form.getBoundingClientRect().top;
  if (topOfForm <= window.innerHeight / 1.2) {
    form.classList.add('show');
    /*Remove listener since it doesnt need anymore*/
    window.removeEventListener('scroll', scrollListener);
  }
});

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
