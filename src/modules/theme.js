function toggleDayNight() {
    const r = document.querySelector(':root');
    const rs = getComputedStyle(r);

    const primaryColor = rs.getPropertyValue('--primary-color');
    const alternateColor = rs.getPropertyValue('--alternate-color');

    r.style.setProperty('--primary-color', alternateColor);
    r.style.setProperty('--alternate-color', primaryColor);
}

function hoverDayNight () {
    const welcomeBookmark = document.getElementById('welcomeBookmark');
    const aboutBookmark = document.getElementById('aboutBookmark');
    const projectBookmark = document.getElementById('projectBookmark');

    if(isInViewport(welcomeBookmark)){ 
        const secondaryHover = '.toggle:hover { background-color: var(--secondary-color) }';

        const styleTag = document.querySelector('style');
        styleTag.innerHTML = secondaryHover;
    } else if(isInViewport(aboutBookmark)){
        const secondaryHover = '.toggle:hover { background-color: var(--third-color) }';

        const styleTag = document.querySelector('style');
        styleTag.innerHTML = secondaryHover;
    } else if(isInViewport(projectBookmark)){
        const secondaryHover = '.toggle:hover { background-color: var(--fourth-color) }';

        const styleTag = document.querySelector('style');
        styleTag.innerHTML = secondaryHover;
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

export { toggleDayNight, hoverDayNight };