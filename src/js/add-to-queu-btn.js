import localStorageAPI from "./localStorageAPI";

const lSAPI = new localStorageAPI();

function onAddQueueBtnClick(movie, evt) {
  const button = evt.target;

  if (button.textContent === 'ADD TO QUEUE') {
    lSAPI.saveFilmToQueueArr(movie);
    lSAPI.saveToQueueLocal();
    
    renameToDeleteQueueBtn(button);
  } else {
    lSAPI.removeQueueFilm(movie.id);
    renameToAddQueueBtn(button)
  }
}

function renameToDeleteQueueBtn(button) {
  button.textContent = 'DELETE FROM QUEUE'
}

function renameToAddQueueBtn(button) {
  button.textContent = 'ADD TO QUEUE'
}

export { onAddQueueBtnClick,  renameToDeleteQueueBtn}