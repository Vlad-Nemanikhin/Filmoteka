import icons from '../images/sprite.svg';
const gitIcon = `${icons}#git_icon`;
const mailIcon = `${icons}#mail_icon`;
const linkedInIcon = `${icons}#icon-linkedin`;
const phoneIcon = `${icons}#mobile-phone_icon`;

const teamList = document.querySelector('.team-list');
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
  },
];

//! Создание разметки команды

const createTeamElements = teamItems.map(
  ({ photoLink, teamItemName, teamPosition, gitLink, emailLink, linkedinLink, telNumber }) => {
    return `<li class="team-item">
          <img
            src="${photoLink}"
            alt="member"
            width="150"
            height="150"
            class="team-item__photo"
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
);

teamList.insertAdjacentHTML('beforeend', createTeamElements.join(''));
