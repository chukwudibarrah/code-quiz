var scores = document.querySelector(".scores");
var timer = document.querySelector(".timer");
var timerElement = document.querySelector("#time");
var startButton = document.getElementById("start");
var finalScore = document.querySelector("#final-score");
var nextButton = document.getElementById("btn");
var userInitials = document.querySelector("#initials");
var listItem = document.querySelector("#listItem");
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
    var timeLeft = 20;
    var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
    timer.textContent = "Time: " + timeLeft;
    
    timeLeft--;
    } else if (timeLeft === 1) {
      gameOver();
    // timer.textContent = 'Your time is up!';
    
    clearInterval(timeInterval);
    }
}, 1000);
}

function startGame() {
    startScreen.classList.add("hide");
    questionSection.classList.remove("hide");
    // console.log("startGame: " + questions);
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionTitle.innerText = question.question;
    console.log("question.question: " + question.question);
    question.choices.forEach(answer => {
        
        choices.innerHTML = "";
        var li = document.createElement("li");
        li.innerText = answer.text;
        console.log(answer.text);
        listChoices.appendChild(li);

        // li.innerText = answer.text;
        // console.log(li.innerText);
        // li.classList.add("listItem");
        // listChoices.appendChild(li);

    // li.addEventListener('click', function() {
    //   currentQuestionIndex++;
    //   setNextQuestion();
    //   resetState();
    // })
    //     if (answer.correct) {
    //         li.dataset.correct = answer.correct;
    //         var theWin = document.createElement('p');
    //         theWin.innerHTML = "Correct!";
    //         choices.appendChild(theWin) 
    //     } else {
    //       var notWin = document.createElement('p');
    //         notWin.innerHTML = "Wrong!";
    //         choices.appendChild(notWin)
    //     }

        li.addEventListener("click", selectAnswer);
    })
}

function gameOver() {
  questionSection.classList.add('hide');
  var h2 = document.createElement('h2');
  h2.innerHTML = "Game over! See the high scores or try again.";
  document.body.appendChild(h2);
}

function resetState() {
    clearStatusClass(document.body)
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild)
    }
  }

  function selectAnswer(event) {
    var selectedButton = event.target
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(choices.children).forEach(li => {
      setStatusClass(li, li.dataset.correct)
    });

    // li.addEventListener('click', function() {
      currentQuestionIndex++;
      setNextQuestion();
      resetState();

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      choices.classList.remove('hide')
    } else {
      gameOver();
    }
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
      li.dataset.correct = answer.correct;
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }