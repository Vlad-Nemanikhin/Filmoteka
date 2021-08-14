import axios from 'axios';

const KEY = '?api_key=130ddbced0917ef5d6e094c730cee47c';
const QUERY = '&language=en-US&page=1&include_adult=false';


async function fetchGenres() {
    const responce = await axios.get(`https://api.themoviedb.org/3/genre/movie/list${KEY}&language=en-US`);
    const genres = await responce;
    //console.log(genres.data.genres);
    return genres.data;
}

// fetchGenres();

async function fetchTopMovies() {
    const responce = await axios.get(`https://api.themoviedb.org/3/trending/movie/day${KEY}`);
    const movies = await responce;
    console.log(movies.data);
    return movies.data;
}

// fetchTopMovies();


async function fetchMoviesByQuery(movie, page) {
    const responce = await axios.get(`https://api.themoviedb.org/3/search/movie${KEY}${QUERY}&query=${movie}&page=${page}`);
    const movies = await responce;
    return movies.data;
}

// fetchMoviesByQuery('pirates');

async function fetchMovieById(movieId) {
    const responce = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}${KEY}&language=en-US`);
    const movie = await responce;
    console.log(movie.data);
    return movie.data;
}

// fetchMovieById();

export {fetchGenres, fetchTopMovies, fetchMoviesByQuery, fetchMovieById}