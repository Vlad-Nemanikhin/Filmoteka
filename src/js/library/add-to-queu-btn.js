import localStorageAPI from "../common/localStorageAPI";

const lSAPI = new localStorageAPI();



function onAddQueueBtnClick(movie, evt) {
  lSAPI.saveFilmToQueueArr(movie);
  lSAPI.saveToQueueLocal();
}

function renameToDeleteQueueBtn(button) {
  button.textContent = 'Delete from queue'
}

function renameToAddQueueBtn(button) {
  button.textContent = 'Add to queue'
}

export {onAddQueueBtnClick}