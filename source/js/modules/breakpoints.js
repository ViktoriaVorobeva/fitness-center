const breakpoint = window.matchMedia('(max-width:1199px)');
const gymDescription = document.querySelector('.gym__description--desktop');

const breakpointChecker = () => {
  if (gymDescription && breakpoint.matches) {
    gymDescription.classList.add('visually-hidden');
  } else {
    gymDescription.classList.remove('visually-hidden');
  }
};
breakpoint.addListener(breakpointChecker);

export {breakpointChecker};
