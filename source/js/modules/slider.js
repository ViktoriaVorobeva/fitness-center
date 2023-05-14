import Swiper from '../vendor/swiper';

const trainersSlider = document.querySelector('.trainers__slider');
const reviewsSlider = document.querySelector('.reviews__slider');

function addTabIndex() {
  const slideElements = document.querySelectorAll('.trainers__slide:not(.swiper-slide-duplicate)');
  for (let slide of slideElements) {
    slide.querySelector('.card').setAttribute('tabindex', '0');
  }
}

const initSlider = () => {
  if (trainersSlider) {
    const sliderTrainers = new Swiper(trainersSlider, {
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
        nextEl: '.trainers__button--prev',
        prevEl: '.trainers__button--next',
      },
    });
    sliderTrainers.init();
  }

  if (reviewsSlider) {
    const sliderReviews = new Swiper(reviewsSlider, {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      autoHeight: true,

      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });
    sliderReviews.init();
  }
};

export {initSlider};
