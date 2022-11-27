const express = require("express")
const fs = require('fs')
const cors = require('cors')

const app = express();
const port = 3000;


function getAnime() {
    // Loops through the anime directory getting all of the folder names

    let temp = []
    const videoFolder = 'C:/Users/inamd/Videos/anime'

    fs.readdirSync(videoFolder).forEach(file => {temp.push(file)});

    return temp;

}

function getMovies() {
    // Loops through the Movies directory getting all of the folder names

    let temp = [];
    const Folder = 'C:/Users/inamd/Videos/Films';

    fs.readdirSync(Folder).forEach(file => {temp.push(file)});

    return temp;
}

function getTV() {
    // Loops through the tv directory and gets all of the names of the folders

    let temp = [];
    const Folder = 'C:/Users/inamd/Videos/TV-Shows';

    fs.readdirSync(Folder).forEach(file => {temp.push(file)});

    return temp;
}

function getManga() {
    // Loops through the tv directory and gets all of the names of the folders

    let temp = [];
    const Folder = 'C:/Users/inamd/Desktop/Manga';

    fs.readdirSync(Folder).forEach(file => {temp.push(file)});

    return temp;
}

function getXXX() {
    // Loop through the given directory and gets all the names of the mp4 files

    let temp = []
    const Folder = ''
}


let Anime = {};
Anime["listOfAnime"] = getAnime();

let Movies = {};
Movies["listOfMovies"] = getMovies();

let Manga = {};
Manga["listOfManga"] = getManga();

console.log(Anime)

console.log(Movies)

console.log(Manga)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


app.use(express.static('includes/CODE'));
app.use(cors())

app.get('/anime', (req, res) =>{ res.status(200).json(Anime) });
app.get('/movies', ( req, res ) => { res.status(200).json(Movies) });
app.get('/tv', ( req, res ) => { res.status(200).json(TV) });
app.get('/manga', ( req, res ) => { res.status(200).json(Manga) });


app.listen(port, () => console.log('Server has started on port: ', port));
