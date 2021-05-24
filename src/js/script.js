"use strict";

let numberOfFilms;

function start() {
  
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Как много фильмов вы смотрите?', '');
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function detectPersonalLevel() {
  if (personalMovieDB['count'] < 10) {
    alert("Просмотрено довольно мало фильмов")
  } else if (personalMovieDB['count'] >= 10 && (
    personalMovieDB['count']) <= 30) {
          alert("Вы обычный зритель");
        } else if (personalMovieDB['count'] > 30) {alert('Вы киноман!')}
        else alert("Ошибка!");
  
}
// detectPersonalLevel();
  

function rememberMyFilms() {
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
}

// rememberMyFilms();

function showMyDB() {
  if (personalMovieDB.privat === false) return personalMovieDB;
}

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let  a = prompt(`Ваш любимий жанр под номером ${1 + i}`, '');
    if (a != '' && a != null) {
      console.log('Жанр записан');
      personalMovieDB['genres'][i] = a;
    } else {
      console.log('Не записал жанр');
      i--;
    }
  }
}
writeYourGenres();

console.log(personalMovieDB);




