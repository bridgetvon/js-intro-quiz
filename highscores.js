var scorePage = document.getElementById('score-page');
var saved = document.getElementById('saved-store');
//const scores = JSON.parse(localStorage.getItem("score")) || [];



function highScore (data) {
    var initials = document.getElementById("saved-score").value;
    var obj = {
        name: initials, 
        score: score
    }
    var data = JSON.parse(localStorage.getItem("highscore"));

    if (data == null) {
        
        highscore.push(obj);
        localStorage.setItem('highscore', JSON.stringify(highscore));
    } else {

    console.log(data);
    data.push(obj);


    localStorage.setItem('highscore', JSON.stringify(data));
    };
    var list = document.getElementById('testing');
  
  //display highscores 
  for (var i=0; i < localStorage.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = ('highscore', JSON.stringify(data));
    document.body.appendChild(li);
   
  };
 // scorePage.classList.remove("hidden");
  //loop local storage and create an li element for each itemn append child within the loop 
  // remove hidden from highscore list when clicked 

};


var saveButton = document.getElementById("save");
saveButton.addEventListener("click", highScore);