
// board

var blockSize=25;
var rows=20;
var cols=20;
var board;
var context;


// snake head
var snakeX=blockSize * 5;
var snakeY=blockSize * 5;


var velocityX=0;
var velocityY=0;

var snakeBody=[];

// food
var foodX;
var foodY;

var gameOver= false;

let timerInterval;

let eatSound = new Audio('./sounds/Eat.mp3');
let gameOverSound = new Audio("./sounds/GameOver.mp3");
let sound=true;
let soundbtn=document.getElementById('soundbtn');

let score=0;
let scoredisblay=document.getElementById('score');

window.onload= function(){
    board= document.getElementById("board");
    board.height=rows * blockSize;
    board.width= cols * blockSize;
    context= board.getContext("2d"); // used for drawing on the board

    placeFood();
    document.addEventListener("keyup", changeDirection);
 //   update();
 (seconds = 0), (display = document.querySelector("#time"));
  timeSetting(seconds, display);
 setInterval (update,1000/10); // 100 millseconds
 
}

function update(){
if(gameOver){
    clearTimeout(timerInterval);
    score=0;
    scoredisblay.innerHTML='0';
    document.getElementById("gameOver").style.display = "flex";
    return;
}
    context.fillStyle="black";
    context.fillRect(0,0, board.width, board.height);

context.font = '20px Arial';
context.fillStyle = 'black';
context.fillText('🍎', foodX, foodY);
 
    if(snakeX==foodX&&snakeY==foodY){
        eatSound.play();
        score+=10;
        scoredisblay.innerHTML=score;
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    for (let i=snakeBody.length-1; i>0; i--){
    snakeBody[i]=snakeBody[i-1];

}

if(snakeBody.length){
    snakeBody[0]= [snakeX,snakeY];
}

context.beginPath();
    context.fillStyle="lime";
    snakeX+=velocityX*blockSize;
    snakeY+=velocityY*blockSize;
    context.arc(snakeX,snakeY,blockSize/2.5,2*Math.PI,false);
    context.fill();
    context.closePath();


for (let i =0; i< snakeBody.length; i++){
    context.fillStyle = "lime";
    context.arc(snakeBody[i][0], snakeBody[i][1],blockSize/2.5,2*Math.PI,false);
    context.fill();

}

//game over conditions
if(snakeX < 0 || snakeX > cols*blockSize || snakeY < 0  || snakeY > rows*blockSize){
    gameOver = true;
    gameOverSound.play();
}

for (let i=0; i< snakeBody.length; i++){
  if (snakeX == snakeBody[i][0] && snakeY== snakeBody[i][1])  {
    gameOver =true;
    gameOverSound.play();
  }
}
}


function changeDirection(e){
    if (e.code == "ArrowUp" && velocityY != 1){
        velocityX= 0;
        velocityY= -1;
    }
    else if(e.code =="ArrowDown" && velocityY != -1){
        velocityX= 0;
        velocityY = 1;
    }
    else if(e.code =="ArrowLeft"  && velocityX != 1){
        velocityX= -1;
        velocityY= 0;
    }
    else if(e.code == "ArrowRight" && velocityX != -1){
        velocityX= 1;
        velocityY= 0;
    }
}

function placeFood(){
    // 0-1) *cols -> (0-19)*25
    foodX= Math.floor(Math.random()*cols)*blockSize;
    foodY= Math.floor(Math.random()*rows)*blockSize;
}

// Timer Setting
function timeSetting(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  timerInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.innerHTML = minutes + ":" + seconds;

    timer++;
 
  }, 1000);
}
// reset Timer
function resetTimer() {
  clearInterval(timerInterval);
  display = document.querySelector("#time");
  timeSetting(seconds, display);
}



window.soundCheck=()=>{
    if (sound) {
    eatSound.muted = true;
    gameOverSound.muted = true;
    sound = false;
    soundbtn.value = "Sound-Off";
} else {
    soundbtn.value = "Sound-On";
    // soundbtn.style.textDecorationThickness = "0.4rem";
    eatSound.muted = false;
    gameOverSound.muted = false;
    sound = true;
}
}