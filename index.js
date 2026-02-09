const boutonlike=document.querySelector(".btnlike");
const sonLike=new Audio("https://cdn.pixabay.com/download/audio/2025/01/19/audio_af5c830f07.mp3?filename=freesoundeffects-button-click-289742.mp3");
boutonlike.addEventListener("click", ()=>
{   sonLike.currentTime=0;
    sonLike.play();
    boutonlike.classList.toggle("active");});

const tousBoutons=document.querySelectorAll(".btn1");
tousBoutons.forEach((bouton) =>{
    bouton.addEventListener("click", ()=>{
        sonLike.currentTime=0;
        sonLike.play();
bouton.classList.toggle("active");
    });
})