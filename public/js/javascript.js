const quizDB = [{
        question: "Q1: What is the fullform of HTML ?",
        a: "None of these",
        b: "HyperText and links Markup Language",
        c: "HighText Machine Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: The correct sequence of HTML tags for starting a webpage is",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        ans: "ans4"
    },
    {
        question: "Q3: Which of the following element is responsible for making the text bold in HTML?",
        a: "<pre>",
        b: "<a>",
        c: "<b>",
        d: "<br>",
        ans: "ans3"
    },
    {
        question: "Q4: Which of the following tag is used for inserting the largest heading in HTML?",
        a: "<h3>",
        b: "<h1>",
        c: "<h5>",
        d: "<h6>",
        ans: "ans2"
    },
    {
        question: "Q5: What is the fullform of HTML ?",
        a: "<br>",
        b: "<a>",
        c: "<pre>",
        d: "<b>",
        ans: "ans1"
    },
    {
        question: "Q6: How to create an unordered list (a list with the list items in bullets) in HTML?",
        a: "<ul>",
        b: "<ol>",
        c: "<li>",
        d: "<i>",
        ans: "ans1"
    },
    {
        question: "Q7: How to create a hyperlink in HTML?",
        a: `<a href = "www.javatpoint.com"> javaTpoint.com </a>`,
        b: `<a url = "www.javatpoint.com" javaTpoint.com /a>`,
        c: `<a link = "www.javatpoint.com"> javaTpoint.com </a>`,
        d: `<a> www.javatpoint.com <javaTpoint.com /a>`,
        ans: "ans1"
    },
    {
        question: "Q8: The correct sequence of HTML tags for starting a webpage is",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        ans: "ans4"
    }, {
        question: "Q9: Which of the following element is responsible for making the text bold in HTML?",
        a: "<pre>",
        b: "<a>",
        c: "<b>",
        d: "<br>",
        ans: "ans3"
    }, {
        question: "Q10: Which of the following tag is used for inserting the largest heading in HTML?",
        a: "<h3>",
        b: "<h1>",
        c: "<h5>",
        d: "<h6>",
        ans: "ans2"
    }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let count = 0;
let score = 0;
const loadquestion = () => {
    const qlist = quizDB[count];
    question.innerText = qlist.question;
    option1.innerText = qlist.a;
    option2.innerText = qlist.b;
    option3.innerText = qlist.c;
    option4.innerText = qlist.d;
}

loadquestion();

const chkans = () => {
    let answer;

    answers.forEach((curelem) => {
        if (curelem.checked) {
            answer = curelem.id;
        } else {
            showscore.innerHTML = `
            <h3>Your Score is ${score}/${quizDB.length}</h3>
            <button class="btn" type="submit" onclick="location.reload()">Play Again</button>
            `;
            // showscore.classList.remove('scorearea');
        }
        if (quizDB.length === count) {
            showscore.classList.remove('scorearea');
        }
    })
    return answer;

}

submit.addEventListener('click', () => {
    const getans = chkans();
    if (getans === quizDB[count].ans) {
        score += 1;

    };

    count += 1;
    if (count < quizDB.length) {
        loadquestion();
    }
})

function verify() {
    document.getElementById("cvalue").value = score;
}