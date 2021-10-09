// get variables from HTML
var quizQuestions = document.getElementById('questions');
var choices = document.getElementById('options');


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
            a: '<js>',
            b: '<Script>',
            c: '<javascript>',
            d: '<script',
        },
    }
];

//function to display code questions 

function quiz () {
    

}
























/*function countDown() {
    timeLeft--;

    document.getElementById("#seconds").innerHTML = ( "timeleft" );
    if (timeleft > 0) {
        setTimeout(countDown, 1000);
    }
};

setTimeout(countDown, 6000);

var seconds = 60;
var secondsCount = document.getElementById("seconds").textContent;
var countDown = setInterval(function(){
    secondsCount--;
    document.getElementById("seconds").textContent = seconds;
    if (seconds <= 0) clearInterval(countDown);
    }, 60000);

/*var startTimer = setInterval(function(){
    if (timerStart <= 0) {
        clearInterval(timerStart);
    }
    document.getElementById("#timerCount").value = 60 - timerStart;
    timerStart -= 1;
}, 60000);


//btn.addEventlistener("click", startTimer);

*/
// Once timer is started display quiz questions, these need to be able to be clicked and answers saved 
// Declare variable for quiz questions 



// fucntion to generate quiz

