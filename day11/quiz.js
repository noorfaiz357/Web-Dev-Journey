// Screens
const startScreen     = document.querySelector('#start-screen');
const quizScreen      = document.querySelector('#quiz-screen');
const resultScreen    = document.querySelector('#result-screen');

// Buttons
const startBtn        = document.querySelector('#start-btn');
const restartBtn      = document.querySelector('#restart-btn');

// Quiz content
const questionText    = document.querySelector('#question-text');
const currentQuestionSpan = document.querySelector('#current-question');
const totalQuesitonsSpan = document.querySelector("#total-questions")
const scoreSpan       = document.querySelector('#score');
const answersContainer= document.querySelector('#answers-container');
const progressBar     = document.querySelector('#progress');

// Result content
const finalScore      = document.querySelector('#final-score');
const maxScore        = document.querySelector('#max-score');
const resultMessage   = document.querySelector('#result-message');

// (Optional) Grab all screens or buttons at once
const allScreens      = document.querySelectorAll('.screen');
const allButtons      = document.querySelectorAll('button');


const quizQuestions = [
  // ----- Pakistan -----
  {
    question: "Who is the founder of Pakistan?",
    answers: [
      { text: "Allama Iqbal", correct: false },
      { text: "Liaquat Ali Khan", correct: false },
      { text: "Muhammad Ali Jinnah", correct: true },
      { text: "Ayub Khan", correct: false }
    ]
  },
  {
    question: "In which year did Pakistan gain independence?",
    answers: [
      { text: "1945", correct: false },
      { text: "1947", correct: true },
      { text: "1950", correct: false },
      { text: "1952", correct: false }
    ]
  },
  {
    question: "What is the national language of Pakistan?",
    answers: [
      { text: "Punjabi", correct: false },
      { text: "Sindhi", correct: false },
      { text: "Urdu", correct: true },
      { text: "Pashto", correct: false }
    ]
  },
  {
    question: "Which city is known as the 'City of Lights' in Pakistan?",
    answers: [
      { text: "Lahore", correct: false },
      { text: "Karachi", correct: true },
      { text: "Islamabad", correct: false },
      { text: "Peshawar", correct: false }
    ]
  },
  {
    question: "What is the national animal of Pakistan?",
    answers: [
      { text: "Snow Leopard", correct: false },
      { text: "Markhor", correct: true },
      { text: "Chinkara", correct: false },
      { text: "Lion", correct: false }
    ]
  },

  // ----- Islam -----
  {
    question: "What is the first pillar of Islam?",
    answers: [
      { text: "Zakat", correct: false },
      { text: "Shahada", correct: true },
      { text: "Hajj", correct: false },
      { text: "Sawm", correct: false }
    ]
  },
  {
    question: "Which is the holy book of Islam?",
    answers: [
      { text: "Torah", correct: false },
      { text: "Bible", correct: false },
      { text: "Quran", correct: true },
      { text: "Vedas", correct: false }
    ]
  },
  {
    question: "In which city was Prophet Muhammad (PBUH) born?",
    answers: [
      { text: "Medina", correct: false },
      { text: "Jerusalem", correct: false },
      { text: "Mecca", correct: true },
      { text: "Baghdad", correct: false }
    ]
  },
  {
    question: "How many times a day are Muslims obligated to pray?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false }
    ]
  },
  {
    question: "What is the Islamic month of fasting called?",
    answers: [
      { text: "Shawwal", correct: false },
      { text: "Muharram", correct: false },
      { text: "Ramadan", correct: true },
      { text: "Safar", correct: false }
    ]
  }
];

//quiz state varibale

let currentQuestionIndex = 0
let score = 0
let answerDisabled = false

maxScore.textContent = quizQuestions.length
totalQuesitonsSpan.textContent = quizQuestions.length

//event listeners


startBtn.addEventListener("click",startQuiz)
restartBtn.addEventListener("click",restartQuiz)

function startQuiz(){
    score = 0;
    currentQuestionIndex = 0
    scoreSpan.textContent = 0

    startScreen.classList.remove("active")
    quizScreen.classList.add("active")

    showQuestion()
}
function showQuestion(){
    answerDisabled = false
    const currentQuestion = quizQuestions[currentQuestionIndex]
    currentQuestionSpan.textContent = currentQuestionIndex + 1

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100
    progressBar.style.width = progressPercent+"%"

    questionText.textContent = currentQuestion.question

    answersContainer.innerHTML = ""
    
    currentQuestion.answers.forEach((answer)=>{
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")
        //property of button to store custom data
        button.dataset.correct = answer.correct

        button.addEventListener("click",selectAnswer)

        answersContainer.appendChild(button)
    })
}

function selectAnswer(e){
    if(answerDisabled){
        return
    }

    answerDisabled = true
    const selectedButton = e.target
    const isCorrect = selectedButton.dataset.correct === "true"

    Array.from(answersContainer.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        else if(button === selectedButton){
            button.classList.add("incorrect")
        }
    })
    if(isCorrect){
        score++
        scoreSpan.textContent = score
    }

    setTimeout(() =>{
        currentQuestionIndex++
        if(currentQuestionIndex < quizQuestions.length){
            showQuestion()
        } else{
            showResults()
        }
    },1000)
}

function showResults(){
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    finalScore.textContent = score

    const percentage = (score/quizQuestions.length) *100
    if(percentage == 100){
        resultMessage.textContent = "Perfect! You're genius!"
    }
    else if(percentage >=  80){
        resultMessage.textContent = "Great Job! You know your stuff!"
    }
    else if(percentage >= 60){
        resultMessage.textContent = "Good effort! Keep Learning!"
    }
    else if(percentage >= 400){
        resultMessage.textContent = "Not bad! Try again to improve!"
    }
    else{
        resultMessage.textContent = "Parh ke aya karo quiz dene Nikammo!!!"
    }
}
function restartQuiz(){
    resultScreen.classList.remove("active")

    startQuiz()
}