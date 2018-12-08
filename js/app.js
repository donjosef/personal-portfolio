const TypeWriter = (function() {

    const dom = {};
    let text = '';
    let time = 160;

    function getDomElements() {
        dom.myName = document.querySelector('.intro .highlight');
    }

    function type() {
        const name = dom.myName.dataset.name;
        text = name.substr(0, text.length + 1);

        dom.myName.textContent = text;

        if(text === name ) {
          return;
        }

        setTimeout(() => {
            type();
        }, time);
    }

    function init() {
       getDomElements();
       type();
    }

    return {
        init: init
    }

}());

/*Invoke module TypeWriter after a little bit window loads*/
setTimeout(() => TypeWriter.init(), 400);


/* Load particles-js */
particlesJS.load('particles-js', 'assets/particles.json');

/* toggle navigation mobile */
const btn = document.getElementById('toggle-nav');
btn.addEventListener('click', toggleNav);

function toggleNav() {
  const navList = document.getElementById('nav-list');
  if(navList.style.height) {
    navList.style.height = null;
  } else {
    navList.style.height = navList.scrollHeight + 'px';
  }
}

/*Close nav-list */
const navList = document.getElementById('nav-list');
navList.addEventListener('click', closeNav);

function closeNav(e) {
    if(e.target.tagName == 'A') {
      navList.style.height = null;
    }
}



/* fix mobile bar */
const nav = document.querySelector('.navigation');
const topOfNav = nav.offsetTop;

function fixNav() {
  if(window.scrollY > topOfNav) {
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
  {val: 90},
  {val: 80},
  {val: 80},
  {val: 70},
  {val: 50},
  {val: 40},
  {val: 50}
];

window.addEventListener('scroll', function scrollListener() {
    const topOfIconsContainer = iconsContainer.getBoundingClientRect().top;
    /* When scroll pass the half of icons container */
    if(topOfIconsContainer < ( window.innerHeight - (iconsContainer.offsetHeight / 2)) ) {
      icons.forEach(icon => icon.classList.add('show'));
    }
    const topOfList = skillsList.getBoundingClientRect().top;
    /* When scroll pass the half of skills list */
    if(topOfList < ( window.innerHeight - (skillsList.offsetHeight / 2)) ) {
      bars.forEach((bar, ind) => {
        bar.style.width = skillsValues[ind].val + '%';
        bar.style.transitionDelay = ind * '0.1' + 's';
        percentages[ind].textContent = skillsValues[ind].val + '%';
      });
    }

    const topOfProj = projContainer.getBoundingClientRect().top;
    if(topOfProj <= window.innerHeight / 2) {
      projects.forEach((proj, ind) => {
        proj.classList.add('show');
        proj.style.transition = 'all 0.3s ease-out';
        proj.style.transitionDelay = ind * 0.25 + 's';
      });
      /*Remove listener since it doesnt need anymore*/
      window.removeEventListener('scroll', scrollListener);
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
  if(e.target.tagName == 'BUTTON') {
    const btnCoords = e.target.getBoundingClientRect();

    highlighter.style.width = btnCoords.width + 'px';
    highlighter.style.transform = `translateX(${btnCoords.left}px)`;
  }
}

function repaintHighlighter() {
  if(activeButton) {
    const btnCoords = activeButton.getBoundingClientRect();
    highlighter.style.transform = `translateX(${btnCoords.left}px)`;
  }
}
controls.addEventListener('click', animateHighlighter);
window.addEventListener('resize', repaintHighlighter);
