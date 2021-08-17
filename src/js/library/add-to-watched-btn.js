import localStorageAPI from "../common/localStorageAPI";

const lSAPI = new localStorageAPI();

function onAddWatchedBtnClick(movie, evt) {
  lSAPI.saveFilmToWatchedArr(movie);
  lSAPI.saveToWatchedLocal();
}


function renameToDeleteWatchedBtn(button) {
  button.textContent = 'Delete from watched'
}

function renameToAddWatchedBtn(button) {
  button.textContent = 'Add to watched'
}

export {onAddWatchedBtnClick}