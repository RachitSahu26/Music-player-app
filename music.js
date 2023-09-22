
// ......play btn.....
const playButton = document.getElementById("play-button");

const control = document.getElementById("control");
// ......right btn.....

const rightButton = document.getElementById("right-button");
// ......left btn.....

const leftButton = document.getElementById("left-button");



const audio = document.getElementById("audio");

const listOfSong=["./Let Me .mp3","./main tera hero.mp3","./Salamat.mp3","./Stranger.mp3"];











// ............play btn functionality........

let msuicImg=true;

    playButton.addEventListener("click", function () {
if(msuicImg){

    audio.src=listOfSong[0];
    playButton.src = "./pause.png";
    msuicImg=false;
}else{
   
    audio.pause();
    playButton.src = "./play-button.png"; 
    msuicImg=true;

}
    })
    musicSong = 0;

  






// ............left btn functionality........


    leftButton.addEventListener("click",function(){

    } )



