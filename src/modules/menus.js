function showAside(){
    const aside = document.querySelector('aside');
    const main = document.querySelector('main');

    aside.classList.add('showAside');
    main.classList.add('asideOpen');
}

function closeAside(){
    const aside = document.querySelector('aside');
    const main = document.querySelector('main');

    aside.classList.remove('showAside');
    main.classList.remove('asideOpen');
}

function showMobileAside(){
    const aside = document.querySelector('aside');
    const main = document.querySelector('main');
    const openBtn = document.getElementById('mobileOpenAsideBtn');
    const closeBtn = document.getElementById('mobileCloseAsideBtn');

    aside.classList.add('showMobileAside');
    main.classList.add('asideMobileOpen');

    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
}

function closeMobileAside(){
    const aside = document.querySelector('aside');
    const main = document.querySelector('main');
    const openBtn = document.getElementById('mobileOpenAsideBtn');
    const closeBtn = document.getElementById('mobileCloseAsideBtn');

    aside.classList.remove('showMobileAside');
    main.classList.remove('asideMobileOpen');

    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
}

function showMore(){
    const more = document.querySelector('.moreContainer');
    const about = document.querySelector('.aboutContainer');

    more.classList.add('showMore');
    about.classList.add('moreOpen');
}

function closeMore(){
    const more = document.querySelector('.moreContainer');
    const about = document.querySelector('.aboutContainer');   

    more.classList.remove('showMore');
    about.classList.remove('moreOpen');
}

function moreBtnToggle (moreBtn) {
    if(moreBtn.classList.contains('floatingBackBtn')){
        moreBtn.classList.remove('floatingBackBtn');
    } else {
        moreBtn.classList.add('floatingBackBtn');
    }
}

export { showAside, closeAside, showMobileAside, closeMobileAside, showMore, moreBtnToggle, closeMore };