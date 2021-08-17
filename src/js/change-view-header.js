// const galeryRating = document.querySelectorAll('.gallery__info-rating');

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
		alert("You don't watched any film")
	} else {renderLibraryMarkup(galleryLibTpl(lSAPI.getWatchedFilms()))}

  refs.header.classList.remove('header--home');
  refs.header.classList.add('header--library');
  refs.searchSectionEl.classList.add('hidden_markup');
  refs.wrapperBtnInHeader.classList.remove('hidden_markup');
  refs.homePageBtn.classList.remove('header__navlink--currentlink');
  refs.myLib.classList.add('header__navlink--currentlink');
//   galeryRating.classList.remove('hidden_markup');
}

refs.homePageBtn.addEventListener('click', changeHeaderInHome);
refs.homePageLogo.addEventListener ('click', changeHeaderInHome);

function changeHeaderInHome() {
  refs.header.classList.remove('header--library');
  refs.header.classList.add('header--home');
  refs.wrapperBtnInHeader.classList.add('hidden_markup');
  refs.searchSectionEl.classList.remove('hidden_markup');
  refs.myLib.classList.remove('header__navlink--currentlink');
}


refs.headBtnWachedEl.addEventListener('click', displayWatchedMovies);
function displayWatchedMovies() {
	clearMarkup();
	if (lSAPI.getWatchedFilms().length === 0) {
		alert("You don't watched any film")
	} else {renderLibraryMarkup(galleryLibTpl(lSAPI.getWatchedFilms()))}

  refs.headBtnWachedEl.classList.add('library__btn--active');
  refs.headBtnQueueEl.classList.remove('library__btn--active');
  refs.myLib.classList.add('header__navlink--currentlink');
}

refs.headBtnQueueEl.addEventListener('click', displayQuereMovies);
function displayQuereMovies() {
	clearMarkup();
	if (lSAPI.getQueueFilms().length === 0) {
		alert("You don't chose any film")
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