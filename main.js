    
const audioBtn = document.getElementById("audio");
const audio = new Audio("./assets/audio/track.mp3");
audio.currentTime = 0 ;
audioBtn.addEventListener('click',()=>{
    audio.play();
});


const button = document.getElementById('button');

button.addEventListener('click',function(){
    setTimeout(() => {
        button.classList.add('clicked');
    }, 5000);
    window.location.href = "game.html";
});