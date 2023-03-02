const song0 = new Audio("./assets/sounds/grieg-morning.mp3");
const song1 = new Audio("./assets/sounds/mozart-night-serenade.mp3");
const song2 = new Audio("./assets/sounds/chaykovskiy-swanlake.mp3");
const song3 = new Audio("./assets/sounds/vivaldi-spring.mp3");

const SONGS = [song0, song1, song2, song3];
SONGS.forEach( song => song.addEventListener("ended", () => {
    SONGS[currentSong].currentTime = 0;
    currentSong++;
    if (currentSong ===  SONGS.length) {
        currentSong = 0;
    }
    SONGS[currentSong].play();
    hightlightTrack();
    isPlaying = true;
    showPauseIcon();
}) )

const prevSongButton = document.querySelector(".prev-song");
const nextSongButton = document.querySelector(".next-song");
let isPlaying = false;
let currentSong =0;

const controlButton = document.querySelector(".control-button");
controlButton.addEventListener("click", () => {
    if (isPlaying === false ) {
        SONGS[currentSong].play();
        showPauseIcon();
        hightlightTrack();
    } else {
        SONGS[currentSong].pause();
        controlButton.classList.remove("pause-song");
        controlButton.classList.add("play-song");
        hightlightTrack();
    }
    isPlaying = !isPlaying;
;})

prevSongButton.addEventListener("click", () => {
    SONGS[currentSong].pause();
    SONGS[currentSong].currentTime = 0;
    currentSong--;
    if (currentSong < 0 ) {
        currentSong = SONGS.length - 1;
    }
    SONGS[currentSong].play();
    hightlightTrack();
    isPlaying = true;
    showPauseIcon();
})

nextSongButton.addEventListener("click", () => {
    SONGS[currentSong].pause();
    SONGS[currentSong].currentTime = 0;
    currentSong++;
    if (currentSong ===  SONGS.length) {
        currentSong = 0;
    }
    SONGS[currentSong].play();
    hightlightTrack();
    isPlaying = true;
    showPauseIcon();
})

function showPauseIcon () {
    controlButton.classList.remove("play-song");
    controlButton.classList.add("pause-song");
}

const songTags = document.querySelectorAll(".song-title");

function hightlightTrack() {
    songTags.forEach( songTag => {
        if (songTag.id.slice(4) == currentSong ) {
            songTag.classList.add("active-track");
        }
        else songTag.classList.remove("active-track");
    } )
}