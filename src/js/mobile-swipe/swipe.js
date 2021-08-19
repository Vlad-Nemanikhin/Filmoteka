import { refs } from '../refs';
import { renderTopMovies, fetchTopMovies, getGenres, renderGenres } from '../gallery/popular-movies';

let initialPoint;
let finalPoint;
refs.galleryEl.addEventListener('touchstart', function(event) {
event.preventDefault();
event.stopPropagation();
initialPoint=event.changedTouches[0];
}, false);
refs.galleryEl.addEventListener('touchend', function(event) {
event.preventDefault();
event.stopPropagation();
finalPoint=event.changedTouches[0];
let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);

   if (xAbs > 20) {
      if (xAbs > yAbs) {
         if (finalPoint.pageX < initialPoint.pageX) {
            /*СВАЙП ВЛЕВО*/
            let page = 1;
            if (page) { return } else {
               getGenres();
               fetchTopMovies(page);

               async function fetchTopMovies(page) {
                  try {
                     const res = await APIs.fetchTopMovies(page);
                     Notiflix.Loading.dots('Processing...');
                     const movies = res.results;
                     //___________ПАГИНАЦИЯ_______________________
                     const totalResult = res.total_results;
                     const totalHits = res.total_pages;
                     let currentPage = res.page;
                     const instance = fPagination();
                     instance.setItemsPerPage(20);
                     instance.setTotalItems(totalResult);
                     instance.movePageTo(currentPage - 1);
                     renderTopMovies(movies);
                     renderGenres(movies);
                     Notiflix.Loading.remove();
                  } catch (error) {
                     console.log(error);
                  }
               }
            }            }
else {
            /*СВАЙП ВПРАВО*/
            let page;
            if (page === 1) { return } else {
               getGenres();
               fetchTopMovies(page);
               
               async function fetchTopMovies(page) {
                  try {
                     const res = await APIs.fetchTopMovies(page);
                     Notiflix.Loading.dots('Processing...');
                     const movies = res.results;
                     //___________ПАГИНАЦИЯ_______________________
                     const totalResult = res.total_results;
                     const totalHits = res.total_pages;
                     let currentPage = res.page;
                     const instance = fPagination();
                     instance.setItemsPerPage(20);
                     instance.setTotalItems(totalResult);
                     instance.movePageTo(currentPage - 1);
                     renderTopMovies(movies);
                     renderGenres(movies);
                     Notiflix.Loading.remove();
                  } catch (error) {
                     console.log(error);
                  }
               }
            }           
}
      }
   }
}, false);