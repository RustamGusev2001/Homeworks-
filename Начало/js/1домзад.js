"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже смотрели?", "");
const personalMovieDB = {
       count: numberOfFilms,
       movies: {},
       actors: {},
       genres: [],
       privat: false,
};
 const name1 = prompt("Один из просмотренных фильмов?", ""),
       rate1 = prompt("На сколько оцените его?", ""),
       name2 = prompt("Один из просмотренных фильмов?", ""),
       rate2 = prompt("На сколько оцените его?", "");
personalMovieDB.movies[name1] = rate1;
personalMovieDB.movies[name2] = rate2;
console.log(personalMovieDB);
