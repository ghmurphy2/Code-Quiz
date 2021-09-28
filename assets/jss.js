const question = document.querySelectorAll("question");
const choices = Array.from(document.querySelectorAll(".choiceText"));
const progressText = document.querySelectorAll('progressText');
const scoreText = document.querySelectorAll('#score')
//start and end screen
// write body of quiz in function, better way to populate?
//hide elements or replace?
let questionNumber = {}
let currentQuestion ={}
let currectAnswers = {}
let availableQuestion = {}
let questionsIndex = {}
//changed array structure

quizBody = [{
    qN: 1,
    question: "HTML is responsible for what part of a webpage?",

      answer1: "It defines the meaning and structure of web content.",
      answer2: "It styles a webpage.",
      answer3: "It runs functions and is reponsible for the 'Logic' of a page.",
      answer4: "HTML is not used in webpage design.",
      correct: "It defines the meaning and structure of web content.",
},]
    
let scoreTotal = 100
quizBegin = () =>{
  questionCount = 0
  score = 0
  availableQuestion = [...questions]
  nextQuestion()
}

let questionMax = 10
nextQuestion = ()=> {
  if(availableQuestion.length === 0 || questionCount > availableQuestion){
    localStorage.setItem('currentScore' , score)
    return window.location.assign('/end.html')
    
  }
  questionCount ++
  const availableQuestion = Math.floor(math.random() * availableQuestion.length)
  currentQuestion = availableQuestion[questionNumber]
  question.innerText = currentQuestion.question
// pull random and remove
  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  }
    )
    availableQuestion.splice(questionsIndex, 1)

    correctAnswers = true
}
    //   broken deploy, assest visible
