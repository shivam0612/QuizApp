// css
const quizDB = [{
        question: "Q1: What is the fullform of CSS ?",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        ans: "ans3",
    },
    {
        question: "Q2: Which of the following is the correct syntax for referring the external style sheet?",
        a: "<style src = example.css>",
        b: `<style src = "example.css" >`,
        c: "<stylesheet> example.css </stylesheet>",
        d: `<link rel="stylesheet" type="text/css" href="example.css">`,
        ans: "ans4",
    },
    {
        question: "Q3: The property in CSS used to change the background color of an element is -",
        a: "bgcolor",
        b: "color",
        c: "background-color",
        d: "None of the above",
        ans: "ans3",
    },
    {
        question: "Q4: The property in CSS used to change the text color of an element is -",
        a: "bgcolor",
        b: "color",
        c: "background-color",
        d: "None of the above",
        ans: "ans2",
    },
    {
        question: "Q5: The CSS property used to control the element's font-size is -",
        a: "text-style",
        b: "text-size",
        c: "font-size",
        d: "None of the above",
        ans: "ans3",
    },
        {
        question: "Q6: The HTML attribute used to define the inline styles is -",
        a: "style",
        b: "styles",
        c: "class",
        d: "None of the above",
        ans: "ans1",
    },
    {
        question: "Q7: Which is used to set the background image of an element?",
        a: "background-attachment",
        b: "background-image",
        c: "background-color",
        d: "None of the above",
        ans: "ans3",
    },
    {
        question: "Q8: Which of the following CSS property is used to set the background image of an element?",
        a: "background-attachment",
        b: "background-image",
        c: "background-color",
        d: "None of the above",
        ans: "ans3",
    }, {
        question: "Q9: Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
        a: "p {background-color : yellow;}",
        b: "p {background-color : #yellow;}",
        c: "all {background-color : yellow;}",
        d: "all p {background-color : #yellow;}",
        ans: "ans1",
    },
    {
        question: "Q10: Which of the following is the correct syntax to display the hyperlinks without any underline?",
        a: "a {text-decoration : underline;}",
        b: "a {decoration : no-underline;}",
        c: "a {text-decoration : none;}",
        d: "None of the above",
        ans: "ans3",
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