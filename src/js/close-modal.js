
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


const movieCard = document.querySelector('.gallery__item');


// backdrop
const backdrop = document.querySelector('.backdrop');

// використовувала на етапі тестування
backdrop.classList.remove('backdrop--is-hidden');

// додала розмітку через insertAdjacentHTML для тустування, так як не могла достукатись до модалки.
backdrop.insertAdjacentHTML('beforeend', '<article class="modal"><button type="button" class="close-btn"><svg class="close-btn__icon"  width = "14px" height = "14px"><use href = "../images/sprite.svg#close_icon" ></use></svg></button><div class = "modal__wrap"><img class="modal__img" href="./images/Rectangle.png" width="240px" height="356px"><div><h2 class="modal__title">{{A FISTFUL OF LEAD}}</h2><div class="modal__list"><ul class="modal__params"><li class="modal__item">Vote / Votes</li><li class="modal__item">Popularity</li><li class="modal__item">Original Title</li><li class="modal__item">Genre</li></ul><ul class="modal__value"><li class="modal__meaning"><span class="modal__meaning--orange">{{777}}</span> / <span class="modal__meaning--grey">{{777}}</span></li><li class="modal__meaning">{{1111}}</li><li class="modal__meaning">{{A FISTFUL OF LEAD}}</li><li class="modal__meaning">{{Western}}</li></ul></div><span class="modal__subtitle">{{ABOUT}}</span><p class="modal__desc">{{Four of the West}}</p><div class="modal__wrap--btn"><button class="movie-card__btn">ADD TO WATCHED</button><button class="movie-card__btn">ADD TO QUEUE</button></div></div></div></article>');

// ро,ота з модалкою
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-btn");

modal.classList.remove('modal--close');

// по картці сховала поки немає рендерингу сторінки
// потім можна буде поправити

// movieCard.addEventListener('click', onMovieCardClick)

backdrop.addEventListener('click', onBackdropClick);
closeModalBtn.addEventListener("click", onModalCloseBtnClick);
window.addEventListener('keydown', onKeyEscPress);

// 1 open by click on the movie-card (either mainPage or library)
function onMovieCardClick(e) {
  if (e.target === e.currentTarget) {
    backdrop.classList.toggle('backdrop--is-hidden');
    modal.classList.toggle('modal--close');
  }
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
      backdrop.classList.toggle('backdrop--is-hidden');
    }
  }
}

// 4 close by click on Esc-key
function onKeyEscPress(e) {
    if (e.code === 'Escape') {
      backdrop.classList.toggle('backdrop--is-hidden');
      modal.classList.toggle("modal--close");
  }
}
