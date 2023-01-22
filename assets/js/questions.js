var questions = [
    {
        question: "Which is a type of JavaScript data type?",
        choices: [
            {text: "House", correct: true},
            {text: "Object", correct: false},
            {text: "Megabyte", correct: false},
            {text: "Query", correct: false}
        ],
    },
    {
        question: "What is the DOM in JavaScript?",
        choices: [
            {text: "A programming language", correct: false},
            {text: "A method for accessing and manipulating HTML and XML documents", correct: true},
            {text: "A library for handling user input", correct: false},
            {text: "All of the above", correct: false}
        ]
    },
    {
        question: "What are variables used for in JavaScript programs?",
        choices: [
            {text: "Storing numbers, dates, or other values", correct: true},
            {text: "Varying randomly", correct: false},
            {text: "Causing high-school algebra flashbacks", correct: false},
            {text: "None of the above", correct: false}
        ],
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: [
            {text: "<js>", correct: false},
            {text: "<scripting>", correct: false},
            {text: "<script>", correct: true},
            {text: "<javascript>", correct: false}
        ],
    },
    {
        question: "The _______ method of an Array object adds and/or removes elements from an array.",
        choices: [
            {text: "Reverse", correct: false},
            {text: "Shift", correct: false},
            {text: "Slice", correct: false},
            {text: "Splice", correct: true}
        ]
    }
]

// var questionTitle = document.getElementById("question-title");
// var listChoices = document.getElementById("listChoices");
// // console.log(listChoices);

// for (i = 0; i < questions.length; i++) {
//     console.log(questions[i].question);
//     console.log(questions[i].choices);
//     var li = document.createElement("li");
//     var liText = document.createTextNode(questions[i].choices);
//     li.appendChild(liText);
//     listChoices.appendChild(li);
//     var questionText = document.createTextNode(questions[i].question);
//     questionTitle.appendChild(questionText);
//     // console.log(questions[i].question);
// }