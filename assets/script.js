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
        displayMessage();
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
        question: "who am I",
        answers: {
            a: 'dog',
            b: 'cat',
            c: 'perdson',
            d: 'computer',
        },
        correct: 'c'

    }
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

















// Once timer is started display quiz questions, these need to be able to be clicked and answers saved 
// Declare variable for quiz questions 



// fucntion to generate quiz

