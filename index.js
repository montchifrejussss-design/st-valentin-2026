const boutonlike=document.querySelector(".btnlike");
const sonLike=new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
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