import './sass/main.scss';
import * as APIs from './js/common/movies-API-service';
import localStorage from './js/common/localStorageAPI';
import *as modalOpenClose from './js/common/modal-open&close';
import './js/footer-modal/footer_modal';
import { renderTopMovies, fetchTopMovies, getGenres, renderGenres } from './js/gallery/popular-movies';
import renderArticle from './js/gallery/render-modal-one-card'
import * as renderFilms from './js/gallery/renderFilmsFromSubmit';
import * as topScrollBtn from './js/gallery/top-btn-scroll';
import changeHeader from './js/header/change-view-header';
import { onAddQueueBtnClick } from './js/library/add-to-queu-btn';
import { onAddWatchedBtnClick } from './js/library/add-to-watched-btn';
import switchTheme from './js/switch-theme';
import galleryCards from './handlebars/gallery.hbs';
import articleCard from './handlebars/article.hbs';
import axios from 'axios';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { getYear } from 'date-fns';
import Pagination from 'tui-pagination';
import 'lazysizes';

getGenres();
APIs.fetchGenres();

