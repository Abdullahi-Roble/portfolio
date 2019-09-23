
const titles = {
    strings: [" Front-End Software Engineer", " Technology Enthusiast", "Indoor Sportsman", " Front-End Developer"],
    startDelay: 500,
    typeSpeed: 50,
    backSpeed: 40,
    loop: true,
    backDelay: 1000
}
const typed = new Typed('.titleType', titles);

$(document).ready(function(){


    AOS.init();
});