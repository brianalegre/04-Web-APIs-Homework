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
var optionsEl = document.getElementById("options");
var imageEl = document.getElementById("image")
var scoreEl = document.getElementById("score")
var feedbackEl = document.getElementById("feedback")

// Variables
var secondsLeft = 100;
var questionListIndex = 0;
var score = 0;
// var currentQuestion;



// List of all questions, options, and answers
var questionList = [
    {
        title: "Who's that Pokemon?",
        options: ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"],
        image: "./assets/images/gPikachu.png",
        answer: "Pikachu"
    },
    {
        title: "Who's that Pokemon?",
        options: ["Squirtle", "Squirtle", "Charmander", "Squirtle"],
        answer: "Charmander"
    },
    {
        title: "Who's that Pokemon?",
        options: ["Charmander", "Charmander", "Charmander", "Squirtle"],
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
    
        if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Go to endGame
        endGame();
        }
    // 1000ms / 1s for delay
    }, 100)
}

// Start the Games once Start Quiz Button is clicked
function startGame() {
    goToHidden();
    goToShow();
    startTimer();
    // cylceQuestion();
    getQuestion();
}


// Function for getting the questions, displaying question + options
function getQuestion() {
    var currentQuestion = questionList[questionListIndex];
    
    // Clear Options
    optionsEl.innerHTML = ""

    // Display Question
    questionToAsk.textContent = currentQuestion.title;

    // Display 0 Score
    scoreEl.textContent = score;

    // Display Options
    // Loop thru array of answers
    var options = currentQuestion.options;
    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        var button = document.createElement("button");
        button.textContent = option;

        // Check if Clicked is correct
        button.addEventListener("click", function(event) {
            var selectedOption = event.target.textContent;
            if (selectedOption === currentQuestion.answer) {
                console.log("Got'em"); 

                // Plus 10 points to score
                score += 10;
                scoreEl.textContent = score; 
                feedbackEl.textContent = "Correct!"

            } else {
                console.log("Pokemon got away");

                // Minus 10 seconds of remaining time
                secondsLeft -=10;
                timeEl.textContent = secondsLeft;

                // Minus 5 from score
                score -= 5;
                scoreEl.textContent = score;
                feedbackEl.textContent = "Wrong!"
            }

        // Go to next question
        questionListIndex++

        // Check if there are any more questions
        if (questionListIndex >= questionList.length) {
            endGame();
        } else {
            getQuestion();
        }
        
        })
    optionsEl.append(button);
    }
}


// Inserting an image
var img = document.createElement("img")
img.setAttribute("src", "./assets/images/1-Bulbasaur.jpg");
imageEl.append(img)


// Function for endgame;
function endGame() {
    console.log("This is the end")
}














// // Display Question
    // questionToAsk.textContent = questionList[0].title;
    // // Display Choices
    // choice1.textContent = questionList[0].choices[0];
    // choice2.textContent = questionList[0].choices[1];
    // choice3.textContent = questionList[0].choices[2];
    // choice4.textContent = questionList[0].choices[3];
    






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


