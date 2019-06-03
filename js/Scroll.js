export const Scroll = (function () {

    function fixNav() {
        const nav = document.querySelector('.navigation');
        const topOfNav = nav.offsetTop;
        if (window.scrollY > topOfNav) {
            document.body.style.paddingTop = nav.offsetHeight + "px";
            nav.classList.add('fixed');
        } else {
            document.body.style.paddingTop = "0";
            nav.classList.remove('fixed');
        }
    }

    function showSections() {
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
        const form = document.querySelector('.contact-form');

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

        const topOfForm = form.getBoundingClientRect().top;
        if (topOfForm <= window.innerHeight / 1.2) {
            form.classList.add('show');
             /*Remove listener since we dont need anymore*/
            window.removeEventListener('scroll', showSections);
        }
    }

    function bindEvents() {
        window.addEventListener('scroll', fixNav);
        window.addEventListener('scroll', showSections)
    }

    function init() {
        bindEvents();
    }

    return { init }
})();