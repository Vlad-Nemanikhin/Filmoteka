import localStorageAPI from "./localStorageAPI";





function onAddQueueBtnClick(evt) {
  const button = evt.target;

  console.log(evt.target);
}

function renameToDeleteQueueBtn(button) {
  button.textContent = 'Delete from queue'
}

function renameToAddQueueBtn(button) {
  button.textContent = 'Add to queue'
}

export {onAddQueueBtnClick}