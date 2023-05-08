import Swiper from '../vendor/swiper';

const sliderElement = document.querySelector('.trainers__slider');

function addTabIndex() {
  const slideElements = document.querySelectorAll('.trainers__slide:not(.swiper-slide-duplicate)');
  for (let slide of slideElements) {
    slide.querySelector('.card').setAttribute('tabindex', '0');
  }
}

const initSlider = () => {
  if (sliderElement) {
    const slider = new Swiper(sliderElement, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      initialSlide: 2,
      autoResize: false,
      loopedSlides: 0,
      maxBackfaceHiddenSlides: 0,

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      breakpoints: {
        768: {
          spaceBetween: 30,
          centeredSlides: false,
          slidesPerView: 2,
          initialSlide: 2,
        },

        1200: {
          spaceBetween: 40,
          initialSlide: 0,
          centeredSlides: false,
          slidesPerView: 4,
        },
      },

      on: {
        init: () => {
          addTabIndex();
        },
      },

      navigation: {
        nextEl: '.trainers__slider-button--prev',
        prevEl: '.trainers__slider-button--next',
      },
    });
    slider.init();
  }
};

export {initSlider};
