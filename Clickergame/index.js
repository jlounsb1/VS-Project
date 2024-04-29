const subHeading = document.getElementById("subheading");

const newScore = document.getElementById("score");
const startGame = document.getElementById("startgame");
const stopGame = document.getElementById("stopgame");
const resetGame = document.getElementById("resetgame");
const timeLeft = document.getElementById("timeleft");

let gameBtn = document.querySelectorAll(".gamebtn");

let counter = 100;
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


gameBtn.forEach((btn)=>{btn.disabled=true});
stopGame.disabled =true;
resetGame.disabled = true;

startGame.addEventListener("click", function() {
    gameBtn.forEach(btn =>{
        btn.disabled=false;
        btn.style.backgroundColor= "rgba(195, 239, 195, 0.7)";
        btn.textContent = "😀";
       
    });
    subHeading.textContent = `GO!! Click all the green happy faces!`;
    if(!isRunning){
        startTime=Date.now() - elapsedTime;
        timer =setInterval(update, 10);
        isRunning = true;
    }
    startGame.disabled=true;
    resetGame.disabled=true;
    stopGame.disabled=false;
});

resetGame.addEventListener("click", function() {
    
    
    subHeading.textContent = `Click Start to begin the game`;
    timeLeft.textContent = `10`;
    counter = 100;
    newScore.textContent = `${counter}`;
    timer = null;
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    resetGame.disabled = true;
    startGame.disabled = false;
    stopGame.disabled=false;
    gameBtn.forEach((btn)=>{
        btn.disabled=true; 
        btn.style.backgroundColor= "rgba(195, 239, 195, 0.7)";
        btn.textContent = "😀";
        
    });
});


stopGame.addEventListener("click", function() {
   
    clearInterval(timer);
    isRunning = false;
    stopGame.disabled=true;
    startGame.disabled=true;
    resetGame.disabled=false;
    subHeading.textContent =`Wow! You're score was ${counter}!`;
    gameBtn.forEach((btn)=>{btn.disabled=true});
});

gameBtn.forEach((btn)=>{btn.addEventListener('click',function() {
    counter +=10;
    newScore.textContent = `${counter}`;
});});



function update (){
    const currentTime= Date.now();
    elapsedTime = startTime-currentTime;

    let seconds = Math.floor((elapsedTime %(1000*60)) / 1000)+10;
    let milliseconds = Math.floor((elapsedTime %1000) / 10);

    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    timeLeft.textContent = `${seconds}`;
    if(seconds==0) {
        clearInterval(timer);
        isRunning = false;
        stopGame.disabled=true;
        startGame.disabled=true;
        resetGame.disabled=false;
        subHeading.textContent =`Game Over! You're score was ${counter}!`;
        gameBtn.forEach((btn)=>{btn.disabled=true});
    
    }

}

gameBtn.forEach(btn => {
    btn.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
        event.target.textContent = "X";
        event.target.style.color = "white";
        event.target.disabled=true;
    });
});