function slider (){
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prevSlideBtn');
    const nextBtn = document.querySelector('.nextSlideBtn');
    let currentSlide = 1;

    slideLinkActive(currentSlide);

    //prevBtn function
    prevBtn.addEventListener('click', () => {
        if(currentSlide > 1) {
            prevBtn.href = `#slide-${currentSlide - 1}`;
            nextBtn.href = `#slide-${currentSlide}`;
            currentSlide -= 1;
            slideLinkActive(currentSlide);
        } else if (currentSlide <= 1) {
            prevBtn.href = `#slide-${slides.length}`
            nextBtn.href = `#slide-1`;
            currentSlide = slides.length;
            slideLinkActive(currentSlide);
        }
    });

    //nextBtn function
    nextBtn.addEventListener('click', () => {
        if(currentSlide < slides.length) {
            nextBtn.href = `#slide-${currentSlide + 1}`;
            prevBtn.href = `#slide-${currentSlide}`;
            currentSlide += 1;
            slideLinkActive(currentSlide);
        } else if (currentSlide >= slides.length) {
            nextBtn.href = `#slide-1`;
            prevBtn.href = `#slide-${slides.length}`
            currentSlide = 1;
            slideLinkActive(currentSlide);
        }
    });

    //slideLinks function
    const slideLinks = document.querySelector('.slideLinks').getElementsByTagName('a');

    for(let link of slideLinks) {
        link.addEventListener('click', () => {
            let href = link.href.slice(-1);
            currentSlide = href;
            slideLinkActive(currentSlide)
        })
    }

}

function slideLinkActive (currentSlide) {
    const slideLinks = document.querySelector('.slideLinks').getElementsByTagName('a');

    for(let link of slideLinks) {
        link.classList.remove('activeLink');
    }

    slideLinks[currentSlide - 1].classList.add('activeLink');
}

export { slider };