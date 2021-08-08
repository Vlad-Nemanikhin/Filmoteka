import './sass/main.scss';
import ApiService from './js/movies-API-service';
import article from './handlebars/article.hbs';
import cards from './handlebars/grid-cards.hbs';
import axios from 'axios';
import Notiflix from "notiflix";
import debounce from 'lodash.debounce';