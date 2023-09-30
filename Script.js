
// ......play btn.....
const playButton = document.getElementById("play-button");

const control = document.getElementById("control");


// ......right btn.....
const rightButton = document.getElementById("right-button");



// ......left btn.....
const leftButton = document.getElementById("left-button");






// ......song name .....
let songN = document.getElementById("song-name");





// ......song Img .....
let songImg = document.getElementById("rotate-image");




// ......singer name .....
let singerN = document.getElementById("singer-name");





// ....changing image ....
let ChangeImg = document.getElementsByClassName("img-area");






const music = document.querySelector("audio");

const listOfSong = [
 
//  ...............1 song...........
    {
        songUrl: "Let Me ",
        singerName: "Zyan Malik",
        songName: "Let Me",
        songImg:"Zyan",

    },
//  ...............2 song...........

    {
        songUrl: "main tera hero",
        singerName: "Arman Malik",
        songName: "Mai Tera Hero",
        songImg:"Main terra hero",

    },


//  ...............3 song...........

   


    {
        songUrl: "Salamat",
        singerName: "Rachit Sahu",
        songName: "Salamat Rahe",
        songImg:"Salamat",
    },
//  ...............4 song...........


    {
        songUrl: "Stranger",
        singerName: "Sadie Sink",
        songName: "Stranger Thing",
        songImg:"Stranger",

    },

//  ...............5 song...........


{
    songUrl: "Doctor_Strange___Believer(256k)",
    singerName: "Rachit",
    songName: "Believer",
    songImg:"Beliver",

},
//  ...............6 song...........


{
    songUrl: "NEFFEX_-_Cold_[Copyright_Free](256k)",
    singerName: "Rachit Favourite",
    songName: "Cold",
    songImg:"cold",

},

//  ...............7 song...........




];











// ............play btn functionality........

let isPlaying = true;
const playMus = () => {

     isPlaying = false;
    music.play();
    songImg.classList.add("anime");
    songImg.classList.add("style");
    playButton.src = "./pause.png";

}
const pauseMus = () => {
   isPlaying = true;

    music.pause();
    songImg.classList.remove("anime");
    songImg.classList.remove("style");
  

    playButton.src = "./play-button.png";



}

playButton.addEventListener("click", () => {
    if (isPlaying) {
       playMus();
    } else {
        pauseMus();
    }


})


// ............right btn functionality........



const musicLoad=(listOfSong)=>{
    music.src="./"+listOfSong.songUrl+".mp3";
    songImg.src="./"+listOfSong.songImg+".jpg";
    singerN.textContent=listOfSong.singerName;
    songN.textContent=listOfSong.songName;
    

}


let musicIndex=0;
rightButton.addEventListener("click", () => {
    
    musicIndex=(musicIndex+1)%listOfSong.length;
    musicLoad(listOfSong[musicIndex]); // Example: Load the third song from the list
    playButton.src = "./pause.png";
    music.play();

});

// ............right btn functionality........
leftButton.addEventListener("click", () => {
    musicIndex=(musicIndex-1+listOfSong.length)%listOfSong.length;
    musicLoad(listOfSong[musicIndex]); // Example: Load the third song from the list
    playButton.src = "./pause.png";
   
    music.play();
});