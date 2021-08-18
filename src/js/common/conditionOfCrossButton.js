import { refs } from '../refs';

function hideCloseButton() {
	refs.closeModalBtn.classList.add('hide');
}

function showCloseButton() {
	refs.closeModalBtn.classList.remove('hide');
}

export { hideCloseButton, showCloseButton };