



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

// Particles.js - from Johan on codepen

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 355,
            "density": {
                "enable": true,
                "value_area": 789.1476416322727
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 83.91608391608392,
                "size": 1,
                "duration": 3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});