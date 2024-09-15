import { closeAside } from './menus';
import { hoverDayNight } from './theme';

function home() {
    const welcomeSection = document.getElementById('welcomeSection');

    closeAside();

    setTimeout(() => {welcomeSection.scrollIntoView({behavior: 'smooth', block: 'end'})}, 400)
}

function about() {
    const aboutSection = document.getElementById('aboutSection');

    closeAside();

    setTimeout(() => {aboutSection.scrollIntoView({behavior: 'smooth', block: 'center'})}, 400)
}

function projects() {
    const projectSection = document.getElementById('projectSection');

    closeAside();

    setTimeout(() => {projectSection.scrollIntoView({behavior: 'smooth', block: 'start'})}, 400)
}

function styleLinks(){
    window.addEventListener('scrollend', () => {

        let isScrolling;
    
        clearTimeout(isScrolling);
        
        isScrolling = setTimeout(() => {
            currentSection();
            hoverDayNight();
        }, 150);
    
        false;
    
    });
}

function currentSection() {
    const welcomeBookmark = document.getElementById('welcomeBookmark');
    const aboutBookmark = document.getElementById('aboutBookmark');
    const projectBookmark = document.getElementById('projectBookmark');

    const asideBtnHome = document.getElementById('asideBtnHome');
    const asideBtnAbout = document.getElementById('asideBtnAbout');
    const asideBtnProjects = document.getElementById('asideBtnProjects');

    const asideSpans = document.querySelectorAll('.asideSpan');

    if(isInViewport(welcomeBookmark)){ 
        styleLink(asideBtnHome);

        for(let span of asideSpans){
            span.style.color = 'var(--secondary-color)'
        }
    } else if(isInViewport(aboutBookmark)){
        styleLink(asideBtnAbout);

        for(let span of asideSpans){
            span.style.color = 'var(--third-color)'
        }
    } else if(isInViewport(projectBookmark)){
        styleLink(asideBtnProjects);

        for(let span of asideSpans){
            span.style.color = 'var(--fourth-color)'
        }
    };
}

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
};

function styleLink(btn) {
    const directoryLinks = document.querySelectorAll('.directoryLink');

    for(let link of directoryLinks){
        link.disabled = false;
        
        let span = link.querySelector('.asideSpan');
        span.style.display = 'none';
    }

    btn.disabled = true;
    
    let btnSpan = btn.querySelector('.asideSpan');
    btnSpan.style.display = 'inline';
}


export { home, about, projects, currentSection, styleLinks };