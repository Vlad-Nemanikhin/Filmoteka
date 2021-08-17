
const refs = {
	//Header
	formEl: document.querySelector('.search__form'),
	inputEl: document.querySelector('#search-input'),
	notifyEl: document.querySelector('#search-hint'),
	//Header-----Library
	myLib: document.querySelector('#navlink-library'),
	headBtnWachedEl: document.querySelector('#button-watched'),
	headBtnQueueEl: document.querySelector('#button-queu'),
	//Gallery
	galleryEl: document.querySelector('.gallery__list'),
	dateEl: document.querySelector('.gallery__date'),
	//Gallery-----Modal
	backdropEl: document.querySelector('.backdrop'),
	modalEl: document.querySelector('.modal'),
	modalCloseEl: document.querySelector('.modal__cross'),
	addToWatchedBtn: document.querySelector('button[data-name="watched"]'),
	addToQueueBtn: document.querySelector('button[data-name="queue"]'),
	//Gallery-----Scroll Up Button
	topScrollBtn: document.querySelector('#scroll-btn'),
	//Footer
	footerHeartEl: document.querySelector('.heart'),
	footerLinkEl: document.querySelector('.developers__link'),
	//Footer-----Modal
	footerBackdropEl: document.querySelector('.footer-backdrop'),
	footerBackdropClose: document.querySelector('.close-btn'),
};
export { refs };