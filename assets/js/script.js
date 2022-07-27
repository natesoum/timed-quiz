// Container Variables
var startContainerEl = document.getElementById("start-container");
var endContainerEl = document.getElementById("game-end-container")
var questionContainerEl = document.getElementById("questions-container");
var scoreContainerEl = document.getElementById("score-banner");
var highscoreContainerEl = document.getElementById("highscore-container");

// Submit score into form Variable
var initials = document.getElementById("initial-submit");

// Correct / Wrong Variables
var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");

// Highscore Variables
var viewHighScoreEl = document.getElementById("view-highscore");
var listHighScoreEl = document.getElementById("highscore-list");

// Buttons 
var startBtnEl = document.querySelector("#start-game");
var backBtnEl = document.querySelector("#back-btn");
var clearBtnEl = document.querySelector("#clear-highscores");
var answerBtnEl = document.getElementById("answer-btn");

// Question
var questionEl = document.getElementById("questions");
var timerEl = document.querySelector("#timer");
var timeleft;
var score = 0;

// Highscore
var HighScores = [];

// Array for Questions 
var arrayQuestions;
var QuestionIndex = 0;

// Gameover Variable
var gameover;

// Array of Questions

var questions = [

    { q: 'What does HTML stand for?', 
      a: '1. HyperText Markup Language', 
      choices: [{choice: '1. HyperText Markup Language'}, {choice: '2. HyperText Markdown Language'}, {choice: '3. Highly Technical Material Language'}, {choice: '4. Helpful Text Markup Language'}]
    },

    { q: 'What does CSS stand for?', 
      a: '2. Cascading Style Sheets', 
      choices: [{choice: '1. Cooper Styling Sheet'}, {choice: '2. Cascading Style Sheets'}, {choice: '3. Cats Super Style'}, {choice: '4. Cascade Styling Styles'}]
    },

    { q: 'What language do developers use for webpage functionality?', 
      a: '3. JavaScript', 
      choices: [{choice: '1. HTML'}, {choice: '2. CSS'}, {choice: '3. JavaScript'}, {choice: '4. Internet Explorer'}]
    },

    { q: 'What syntax would declare a variable named potato?', 
      a: '4. var potato', 
      choices: [{choice: '1. declare potato'}, {choice: '2. potato'}, {choice: '3. potato is'}, {choice: '4. var potato'}]
    },

    { q: 'When example allows you to link a JavaScript file to your HTML?', 
      a: '1. <script src="">', 
      choices: [{choice: '1. <script src="">'}, {choice: '2. <script href="">'}, {choice: '3. <link src="">'}, {choice: '4. <link href="">'}]
    },

    { q: 'What does DOM stand for?', 
      a: '1. Document Object Model', 
      choices: [{choice: '1.  Document Object Model'}, {choice: '2. Dannys Overall Method'}, {choice: '3. Do Over Method'}, {choice: '4. Document Ordinary Model'}]
    },

    { q: 'What element tag allows you to connect your css file?', 
      a: '3. link', 
      choices: [{choice: '1. src'}, {choice: '2. href'}, {choice: '3. link'}, {choice: '4. head'}]
    },

  ];

var renderStartPage = function () {
    highscoreContainerEl.classList.add("hide");
    highscoreContainerEl.classList.remove("show");
    startContainerEl.classList.remove("hide");
    startContainerEl.classList.add("show");
    scoreContainerEl.removeChild(scoreContainerEl.lastChild);
    QuestionIndex = 0;
    gameover = "";
    timerEl.textContent = 0; 
    score = 0;

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide");
    }
    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }
};

var timeStart = function () {
    timeleft = 60;

    var checkTime = setInterval(function() {
    timerEl.innerText = timeleft;
    timeleft--;

    if (gameover) {
        clearInterval(timercheck);
    }
   
    if (timeleft < 0) {
        showScore()
        timerEl.innerText = 0;
        clearInterval(timercheck);
    }

    }, 1000)
};

var startGame = function() {
    startContainerEl.classList.add('hide');
    startContainerEl.classList.remove('show');
    questionContainerEl.classList.remove('hide');
    questionContainerEl.classList.add('show');
    // Using this method for questions to show up in random order
    arrayQuestions = questions.sort(() => Math.random() - 0.5);
    timeStart();
    showQuestion();
};

var showQuestion = function() {
    resetAnswers();
    displayQuestion(arrayQuestions[QuestionIndex]);
};

var resetAnswers = function() {
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    };
};

var displayQuestion = function(index) {
    questionEl.innerText = index.q
};




// Event Listeners

// On Initial Screen, Clicking the Start Button. Starts the Game
startBtnEl.addEventListener("click", startGame);
// Submits Highscores
initials.addEventListener("submit", createHighScore);

