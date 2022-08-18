enum Gender {
    ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type infoFilm = {
    name: string,
    launchYear: number,
    movieGender: Gender,
    rate?: number
}

const movie: infoFilm = {
    name: "Mack&Rita",
    launchYear: 2022,
    movieGender: Gender.COMEDIA,
    rate: 49
}

const movie2: infoFilm = {
    name: "The Time Traveler's Wife",
    launchYear: 2009,
    movieGender: Gender.DRAMA,
}

const movie3: infoFilm = {
    name: "Fences",
    launchYear: 2016,
    movieGender: Gender.DRAMA,
}

const movie4: infoFilm = {
    name: "The Imitation Game",
    launchYear: 2014,
    movieGender: Gender.ACAO,
}

console.log(movie, movie2, movie3, movie4)