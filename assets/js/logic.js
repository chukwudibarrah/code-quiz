var scores = document.querySelector(".scores");
var timer = document.querySelector(".timer");
var timerElement = document.querySelector("#time");
var startButton = document.querySelector("#start");
var finalScore = document.querySelector("#final-score");
var userInitials = document.querySelector("#initials");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var listChoices = document.querySelector("#listChoices");
var userAnswer;
var messages = "";
var newTime = 0;

var li = document.createElement("li");
li.textContent = choices;
listChoices.appendChild(li);

var message = document.createElement("p");
message.innerText = messages;
choices.appendChild(message);

function startGame() {
    timeLeft = 40;
    countDown();
}


function displayQuestions() {
    for (i = 0; i < questions.length; i++) {
    questionTitle.textContent = questions[i].question;
    choices.textContent = questions[i].choices;
    correctAnswer = questions[i].correctAnswer;
    if (userAnswer === correctAnswer) {
        messages.textContent = "Correct!"
    } else {
        messages.textContent = "Wrong answer!"
        newTime = (timeLeft - 5);
    }
}
}

function countDown() {
    var timeLeft = 40;
    var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
    timer.textContent = "Time: " + timeLeft;
    
    timeLeft--;
    } else if (timeLeft === 0) {
    timer.textContent = 'Your time is up!';
    
    clearInterval(timeInterval);
    }
}, 1000);
}