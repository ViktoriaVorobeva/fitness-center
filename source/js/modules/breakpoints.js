const breakpoint = window.matchMedia('(max-width:1199px)');
const gymDescriptions = document.querySelectorAll('.gym p:not(:first-of-type)');

const checkBreakpoints = () => {
  if (gymDescriptions && breakpoint.matches) {
    gymDescriptions.forEach((description) => description.classList.add('visually-hidden'));
  } else {
    gymDescriptions.forEach((description) => description.classList.remove('visually-hidden'));
  }
};
breakpoint.addListener(checkBreakpoints);

export {checkBreakpoints};
