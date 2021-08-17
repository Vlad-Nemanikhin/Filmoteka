import localStorageAPI from "../common/localStorageAPI";

const lSAPI = new localStorageAPI();

function onAddWatchedBtnClick(movie, evt) {
  const button = evt.target;

  if (button.textContent === 'ADD TO WATCHED') {
    lSAPI.saveFilmToWatchedArr(movie);
    lSAPI.saveToWatchedLocal();
    
    renameToDeleteWatchedBtn(button);
  } else {
    lSAPI.removeWatchedFilm(movie.id);
    renameToAddWatchedBtn(button);
  }
}

function renameToDeleteWatchedBtn(button) {
  button.textContent = 'DELETE FROM WATCHED'
}

function renameToAddWatchedBtn(button) {
  button.textContent = 'ADD TO WATCHED'
}

export { onAddWatchedBtnClick, renameToDeleteWatchedBtn }