var scores = document.querySelector(".scores");
var timer = document.querySelector(".timer");
var start = document.getElementById("#start");
var finalScore = document.getElementById("#final-score");
var userInitials = document.getElementById("#initials");

var winCounter = 0;
var loseCounter = 0;
var isWin = false;

function countdown() {
    var timeLeft = 30;
    var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
    timer.textContent = "Time: " + timeLeft;
    
    timeLeft--;
    } else if (timeLeft === 1) {
    timer.textContent = 'Your time is up!';
    
    clearInterval(timeInterval);
    }
}, 1000);
}
countdown();