import icons from '../images/sprite.svg';
const gitIcon = `${icons}#git_icon`;
const mailIcon = `${icons}#mail_icon`;
const linkedInIcon = `${icons}#icon-linkedin`;
const phoneIcon = `${icons}#mobile-phone_icon`;
const crossIcon = `${icons}#close_icon`;

const teamList = document.querySelector('.team-list');
const teamCardList = document.querySelector('.footer-modal__wrap__upper');

const teamItems = [
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77212359?v=4',
    teamItemName: 'Владислав Неманихин',
    teamPosition: 'Team Lead',
    gitLink: 'https://github.com/Vlad-Nemanikhin',
    emailLink: 'vladnemanihin15@gmail.com',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380666699988',
    mainDuties:
      'Координация работы всего проекта, ответственность за гитхаб, мерж веток, проверка реквестов.',
    id: 1,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77548827?v=4',
    teamItemName: 'Валерия Бедулина',
    teamPosition: 'Scrum master',
    gitLink: 'https://github.com/Lera24',
    emailLink: 'bedulinavalera21@gmail.com',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380955325489',
    mainDuties:
      'Координация скорости и качеста выполнения всех потоков создания сего чудного сайта!',
    id: 2,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77615583?v=4',
    teamItemName: 'Балабух Николай',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/nickbron',
    emailLink: 'nick_bron@ukr.net',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380509485523',
    mainDuties: 'Разработчик',
    id: 3,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77894935?v=4',
    teamItemName: 'Вепрецкая Евгения',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/Evgeniavep',
    emailLink: 'enychka12@gmail.com',
    linkedinLink: 'https://linkedin.com/in/евгения-вепрецкая-08412821a/',
    telNumber: '+380666699988',
    mainDuties: 'Разработчик',
    id: 4,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77636476?v=4',
    teamItemName: 'Граковский Аким',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/Akim3351',
    emailLink: 'aakim5586@gmail.com',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380666699988',
    mainDuties: 'Разработчик',
    id: 5,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77733283?v=4',
    teamItemName: 'Запара Денис',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/DennyZ24',
    emailLink: 'dzapara24@gmail.com',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380994483316',
    mainDuties: 'Разработчик',
    id: 6,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/69204457?v=4',
    teamItemName: 'Коваленко Виталий',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/kovalenko-23',
    emailLink: 'vitaliikovalenko23@gmail.com',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380631935259',
    mainDuties: 'Разработчик',
    id: 7,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77807168?v=4',
    teamItemName: 'Коваль Роман',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/Roman-Koval',
    emailLink: 'kovalrv83@gmail.com',
    linkedinLink: 'https://www.linkedin.com/in/roman-koval-2b3736203/',
    telNumber: '+380976788677',
    mainDuties: 'Разработчик',
    id: 8,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/67787169?v=4',
    teamItemName: 'Медведев Анатолий',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/Anatolii-med',
    emailLink: 'med.anatolii@gmail.com',
    linkedinLink: 'https://www.linkedin.com/in/anatolii-medvediev-a81b60180/',
    telNumber: '+380660800906',
    mainDuties: 'Разработчик',
    id: 9,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77930040?v=4',
    teamItemName: 'Пучкова Ирина',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/irynapuchkova',
    emailLink: 'irynapuchkova18@gmail.com',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380672462682',
    mainDuties: 'Разработчик',
    id: 10,
  },
];

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
              ><svg class="team-social__icon" >
                <use  href="${gitIcon}"></use>
              </svg>
            </a>
            <a href="mailto:${emailLink}" class="team-item__social-link"
              ><svg class="team-social__icon" >
                <use  href="${mailIcon}"></use></svg
            ></a>
            <a href="${linkedinLink}" class="team-item__social-link"
              ><svg class="team-social__icon" >
                <use  href="${linkedInIcon}"></use></svg
            ></a>
            <a href="tel:${telNumber})" class="team-item__social-link"
              ><svg class="team-social__icon" >
                <use  href="${phoneIcon}"></use></svg
            ></a>
          </div>
        </li>`;
  },
);

teamList.insertAdjacentHTML('beforeend', createTeamElements.join(''));

// !закрытие модалки
const backdropFooter = document.querySelector('.footer-backdrop');
const modalFooter = document.querySelector('.footer-backdrop__modal');
const closeModalBtn = document.querySelector('.close-btn-modal');
const heartButton = document.querySelector('.heart');
const developerLink = document.querySelector('.developers__link');

backdropFooter.addEventListener('click', onFootBackdropClick);
closeModalBtn.addEventListener('click', onFootModalCloseBtnClick);
window.addEventListener('keydown', onKeyEscPress);
heartButton.addEventListener('click', onHeartClick);
developerLink.addEventListener('click', onHeartClick);

function onFootModalCloseBtnClick(e) {
  backdropFooter.classList.toggle('backdrop--is-hidden');
  modalFooter.classList.toggle('modal--close');

  backdropFooter.removeEventListener('click', onFootBackdropClick);
  window.removeEventListener('keydown', onKeyEscPress);
}

function onFootBackdropClick(e) {
  if (e.target === e.currentTarget) {
    backdropFooter.classList.toggle('backdrop--is-hidden');
    modalFooter.classList.toggle('modal--close');
  }
}

function onKeyEscPress(e) {
  if (e.code === 'Escape') {
    if (!teamCard.classList.contains('modal--close')) {
      teamCard.classList.add('modal--close');
    } else {
      backdropFooter.classList.toggle('backdrop--is-hidden');
      modalFooter.classList.toggle('modal--close');
    }
  }
}

function onHeartClick(e) {
  backdropFooter.classList.toggle('backdrop--is-hidden');
  modalFooter.classList.toggle('modal--close');
  backdropFooter.addEventListener('click', onFootBackdropClick);
  window.addEventListener('keydown', onKeyEscPress);
}

// !

//! Создание разметки карточки

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
              ><svg class="team-social__icon__upper" width="50" height="50">
                <use width="50" height="50" href="${gitIcon}"></use>
              </svg>
            </a>
            <a href="mailto:${emailLink}" class="team-item__social-link__upper"
              ><svg class="team-social__icon__upper" width="50" height="50">
                <use width="50" height="50" href="${mailIcon}"></use></svg
            ></30
            <a href="${linkedinLink}" class="team-item__social-link__upper"
              ><svg class="team-social__icon__upper" width="50" height="50">
                <use width="50" height="50" href="${linkedInIcon}"></use></svg
            ></a>
            <a href="tel:${telNumber})" class="team-item__social-link__upper"
              ><svg class="team-social__icon__upper" width="50" height="50">
                <use width="50" height="50" href="${phoneIcon}"></use></svg
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

teamCardList.insertAdjacentHTML('afterbegin', createTeamCardElements.join(''));

// ! ОТОБРАЖЕНИЕ ВТОРОЙ МОДАЛКИ
const teamCard = document.querySelector('.footer-team-card-wrap');

//* скрытие второ  модалки
//скрытие по клику бэкдроп
teamCard.addEventListener('click', onUpperBackdropClick);

function onUpperBackdropClick(e) {
  if (e.target === e.currentTarget) {
    teamCard.classList.add('modal--close');
    slideIndex = 0;
  }
}

//скрытие по крестику работает только на первой карточке
const closeUpperModalBtn = document.querySelector('.close-btn__modal_upper');
closeUpperModalBtn.addEventListener('click', oncloseUpperModalBtn);

function oncloseUpperModalBtn() {
  teamCard.classList.add('modal--close');
}

// по клавише ESC

function onKeyEscPressUpperModal(e) {
  if (e.code === 'Escape') {
    backdropFooter.classList.toggle('backdrop--is-hidden');
    modalFooter.classList.toggle('modal--close');
  }
}
// !

// ! slider
/* Индекс слайда по умолчанию */
var slideIndex;
// showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides((slideIndex = n));
  teamCard.classList.remove('modal--close');
}

/* Основная функция сладера */
function showSlides(n) {
  var i;
  const slides = document.getElementsByClassName('item');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
prev.addEventListener('click', minusSlide);
next.addEventListener('click', plusSlide);

// ! slider

// *костыли....для открытия карточки коллеги по клику на фото.... уже не костыли, а рабочий код :)
const photoLink = document.querySelector('.team-list');
photoLink.addEventListener('click', showUpperModal);

function showUpperModal(event) {
  event.preventDefault();
  if (!modalFooter.classList.contains('modal--close') && event.target.nodeName === 'IMG') {
    const cardId = event.target.dataset.id;
    return currentSlide(cardId);
  }
}
// *
