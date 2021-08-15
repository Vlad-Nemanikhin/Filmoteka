import { refs } from "./refs";
import renderMarkupModal from './render-modal-one-card';
import { fetchMovieById } from "../js/movies-API-service";
import articleTpl from "../handlebars/article.hbs";
//Пример закрытия модалки из курса по верстке
//(() => {	
//const refs = {
//   openModalBtn: document.querySelector('[data-modal-open]'),
//   closeModalBtn: document.querySelector('[data-modal-close]'),
//   modal: document.querySelector('[data-modal]'),
//};
//
//refs.openModalBtn.addEventListener('click', toggleModal);
//refs.closeModalBtn.addEventListener('click', toggleModal);
//
//function toggleModal() {
//   refs.modal.classList.toggle('backdrop--is-hidden');
//}
//})();


// const movieCard = document.querySelector('.gallery__item');


// backdrop
// const backdrop = document.querySelector('.backdrop');

// // використовувала на етапі тестування
// backdrop.classList.remove('backdrop--is-hidden');

// // const modal = document.querySelector(".modal");
// const closeModalBtn = document.querySelector(".close-btn");

// modal.classList.remove('modal--close');

// по картці сховала поки немає рендерингу сторінки
// потім можна буде поправити

// movieCard.addEventListener('click', onMovieCardClick)

// backdrop.addEventListener('click', onBackdropClick);
// closeModalBtn.addEventListener("click", onModalCloseBtnClick);
// window.addEventListener('keydown', onKeyEscPress);

// 1 open by click on the movie-card (either mainPage or library)

refs.galleryEl.addEventListener('click', onMovieCardClick);
refs.backdropEl.addEventListener('click', onBackdropClick);

function onMovieCardClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return
  }

  const movieId = e.target.parentNode.parentNode.dataset.id;

 fetchMovieById(movieId).then(movie => renderMarkupModal(articleTpl(movie)));

  // renderMarkupModal();
  refs.backdropEl.classList.toggle('backdrop--is-hidden');

  // refs.modalEl.classList.toggle('modal--close');
  
}

// 2 close by click on modalCloseButton
function onModalCloseBtnClick(e) {
  backdrop.classList.toggle('backdrop--is-hidden');
  modal.classList.toggle("modal--close");
  
  backdrop.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onKeyEscPress);
}

// 3 close by click on backdrop (remove eventListener on modal)
// застосувала функцию confirm() на випадок випадкового кліку по backdrop
// при бажанні - можна забрати
function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    const isConfirm = confirm('Do you really want to leave?');
    if (isConfirm) {
      refs.backdropEl.classList.toggle('backdrop--is-hidden');
    }
    // refs.modalEl.classList.toggle('modal--close');
  }
}

// 4 close by click on Esc-key
function onKeyEscPress(e) {
    if (e.code === 'Escape') {
      backdrop.classList.toggle('backdrop--is-hidden');
      modal.classList.toggle("modal--close");
  }
}


export {onMovieCardClick, onModalCloseBtnClick, onBackdropClick, onKeyEscPress}