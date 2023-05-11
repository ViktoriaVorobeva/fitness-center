const navElements = document.querySelectorAll('.navigation__link');
const buttonPromotions = document.querySelector('.main-screen__button');

const getScroll = () => {
  if (navElements) {
    navElements.forEach((link) => {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        const id = link.getAttribute('href');
        const target = document.querySelector(id);
        target.scrollIntoView({behavior: 'smooth'});
      });
    });
  }

  if (buttonPromotions) {
    buttonPromotions.addEventListener('click', (evt) => {
      evt.preventDefault();
      const id = buttonPromotions.getAttribute('href');
      const target = document.querySelector(id);
      target.scrollIntoView({behavior: 'smooth'});
    });
  }
};

export {getScroll};
