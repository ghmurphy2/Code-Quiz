// grabing dom elements
const highScoreEl = document.querySelector('#high-score');
const timeRemainingEl = document.querySelector('#time-remaining');
const startScreenEl = document.querySelector('#start-screen');
const quizScreenEl = document.querySelector('#quiz-screen');
const endScreenEl = document.querySelector('#end-screen');
const finalScoreEl = document.querySelector('#final-score');
const questionTextEl = document.querySelector('#question-text');
const quizContentEl = document.querySelector('#quiz-content');
const startQuizBtn = document.querySelector('#start-quiz');
const countDownEl = document.querySelector('#count-down-text');
const submitBtn = document.querySelector('#submit');
const initialEl = document.querySelector('#initials');
//start and end screen
// write body of quiz in function, better way to populate?
//hide elements or replace?

// declared variables
let timeRemaining = 120
let questionIndex = 0
let timerID
//changed array structure
//timer needed! interact with question parse



quizScreenEl.style.display = 'none';
endScreenEl.style.display = 'none';

const quizBody = [
  {
    question: 'HTML is responsible for what part of a webpage?',

    choiceOptions: ['It defines the meaning and structure of web content.', 'It styles a webpage.', 'It runs functions and is reponsible for the \'Logic\' of a page.', 'HTML is not used in webpage design.'],
    correct: 'It defines the meaning and structure of web content.',
  },
  {
    question: "What are functions(in regard to computer science)?",
    choiceOptions: [
      "Functions are a minute area of illumination on a display screen, one of many from which an image is composed.",
      "They appear whole on web pages as seen images",
      "They control a junction, and allow quick access to information.",
      "Functions are a set of instructions bundled together to achieve a specific outcome.",
    ],
    correct:
      "Functions are a set of instructions bundled together to achieve a specific outcome.",

  },

  {
    question: "What is a for-loop?",
    choiceOptions: [
      "A for-loop is a variable that can be assigned multiple values.",
      "A for-loop is a unit of color that is reused on a web page.",
      "A for-loop is a control flow statement for specifying iteration, which allows code to be executed repeatedly.",
      "A for-loop is an image on a webpage that moves dynamically.",
    ],
    correct:
      "A for-loop is a control flow statement for specifying iteration, which allows code to be executed repeatedly."
  },

  {
    question: "What is an array?",
    choiceOptions: [
      "An array is a data structure that contains individul characters written together in a single combined unit.",
      "An array is a data structure consisting of a collection of elements, each identified by at least one array index or key.",
      "An array is a physical structure used for transmitting information between computers or servers.",
      "An array is a data structure that establishes a connection between multiple variables in pairs.",
    ],
    correct:
      "An array is a data structure consisting of a collection of elements, each identified by at least one array index or key.",
  },

  {

    question: "What shortcut allows the placement of a 'comment' in HTML, CSS, and Javascript?",
    choiceOptions: [
      " Alt + 'G'",
      "Ctrl + '/'",
      "Ctrl + '\'",
      "Alt + 'F4'",
    ],
    correct:
      "Ctrl + /",

  }]



function startQuiz() {
  timerID = setInterval(clockTick, 1000)
  startScreenEl.style.display = 'none';
  quizScreenEl.style.display = 'block';

  nextQuestion()
}



function nextQuestion() {
  quizContentEl.innerHTML = ' '
  let currentQuestion = quizBody[questionIndex]
  questionTextEl.textContent = currentQuestion.question
  currentQuestion.choiceOptions.forEach(element => {
    let tempBtn = document.createElement('button')
    tempBtn.textContent = element
    tempBtn.setAttribute('value', element)
    tempBtn.setAttribute('class', 'answerbutton')
    tempBtn.onclick = answerCheck
    quizContentEl.appendChild(tempBtn)

  });

}

function answerCheck() {
  const selectedAnswer = this.value
  const correctAnswer = quizBody[questionIndex].correct
  questionIndex++

  if (selectedAnswer !== correctAnswer) {
    timeRemaining -= 10
  }
  if (questionIndex === quizBody.length) {
    endQuiz()
  }
  else {
    nextQuestion()
  }
}



function endQuiz() {
  quizScreenEl.style.display = 'none';
  endScreenEl.style.display = 'block';
  clearInterval(timerID)
  finalScoreEl.textContent = timeRemaining 
  countDownEl.style.display = 'none';

}

function clockTick() {
  timeRemaining--
  timeRemainingEl.textContent = timeRemaining
  if (timeRemaining <= 0) {
    endQuiz()
  }
}

function saveHighScore(){
  const initials = initialEl.value 
  let highScores = JSON.parse(localStorage.getItem("highscores")) || [];
  let newScore = { 
    initials:initials,
    score:timeRemaining
  }
  highScores.push(newScore)
  localStorage.setItem('highscores', JSON.stringify(highScores))
}


startQuizBtn.onclick = startQuiz

submitBtn.onclick = saveHighScore
