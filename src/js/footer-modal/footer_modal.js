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
const closeBtmUpperModal = document.querySelector('.close-btn__upper_modal');

//! Создание разметки команды

const createTeamElements = teamItems
  .map(
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
          <h3 class="team-item__name">${teamItemName}</h3>
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
  )
  .join('');

refs.teamList.insertAdjacentHTML('beforeend', createTeamElements);

//открытие модалки
refs.developerLink.addEventListener('click', onDeveloperLinkClick);
function onDeveloperLinkClick(e) {
  e.preventDefault();
  refs.backdropFooter.classList.remove('backdrop--is-hidden');
  refs.modalFooter.classList.remove('modal--close');
  refs.backdropFooter.addEventListener('click', onFootBackdropClick);
  document.body.classList.add('modal-open');
  window.removeEventListener('scroll', hangScrollBtn);
  window.addEventListener('keydown', onKeyEscLeftRightPress);
  hideButton();

  changeToDarkTheme();

  refs.body.style.overflow = 'hidden';
}

// Применение темной темы
function changeToDarkTheme() {
  if (document.body.classList.contains('dark-theme')) {
    refs.modalFooter.classList.add('theme-dark');
    refs.modalFooter.classList.remove('theme-light');

    refs.teamCard.classList.add('theme-dark');
    refs.teamCard.classList.remove('theme-light');
  } else {
    refs.modalFooter.classList.add('theme-light');
    refs.modalFooter.classList.remove('theme-dark');

    refs.teamCard.classList.add('theme-light');
    refs.teamCard.classList.remove('theme-dark');
  }
}

//Закрытие модалки по крестику
refs.closeModalBtn.addEventListener('click', footModalClose);

function footModalClose(e) {
  refs.backdropFooter.classList.add('backdrop--is-hidden');
  refs.modalFooter.classList.add('modal--close');
  refs.backdropFooter.removeEventListener('click', onFootBackdropClick);
  document.body.classList.remove('modal-open');
  window.addEventListener('scroll', hangScrollBtn);
  window.removeEventListener('keydown', onKeyEscLeftRightPress);
  refs.body.style.overflow = 'visible';
  showButton();
}
//Закрытие модалки по бэкдропу
refs.backdropFooter.addEventListener('click', onFootBackdropClick);

function onFootBackdropClick(e) {
  if (e.target === e.currentTarget) {
    footModalClose();
  }
}
//Закрытие по ESC и работа стрелок

function onKeyEscLeftRightPress(e) {
  if (e.code === 'Escape') {
    if (!teamCard.classList.contains('modal--close')) {
      onUpperBackdropClose();
      prev.removeEventListener('keydown', onPressKeyLeft);
      next.removeEventListener('keydown', onPressKeyRight);
    } else {
      footModalClose();
    }
  }
  if (e.code === 'ArrowLeft') {
    minusSlide();
  }
  if (e.code === 'ArrowRight') {
    plusSlide();
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
    return `
  <li class="team-item__container item">
  <div class="img-wrp">
    <img src="${photoLink}" alt="member" class="team-item__photo__upper" />

    <div class="item-descr">
      <p class="team-item__name__upper">${teamItemName}</p>
      <p class="team-item__position__upper">${teamPosition}</p>

    <div class="team-item__social__upper">
      <a href="${gitLink}" class="team-item__social-link__upper"
        ><svg class="team-social__icon__upper" width="30" height="30">
          <use href="${gitIcon}"></use>
        </svg>
      </a>
      <a href="mailto:${emailLink}" class="team-item__social-link__upper"
        ><svg class="team-social__icon__upper" width="30" height="30">
          <use href="${mailIcon}"></use></svg
      ></a>
      <a href="${linkedinLink}" class="team-item__social-link__upper"
        ><svg class="team-social__icon__upper" width="30" height="30">
          <use href="${linkedInIcon}"></use></svg
      ></a>
      <a href="tel:${telNumber})" class="team-item__social-link__upper"
        ><svg class="team-social__icon__upper" width="30" height="30">
          <use href="${phoneIcon}"></use></svg
      ></a>
    </div>
    </div>
  </div>
  <div class="team-item__inform">
    <div class="team-item__upper2">
      <p class="team-item__feature">Ключевые особенности на проекте</p>
    </div>
    <div class="team-item__upper3">
      <p class="team-item__discr__upper">${mainDuties}</p>
    </div>
  </div>
</li>`;
  },
);

refs.teamCardList.insertAdjacentHTML('afterbegin', createTeamCardElements.join(''));

// ! ОТОБРАЖЕНИЕ ВТОРОЙ МОДАЛКИ
const teamCard = document.querySelector('.footer-team-card-wrap');
const photoLink = document.querySelector('.team-list');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let slideIndex = null;

photoLink.addEventListener('click', showUpperModal);

function showUpperModal(e) {
  e.preventDefault();
  // window.addEventListener('keydown', onKeyEscPressUpperModal);
  if (!refs.modalFooter.classList.contains('modal--close') && e.target.nodeName === 'IMG') {
    hideCloseButton();

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
  let i = 0;
  const slides = document.getElementsByClassName('item');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
  }
  slides[slideIndex - 1].style.display = 'block';
}

//* скрытие второй  модалки
//скрытие по клику бэкдроп
teamCard.addEventListener('click', onUpperBackdropClick);

function onUpperBackdropClick(e) {
  if (e.target === e.currentTarget) {
    prev.removeEventListener('keydown', onPressKeyLeft);
    next.removeEventListener('keydown', onPressKeyRight);
    onUpperBackdropClose();
  }
}

//  скрытие по крестику
closeBtmUpperModal.addEventListener('click', onUpperBackdropClose);

// сама функция скрытия второй модалки
function onUpperBackdropClose(e) {
  teamCard.classList.add('modal--close');
  slideIndex = null;
}

prev.addEventListener('click', minusSlide);
next.addEventListener('click', plusSlide);
prev.addEventListener('keydown', onPressKeyLeft);
next.addEventListener('keydown', onPressKeyRight);

function onPressKeyRight(e) {
  if (e.code === 'ArrowRight') {
    showSlides((slideIndex += 1));
  }
}

function onPressKeyLeft(e) {
  if (e.code === 'ArrowLeft') {
    showSlides((slideIndex -= 1));
  }
}

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide(e) {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide(e) {
  showSlides((slideIndex -= 1));
}
