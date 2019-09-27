
// Implementing typed.js into header

const titles = {
    strings: ["Front-End Developer", "Technology Enthusiast", "Sportsman/Sports Fan", "Front-End Developer"],
    startDelay: 500,
    typeSpeed: 50,
    backSpeed: 40,
    loop: false,
    backDelay: 1000,
    showCursor: true
};

const typed = new Typed('.titleType', titles);

// Typed.js implementation into 'About' section

const letters = {
    strings: ["Nice to meet you! I'm Abdullah.", "Nice to meet you! I'm Abdullahi."],
    startDelay: 500,
    typeSpeed: 50,
    backSpeed: 40,
    loop: false,
    // loopCount: 3,
    backDelay: 1000,
    showCursor: false,
};

const one = new Typed('.loneLetter', letters);


// Initiating flickity for portfolio works

const carousel = document.querySelector('.galleryWorks');
const flkty = new Flickity(carousel, {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    // freeScroll: true,
    imagesLoaded: true,
    percentPosition: false
});

// Smooth Scrollin'

const scrollOne = new SmoothScroll('a[href*="#about"]');

const scrollTwo = new SmoothScroll('a[href*="#skills"]');

const scrollThree = new SmoothScroll('a[href*="#portfolio"]');

const scrollFour = new SmoothScroll('a[href*="#contact"]');

// Animate on Scroll!

AOS.init();