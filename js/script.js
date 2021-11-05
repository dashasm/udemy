"use strict";
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", " ");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", " ");
  }
}

start();

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 1; i++) {
    const a = prompt("Останній переглянутий фільм", " "),
      b = prompt("На скільки ви його оціните?", " ");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personaMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function detectpersonalLevel() {
  if (numberOfFilms <= 10) {
    alert("Досить мало фільмів переглянуто");
  } else if (numberOfFilms > 10 && numberOfFilms <= 30) {
    alert("Ви класичний глядач");
  } else if (numberOfFilms > 30) {
    alert(" Ви кіноман");
  }
}

detectpersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personaMovieDB);
  }
}
showMyDB(personaMovieDB.private);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personaMovieDB.genres[i] = prompt(
      `Ваш улюблений жанр під номером ${i + 1}`
    );
  }
}
writeYourGenres();

console.log(personaMovieDB);
