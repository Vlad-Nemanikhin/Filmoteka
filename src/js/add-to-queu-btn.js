import localStorageAPI from "./localStorageAPI";

const addQueueBtn = document.querySelector('button[data-name="queue"]')

addQueueBtn.addEventListener('click', onAddQueueBtnClick)

function onAddQueueBtnClick(evt) {
  button = evt.target;
}

function renameToDeleteQueueBtn(button) {
  button.textContent = 'Delete from queue'
}

function renameToAddQueueBtn(button) {
  button.textContent = 'Add to queue'
}