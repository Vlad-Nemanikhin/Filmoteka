import localStorageAPI from "./localStorageAPI";


function onAddWatchedBtnClick(evt, movie) {
  const button = evt.target;

  // console.log(movie);
}


function renameToDeleteWatchedBtn(button) {
  button.textContent = 'Delete from watched'
}

function renameToAddWatchedBtn(button) {
  button.textContent = 'Add to watched'
}

export {onAddWatchedBtnClick}