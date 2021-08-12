import localStorageAPI from "./localStorageAPI";

const addWatchedBtn = document.querySelector('button[data-name="watched"]')

addWatchedBtn.addEventListener('click', onAddWatchedBtnClick)

function onAddWatchedBtnClick(evt) {
  const button = evt.target;
}


function renameToDeleteWatchedBtn(button) {
  button.textContent = 'Delete from watched'
}

function renameToAddWatchedBtn(button) {
  button.textContent = 'Add to watched'
}