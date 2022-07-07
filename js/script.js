const APIURL = "https://api.themoviedb.org/3/movie/550?api_key=89e672244e364d235a99109e1f362dda";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
//const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=89e672244e364d235a99109e1f362dda&query=";

var api_key = "?api_key=89e672244e364d235a99109e1f362dda";
var SEARCHAPI = "https://api.themoviedb.org/3/search/movie"+api_key+"&region=EN&query=";
//var SEARCHAPI = "https://api.themoviedb.org/3/movie/";

const content = document.getElementById("content");

async function getMovies(url) {
	const resp = await fetch(url);
	const respData = await resp.json();

	console.log(respData);

	showMovies(respData.results);
}

function escolheFilme(){
	const rndInt = Math.floor(Math.random() * 4) + 1
	//var filme = document.getElementById('search').value;
	var filme = "";

	switch(rndInt){
		case 1: 
		filme = "O-Homem-do-futuro";
		break;
		case 2:
		filme = "The-Adam-Project";
		break;
		case 3:
		filme = "amelia";
		break;
		case 4:
		filme = "turning-red";
		case 5:
		filme = "Downton Abbey 2";
		break;
	}

	getMovies(SEARCHAPI + filme);

	console.log(filme)
}


function showMovies(movies) {
    // clear content
    content.innerHTML = "";
    var i = 0;
    while( i < 1){
    	var movie = movies[0]
    	const { poster_path, title, vote_average, overview } = movie;

    	const movieEl = document.createElement("div");
    	movieEl.classList.add("movie");

    	movieEl.innerHTML = `
    	<img
    	src="${IMGPATH + poster_path}"
    	alt="${title}"
    	/>
    	`;

    	content.appendChild(movieEl);

    	i++;
    }
/*
    movies.forEach((movie) => {
    	const { poster_path, title, vote_average, overview } = movie;

    	const movieEl = document.createElement("div");
    	movieEl.classList.add("movie");

    	movieEl.innerHTML = `
    	<img
    	src="${IMGPATH + poster_path}"
    	alt="${title}"
    	/>
    	<div class="movie-info">
    	<h3>${title}</h3>
    	</div>
    	<div class="overview">
    	<h3>Overview:</h3>
    	${overview}
    	</div>
    	`;

    	content.appendChild(movieEl);
    }); */
}