//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score
var header = document.getElementById("header");
var timerCount = document.getElementById("timer-count"); 
var timer ; 
var startButton = document.querySelector("start-button"); 
var title = document.querySelector("title");
var description = document.querySelector("description"); 
var score = 0; 
var penalty = 10; 
var choiceA = document.getElementById("choice-A"); 
var choiceB = document.getElementById("choice-B"); 
var choiceC = document.getElementById("choice-C");
var choiceD = document.getElementById("choice-D"); 
var answerCheck = document.querySelector("answer-check");
var questionTitle = document.getElementById("question-title");
var questionSource = [ 
    { question: "Question 1 = What does HTML stand for?", 
    choices: ["A. Handy Tools Made for Learning", "B. Huge Task Made Last", "C. HyperText Markup Language", "D. Higher Tasks Might Learn"],
    answer: "C"
    },
    { question: "Question 2 = What is the phrase used commonly in to demostrate coding syntax?",
    choices: ["A. Hello There", "B. Hey Guys", "C. What up", "D. Hello World"],
    answer:"D",
    },
    
    { question: "Which symbol is used for comments on Javascript?",
        choices: [ "A. //", "B. --", "C. #", "D. *" ],
        answer: "A"
    },
    

    { question: "What command will display text on the console?", 
    choices:["A. console.display()", "B. console.log()", "C. console.pullup", "D. log.console()"],
    answer: "B"
        
    }, 
    { question: "What does CSS stand for?",
    choices: ["A. Central Styling Station", "B. Cascading Style Sheets", "C. Cross Stream Sensor", "D. Command Support System",], 
    answer: "B"
        
    }, 
    { question: "What HTML element is used to link Javascript?", 
    choices: ["A. <script>", "B. <link>", "C. <java>", "D. <attach>"], 
    answer: "A"

    }, 
    { question: "How is a function statement written?", 
    choices: ["A. function [myFunction]", "B. function = myFunction()", "C. function.myFunction()", "D. function myFunction() "], 
    answer: "D"
    }, 
    { question: "How is an if statement written?", 
    choices: ["A. if {i = 0};", "B. if = (i = 0)", "C. if (i = 0) {}", "D. if.i = 0"],
    },

] 





function countdown() {
  var timeLeft = 80;

  var timeInterval = setInterval(function () {
    
    if (timeLeft > 1) {
      
      timerCount.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerCount.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
     
      timerCount.textContent = '';
      
      clearInterval(timeInterval);
      
      displayMessage();
    }
  }, 1000);


}; 

function nextQuestion() {
  questionTitle.textContent = questionSource[questionIndex].question;
  choiceA.textContent = questionSource[questionIndex].choices[0];
  choiceB.textContent = questionSource[questionIndex].choices[1];
  choiceC.textContent = questionSource[questionIndex].choices[2];
  choiceD.textContent = questionSource[questionIndex].choices[3];
}; 

function insertQuestion() { 
  header.style.display = "none";
  questionTitle.style.display = "block"; 
};

function startGame () {  
   
  countdown(); 
  insertQuestion();
  for (i = 0; i < questionSource.length; i ++) { 
    var response = questionSource[i].question; 
    if (response = questionSource[i].answer) { 
      score++; 
      answerCheck.textContent = ("Correct!");
    } else {
      timeLeft -= 10; 
      answerCheck.textContent = ("Incorrect :/"); 
    }
  }
  timeInterval = setInterval(startTimer, 1000);
  


}; 




startButton.eventListener("click", startGame);