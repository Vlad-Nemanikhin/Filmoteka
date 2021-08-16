import * as APIs from './movies-API-service';
import cards from '../handlebars/gallery.hbs';
import { refs } from './refs';
import { getYear } from 'date-fns';
import Notiflix from 'notiflix';
import fPagination from './pagination';
let page = 1;
// Функция записи жанров в локалсторедж
async function getGenres() {
    try {
        const result = await APIs.fetchGenres();
        const genres = result.genres;
        for (const genre of genres) {
            localStorage.setItem(`${genre.id}`,`${genre.name}`);
        }
    } catch (error) {
        console.log(error);
    }
}

getGenres();

// Функция отрисовки страници

async function fetchTopMovies(page) {
    try {
        const response = await APIs.fetchTopMovies(page);
        Notiflix.Loading.dots('Processing...');
        const movies = response.results;
        //___________ПАГИНАЦИЯ_______________________
        const totalHits = response.total_pages;
        let currentPage = response.page;
        console.log(totalHits);
        console.log(response.page);

        const instance = fPagination();
        instance.setTotalItems(totalHits);
        instance.movePageTo(response.page);

        instance.on('afterMove', event => {
            currentPage = event.page;
            clearContainer();
            fetchTopMovies(currentPage);
            console.log('currentPage', currentPage);
        });
        //_________________________________________

        renderTopMovies(movies);
        renderGenres(movies);
        Notiflix.Loading.remove();
    } catch (error) {
        console.log(error);
    }
}

    fetchTopMovies(page);

    // Функция отрисовки популярных фильмов
    function renderTopMovies(movies) {
        const markup = movies
            .map(el => {
                el.release_date = getYear(new Date(el.release_date));
                const { id, poster_path, original_title, title, vote_average, release_date } = el;
                return cards({ id, poster_path, original_title, title, vote_average, release_date });
            })
            .join('');

        //console.log(markup);
        refs.galleryEl.insertAdjacentHTML('beforeend', markup);
    }


    // Функция отрисовки жанров
    function renderGenres(movies) {
        const galleryItem = document.querySelectorAll('.gallery__info-genre');
        const galleryItems = [...galleryItem];
        //console.log(galleryItems)

        galleryItems.map((div, i) => {
            const result = movies.map(movie => {
                const movieGenres = movie.genre_ids;
                let array = [];
                let genreString;
                movieGenres.map(gener => {
                    if (movieGenres.length < 3) {
                        const moviegener = localStorage.getItem(gener);
                        array.push(moviegener);
                        genreString = array.join(', ');
                    }

                    if (movieGenres.length >= 3) {
                        const moviegener = localStorage.getItem(gener);
                        array.push(moviegener);
                        let genreArray = array.slice(0, 2);
                        genreArray.push('другие');
                        genreString = genreArray.join(', ');
                    }
                });
                //console.log(genreString)
                return genreString;
            });

            const li = `<li class="gallery__info-item">${result[i]}</li>`;
            //console.log(li)
            div.insertAdjacentHTML('afterbegin', li);
        });
    }



    //чистим галерею при обновлении результатов поиска
    function clearContainer() {
        if (refs.galleryEl.hasChildNodes() === true) {
            refs.galleryEl.innerHTML = '';
        }
        return;
    }

export { renderTopMovies, fetchTopMovies, getGenres, renderGenres };