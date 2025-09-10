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
  // --------   Pakistan (15) --------
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
    question: "When did Pakistan gain independence?",
    answers: [
      { text: "1945", correct: false },
      { text: "1947", correct: true },
      { text: "1950", correct: false },
      { text: "1952", correct: false }
    ]
  },
  {
    question: "Which city is Pakistan’s capital?",
    answers: [
      { text: "Karachi", correct: false },
      { text: "Lahore", correct: false },
      { text: "Islamabad", correct: true },
      { text: "Peshawar", correct: false }
    ]
  },
  {
    question: "What is Pakistan’s national language?",
    answers: [
      { text: "Punjabi", correct: false },
      { text: "Sindhi", correct: false },
      { text: "Urdu", correct: true },
      { text: "Pashto", correct: false }
    ]
  },
  {
    question: "Which mountain is the highest in Pakistan?",
    answers: [
      { text: "K2", correct: true },
      { text: "Nanga Parbat", correct: false },
      { text: "Broad Peak", correct: false },
      { text: "Rakaposhi", correct: false }
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
  {
    question: "Which city is called the ‘City of Lights’?",
    answers: [
      { text: "Lahore", correct: false },
      { text: "Karachi", correct: true },
      { text: "Islamabad", correct: false },
      { text: "Multan", correct: false }
    ]
  },
  {
    question: "What is the national flower of Pakistan?",
    answers: [
      { text: "Sunflower", correct: false },
      { text: "Jasmine", correct: true },
      { text: "Rose", correct: false },
      { text: "Tulip", correct: false }
    ]
  },
  {
    question: "Who was Pakistan’s first Prime Minister?",
    answers: [
      { text: "Liaquat Ali Khan", correct: true },
      { text: "Zulfikar Ali Bhutto", correct: false },
      { text: "Ayub Khan", correct: false },
      { text: "Benazir Bhutto", correct: false }
    ]
  },
  {
    question: "Which is the largest province of Pakistan by area?",
    answers: [
      { text: "Punjab", correct: false },
      { text: "Sindh", correct: false },
      { text: "Balochistan", correct: true },
      { text: "Khyber Pakhtunkhwa", correct: false }
    ]
  },
  {
    question: "Which currency is used in Pakistan?",
    answers: [
      { text: "Taka", correct: false },
      { text: "Rupee", correct: true },
      { text: "Dinar", correct: false },
      { text: "Dirham", correct: false }
    ]
  },
  {
    question: "Which river is known as the lifeline of Pakistan?",
    answers: [
      { text: "Indus River", correct: true },
      { text: "Jhelum River", correct: false },
      { text: "Chenab River", correct: false },
      { text: "Ravi River", correct: false }
    ]
  },
  {
    question: "What is the national sport of Pakistan?",
    answers: [
      { text: "Hockey", correct: true },
      { text: "Cricket", correct: false },
      { text: "Football", correct: false },
      { text: "Kabaddi", correct: false }
    ]
  },
  {
    question: "Which port is the busiest in Pakistan?",
    answers: [
      { text: "Gwadar Port", correct: false },
      { text: "Port Qasim", correct: false },
      { text: "Karachi Port", correct: true },
      { text: "Ormara Port", correct: false }
    ]
  },
  {
    question: "Who composed Pakistan’s national anthem?",
    answers: [
      { text: "Allama Iqbal", correct: false },
      { text: "Hafeez Jullundhri", correct: true },
      { text: "Ahmad Ghulamali Chagla", correct: false },
      { text: "Faiz Ahmed Faiz", correct: false }
    ]
  },

  // -------- Islam (15) --------
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
    question: "How many daily prayers are obligatory in Islam?",
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
  },
  {
    question: "Which city is known as the second holiest city in Islam?",
    answers: [
      { text: "Mecca", correct: false },
      { text: "Jerusalem", correct: false },
      { text: "Medina", correct: true },
      { text: "Cairo", correct: false }
    ]
  },
  {
    question: "What is the pilgrimage to Mecca called?",
    answers: [
      { text: "Sawm", correct: false },
      { text: "Zakat", correct: false },
      { text: "Hajj", correct: true },
      { text: "Umrah", correct: false }
    ]
  },
  {
    question: "Which direction do Muslims face during prayer?",
    answers: [
      { text: "Jerusalem", correct: false },
      { text: "Kaaba in Mecca", correct: true },
      { text: "Mount Sinai", correct: false },
      { text: "Medina", correct: false }
    ]
  },
  {
    question: "What is the giving of charity called in Islam?",
    answers: [
      { text: "Sawm", correct: false },
      { text: "Hajj", correct: false },
      { text: "Zakat", correct: true },
      { text: "Shahada", correct: false }
    ]
  },
  {
    question: "Which angel brought revelation to the Prophet Muhammad (PBUH)?",
    answers: [
      { text: "Mikail", correct: false },
      { text: "Israfil", correct: false },
      { text: "Jibreel (Gabriel)", correct: true },
      { text: "Azrael", correct: false }
    ]
  },
  {
    question: "What is the Islamic declaration of faith called?",
    answers: [
      { text: "Shahada", correct: true },
      { text: "Takbir", correct: false },
      { text: "Tasbeeh", correct: false },
      { text: "Tahajjud", correct: false }
    ]
  },
  {
    question: "Which night is considered the Night of Power in Ramadan?",
    answers: [
      { text: "Laylat al-Qadr", correct: true },
      { text: "Eid al-Fitr", correct: false },
      { text: "Ashura", correct: false },
      { text: "Shab-e-Miraj", correct: false }
    ]
  },
  {
    question: "How many chapters (Surahs) are in the Quran?",
    answers: [
      { text: "100", correct: false },
      { text: "114", correct: true },
      { text: "120", correct: false },
      { text: "99", correct: false }
    ]
  },
  {
    question: "Which festival marks the end of Ramadan?",
    answers: [
      { text: "Eid al-Adha", correct: false },
      { text: "Eid al-Fitr", correct: true },
      { text: "Ashura", correct: false },
      { text: "Mawlid", correct: false }
    ]
  },
  {
    question: "What is the Islamic lunar calendar called?",
    answers: [
      { text: "Hijri Calendar", correct: true },
      { text: "Gregorian Calendar", correct: false },
      { text: "Solar Calendar", correct: false },
      { text: "Julian Calendar", correct: false }
    ]
  }
];


//quiz state varibale

let currentQuestionIndex = 0
let score = 0
let answerDisabled = false

maxScore.textContent = quizQuestions.length
totalQuestionsSpan.textContent = quizQuestions.length

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
