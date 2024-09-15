import {
    showAside, closeAside, showMobileAside, closeMobileAside, showMore, moreBtnToggle, closeMore
} from './modules/menus';

import {
    slider
} from './modules/slider';

import {
    home, about, projects, currentSection, styleLinks
} from './modules/aside';

import {
    toggleDayNight, hoverDayNight
} from './modules/theme';


const menuBtn = document.querySelector('.floatingMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn')

menuBtn.addEventListener('click', () => {
    showAside();
})

closeMenuBtn.addEventListener('click', () => {
    closeAside();
});


const moreBtn = document.querySelector('.floatingMoreBtn');

moreBtn.addEventListener('click', () => {
    if(moreBtn.classList.contains('floatingBackBtn')){
        closeMore();
        moreBtnToggle(moreBtn);
    } else {
        showMore();
        moreBtnToggle(moreBtn);
    }
})


const asideBtnHome = document.getElementById('asideBtnHome');
const asideBtnAbout = document.getElementById('asideBtnAbout');
const asideBtnProjects = document.getElementById('asideBtnProjects');

asideBtnHome.addEventListener('click', () => {
    home();
})

asideBtnAbout.addEventListener('click', () => {
    about();
})

asideBtnProjects.addEventListener('click', () => {
    projects();
})

slider();

currentSection();

styleLinks();

hoverDayNight();


const themeCheckbox = document.getElementById('themeCheckbox');
const mobileThemeCheckbox = document.getElementById('mobileThemeCheckbox');

themeCheckbox.addEventListener('click', () => {
    toggleDayNight();
})

mobileThemeCheckbox.addEventListener('click', () => {
    toggleDayNight();
})


const mobileOpenAsideBtn = document.getElementById('mobileOpenAsideBtn');
const mobileCloseAsideBtn = document.getElementById('mobileCloseAsideBtn');

mobileOpenAsideBtn.addEventListener('click', () => {
    showMobileAside();
})

mobileCloseAsideBtn.addEventListener('click', () => {
    closeMobileAside();
})


const scrollToTopBtn = document.getElementById('scrollToTopBtn');

scrollToTopBtn.addEventListener('click', () => {
    home();
})