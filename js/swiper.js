let swiper = new Swiper(".mySwiper", {
  // effect: 'fade',
  spaceBetween: 60,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: 2,
  speed: 500,
  loop: true,
  direction: "horizontal",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-pagination",
    hide: true,
  },
  breakpoints: {
    1025: {
      slidesPerView: 2,
    },
    760: {
      slidesPerView: 1.5,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
