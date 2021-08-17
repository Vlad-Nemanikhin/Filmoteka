import * as APIs from '../common/movies-API-service';
import { refs } from '../refs';
import card from '../../handlebars/gallery.hbs';
import Notiflix from 'notiflix';
import { getYear } from 'date-fns';
import fPagination from './pagination';

let page = 1;
let pageArr = [];
saveGenres();

refs.formEl.addEventListener('submit', getMoviesCards);

//Основная функция - callback события
export function getMoviesCards(e) {
  e.preventDefault();
  const movie = e.currentTarget.elements.searchQuery.value.trim();
  resetPage();

  if (movie.length > 1) {
    APIs.fetchMoviesByQuery(movie, page)
      .then(res => {
        //выводим сообщение при неудачном поиске
        if (res.total_results === 0) {
          refs.notifyEl.classList.add('search__hint--blocked');
        } else {
          refs.notifyEl.classList.remove('search__hint--blocked');
          //запускаем спиннер
          Notiflix.Loading.dots('Processing...');
          //___________ПАГИНАЦИЯ_______________________
          const totalHits = res.total_pages;
          const instance = fPagination();
          instance.setTotalItems(totalHits);
          instance.movePageTo(page);
          //отлавливаем  событие при переходе по страницам при пагинации
          instance.on('afterMove', event => {
            const currentPage = event.page;
            //получаем массив обЪектов фильмов на конкретной странице
            onMore(movie, currentPage);
            });
        
          page = page + 1;
          //получаем массив обЪектов фильмов, которые пришли по запросу
          const data = res.results.map(el => {
            return el;
          });
          //получаем массив массивов имен жанров фильмов, которые пришли по запросу
          const arrOfGenres = getherGenreNamesForData(data);
          //очищаем контейнер
          clearContainer();
          //рендерим карточки фильмов
          renderFilms(data, arrOfGenres);
          //останавливаем спиннер
          Notiflix.Loading.remove();
          return res.results;
        }
      })
      .catch(error => {
        console.dir(error);
      });
  }
}

//рендерит разметку по шаблону
function renderFilms(data, arrOfGenres) {
//записываем массивы названия жанров в каждый обЪект фильма
  data[0].genre_names = arrOfGenres[0];
  data[1].genre_names = arrOfGenres[1];
  data[2].genre_names = arrOfGenres[2];
  data[3].genre_names = arrOfGenres[3];
  data[4].genre_names = arrOfGenres[4];
  data[5].genre_names = arrOfGenres[5];
  data[6].genre_names = arrOfGenres[6];
  data[7].genre_names = arrOfGenres[7];
  data[8].genre_names = arrOfGenres[8];
  data[9].genre_names = arrOfGenres[9];
  data[10].genre_names = arrOfGenres[10];
  data[11].genre_names = arrOfGenres[11];
  data[12].genre_names = arrOfGenres[12];
  data[13].genre_names = arrOfGenres[13];
  data[14].genre_names = arrOfGenres[14];
  data[15].genre_names = arrOfGenres[15];
  data[16].genre_names = arrOfGenres[16];
  data[17].genre_names = arrOfGenres[17];
  data[18].genre_names = arrOfGenres[18];
  data[19].genre_names = arrOfGenres[19];
  //подменяем дату на год
  data.map(el => {
            const normalDate = getYear(new Date(el.release_date));
            return (el.release_date = normalDate);
          });
//деструктуризируем объекты
  const {
    poster_path,
    title,
    original_title,
    release_date,
    vote_average,
    id,
    genre_names,
    ...rest
  } = data;
  //создаем разметку по шаблону
  const markup = data
    .map(({ poster_path, title, original_title, release_date, vote_average, id, genre_names }) => {
      return card({
        poster_path,
        title,
        original_title,
        release_date,
        vote_average,
        id,
        genre_names,
      });
    })
    .join('');
  //помещаем в контейнер
  refs.galleryEl.insertAdjacentHTML('beforeend', markup);
}

