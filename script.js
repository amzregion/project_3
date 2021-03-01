"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememderMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('Done!');
		} else {
			console.log('error');
			i--;
		}
	}
}
// rememderMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Просмотрено довольно мало фмильмов');
	} else if (personalMovieDB.count < 30) {
		alert('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		alert('Вы киноман!');
	} else {
		alert('Произошла ошибка!');
	}
}
// detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под немором ${i}`, '');
	}
}
writeYourGenres();