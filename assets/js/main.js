// Design
var swiper = new Swiper(".design", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".pore",
    prevEl: ".aage",
  },
});

var swiper = new Swiper(".design-phone", {
  navigation: {
    nextEl: ".pore",
    prevEl: ".aage",
  },
    effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

// Community
var swiper = new Swiper(".community", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 3
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    }
  }
});
