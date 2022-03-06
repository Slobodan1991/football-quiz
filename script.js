const quizData = [
    {
        question: 'Which team won the Champions League 2020/2021?',
        a: 'Real Madrid',
        b: 'Manchester City',
        c: 'Chelsea',
        d: 'PSG',
        correct: 'c'
    }, {
        question: 'For which club Dušan Vlahović currently plays(2022)?',
        a: 'Partizan',
        b: 'Fiorentina',
        c: 'Monaco',
        d: 'Juventus',
        correct: 'd'
    }, {
        question: 'Steven Gerrard is a coach...?',
        a: 'Liverpool',
        b: 'Aston Villa',
        c: 'Rangers',
        d: 'LA Galaxy',
        correct: 'b'
    }, {
        question: 'Which player was the captain of Roma?',
        a: 'Francesco Totti',
        b: 'Alessandro Del Piero',
        c: 'Fabio Cannevaro',
        d: 'Paolo Maldini',
        correct: 'a'
    }, {
        question: 'Cristiano Ronaldo transferred from Manchester to?',
        a: 'Juventus',
        b: 'Real Madrid',
        c: 'Sporting',
        d: 'Manchester City',
        correct: 'b'
    }
];

const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const quiz = document.getElementById("quiz")


const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const btnSubmit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected() {
    const answersEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answersEls.forEach((answersEl) => {
        if(answersEl.checked) {
            answer = answersEl.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answersEls.forEach((answersEl) => {
        answersEl.checked = false;
    });
}

btnSubmit.addEventListener('click', () => {
    
    const answer = getSelected(); 
        console.log(answer);
        if(answer) {
            if (answer === quizData[currentQuiz].correct) {
                score++;
            }
            currentQuiz++;    
            if(currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `<h2 id="text"> You answered correctly at ${score}/${quizData.length} questions. </h2> 
                <button onclick="location.reload()">Play again</button>`
            }
        }
        
});

