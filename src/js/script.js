"use strict";



const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start() {
    while (this['count'] == '' || this['count'] == null || 
    (isNaN(this['count']) || this['count'] === 0)) {
    this['count'] = +prompt('Как много фильмов вы смотрите?', '');
  }},
  detectPersonalLevel(count) {
    if (count < 10) {
      alert("Просмотрено довольно мало фильмов")
    } else if (count >= 10 && (
      count) <= 30) {
            alert("Вы обычный зритель");
          } else if (count > 30) {alert('Вы киноман!')}
          else alert("Ошибка!");
    
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?'),
            b = prompt('На сколько оцените его?');
      if (a != null && b != null && (a != '' && 
        b != '') && a.length < 50) {
          console.log('done');
          personalMovieDB['movies'][a] = b;
        } else {
          console.log('error');
          i--;
        }
    } 
  },
  showMyDB(hiden) {
    if (!hiden) return console.log('yatta!');
  },
  writeYourGenres() {
    for (let i = 0; i < 3; i++) {
      let  a = prompt(`Ваш любимий жанр под номером ${1 + i}`, '');
      if (a != '' && a != null) {
        console.log('Жанр записан');
        this['genres'][i] = a;
      } else {
        console.log('Не записал жанр');
        i--;
      }
    } this.genres.forEach((i, b) => {
      console.log(`Любимый жанр №(${1 + b}) - это ${i}`); 
    });
  },
  toggleVisibleMyDB(privat) {
    if (privat) {
      privat = false; 
    } 
    else  {
      privat = true;
      }
    console.log(privat);
  },
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel(personalMovieDB['count']);
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB(personalMovieDB['privat']);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB(personalMovieDB['privat']);

console.log(personalMovieDB);




