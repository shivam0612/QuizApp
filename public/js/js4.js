// js
const quizDB = [{
        question: "Q1: Which type of JavaScript language is ___",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans: "ans2"
    },
    {
        question: `Q2: Which of the following is the correct output for the following JavaScript code: 

        varx=5,y=1  
        var obj ={ x:10}  
        with(obj)  
        {  
            alert(y)  
        }  `,
        a: "1",
        b: "Error",
        c: "10",
        d: "15",
        ans: "ans1"
    },
    {
        question: "Q3: Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans: "ans4"
    },
    {
        question: `Q4: Among the following given JavaScript snipped codes, which is more efficient:
        Code A:
        for(var number=10;number>=1;number--)  
        {  
        document.writeln(number);  
        }  
        Code B:
        var number=10;  
        while(number>=1)  
        {  
        document.writeln(number);  
            number++;  
        }  
    `,
        a: "Code 1",
        b: "Code 2",
        c: "Both",
        d: "Cannot COmpare",
        ans: "ans1"
    },
    {
        question: "Q5: In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements into a single compound statement",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        ans: "ans2"
    },
    {
        question: "Q6: When interpreter encounters an empty statements, what it will do:",
        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: "Throws an error",
        d: "Ignores the statements",
        ans: "ans4"
    }, {
        question: "Q7: In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements into a single compound statement",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        ans: "ans2"
    }, {
        question: "Q8: When interpreter encounters an empty statements, what it will do:",
        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: "Throws an error",
        d: "Ignores the statements",
        ans: "ans4"
    },
    {
        question: "Q9: Which type of JavaScript language is ___",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans: "ans2"
    }, {
        question: `Q10: Which of the following is the correct output for the following JavaScript code: 

        varx=5,y=1  
        var obj ={ x:10}  
        with(obj)  
        {  
            alert(y)  
        }  `,
        a: "1",
        b: "Error",
        c: "10",
        d: "15",
        ans: "ans1"
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