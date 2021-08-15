export default class {

  constructor() { }

  WATCHED_KEY = 'watch';
  QUEUE_KEY = 'queue'

  filmWatchedArr = [];
  filmQueueArr = [];

  //---------Save parth-------------

  saveToWatchedLocal() {
    try {
      const jsonFormat = JSON.stringify(this.filmWatchedArr);
      localStorage.setItem(this.WATCHED_KEY, jsonFormat)
    } catch (error) {
      console.error("Set state error: ", error.message)
    }
  }

  saveToQueueLocal() {
    try {
      const jsonFormat = JSON.stringify(this.filmQueueArr);
      localStorage.setItem(this.QUEUE_KEY, jsonFormat)
    } catch (error) {
      console.error("Set state error: ", error.message)
    }
  }

  saveFilmToWatchedArr(film) {
    film.btnValue = 'Delete film from watched'
    this.filmWatchedArr.push(film)
  }

  saveFilmToQueueArr(film) {
    film.btnValue = 'Delete film from queue'
    this.filmQueueArr.push(film)
  }

  //-----------Delete parth-------------

  removeWatchedFilm(id) {
    const filmIdx = this.filmWatchedArr.indexOf(this.filmWatchedArr.find(film => film.id === id));
    this.filmWatchedArr.splice(filmIdx, 1);
    this.saveToWatchedLocal()
  }

  removeQueueFilm(id) {
    const filmIdx = this.filmQueueArr.indexOf(this.filmQueueArr.find(film => film.id === id));
    this.filmQueueArr.splice(filmIdx, 1);
    this.saveToQueueLocal()
  }

  //---------Get film parth----------

  getWatchedFilms() {
    try {
      const jsonFormat = localStorage.getItem(this.WATCHED_KEY);
      return jsonFormat === null ? undefined : JSON.parse(jsonFormat);
    } catch (error) {
      console.error("Get state error: ", error.message)
    }
  }

  getQueueFilms() {
    try {
      const jsonFormat = localStorage.getItem(this.QUEUE_KEY);
      return jsonFormat === null ? undefined : JSON.parse(jsonFormat);
    } catch (error) {
      console.error("Get state error: ", error.message)
    }
  }

}