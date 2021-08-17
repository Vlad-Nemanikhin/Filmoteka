import { refs } from '../refs';
import { teamItems } from './info-about-team';
import { hideCloseButton, showCloseButton } from '../common/conditionOfCrossButton';
import { hangScrollBtn } from '../top-btn-scroll';
import { hideButton, showButton } from '../common/conditionOfScrollBtn';
import icons from '../../images/sprite.svg';
const gitIcon = `${icons}#git_icon`;
const mailIcon = `${icons}#mail_icon`;
const linkedInIcon = `${icons}#icon-linkedin`;
const phoneIcon = `${icons}#mobile-phone_icon`;
const crossIcon = `${icons}#close_icon`;
const closeUpperModalBtn = document.querySelector('.close-btn__modal_upper');


//! Создание разметки команды

const createTeamElements = teamItems.map(
  ({
    photoLink,
    teamItemName,
    teamPosition,
    gitLink,
    emailLink,
    linkedinLink,
    telNumber,
    mainDuties,
    id,
  }) => {
    return `<li class="team-item">
            <img
            src="${photoLink}"
            alt="member"
            width="150"
            height="150"
            class="team-item__photo"
            data-id="${id}"
          />
          <p class="team-item__name">${teamItemName}</p>
          <p class="team-item__position">${teamPosition}</p>
          <div class="team-item__social">
            <a href="${gitLink}" class="team-item__social-link"
              ><svg class="team-social__icon" width="18" height="18">
                <use width="18" height="18" href="${gitIcon}"></use>
              </svg>
            </a>
            <a href="mailto:${emailLink}" class="team-item__social-link"
              ><svg class="team-social__icon" width="18" height="18">
                <use width="18" height="18" href="${mailIcon}"></use></svg
            ></a>
            <a href="${linkedinLink}" class="team-item__social-link"
              ><svg class="team-social__icon" width="18" height="18">
                <use width="18" height="18" href="${linkedInIcon}"></use></svg
            ></a>
            <a href="tel:${telNumber})" class="team-item__social-link"
              ><svg class="team-social__icon" width="18" height="18">
                <use width="18" height="18" href="${phoneIcon}"></use></svg
            ></a>
          </div>
        </li>`;
  },
).join('');

refs.teamList.insertAdjacentHTML('beforeend', createTeamElements);

//открытие модалки
refs.developerLink.addEventListener('click', onDeveloperLinkClick);
function onDeveloperLinkClick(e) {
  e.preventDefault();
  refs.backdropFooter.classList.toggle('backdrop--is-hidden');
  refs.modalFooter.classList.toggle('modal--close');
  refs.backdropFooter.addEventListener('click', onFootBackdropClick);
  document.body.classList.add('modal-open');
  window.removeEventListener('scroll', hangScrollBtn);
  window.addEventListener('keydown', onKeyEscPress);
  hideButton();
}
//Закрытие модалки по крестику
refs.closeModalBtn.addEventListener('click', onFootModalCloseBtnClick);
function onFootModalCloseBtnClick(e) {
  refs.backdropFooter.classList.toggle('backdrop--is-hidden');
  refs.modalFooter.classList.toggle('modal--close');
  refs.backdropFooter.removeEventListener('click', onFootBackdropClick);
  window.removeEventListener('keydown', onKeyEscPress);
  window.addEventListener('scroll', hangScrollBtn);
  document.body.classList.remove('modal-open');
  showButton();
}
//Закрытие модалки по бэкдропу
refs.backdropFooter.addEventListener('click', onFootBackdropClick);
function onFootBackdropClick(e) {
  if (e.target === e.currentTarget) {
    refs.backdropFooter.classList.toggle('backdrop--is-hidden');
    refs.modalFooter.classList.toggle('modal--close');
    document.body.classList.remove('modal-open');
    window.addEventListener('scroll', hangScrollBtn);
    showButton();
  }
}
//Закрытие по ESC
window.addEventListener('keydown', onKeyEscPress);
function onKeyEscPress(e) {
  if (e.code === 'Escape') {
    refs.backdropFooter.classList.toggle('backdrop--is-hidden');
    refs.modalFooter.classList.toggle('modal--close');
    document.body.classList.remove('modal-open');
    window.addEventListener('scroll', hangScrollBtn);
    showButton();
  }
}

