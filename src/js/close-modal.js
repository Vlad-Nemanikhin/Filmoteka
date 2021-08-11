const backdrop = document.querySelector('.backdrop');
const closeModal = () => backdrop.classList.add('modal--close');

export default {backdrop, closeModal};

//Пример закрытия модалки из курса по верстке
//(() => {	
//const refs = {
//   openModalBtn: document.querySelector('[data-modal-open]'),
//   closeModalBtn: document.querySelector('[data-modal-close]'),
//   modal: document.querySelector('[data-modal]'),
//};
//
//refs.openModalBtn.addEventListener('click', toggleModal);
//refs.closeModalBtn.addEventListener('click', toggleModal);
//
//function toggleModal() {
//   refs.modal.classList.toggle('backdrop--is-hidden');
//}
//})();