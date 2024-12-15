
// WORKING
let counter1= 5;
let counter2 = 5;
let score1=0;
let score2=0;

const audio = new Audio("assets/audio/gametrack.mp3");
audio.currentTime = 0 ;

function checkWin(a,b){

  if(a=='A'){
    if(b=='B' || b=='C') return 1;
    else if(b=='D' || b=='A') return 0;
  }
  else if(a=='B'){
    if(b=='D' || b=='C') return 1;
    else if(b=='A' || b=='B') return 0;
  }
  else if(a=='C'){
    if(b=='A' || b=='B') return 0;
    else return 1;
  }
  else{
    if(b=='A') return 1;
    else return 0;
  }
   
}

function randomAction(){
    const actions = ['A','B','C','D'];
    let action = Math.floor(Math.random()*4);
    return actions[action];
}


function hpNumberPlayer1(a){
  switch(a){
    case 1: return 0;
    case 2: return 1;
    case 3: return 2;
    case 4: return 3;
    default: return 4;
  }
}


function hpNumberPlayer2(a){
  switch(a){
      case 1: return 5;
      case 2: return 6;
      case 3: return 7;
      case 4: return 8;
      default: return 9;
  }

}

function audioStop(){
  setTimeout(()=>{
    audio.pause();
  },1000);
}

function gaming(counter1,counter2){
  let i = 1;
  let j = 1;
  while(true){
    
    let player = prompt("Enter move: ",i);

    let computer = randomAction();

    document.getElementById(computer).style.backgroundColor='yellow';

    const wins = checkWin(player,computer);

    if(wins==0){
      const c = hpNumberPlayer2(j);
      document.getElementsByClassName("hp")[c].style.backgroundColor='red';
      counter2--;
      score1++;
      j++;
    }
    else{
        const c = hpNumberPlayer1(i);
        document.getElementsByClassName("hp")[c].style.backgroundColor = 'red';
        counter1--;
        score2++;
        i++;
        }
    

    if(counter1==0 || counter2==0) {break;}
  }

  if(counter2==0) {
    document.getElementById('main-heading').innerHTML='WON';
    document.getElementById('player1').src="assets/images/win.png";

  }

  else{
    document.getElementById("main-heading").innerHTML = "LOOSER";
    document.getElementById('player2').src="assets/images/win.png";

  }
  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;
  audioStop();
}


// WELCOME WITH MUSIC

const audioBtn = document.getElementById("playbtn");

audioBtn.addEventListener('click',()=>{
    audio.play(); 
    gaming(counter1,counter2);
      
});
 


// Heading animation

const heading = document.getElementById("main-heading");
let isRed = true;
setInterval(()=>{
    if (isRed) {
        heading.style.color = "yellow"; 
      } else {
        heading.style.color = "red";
      }
      isRed = !isRed; 
    
},1000);