//Рендерит страницу с номером страницы
async function onMore(movie, currentPage) {
  try {
    //запускаем спиннер
    Notiflix.Loading.dots('Processing...');
    const cards = await APIs.fetchMoviesByQuery(movie, currentPage);
    const data = cards.results.map(el => {
      return el;
    })
    //получаем массив массивов имен жанров фильмов, которые пришли по запросу
    const arrOfGenres = getherGenreNamesForData(data);

    //очищаем контейнер
    clearContainer();
    //рендерим карточки фильмов
    renderFilms(data, arrOfGenres);
    //останавливаем спиннер
    Notiflix.Loading.remove();
  } catch (error) {
        console.log(error);
    }
}

//Вытягивает массив id жанров и массив names жанров, записывает в localStorage
async function saveGenres() {
  const result = await APIs.fetchGenres();
  const genres = result.genres;
  //получаем массив всех id жанров фильмов
  const idArr = genres.map(genre => {
    return genre.id;
  });
  //записываем массив id в локальное хранилище
  localStorage.setItem('id', JSON.stringify(idArr));
  //получаем массив всех names жанров фильмов
  const nameArr = genres.map(genre => {
    return genre.name;
  });
  //записываем массив names жанров в локальное хранилище
  localStorage.setItem('name', JSON.stringify(nameArr));
}

//Выоводит массив массивов имен жанров по каждому объекту фильма согласно их genre_ids. Номер индекса подмассива жанров в массиве соответствует номеру индекса объекта фильма
function getNameOfGenre(parsedId, parsedName, data) {
  //console.log(data);
  let idx = 0;
  let gNames = [];
  let foundName = '';
  //получаем массив ids жанров по каждому пришедшему обЪекту фильма
  const genreArrIds = data.map(el => {
    return el.genre_ids;
  });
  //перебираем ids каждого объекта фильма
  genreArrIds.map(item => {
    //циклом перебираем значения ids каждого объекта фильма
    for (let i = 0; i < item.length; i++) {
      //если массив id в локальном хранилище содержит значение ids, то находим его индекс, а по индексу находим name жанра в массиве из локального хранилища
      if (parsedId.includes(item[i]) === true) {
        idx = parsedId.indexOf(item[i]);
        foundName = parsedName[idx];

        //записываем names жанров в массив
        gNames.push(foundName);
      }
    }
    return gNames;
  });
  //получаем длину массива ids в каждом пришедшем обЪекте фильма
  const arrLength = genreArrIds.map(item => {
    return item.length;
  });

  let gArr = [];
  let slicedArr = [];
  let splicedArr = [];
  //перебираем массив длин ids по каждому обЪекту фильма
  for (let i = 0; i < arrLength.length; i++) {
    //если длина - 0, то записываем в массив "no ganres", иначе создаем массив имен жанров (на подобии ids) по каждом отдельному обЪекту фильма
    if (arrLength[i] === 0) {
      gArr.push(['жанр фильма не указан']);
    } else {
      slicedArr = gNames.slice(0, arrLength[i]);
      gArr.push(slicedArr);
      splicedArr = gNames.splice(0, arrLength[i]);
    }
  }
  return gArr;
}

//Собирает имена жанров в массивы и обрезает, если количество больше 2
function getherGenreNamesForData(data) {
          //получаем данные из хранилища и массив массивов имен жанров
          const parsedId = JSON.parse(localStorage.getItem('id'));
          const parsedName = JSON.parse(localStorage.getItem('name'));
          const arrayOfGenres = getNameOfGenre(parsedId, parsedName, data);
          //проходимся по массивам имен жанров в каждом обЇекте фильмов
  arrayOfGenres.map(el => {
            //если длина массива имен больше 2 - обрезаем
            if (el.length >= 3) {
              return el.splice(2, el.length - 2);
              }
          })
  return arrayOfGenres;
}

//чистим галерею при обновлении результатов поиска
function clearContainer() {
  if (refs.galleryEl.hasChildNodes() === true) {
    refs.galleryEl.innerHTML = '';
  }
  return;
}

//сбрасываем количество просмотренных страниц
function resetPage() {
  return (page = 1);
}
