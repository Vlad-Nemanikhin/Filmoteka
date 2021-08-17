import { refs } from "./refs";
import localStorageAPI from "./localStorageAPI";
import renderMarkupModal from './render-modal-one-card';
import { fetchMovieById } from "./movies-API-service";
import articleTpl from "../handlebars/article.hbs";
import { onAddWatchedBtnClick, renameToDeleteWatchedBtn } from "./add-to-watched-btn";
import { onAddQueueBtnClick, renameToDeleteQueueBtn } from "./add-to-queu-btn";

const lSAPI = new localStorageAPI();

// 1 open by click on the movie-card (either mainPage or library)

refs.galleryEl.addEventListener('click', onMovieCardClick);
refs.backdropEl.addEventListener('click', onBackdropClick);
refs.modalCloseEl.addEventListener('click', onModalCloseBtnClick);
window.addEventListener('keydown', onKeyEscPress);

function onMovieCardClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return
  }

  refs.body.style.overflow = "hidden";

  const movieId = e.target.parentNode.parentNode.dataset.id;

  fetchMovieById(movieId).then(movie => {
    renderMarkupModal(articleTpl(movie));
    
    const addToWatchedBtn = document.querySelector('button[data-name="watched"]');
    addToWatchedBtn.addEventListener('click', onAddWatchedBtnClick.bind(addToWatchedBtn, movie));
    
    const addToQueueBtn = document.querySelector('button[data-name="queue"]');
    addToQueueBtn.addEventListener('click', onAddQueueBtnClick.bind(addToQueueBtn, movie))
    
    if (lSAPI.isHasFilmInWatched(movie)) {
      const button = refs.modalEl.querySelector('button[data-name="watched"]');
      
      renameToDeleteWatchedBtn(button)
    } 

    if (lSAPI.isHasFilmInQueue(movie)) {
      const button = refs.modalEl.querySelector('button[data-name="queue"]');
      console.log('fetchMovieById  - button', button)

      renameToDeleteQueueBtn(button)
    } 
    
    
  });

  refs.backdropEl.classList.toggle('backdrop--is-hidden');
  refs.modalEl.classList.remove('modal--close');
}

// 2 close by click on modalCloseButton

function onModalCloseBtnClick(e) {
  refs.backdropEl.classList.toggle('backdrop--is-hidden');
  refs.modalEl.classList.toggle('modal--close');
 
  refs.body.style.overflow = "visible";

  refs.backdropEl.removeEventListener('click', onBackdropClick);
}

// 3 close by click on backdrop (remove eventListener on modal)
function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    refs.backdropEl.classList.toggle('backdrop--is-hidden');
    refs.modalEl.classList.toggle('modal--close');

    refs.body.style.overflow = "visible";

    // refs.modalCloseEl.removeEventListener('click', onModalCloseBtnClick);
    // window.removeEventListener('keydown', onKeyEscPress);
  }
}

// 4 close by click on Esc-key
function onKeyEscPress(e) {
    if (e.code === 'Escape') {
      refs.backdropEl.classList.toggle('backdrop--is-hidden');
      refs.modalEl.classList.toggle('modal--close');

      refs.body.style.overflow = "visible";
  }
}


export {onMovieCardClick, onModalCloseBtnClick, onBackdropClick, onKeyEscPress}