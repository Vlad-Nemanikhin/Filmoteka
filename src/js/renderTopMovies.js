

const gallery = document.querySelector('.gallery__list');

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
async function fetchTopMovies() {
    try {
        const response = await APIs.fetchTopMovies();
        const movies = response.results;
        renderTopMovies(movies);
        renderGenres(movies);
        renderReleaseYear(movies);
        // console.log(movies);
    } catch (error) {
        console.log(error);
    }
}

fetchTopMovies();

// Функция отрисовки популярных фильмов
function renderTopMovies(movies) {
    const markup = cards(movies);
    gallery.insertAdjacentHTML('beforeend', markup);
}

// Функция отрисовки жанров
function renderGenres(movies) {
    const galleryItem = document.querySelectorAll('.gallery__image-wrapper');
    const galleryItems = [...galleryItem];
           
    galleryItems.map((div, i) => {
        const result = movies.map((movie) => {
        const movieGenres = movie.genre_ids;
        let array = [];
        let genreString;
            movieGenres.map((gener) => {
                if (movieGenres.length === 3 || movieGenres.length < 3) {
                    const moviegener = localStorage.getItem(gener);
                    array.push(moviegener);
                    genreString = array.join(', ');
                }

                if (movieGenres.length > 3) {
                    const moviegener = localStorage.getItem(gener);
                    array.push(moviegener);
                    let genreArray = array.slice(0, 2);
                    genreArray.push('Other');
                    genreString = genreArray.join(', ');
                }


            });
            return genreString;
        });

        const span = `<span calss="genres">${result[i]}</span>`;
        div.insertAdjacentHTML('beforeend', span);
    })
}


// Функция отрисовки года выпуска фильма
function renderReleaseYear(movies) {
    const galleryItem = document.querySelectorAll('.gallery__image-wrapper');
    const galleryItems = [...galleryItem];
    
    galleryItems.map((element, i) => {
        const result = movies.map((movie) => {
            let releaseYear = movie.release_date.slice(0, 4);
            return releaseYear;
        });

        const span = `<span class="date">${result[i]}</span>`;
        element.insertAdjacentHTML('beforeend', span);
    });
}