var questionIndex = [];
// add index to push to
var answerIndex = [];
var correctTotal = [];
//use array length to total and score
var timerCount = document.querySelectorAll(timerCount);
var startBtn = document.querySelectorAll(startBtn);

var scoreTotal = document.querySelectorAll(totalCorrect)
//establish questions
var startScreen = document.querySelectorAll(startScreen);
var endScreen  = document.querySelectorAll(endScreen);
var nameTrack = document.querySelectorAll(nameTrack);
var scoreTrack  = document.querySelectorAll(scoreTrack);
//start and end screen
// write body of quiz in function, better way to populate?
//hide elements or replace?

let questionIndex = 0;
let scoreTotal = 0;
let timerCount = 0;

quizBody = [{
    qN: 1,
    question: "HTML is responsible for what part of a webpage?",
    answers: [
      "It defines the meaning and structure of web content.",
      "It styles a webpage.",
      "It runs functions and is reponsible for the 'Logic' of a page.",
      "HTML is not used in webpage design.",
    ],
    correct:
      "A",

    qN: 2,
    question: "What are functions(in regard to computer science)?",
    answers: [
      "Functions are a minute area of illumination on a display screen, one of many from which an image is composed.",
      "They appear whole on web pages as seen images",
      "They control a junction, and allow quick access to information.",
      "Functions are a set of instructions bundled together to achieve a specific outcome.",
    ],
    correct:
      "Functions are a set of instructions bundled together to achieve a specific outcome.",

    qN: 3,
    question: "What is a for-loop?",
    answers: [
      "A for-loop is a variable that can be assigned multiple values.",
      "A for-loop is a unit of color that is reused on a web page.",
      "A for-loop is a control flow statement for specifying iteration, which allows code to be executed repeatedly.",
      "A for-loop is an image on a webpage that moves dynamically.",
    ],
    correct:
      "A for-loop is a control flow statement for specifying iteration, which allows code to be executed repeatedly.",

    qN: 4,
    question: "What is an array?",
    answers: [
      "An array is a data structure that contains individul characters written together in a single combined unit.",
      "An array is a data structure consisting of a collection of elements, each identified by at least one array index or key.",
      "An array is a physical structure used for transmitting information between computers or servers.",
      "An array is a data structure that establishes a connection between multiple variables in pairs.",
    ],
    correct:
      "An array is a data structure consisting of a collection of elements, each identified by at least one array index or key.",
    
    qN: 5,
    question: "What shortcut allows the placement of a 'comment' in HTML, CSS, and Javascript?",
    answers: [
      " Alt + 'G'",
      "Ctrl + '/'",
      "Ctrl + '\'",
      "Alt + 'F4'",
    ],
    correct:
      "Ctrl + /",

    qN: 6,
    question: "",
    answers: [
      "A",
      "B",
      "C",
      "D",
    ],
    correct:
      "A",
    qN: 7,
    question: "place holder?",
    answers: [
      "A",
      "B",
      "C",
      "D",
    ],
    correct:
      "A",
    qN: 8,
    question: "place holder?",
    answers: [
      "A",
      "B",
      "C",
      "D",
    ],
    correct:
      "A",
    qN: 9,
    question: "place holder?",
    answers: [
      "A",
      "B",
      "C",
      "D",
    ],
    correct:
      "A",
    qN: 10,
    question: "place holder?",
    answers: [
      "A",
      "B",
      "C",
      "D",
    ],
    correct:
      "A",
  },]

  startBtn.addEventListener("click", function () {
    let timerInterval = setInterval(timerFunc, 1000);
    function timerFunc() {
      secondsLeft = secondsLeft - 1;
      timerText.textContent = secondsLeft + "s";
      if (secondsLeft <= 0) {
        document.getElementById('fail').style.display = "block";
        setTimeout(function(){
          document.getElementById('fail').style.display = "none";
        }, 1000)
        toEndScreen();
        clearInterval(timerInterval);
        return;
      } else {
        loadQuizItems();
      }
    }
  });
    //place holder question
    function deployQuiz() {
        document.querySelectorAll("scoreTrack").style.display = "none";
        startScreen.style.display = "none";
        quizBody.style.display = "flex";
        questionElement.textContent = theQuiz[questionIndex].question;
        for (let i = 0; i <= 2; i++) {
          answersElements.children[i].children[0].textContent =
            quizBody[questionIndex].correct[i];
        }
      }
    //   broken deploy, assest visible
