// Container Variables 

var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container");
var containerQuestionEl = document.getElementById("question-container");
var containerScoreEl = document.getElementById("score-banner");
var formInitials = document.getElementById("initials-form");
var containerHighScoresEl = document.getElementById("high-score-container");
var ViewHighScoreEl = document.getElementById("view-high-scores");
var listHighScoreEl = document.getElementById("high-score-list");
var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");

// Button Variables

var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back");
var btnClearScoresEl = document.querySelector("#clear-high-scores");

// Q/A Variables

var questionEl = document.getElementById("question");
var answerbuttonsEl = document.getElementById("answer-buttons");
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover;
timerEl.innerText = 0;

// Empty Array for Highscores
var HighScores = [];

// Question variables
var arrayShuffledQuestions;
var QuestionIndex = 0;

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

  // Go Back button 
var renderStartPage = function () {
  containerHighScoresEl.classList.add("hide");
  containerHighScoresEl.classList.remove("show");
  containerStartEl.classList.remove("hide");
  containerStartEl.classList.add("show");
  containerScoreEl.removeChild(containerScoreEl.lastChild);
  QuestionIndex = 0;
  gameover = "";
  timerEl.textContent = 0 ;
  score = 0;

  if (correctEl.className = "show") {
      correctEl.classList.remove("show");
      correctEl.classList.add("hide")
  }
  if (wrongEl.className = "show") {
      wrongEl.classList.remove("show");
      wrongEl.classList.add("hide");
  }
}

// Checks time every interval 
var setTime = function () {
  timeleft = 30;

var timercheck = setInterval(function() {
  timerEl.innerText = timeleft;
  timeleft--

  if (gameover) {
      clearInterval(timercheck)
  }
 
  if (timeleft < 0) {
      showScore()
      timerEl.innerText = 0
      clearInterval(timercheck)
  }

  }, 1000)
}

var startGame = function() {
  // Start / Quiz Screen 
  containerStartEl.classList.add('hide');
  containerStartEl.classList.remove('show');
  containerQuestionEl.classList.remove('hide');
  containerQuestionEl.classList.add('show');

  // Shuffle Order of Questions
  arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
  setTime()
  setQuestion()
}

// Sets Questions for Quiz
var setQuestion = function() {
  resetAnswers()
  displayQuestion(arrayShuffledQuestions[QuestionIndex])
}

// Resets Answer Buttons
var resetAnswers = function() {
  while (answerbuttonsEl.firstChild) {
      answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
  };
};

// Displays Q & A
var displayQuestion = function(index) {
  questionEl.innerText = index.q
  for (var i = 0; i < index.choices.length; i++) {
      var answerbutton = document.createElement('button')
      answerbutton.innerText = index.choices[i].choice
      answerbutton.classList.add('btn')
      answerbutton.classList.add('answerbtn')
      answerbutton.addEventListener("click", answerCheck)
      answerbuttonsEl.appendChild(answerbutton)
      }
  };
// If answer is right, display "correct"
var answerCorrect = function() {
  if (correctEl.className = "hide") {
      correctEl.classList.remove("hide")
      correctEl.classList.add("banner")
      wrongEl.classList.remove("banner")
      wrongEl.classList.add("hide")
      }
  }  
//If answer is wrong, display "wrong"
var answerWrong = function() {
  if (wrongEl.className = "hide") {
      wrongEl.classList.remove("hide")
      wrongEl.classList.add("banner")
      correctEl.classList.remove("banner")
      correctEl.classList.add("hide")
  }
}

// Results of Answer  
var answerCheck = function(event) {
  var selectedanswer = event.target
      if (arrayShuffledQuestions[QuestionIndex].a === selectedanswer.innerText){
          answerCorrect()
          score = score + 7
      }

      else {
        answerWrong()
        score = score - 1;
        timeleft = timeleft - 3;
    };

  // Go to next question + Game over if no more questions
    QuestionIndex++
      if  (arrayShuffledQuestions.length > QuestionIndex + 1) {
          setQuestion()
      }   
      else {
         gameover = "true";
         showScore();
          }
}

  //Display end screen along with score
var showScore = function () {
  containerQuestionEl.classList.add("hide");
  containerEndEl.classList.remove("hide");
  containerEndEl.classList.add("show");

  var scoreDisplay = document.createElement("p");
  scoreDisplay.innerText = ("Your final score is " + score + "!");
  containerScoreEl.appendChild(scoreDisplay);
}       

// Create highscore from user input
var createHighScore = function(event) { 
  event.preventDefault() 
  var initials = document.querySelector("#initials").value;
  if (!initials) {
    alert("Enter your intials!");
    return;
  }

formInitials.reset();

var HighScore = {
initials: initials,
score: score
} 

// Pushes and sorts score
HighScores.push(HighScore);
HighScores.sort((a, b) => {return b.score-a.score});

// Clear visible list
while (listHighScoreEl.firstChild) {
 listHighScoreEl.removeChild(listHighScoreEl.firstChild)
}
// Creates highscore in order of score
for (var i = 0; i < HighScores.length; i++) {
var highscoreEl = document.createElement("li");
highscoreEl.ClassName = "high-score";
highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
listHighScoreEl.appendChild(highscoreEl);
}

saveHighScore();
displayHighScores();

}
//Sets Highscore to local storage
var saveHighScore = function () {
  localStorage.setItem("HighScores", JSON.stringify(HighScores))
      
}

//Gets highscore from local storage
var loadHighScore = function () {
  var LoadedHighScores = localStorage.getItem("HighScores")
      if (!LoadedHighScores) {
      return false;
  }

  LoadedHighScores = JSON.parse(LoadedHighScores);
  LoadedHighScores.sort((a, b) => {return b.score-a.score})


  for (var i = 0; i < LoadedHighScores.length; i++) {
      var highscoreEl = document.createElement("li");
      highscoreEl.ClassName = "high-score";
      highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
      listHighScoreEl.appendChild(highscoreEl);

      HighScores.push(LoadedHighScores[i]);
      
  }
}  

//Displays highscore
var displayHighScores = function() {

  containerHighScoresEl.classList.remove("hide");
  containerHighScoresEl.classList.add("show");
  gameover = "true"

  if (containerEndEl.className = "show") {
      containerEndEl.classList.remove("show");
      containerEndEl.classList.add("hide");
      }
  if (containerStartEl.className = "show") {
      containerStartEl.classList.remove("show");
      containerStartEl.classList.add("hide");
      }
      
  if (containerQuestionEl.className = "show") {
      containerQuestionEl.classList.remove("show");
      containerQuestionEl.classList.add("hide");
      }

  if (correctEl.className = "show") {
      correctEl.classList.remove("show");
      correctEl.classList.add("hide");
  }

  if (wrongEl.className = "show") {
      wrongEl.classList.remove("show");
      wrongEl.classList.add("hide");
      }
  
}
// Clears highscore
var clearScores = function () {
  HighScores = [];

  while (listHighScoreEl.firstChild) {
      listHighScoreEl.removeChild(listHighScoreEl.firstChild);
  }

  localStorage.clear(HighScores);

} 

loadHighScore();
  
// Event Listeners
btnStartEl.addEventListener("click", startGame);
formInitials.addEventListener("submit", createHighScore);
ViewHighScoreEl.addEventListener("click", displayHighScores);
btnGoBackEl.addEventListener("click", renderStartPage);
btnClearScoresEl.addEventListener("click", clearScores);