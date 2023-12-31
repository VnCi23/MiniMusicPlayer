// media controllers
const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

// record player animation
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

// playing song
const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
const musicbox = document.querySelector("#musicbox");

// control button images
let playImg = "./assets/images/play1.svg";
let pauseImg = "./assets/images/pause1.svg";


// default controls
playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "Atlantis",
        source: "./assets/music/Seafret_-_Atlantis_(Official_Video).MP3",
        cover: "./assets/images/profile.png"
    },
    {
        name: "Daylight",
        source: "./assets/music/David_Kushner_-_Daylight_(Official_Music_Video).MP3",
        cover: "./assets/images/profile.png"
    },
    {
        name: "golden_hour",
        source: "./assets/music/JVKE_-_golden_hour_(official_music_video).MP3",
        cover: "./assets/images/profile.png"
    },
    {
        name: "Sleep_Well",
        source: "./assets/music/d4vd_-_Sleep_Well_[Official_Music_Video].MP3",
        cover: "./assets/images/profile.png"
    },
    {
        name: "Laugh_It_Off",
        source: "./assets/music/Laugh_It_Off.MP3",
        cover: "./assets/images/profile.png"
    }
    
];
// helper function
function createEle(ele) {
    return document.createElement(ele);
}
function append(parent, child) {
    return parent.append(child);
}
// creating track list
const ul = createEle('ul')
function createPlayList() {
    songList.forEach((song) => {
        let h3 = createEle('h3');
        let li = createEle('li');

        li.classList.add("track-item");
        h3.innerText = song.name;
        append(li,h3);
        append(ul,li)
    })
    append(musicbox, ul);
}

let songIndex = 0;
// preloaded song
loadMusic(songList[songIndex]);


function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}

function playSong() {
    playPause.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");

    audio.play();
}

function pauseSong() {
    playPause.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");

    audio.pause();
}

function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong()
}

function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong()
}
function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pauseSong() : playSong();
}


// player event 
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()