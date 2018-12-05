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

/*Bars Animation*/
const skillsList = document.getElementById('skills-list');
const bars = document.querySelectorAll('.bar');
const skillsValues = [
  {val: 90},
  {val: 80},
  {val: 80},
  {val: 70},
  {val: 50},
  {val: 40},
  {val: 50}
];

function animateBars() {
  const topOfList = skillsList.getBoundingClientRect().top;
  /* When scroll pass the half of skills list */
  if(topOfList < ( window.innerHeight - (skillsList.offsetHeight / 2)) ) {
    bars.forEach((bar, ind) => bar.style.width = skillsValues[ind].val + '%');
    window.removeEventListener('scroll', animateBars);
  }
}

window.addEventListener('scroll', animateBars);
