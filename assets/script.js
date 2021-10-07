//on start quiz button click, start timer and hide welcome page 
var startbtn = document.getElementById("#start");
btn.addEventlistener("click", startQuiz);
function startQuiz () {
    //move to questions 

    //start timer
  var timerStart = function startTimer {
        var countDown = 60; 
        setInterval(function()){
            if (countDown >= 0){
                
            }
        }
    },
    console.log("I have started my quiz");
};
// Once timer is started display quiz questions, these need to be able to be clicked and answers saved 
// Declare variable for quiz questions 

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



// fucntion to generate quiz



