/* ---- particles.js config ---- */
// https://codepen.io/VincentGarreau/pen/bGxvQd

particlesJS("particles-bg", {
  "particles": {
    "number": {
      "value": 300,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": "#f4f4f4"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#f4f4f4"
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
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0.5,
        "opacity_min": 0.8,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 8,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#e8e8e8",
      "opacity": 0.7,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0,
      "direction": "none",
      "random": false,
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
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 100,
        "duration": .5,
        "opacity": .8,
        "speed": 2.5
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