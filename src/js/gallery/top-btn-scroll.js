import { refs } from '../refs';
//function ScrollTop() {
//  window.scroll({ top: 0, behavior: 'smooth' });
//}

const addingScrollEvent = window.addEventListener('scroll', hangScrollBtn);
//const removingScrollEvent = window.removeEventListener('scroll', hangScrollBtn);

function hangScrollBtn() {
  const { scrollTop, scrollHeight } = document.documentElement;
  scrollTop <= 1000 ? refs.topScrollBtn.classList.add('scroll-btn-hide') : refs.topScrollBtn.classList.remove('scroll-btn-hide');
}

export { addingScrollEvent, hangScrollBtn };