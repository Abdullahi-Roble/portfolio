
// Implementing typed.js into header

const titles = {
    strings: [" Front-End Software Engineer", " Technology Enthusiast", "Indoor Sportsman", " Front-End Developer"],
    startDelay: 500,
    typeSpeed: 50,
    backSpeed: 40,
    loop: true,
    backDelay: 1000
}
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