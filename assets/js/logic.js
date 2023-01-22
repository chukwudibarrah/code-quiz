var scores = document.querySelector(".scores");
var timer = document.querySelector(".timer");
var timerElement = document.querySelector("#time");
var startButton = document.getElementById("start");
var finalScore = document.querySelector("#final-score");
var nextButton = document.getElementById("btn");
var userInitials = document.querySelector("#initials");
var questionSection = document.querySelector("#questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var endScreen = document.querySelector("#end-screen");
var listChoices = document.getElementById("listChoices");
var startScreen = document.getElementById("start-screen");
var userAnswer;
var messages = "";
var newTime = 0;
var score = 0;

var shuffledQuestions, currentQuestionIndex;

// // var li = document.createElement("li");
// // li.textContent = choices;
// // listChoices.appendChild(li);

// var message = document.createElement("p");
// message.innerText = messages;
// choices.appendChild(message);

// function startGame() {
//     timeLeft = 40;
//     countDown();
// }


// function displayQuestions() {
//     for (i = 0; i < questions.length; i++) {
//     questionTitle.textContent = questions[i].question;
//     choices.textContent = questions[i].choices;
//     correctAnswer = questions[i].correctAnswer;
//     if (userAnswer === correctAnswer) {
//         messages.textContent = "Correct!"
//     } else {
//         messages.textContent = "Wrong answer!"
//         newTime = (timeLeft - 5);
//     }
// }
// }

function countDown() {
    var timeLeft = 40;
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

function startGame() {
    startScreen.classList.add("hide");
    questionSection.classList.remove("hide");
    console.log("startGame: " + questions);
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionTitle.innerText = question.question;
    console.log("question.question: " + question.question);
    question.choices.forEach(answer => {
        var li = document.createElement("li");
        li.innerText = answer.text;
        li.classList.add("listItem");
        if (answer.correct) {
            li.dataset.correct = answer.correct
        }
        li.addEventListener("click", selectAnswer);
        listChoices.appendChild(li);
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild)
    }
  }

  function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(choices.children).forEach(li => {
      setStatusClass(li, li.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }