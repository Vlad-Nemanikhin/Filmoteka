// const galeryRating = document.querySelectorAll('.gallery__info-rating');
import Notiflix from 'notiflix';
import { refs } from "./refs";
import localStorageAPI from "./localStorageAPI";
import clearMarkup from "./clear-markup-library";
import renderLibraryMarkup from "./render-library-markup";
import galleryLibTpl from "../handlebars/galleryLib.hbs";

const lSAPI = new localStorageAPI();

refs.myLib.addEventListener('click', onMylibraryClick);
function onMylibraryClick() {
	clearMarkup();
	if (lSAPI.getWatchedFilms().length === 0) {
		Notiflix.Notify.info('У вас нет просмотреных фильмов');
	} else {renderLibraryMarkup(galleryLibTpl(lSAPI.getWatchedFilms()))}


  refs.searchSectionEl.classList.add('hidden_markup');
  refs.wrapperBtnInHeader.classList.remove('hidden_markup');
  refs.homePageBtn.classList.remove('header__navlink--currentlink');
  refs.myLib.classList.add('header__navlink--currentlink');
//   galeryRating.classList.remove('hidden_markup');
}

refs.homePageBtn.addEventListener('click', changeHeaderInHome);
refs.homePageLogo.addEventListener ('click', changeHeaderInHome);
function changeHeaderInHome() {
  refs.wrapperBtnInHeader.classList.add('hidden_markup');
  refs.searchSectionEl.classList.remove('hidden_markup');
  refs.myLib.classList.remove('header__navlink--currentlink');
}


refs.headBtnWachedEl.addEventListener('click', displayWatchedMovies);
function displayWatchedMovies() {
	clearMarkup();
	if (lSAPI.getWatchedFilms().length === 0) {
		Notiflix.Notify.info('У вас нет просмотреных фильмов');
	} else {renderLibraryMarkup(galleryLibTpl(lSAPI.getWatchedFilms()))}

  refs.headBtnWachedEl.classList.add('library__btn--active');
  refs.headBtnQueueEl.classList.remove('library__btn--active');
  refs.myLib.classList.add('header__navlink--currentlink');
}

refs.headBtnQueueEl.addEventListener('click', displayQuereMovies);
function displayQuereMovies() {
	clearMarkup();
	if (lSAPI.getQueueFilms().length === 0) {
		Notiflix.Notify.info('Вы не выбрали фильмы для просмотра');
	} else {renderLibraryMarkup(galleryLibTpl(lSAPI.getQueueFilms()))}

  refs.headBtnQueueEl.classList.add('library__btn--active');
  refs.headBtnWachedEl.classList.remove('library__btn--active');
  refs.myLib.classList.add('header__navlink--currentlink');
}

// export default {
//     changeHeaderinLibrary,
//     changeHeaderinHome,
//     displayWatchedMovies,
//     displayQuereMovies
//  };