let currentQuestion = 0;
let score = 0;
const questionarea = document.getElementById('question-area');
let questions = [
   {
       question: "Saya merasa sangat sulit untuk tenang dan santai",
       answers: [
           {option: "Tidak Pernah", point: 1},
           {option: "Jarang", point: 2},
           {option: "Terkadang", point: 3},
           {option: "Sering", point: 4},
           {option: "Sangat Sering", point: 5}           
       ]
   },
   {
        question: "Saya memiliki masalah perut, seperti merasa sakit atau kram perut",
        answers: [
            {option: "Tidak Pernah", point: 1},
            {option: "Jarang", point: 2},
            {option: "Terkadang", point: 3},
            {option: "Sering", point: 4},
            {option: "Sangat Sering", point: 5}           
        ]
    },
    {
        question: "Saya mudah merasa terganggu oleh hal-hal yang tidak penting",
        answers: [
            {option: "Tidak Pernah", point: 1},
            {option: "Jarang", point: 2},
            {option: "Terkadang", point: 3},
            {option: "Sering", point: 4},
            {option: "Sangat Sering", point: 5}           
        ]
    },
    {
        question: "Saya sering mengalami sesak napas",
        answers: [
            {option: "Tidak Pernah", point: 1},
            {option: "Jarang", point: 2},
            {option: "Terkadang", point: 3},
            {option: "Sering", point: 4},
            {option: "Sangat Sering", point: 5}           
        ]
    },
    {
        question: "Saya terkadang merasa pusing",
        answers: [
            {option: "Tidak Pernah", point: 1},
            {option: "Jarang", point: 2},
            {option: "Terkadang", point: 3},
            {option: "Sering", point: 4},
            {option: "Sangat Sering", point: 5}           
        ]
    },
    {
        question: "Saya memiliki masalah tidur, seperti sulit untuk tidur atau terbangun terlalu awal",
        answers: [
            {option: "Tidak Pernah", point: 1},
            {option: "Jarang", point: 2},
            {option: "Terkadang", point: 3},
            {option: "Sering", point: 4},
            {option: "Sangat Sering", point: 5}           
        ]
    },
    {
        question: "Saya merasa panik dan kewalahan oleh hal-hal di sekitar saya",
        answers: [
            {option: "Tidak Pernah", point: 1},
            {option: "Jarang", point: 2},
            {option: "Terkadang", point: 3},
            {option: "Sering", point: 4},
            {option: "Sangat Sering", point: 5}           
        ]
    },
    {
        question: "Saya sering merasa gugup dan gelisah",
        answers: [
            {option: "Tidak Pernah", point: 1},
            {option: "Jarang", point: 2},
            {option: "Terkadang", point: 3},
            {option: "Sering", point: 4},
            {option: "Sangat Sering", point: 5}           
        ]
    },
    {
        question: "Tangan saya sering gemetar",
        answers: [
            {option: "Tidak Pernah", point: 1},
            {option: "Jarang", point: 2},
            {option: "Terkadang", point: 3},
            {option: "Sering", point: 4},
            {option: "Sangat Sering", point: 5}           
        ]
    },
    {
        question: "Saya sepertinya terus-menerus mengkhawatirkan banyak hal",
        answers: [
            {option: "Tidak Pernah", point: 1},
            {option: "Jarang", point: 2},
            {option: "Terkadang", point: 3},
            {option: "Sering", point: 4},
            {option: "Sangat Sering", point: 5}           
        ]
    },
]

function loadQuestion() {
    let question = questions[currentQuestion].question;
    let answers = questions[currentQuestion].answers;
    let indexQuestion = document.getElementById("index-question");
    let questionElement = document.getElementById('question');
    let answersElement = document.getElementById('answers');
    indexQuestion.innerHTML = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionElement.innerHTML = question;
    answersElement.innerHTML = '';
    for (let i = 0; i < answers.length; i++) {
        answersElement.innerHTML += `
            <button class="btn btn-primary" onclick="selectAnswer(${answers[i].point})">${answers[i].option}</button>
        `;
    }
}

function selectAnswer(point) {
    score += point;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    }
    else {
        showPopupResult();
    }
}

function showPopupResult() {
    let popupResult = document.getElementById('popup-result');
    let body = document.querySelector('body');
    let svg = document.getElementById('svg');
    let result = document.getElementById('popup-result-title');
    popupResult.style.display = 'block';
    questionarea.style.display = 'none';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    svg.style.opacity = '0.5';
    if (score <= 10) {
        result.innerHTML = 'Anda tidak mengalami gejala depresi';
    }
    else if (score <= 20) {
        result.innerHTML = 'Anda mengalami gejala depresi ringan';
    }
    else if (score <= 30) {
        result.innerHTML = 'Anda mengalami gejala depresi sedang';
    }
    else {
        result.innerHTML = 'Anda mengalami gejala depresi berat';
    }
}

function retry() {
    let popupResult = document.getElementById('popup-result');
    let body = document.querySelector('body');
    let questionarea = document.getElementById('question-area');
    let svg = document.getElementById('svg');
    let result = document.getElementById('popup-result-title');
    popupResult.style.display = 'none';
    questionarea.style.display = 'flex';
    body.style.backgroundColor = 'white';
    svg.style.opacity = '1';
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

setTimeout(() => {
    loadQuestion()
    questionarea.style.animation = 'fade-in 4s 1s forwards';
}, 6000 );

