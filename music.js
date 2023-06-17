
// /.........for playing................
const PlayButton = document.querySelector("#play-button");
const AudioPlay = document.querySelector(".audio");

// /.........for pausing................
const PauseButton = document.querySelector("#pause-button");




// ..............change song detail.........
const SongName = document.querySelector(".song-name");
const SingerName = document.querySelector(".singer-name");
const RotateImage=document.querySelector(".rotate-image");
// ...................left button.......

const LeftButton = document.querySelector("#left-button")



// ...................right button.......

const RightButton = document.querySelector("#right-button")



// ...........data of song
const songs = [
    {
        SongName: "never let you go",
        SingerName: "Zyan Malik",
        RotateImage:""
    },
    {
        SongName: "let me love you",
        SingerName: "Justine ",

    },
    {
        SongName: "mistileo ",
        SingerName: "Justine bieber",

    },

];


const LoadSong=(songs)=>{
    SongName.textContent=songs.SongName;
    SingerName.textContent=songs.SingerName;

}


SongIndex=0;
const NextSong=()=>{
    SongIndex=(SongIndex+1)% songs.length;
    LoadSong(songs[SongIndex]);
}

const PreveSong=()=>{
    SongIndex=(SongIndex-1);

    LoadSong(songs[SongIndex]);

}
RightButton.addEventListener("click",NextSong);
LeftButton.addEventListener("click",PreveSong);


PauseButton.addEventListener("click", () => {
    AudioPlay.pause();
})


PlayButton.addEventListener('click', () => {
    AudioPlay.play();
})