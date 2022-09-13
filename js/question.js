let currentQuestion = 0;
let score = 0;
const questionarea = document.getElementById('question-area');
let questions = [
   {
       question: "Saya merasa cemas, khawatir, berfirasat buruk",
       answers: [
           {option: "Tidak Pernah", point: 0},
           {option: "Jarang", point: 1},
           {option: "Terkadang", point: 2},
           {option: "Sering", point: 3},
           {option: "Sangat Sering", point: 4}           
       ]
   },
   {
        question: "Saya merasa tegang, lelah, gelisah, gemetar, sulit untuk santai",
        answers: [
            {option: "Tidak Pernah", point: 0},
            {option: "Jarang", point: 1},
            {option: "Terkadang", point: 2},
            {option: "Sering", point: 3},
            {option: "Sangat Sering", point: 4}           
        ]
    },
    {
        question: "Saya takut terhadap banyak hal seperti takut terhadap gelap, takut terhadap orang asing, takut pada kerumuman",
        answers: [
            {option: "Tidak Pernah", point: 0},
            {option: "Jarang", point: 1},
            {option: "Terkadang", point: 2},
            {option: "Sering", point: 3},
            {option: "Sangat Sering", point: 4}           
        ]
    },
    {
        question: "Saya memiliki masalah tidur seperti sulit untuk tidur, tidur tidak memuaskan, merasa lelah saat bangun",
        answers: [
            {option: "Tidak Pernah", point: 0},
            {option: "Jarang", point: 1},
            {option: "Terkadang", point: 2},
            {option: "Sering", point: 3},
            {option: "Sangat Sering", point: 4}           
        ]
    },
    {
        question: "Saya sulit untuk berkonsentrasi, sulit mengingat",
        answers: [
            {option: "Tidak Pernah", point: 0},
            {option: "Jarang", point: 1},
            {option: "Terkadang", point: 2},
            {option: "Sering", point: 3},
            {option: "Sangat Sering", point: 4}           
        ]
    },
    {
        question: "Saya mudah kehilangan minat dan kesenangan dalam hal-hal yang saya lakukan",
        answers: [
            {option: "Tidak Pernah", point: 0},
            {option: "Jarang", point: 1},
            {option: "Terkadang", point: 2},
            {option: "Sering", point: 3},
            {option: "Sangat Sering", point: 4}           
        ]
    },
    {
        question: "Saya memiliki masalah otot seperti nyeri otot, otot terasa kaku, gigi gemertak",
        answers: [
            {option: "Tidak Pernah", point: 0},
            {option: "Jarang", point: 1},
            {option: "Terkadang", point: 2},
            {option: "Sering", point: 3},
            {option: "Sangat Sering", point: 4}           
        ]
    },
    {
        question: "elinga saya sering berdering dan pengelihatan saya sering kabur",
        answers: [
            {option: "Tidak Pernah", point: 0},
            {option: "Jarang", point: 1},
            {option: "Terkadang", point: 2},
            {option: "Sering", point: 3},
            {option: "Sangat Sering", point: 4}           
        ]
    },
    {
        question: "Saya mudah lemas, nyeri dada, denyut nadi meningkat",
        answers: [
            {option: "Tidak Pernah", point: 0},
            {option: "Jarang", point: 1},
            {option: "Terkadang", point: 2},
            {option: "Sering", point: 3},
            {option: "Sangat Sering", point: 4}           
        ]
    },
    {
        question: "Saya merasa dicekik, dada terasa ditekan, napas pendek/tersengal-sengal",
        answers: [
            {option: "Tidak Pernah", point: 0},
            {option: "Jarang", point: 1},
            {option: "Terkadang", point: 2},
            {option: "Sering", point: 3},
            {option: "Sangat Sering", point: 4}           
        ]
    },
    {
        question: "Saya merasa mual, sulit BAB, sulit menelan makanan, perut terasa nyeri",
        answers: [
            {option: "Tidak Pernah", point: 0},
            {option: "Jarang", point: 1},
            {option: "Terkadang", point: 2},
            {option: "Sering", point: 3},
            {option: "Sangat Sering", point: 4}
        ]
    },
    {
        question: "Saya susah untuk menahan buang air dan frekuensi berkemih meningkat",
        answers: [
            {option: "Tidak Pernah", point: 0},
            {option: "Jarang", point: 1},
            {option: "Terkadang", point: 2},
            {option: "Sering", point: 3},
            {option: "Sangat Sering", point: 4}
        ]
    },
    {
        question: "Mulut saya sering kering, wajah mudah pucat, sering berkeringat, pusing",
        answers: [
            {option: "Tidak Pernah", point: 0},
            {option: "Jarang", point: 1},
            {option: "Terkadang", point: 2},
            {option: "Sering", point: 3},
            {option: "Sangat Sering", point: 4}
        ]
    },
    {
        question: "Saya mudah gelisah, dan susah untuk tenang",
        answers: [
            {option: "Tidak Pernah", point: 0},
            {option: "Jarang", point: 1},
            {option: "Terkadang", point: 2},
            {option: "Sering", point: 3},
            {option: "Sangat Sering", point: 4}
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
    let description = document.getElementById('popup-result-description');
    popupResult.style.display = 'block';
    questionarea.style.display = 'none';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    svg.style.opacity = '0.5';
    switch (true){
        case score < 14:
            result.innerHTML = 'Anda tidak mengalami gejala cemas';
            description.innerHTML = 
            `Test ini hanya berdasarkan gejala umum dari kecemasan, dari hasil test menunjukan bahwa Anda tidak mengalami gejala cemas tetaplah ingat bahwa test ini hanya menjadi indikasi dan tidak dapat digantikan untuk test yang asli.
            <br><br>
            Tetaplah berusaha menjaga kesehatan mental dan fisikmu Akan lebih baik untuk memastikan ke psikolog agar anda mendapatkan penjelasan yang lebih tepat.`;
            break;
        case score >= 14 && score <= 19:
            result.innerHTML = 'Anda mengalami gejala cemas ringan';
            description.innerHTML = 
            `Test ini hanya berdasarkan gejala umum dari kecemasan, dari hasil test menunjukan bahwa Anda mengalami gejala cemas ringan tetaplah ingat bahwa test ini hanya menjadi indikasi dan tidak dapat digantikan untuk test yang asli.
            <br><br>
            Coba alihkan pikiran anda ke hal-hal yang positif dan berusaha untuk beristirahat lebih banyak Akan lebih baik untuk memastikan ke psikolog agar anda mendapatkan penjelasan yang lebih tepat.
            `;
            break;
        case score >= 20 && score <= 28:
            result.innerHTML = 'Anda mengalami gejala cemas sedang';
            description.innerHTML = 
            `Test ini hanya berdasarkan gejala umum dari kecemasan, dari hasil test menunjukan bahwa Anda mengalami gejala cemas sedang tetaplah ingat bahwa test ini hanya menjadi indikasi dan tidak dapat digantikan untuk test yang asli.\n
            <br><br>
            Segeralah mencari bantuan medis dan beristirahatlah lebih banyak Akan lebih baik untuk memastikan ke psikolog agar anda mendapatkan penjelasan yang lebih tepat
            
            `;
            break;
        case score >= 29 && score <= 40:
            result.innerHTML = 'Anda mengalami gejala cemas berat';
            description.innerHTML = 
            `Test ini hanya berdasarkan gejala umum dari kecemasan, dari hasil test menunjukan bahwa Anda mengalami gejala cemas berat tetaplah ingat bahwa test ini hanya menjadi indikasi dan tidak dapat digantikan untuk test yang asli.
            <br><br>
            Secara emosional kamu mungkin merasa lebih sensitif dan bersemangat daripada biasanya, dan kamu juga mungkin merasa kurang percaya diri lebih baik untuk memastikan ke psikolog agar anda mendapatkan penjelasan yang lebih tepat`;
            break;
        case score > 40:
            result.innerHTML = 'Anda mengalami gejala cemas sangat berat';
            description.innerHTML = 
            `Test ini hanya berdasarkan gejala umum dari kecemasan, dari hasil test menunjukan bahwa Anda mengalami gejala cemas sangat berat tetaplah ingat bahwa test ini hanya menjadi indikasi dan tidak dapat digantikan untuk test yang asli.
            <br><br>
            Segera konsultasikan dengan psikolog atau dokter terdekat. Jangan ragu untuk mencari bantuan medis! Akan lebih baik untuk memastikan ke psikolog agar anda mendapatkan penjelasan yang lebih tepat`;
            break;
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
}, 15000 );