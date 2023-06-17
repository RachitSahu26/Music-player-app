const Music=document.querySelector('.audio');
const Img=document.querySelector('.rotate-image');

const Play=document.querySelector('#play-button');
Play.addEventListener("click", ()=>{
    Music.play();
Play.classList.remove("#play-button");
    Img.classList.add('anime');


  })