//! Создание разметки карточки
/* Индекс слайда по умолчанию */
const createTeamCardElements = teamItems.map(
  ({
    photoLink,
    teamItemName,
    teamPosition,
    gitLink,
    emailLink,
    linkedinLink,
    telNumber,
    mainDuties,
  }) => {
    return `<div class="team-item__container item">
      <button class="close-btn-modal close-btn__modal_upper modal__cross" data-modal-close>
    <svg class="close-btn__icon" width="18" height="18">
      <use width="18" height="18" href="${crossIcon}"></use>
    </svg>
  </button>      
    <img
            src="${photoLink}"
            alt="member"
            width="200"
            height="200"
            class="team-item__photo__upper"/>
          <p class="team-item__name__upper">${teamItemName}</p>
          <p class="team-item__position__upper">${teamPosition}</p>
          <div class="team-item__social__upper">
            <a href="${gitLink}" class="team-item__social-link__upper"
              ><svg class="team-social__icon__upper">
                <use href="${gitIcon}"></use>
              </svg>
            </a>
            <a href="mailto:${emailLink}" class="team-item__social-link__upper"
              ><svg class="team-social__icon__upper">
                <use href="${mailIcon}"></use></svg
            ></30
            <a href="${linkedinLink}" class="team-item__social-link__upper"
              ><svg class="team-social__icon__upper">
                <use href="${linkedInIcon}"></use></svg
            ></a>
            <a href="tel:${telNumber})" class="team-item__social-link__upper"
              ><svg class="team-social__icon__upper">
                <use href="${phoneIcon}"></use></svg
            ></a>
          </div>
          
          <div class="team-item__inform">
			    <div class="team-item__upper2">
          <p class="team-item__feature">Ключевые особенности на проекте</p>
          </div>
          <div class="team-item__upper3">
          <p class="team-item__discr__upper">${mainDuties}</p>
          </div>
        </div>
        </div>`;
  },
);

refs.teamCardList.insertAdjacentHTML('afterbegin', createTeamCardElements.join(''));

// ! ОТОБРАЖЕНИЕ ВТОРОЙ МОДАЛКИ
const teamCard = document.querySelector('.footer-team-card-wrap');
const photoLink = document.querySelector('.team-list');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let slideIndex;

photoLink.addEventListener('click', showUpperModal);

function showUpperModal(e) {
  e.preventDefault();
  window.addEventListener('keydown', onKeyEscPressUpperModal);
  if (!refs.modalFooter.classList.contains('modal--close') && e.target.nodeName === 'IMG') {
    hideCloseButton();
    window.removeEventListener('keydown', onKeyEscPress);
    const cardId = e.target.dataset.id;
    return currentSlide(cardId);
  } 
}

/* Устанавливает текущий слайд */
function currentSlide(cardId) {
  showSlides((slideIndex = cardId));
  teamCard.classList.remove('modal--close');
}

/* Основная функция слайдера */
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('item');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slideIndex++;
    slides[i].style.display = 'none';
    
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block"
}
  }



//* скрытие второй  модалки
//скрытие по клику бэкдроп
teamCard.addEventListener('click', onUpperBackdropClick);

function onUpperBackdropClick(e) {
  if (e.target === e.currentTarget) {
    teamCard.classList.add('modal--close');
    slideIndex = 0;
  }
  window.removeEventListener('keydown', onKeyEscPressUpperModal);
}

//скрытие по крестику работает только на первой карточке
//const closeUpperModalBtn = document.querySelector('.close-btn__modal_upper');
//closeUpperModalBtn.addEventListener('click', onCloseUpperModalBtn);
//function onCloseUpperModalBtn() {
//  teamCard.classList.add('modal--close');
//window.removeEventListener('keydown', onKeyEscPressUpperModal);
//}

// по клавише ESC

function onKeyEscPressUpperModal(e) {
  if (e.code === 'Escape') {
    refs.backdropFooter.classList.toggle('backdrop--is-hidden');
    refs.modalFooter.classList.toggle('modal--close');
    teamCard.classList.add('modal--close');
    window.addEventListener('keydown', onKeyEscPress);
  }
}


prev.addEventListener('click', minusSlide);
next.addEventListener('click', plusSlide);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides((slideIndex -= 1));
}