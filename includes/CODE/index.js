
const animeBtn = document.getElementById('anime')
const mangaBtn = document.getElementById('manga')
const moviesBtn = document.getElementById('movies')
const tvBtn = document.getElementById('tv')

const baseURL = 'http://localhost:3000/';

let Anime = []
let Movies = []
let Manga = []

async function getAnime () {
    // Gets the list of anime
    
    const res = await fetch(baseURL + 'anime', 
        {
            mode: 'cors',
            method: 'GET'
    });
    console.log(res);

    const data = await res.json();
    Anime = data.Anime;

    console.log(Anime)
    
}

async function getMovies () {
    // Gets the list of movies

    const res = await fetch(baseURL + 'movies',
    {
        mode: 'cors',
        method: 'GET'
    });
    console.log(res);

    const data = await res.json;
    Movies = data.Movies;

    console.log(Movies);

}

async function getManga () {
    // Gets the list of manga

    const res = await fetch(baseURL + 'manga', 
    {
        mode: 'cors',
        method: 'GET'
    });
    console.log(res)

    const data = await res.json;
    Manga = data.Manga;

    console.log(Manga);
}

// Sends the request for the respective lists depending on which button is clicked
animeBtn.addEventListener('click', getAnime);
moviesBtn.addEventListener('click', getMovies);
mangaBtn.addEventListener('click', getManga)


