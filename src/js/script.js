"use strict";

let numberOfFilms;

do {
  numberOfFilms = prompt('Как много фильмов вы смотрите?', '');
} while(numberOfFilms == "" || numberOfFilms === null || numberOfFilms.length > 50)

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (personalMovieDB['count'] < 10) {
  alert("Просмотрено довольно мало фильмов")
} else if (personalMovieDB['count'] >= 10 && (
  personalMovieDB['count']) <= 30) {
        alert("Вы обычный зритель");
      } else if (personalMovieDB['count'] > 30) {alert('Вы киноман!')}
      else alert("Ошибка!");


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

console.log(personalMovieDB);




