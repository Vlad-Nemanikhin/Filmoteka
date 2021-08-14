import axios from 'axios';

const KEY = '?api_key=130ddbced0917ef5d6e094c730cee47c';
const QUERY = '&language=en-US&page=1&include_adult=false';


async function fetchGenres() {
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list${KEY}&language=en-US`);
    const genres = await response;
    //console.log(genres.data.genres);
    return genres.data;
}

// fetchGenres();

async function fetchTopMovies() {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day${KEY}`);
    const movies = await response;
    return movies.data;
}

// fetchTopMovies();


async function fetchMoviesByQuery(movie) {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie${KEY}${QUERY}&query=${movie}`);
    const movies = await response;
    return movies.data;
}

// fetchMoviesByQuery('pirates');

async function fetchMovieById(movieId) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}${KEY}&language=en-US`);
    const movie = await response;
    // console.log(movie.data);
    return movie.data;
}

// fetchMovieById();

export {fetchGenres, fetchTopMovies, fetchMoviesByQuery, fetchMovieById}