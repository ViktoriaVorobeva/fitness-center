const sliderElement = document.querySelector('.trainers__slider');

const initSlider = () => {
  if (sliderElement) {
    const slider = new Swiper('.trainers__slider', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      initialSlide: 2,
      centeredSlides: true,
      autoResize: false,
      loopedSlides: 0,
      maxBackfaceHiddenSlides: 0,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};

export {initSlider};
