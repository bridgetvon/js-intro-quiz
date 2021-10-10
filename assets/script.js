// get variables from HTML
var quizQuestions = document.getElementById('questions');
var choices = document.getElementById('options');
var title = document.getElementById('quiz-start');
var score = 0;

//on start quiz button click, start timer and hide welcome page 
var startButton = document.querySelector('button');
var countDownEl = document.getElementById('seconds');

function updateCountdown () {
 var timeLeft = 60;

 var timeInterval = setInterval(function() {
     if (timeLeft > 1) {
    countDownEl.textContent = timeLeft + ' seconds remaining';
    timeLeft--;
     } else if (timeLeft === 1) {
         countDownEl.textContent = timeLeft + ' second remaining';
         timeLeft--;
    } else {
        countDownEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage("You are out of time!");
    }
 }, 1000);

 title.classList.add('hidden');
 quizQuestions.classList.remove('hidden');
 updateQuestion();
}



startButton.addEventListener("click", (updateCountdown));

//create an array for questions 

var codeQuestions = [
    {
        question: "What is an example of correct camelcasing in JS?",
        answers: {
            a: 'hElLoWoRlD',
            b: 'helloWorld',
            c: 'HelloWorld',
            d: 'helloworlD',
        }, 
        correct: 'b'
    },
    {
        question: "Which HTML element holds the JavaScript?",
        answers: {
            a: 'js',
            b: 'Script',
            c: 'javascript',
            d: 'script',
        },
        correct: 'd'
    },
    {
        question: "Who am I?",
        answers: {
            a: 'dog',
            b: 'cat',
            c: 'person',
            d: 'computer',
        },
        correct: 'c'
    },
    {
        question: "How do you call a function?",
        answers: {
            a: 'call function()',
            b: 'display function',
            c: 'function',
            d: 'function()',
        },
        correct: 'd'
    },
    {
        question: "Is JavaScript client side or server side?",
        answers: {
            a: 'client',
            b: 'neither',
            c: 'server',
            d: 'both',
        },
        correct: 'a',
    },
    {
        question: "which is not a JavaScript data type?",
        answers: {
            a: 'boolian',
            b: 'string',
            c: 'number',
            d: 'loop',
        },
        correct: 'd',
    },
    {
        question: "What does this keyword refer to?",
        answers: {
            a: 'the javaScript',
            b: 'the website',
            c: 'the object',
            d: 'the user',
        },
        correct: 'c',
    },
];

//function to display code questions 
var questionIndex = 0;     
var singleQuestion = document.getElementById('question');
var choices = document.querySelectorAll('.answer-choice');

function updateQuestion () {

singleQuestion.innerHTML = codeQuestions[0].question;
choices[0].innerHTML = codeQuestions[0].answers.a
choices[1].innerHTML = codeQuestions[0].answers.b
choices[2].innerHTML = codeQuestions[0].answers.c
choices[3].innerHTML = codeQuestions[0].answers.d

for (i=0; i<4; i++) {
    choices[i].addEventListener("click", changeQuestion);
}
};

function changeQuestion (event) {

    if (event.target.id == codeQuestions[questionIndex].correct) {
        score++
        console.log(score);
        localStorage.setItem('highscore', score);
    }
   
    questionIndex++;
    if (questionIndex == codeQuestions.length) {
        alert("End of quiz:" + score)
        return;
        //display an element hide ending page element.classlist.remove. class hidden 
    }


console.log("1",questionIndex);
console.log(codeQuestions[1].answers.a);
console.log(codeQuestions[questionIndex].answers.a);
console.log(choices);
singleQuestion.innerHTML = codeQuestions[questionIndex].question;
choices[0].innerHTML = codeQuestions[questionIndex].answers.a;
choices[1].innerHTML = codeQuestions[questionIndex].answers.b;
choices[2].innerHTML = codeQuestions[questionIndex].answers.c;
choices[3].innerHTML = codeQuestions[questionIndex].answers.d;

};

//once quiz is finsihed get items from local storage and display highschore page 

var scorePage = document.getElementById('score-page');
var scoreStore = [];
var saved = document.getElementById('saved-store');
var inputSave = savedScore.value;


/*function highScores () {
    if (questionIndex == codeQuestions.length) {
    document.getElementById('score-page');
    title.classList.add('hidden');
    document.getElementById('score').innerHTML = localStorage.getItem("score");
    window.localStorage.setItem("score");
    }
    
};

highScores();*/

function highScores () {
    if (saved ==null || save == "") {
        document.getElementById('write').innerHTML = "nothing to store"; 
    }else {
        scoreStore.push('inputSave');
       inputSave.value= "";
       window.localStorage.setItem("score", scoreStore.join(" "));
    }
    };




















// Once timer is started display quiz questions, these need to be able to be clicked and answers saved 
// Declare variable for quiz questions 



// fucntion to generate quiz

