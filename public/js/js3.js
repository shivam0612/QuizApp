// bootstrap
const quizDB = [
    {
        question: "Q1: Who developed the bootstrap?",
        a: "James Gosling",
        b: "Mark Jukervich",
        c: "Dennis Ritchie",
        d: "Mark Otto and Jacob Thornton",
        ans: "ans4",
    },
        {
        question: "Q2: Is Bootstrap3 mobile-first?",
        a: "True",
        b: "false",
        c: "Can't say",
        d: "May be",
        ans: "ans1",
    },
        {
        question: "Q3: Which of the following class in Bootstrap is used to provide a responsive fixed width container?",
        a: ".container-fixed",
        b: ".container-fluid",
        c: ".container",
        d: "All of the above",
        ans: "ans3",
    },
        {
        question: "Q4: How many columns are allowed in a bootstrap grid system?",
        a: "2",
        b: "12",
        c: "3",
        d: "5",
        ans: "ans2",
    },
        {
        question: "Q5: Which of the following class in bootstrap is used to create a big box for calling extra attention?",
        a: ".box",
        b: ".container",
        c: ".container-fluid",
        d: ".jumbotron",
        ans: "ans4",
    },
    {
        question: "Q6: The correct syntax of creating a standard navigation bar is -",
        a: `<nav class="navigationbar navbar">`,
        b: `<nav class="navbar navbar-default">`,
        c: `<nav class="nav navbar">`,
        d: `<nav class="navbar default">`,
        ans: "ans2",
    },
        {
        question: "Q7: Which of the following is the correct syntax of creating a standard navigation tab?",
        a: `<ul class="navigation nav-tabs">`,
        b: `<ul class="nav tab">`,
        c: `<ul class="nav nav-tabs">`,
        d: `<ul class="navigation tabs">`,
        ans: "ans3",
    },
        {
        question: "Q8: Which of the following class is used to create a black navigation bar?",
        a: ".navbar-default",
        b: ".navbar-inverse",
        c: ".navbar-black",
        d: ".navbar-dark",
        ans: "ans2",
    },
        {
        question: "Q9: The plugin used to create a cycle through elements as a slideshow is -",
        a: "slideshow",
        b: "scrollspy",
        c: "carousel",
        d: "None of the above",
        ans: "ans3",
    },
        {
        question: "Q10: Which of the following class in Bootstrap is used to create a dropdown menu?",
        a: ".dropdown",
        b: ".select",
        c: ".select-list",
        d: "None of the above",
        ans: "ans1",
    },
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