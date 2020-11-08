import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

export const mySwiper = new Swiper(".swiper-container", {
  init: false,
  // observer: true,
  // observeParents: true,
  grabCursor: true,
  // сколько слайдв крутит
  slidesPerGroup: 1,
  // прокрутка
  loop: true,
  // повторяет 10 слайдов
  loopedSlides: 10,
  // слайдов видно
  slidesPerView: 10,
  spaceBetween: 16,
  breakpoints: {
    440: {
      // slidesPerView: 1,
      spaceBetween: 8,
    },
    769: {
      slidesPerView: "auto",
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

