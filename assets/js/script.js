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
var answerbuttonsEl = document.getElementById("answer-btn");

// Question
var questionEl = document.getElementById("questions");
var timerEl = document.querySelector("#timer");
var timeleft = 100;
var score = 0;

// Highscore
var HighScores = [];

// Array for Questions 
var arrayShuffledQuestions;
var QuestionIndex = 0;

// Gameover Variable
var gameover;
