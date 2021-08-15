const libraryBtn = document.querySelector('#navlink-library');
const btnInHeader = document.querySelector('.library__section');
const inputSearch = document.querySelector('.search__section');
const homePageBtn = document.querySelector('#navlink-home');
const homePageLogo = document.querySelector('.header__link');
const bntWatch = document.querySelector('#button-watched');
const bntQuere = document.querySelector('#button-queue');
const galeryRating = document.querySelectorAll('.gallery__info-rating');

libraryBtn.addEventListener('click', changeHeaderinLibrary);

function changeHeaderinLibrary () {
    inputSearch.classList.add('hidden_markup');
    btnInHeader.classList.remove('hidden_markup');
    homePageBtn.classList.remove('header__navlink--currentlink');
    libraryBtn.classList.add('header__navlink--currentlink');
    galeryRating.classList.remove('hidden_markup');
}

homePageBtn.addEventListener('click', changeHeaderinHome);

function changeHeaderinHome () {
    btnInHeader.classList.add('hidden_markup');
    inputSearch.classList.remove('hidden_markup');
    libraryBtn.classList.remove('header__navlink--currentlink');
}

homePageLogo.addEventListener ('click', changeHeaderinHome);

bntWatch.addEventListener('click', displayWatchedMovies);

function displayWatchedMovies () {
    bntWatch.classList.add('library__btn--active');
    bntQuere.classList.remove('library__btn--active');
    libraryBtn.classList.add('header__navlink--currentlink');
}

bntQuere.addEventListener('click', displayQuereMovies);

function displayQuereMovies () {
    bntQuere.classList.add('library__btn--active');
    bntWatch.classList.remove('library__btn--active');
    libraryBtn.classList.add('header__navlink--currentlink');
}

export default {libraryBtn, 
    btnInHeader, 
    inputSearch, 
    homePageBtn, 
    homePageLogo, 
    bntWatch,
    bntQuere,
    changeHeaderinLibrary,
    changeHeaderinHome,
    displayWatchedMovies,
    displayQuereMovies
 };

