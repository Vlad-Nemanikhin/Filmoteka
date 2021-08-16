import './sass/main.scss';
import * as APIs from './js/movies-API-service';
import modalHidden from './js/close-modal';
import * as renderFilms from './js/renderFilmsFromSubmit';
import changeHeader from './js/change-view-header';
import './js/footer_modal';
import switchTheme from './js/switch-theme';
import { renderTopMovies, fetchTopMovies, getGenres, renderGenres } from './js/popular-movies.js';
import * as topScrollBtn from './js/top-btn-scroll';
import article from './handlebars/article.hbs';
import axios from 'axios';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { getYear } from 'date-fns';
import Pagination from 'tui-pagination';
import 'lazysizes';

getGenres();
APIs.fetchGenres();
