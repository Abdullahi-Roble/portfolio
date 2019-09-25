
// Implementing typed.js into header

const letters = {
    strings: ["Nice to meet you! I'm Abdullah.", "Nice to meet you! I'm Abdullahi."],
    startDelay: onscroll,
    typeSpeed: 50,
    backSpeed: 40,
    loop: false,
    backDelay: 1000
};

const one = new Typed('.loneLetter', letters);

const titles = {
    strings: ["Front-End Developer", "Technology Enthusiast", "Sportsman/Sports Fan", "Front-End Developer"],
    startDelay: 500,
    typeSpeed: 50,
    backSpeed: 40,
    loop: false,
    backDelay: 1000
};

const typed = new Typed('.titleType', titles);


// Initiating flickity for portfolio works

const elem = document.querySelector('.galleryWorks');
const flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true
});

$(document).ready(function(){
    AOS.init();
});