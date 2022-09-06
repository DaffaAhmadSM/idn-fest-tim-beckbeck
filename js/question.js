let currentQuestion = 0;
let score = 0;
 
let questions = [
   {
       question: "Saya merasa sangat sulit untuk tenang dan santai",
       answers: [
           {option: "Never", point: 1},
           {option: "Rarely", point: 2},
           {option: "Sometimes", point: 3},
           {option: "Often", point: 4},
           {option: "Always", point: 5}           
       ]
   },
   {
        question: "Saya memiliki masalah perut, seperti merasa sakit atau kram perut",
        answers: [
            {option: "Never", point: 1},
            {option: "Rarely", point: 2},
            {option: "Sometimes", point: 3},
            {option: "Often", point: 4},
            {option: "Always", point: 5}           
        ]
    },
    {
        question: "Saya mudah merasa terganggu oleh hal-hal yang tidak penting",
        answers: [
            {option: "Never", point: 1},
            {option: "Rarely", point: 2},
            {option: "Sometimes", point: 3},
            {option: "Often", point: 4},
            {option: "Always", point: 5}           
        ]
    },
    {
        question: "Saya sering mengalami sesak napas",
        answers: [
            {option: "Never", point: 1},
            {option: "Rarely", point: 2},
            {option: "Sometimes", point: 3},
            {option: "Often", point: 4},
            {option: "Always", point: 5}           
        ]
    },
    {
        question: "Saya terkadang merasa pusing",
        answers: [
            {option: "Never", point: 1},
            {option: "Rarely", point: 2},
            {option: "Sometimes", point: 3},
            {option: "Often", point: 4},
            {option: "Always", point: 5}           
        ]
    },
    {
        question: "Saya memiliki masalah tidur, seperti sulit untuk tidur atau terbangun terlalu awal",
        answers: [
            {option: "Never", point: 1},
            {option: "Rarely", point: 2},
            {option: "Sometimes", point: 3},
            {option: "Often", point: 4},
            {option: "Always", point: 5}           
        ]
    },
    {
        question: "Saya merasa panik dan kewalahan oleh hal-hal di sekitar saya",
        answers: [
            {option: "Never", point: 1},
            {option: "Rarely", point: 2},
            {option: "Sometimes", point: 3},
            {option: "Often", point: 4},
            {option: "Always", point: 5}           
        ]
    },
    {
        question: "Saya sering merasa gugup dan gelisah",
        answers: [
            {option: "Never", point: 1},
            {option: "Rarely", point: 2},
            {option: "Sometimes", point: 3},
            {option: "Often", point: 4},
            {option: "Always", point: 5}           
        ]
    },
    {
        question: "Tangan saya sering gemetar",
        answers: [
            {option: "Never", point: 1},
            {option: "Rarely", point: 2},
            {option: "Sometimes", point: 3},
            {option: "Often", point: 4},
            {option: "Always", point: 5}           
        ]
    },
    {
        question: "Saya sepertinya terus-menerus mengkhawatirkan banyak hal",
        answers: [
            {option: "Never", point: 1},
            {option: "Rarely", point: 2},
            {option: "Sometimes", point: 3},
            {option: "Often", point: 4},
            {option: "Always", point: 5}           
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
        showResult();
    }
}

function showResult() {
    if (localStorage.getItem("score")) {
        window.location.replace("/result.html");
    }else{
        localStorage.setItem("score", score);
        window.location.replace("/result.html");
    }
    
}

if (!localStorage.getItem("score")) {
    loadQuestion();
}else{
    showResult();
}

