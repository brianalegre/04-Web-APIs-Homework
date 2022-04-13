// HTML Targeting Variables
var classShow = document.querySelector(".show")
var classHidden = document.querySelector(".hidden")
var timeEl = document.querySelector("#timeRemaining")
var startButton = document.querySelector(".start")
var questionToAsk = document.querySelector(".question-section")
// choice1 = document.querySelector("#choice1")
// choice2 = document.querySelector("#choice2")
// choice3 = document.querySelector("#choice3")
// choice4 = document.querySelector("#choice4")
var clickedGuess = document.querySelector(".choice-section")
var choicesEl = document.getElementById("choices");


// Variables
var secondsLeft = 100;
var questionListIndex = 0;



// List of all questions, choices, and answers
var questionList = [
    {
        title: "Who's that Pokemon?",
        choices: ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"],
        answer: "Pikachu"
    },
    {
        title: "Who's that Pokemon?",
        choices: ["Squirtle", "Squirtle", "Charmander", "Squirtle"],
        answer: "Charmander"
    },
    {
        title: "Who's that Pokemon?",
        choices: ["Charmander", "Charmander", "Charmander", "Squirtle"],
        answer: "Squirtle"
    },
    ];

// Function for changing class from "hidden" to "show"
// Verified. Works
function goToHidden () {
    // Targets a class with "Show"
    classShow.setAttribute("class", "hidden")
}

// Function for changing class from "hidden" to "show"
// Verified. Works
function goToShow () {
    // Targetse a class with "Hidden"
    classHidden.setAttribute("class", "show")
}



// Timer Function
// Verified. Works
function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        // Minus 1 second
        secondsLeft--;
        // Push seconds to timeEl
        timeEl.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);}
    // 1000ms / 1s for delay
    }, 1000)
}

// Start the Games once Start Quiz Button is clicked
function startGame() {
    goToHidden();
    goToShow();
    startTimer();
    // cylceQuestion();
    getQuestion();
}

// Display Question and Answers
// Verified 1st question is display + Choices
// Need to go onto second question
function getQuestion() {
    var currentQuestion = questionList[questionListIndex];

    // Display Question
    questionToAsk.textContent = currentQuestion.title;

    // Clear Choices
    choicesEl.innerHTML = "";

    // Loop choices
    currentQuestion.choices.forEach(function(choice) {
        // Create new choice button for each choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("choice", choice);
        choiceNode.textContent = choice;

        // // Listen for Click
        // choiceNode.onclick = questionClicked;

        choicesEl.appendChild(choiceNode)

           // Listen for click
    choiceNode.addEventListener("click", questionClicked)

    });

    // {
    //     if (event.target.getAttribute("choice") === currentQuestion.answer) {
    //         alert("Correct!")
    //     } else {
    //         alert("Wrong!")
    //     }
    // }
}


function questionClicked() {
    // Check is clicked is wrong
    if (this.value !== questionList[questionListIndex].answer) {
        // Minus 10 seconds of remaining time
        secondsLeft -=10

        // Display new time
        timeEl.textContent = secondsLeft
        console.log("answer is wrong")
        console.log(this.value)
        // Display Status

    } else {
        // Display Status
        console.log("correct")
        
    }
    // Increment questionListIndex
    questionListIndex++
    getQuestion()
}



    // // Display Question
    // questionToAsk.textContent = questionList[0].title;
    // // Display Choices
    // choice1.textContent = questionList[0].choices[0];
    // choice2.textContent = questionList[0].choices[1];
    // choice3.textContent = questionList[0].choices[2];
    // choice4.textContent = questionList[0].choices[3];



//     clickedGuess.onclick = checkAnswer
// }


//     // Check if clicked is correct answer
// function checkAnswer() {
//     if (this.value === questionList[0].answer) {
//         console.log("you picked right")
//     } else {
//         console.log("you picked wrong")
//     }
// }

// Listen for click to start the game
// Verified. Works
startButton.onclick = startGame;


// Testing Functions area
// -----------------------------------------------------------------------------------
// Testing Timer Function 
// Verified. Works
// setTime();          // Verified. Works

// Testing Functions goToShow, goToHidden
// Verified. Works
// goToHidden();       // Verified. Works
// goToShow();         // Verified. Works

