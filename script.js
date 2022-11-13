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

var timerCount ; 
var timer ; 
var startButton = document.queryselector("start-button")
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


   