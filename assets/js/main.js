// ---------- Show and hide the Menu --------------
const navMenu   = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navExit   = document.querySelector('#nav-exit');

// Menu Show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// Menu Hide
if (navExit) {
    navExit.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// --------- Remove Menu on mobile ---------------
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link => link.addEventListener('click', hideMenu));

function hideMenu() {
    navMenu.classList.remove('show-menu');
}

// --------- Qualification Tabs ------------
const tabs        = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        });

        tab.classList.add('qualification__active');


    })
});

// --------- Work Swiper ------------
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// --------- Scroll Sections Active Link ------------

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive)

// --------- Change Background Header ------------
function scrollHeader() {
    const nav = document.getElementById('header');

    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    };
}

window.addEventListener('scroll', scrollHeader);

// --------- Show Scroll Top ------------
function scrollUp() {
    const scrollUp = document.getElementById('scrollup');

    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

// --------- Dark Theme ------------
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Theme prefence selected saved in local storage
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtain current theme selection by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) 
    ?'dark'
    :'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) 
    ?'uil-moon'
    :'uil-sun';

// Validate if user has previously selected a theme preference
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // add / remove the dark icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Save the theme selection onto the local storage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})