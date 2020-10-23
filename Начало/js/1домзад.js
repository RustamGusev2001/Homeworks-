"use strict";

let numberOfFilms;
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
    while( numberOfFilms =="" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
    }
}
start();
const personalMovieDB = {
       count: numberOfFilms,
       movies: {},
       actors: {},
       genres: [],
       privat: false,
};
function rememberMyFilms() {
    let name1,
    rate1,
    i = 0;
do {
    name1 = prompt("Один из просмотренных фильмов?", "");
    rate1 = prompt("На сколько оцените его?", "");
    if (name1 != null && rate1 != null && name1.length < 50 && rate1.length <50 && name1 != "" && rate1 != "" ) {
        personalMovieDB.movies[name1] = rate1;
        console.log("done");
        i++;
    }
    else { console.log("error");}
} while(i<2);
    
}
rememberMyFilms();
function detectPersonalLvl() {
    if (numberOfFilms < 10) {
        alert("Посмотрено довольно мало фильмов");
    }
    else if (numberOfFilms<30 && numberOfFilms>=10) {
        alert("Вы классический зритель");
    }
    else if (numberOfFilms>=30){
        alert("Вы киноман!");
    }
    else {
        alert("Произошла ошибка!");
    }
}
detectPersonalLvl();
function writeYourGenres() {
    for ( let i = 0; i < 3; i++ ) {
      let g = prompt(`Ваш любимый жанр № ${i+1}`, "");
      personalMovieDB.genres[i] = g;
    }
}
writeYourGenres();
function showMyDB() {
    if (personalMovieDB.privat != true) {
        console.log(personalMovieDB);
    }
}
showMyDB();

