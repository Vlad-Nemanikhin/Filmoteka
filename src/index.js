import './sass/main.scss';
import article from './handlebars/article.hbs';
import axios from 'axios';
import Notiflix from "notiflix";
import debounce from 'lodash.debounce';
import * as APIs from './js/movies-API-service';