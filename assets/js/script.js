// HTML Targeting Variables
var classShow = document.querySelector(".show")
var classHidden = document.querySelector(".hidden")
var classHide = document.querySelector(".hide")
var timeEl = document.querySelector("#timeRemaining")
var startButton = document.querySelector(".start")
var questionToAsk = document.querySelector(".question-section")
var clickedGuess = document.querySelector(".choice-section")
var optionsEl = document.getElementById("options");
var imageEl = document.getElementById("image")
var scoreEl = document.getElementById("score")
var feedbackEl = document.getElementById("feedback")
var containerEl = document.getElementById("container")
var initialsEl = document.getElementById("initials");
var submitEl = document.getElementById("submit")
var clearEl = document.getElementById("clear")
var ulEl = document.querySelector("ul")

// Variables
var secondsLeft = 100;
var questionListIndex = 0;
var score = 0;
var initials;
var player = [];
var finalScore;
var playerIndex = 0;
var timerInterval;


// Function for changing class from "hidden" to "show"
function goToHidden () {
    // Targets a class with "Show"
    classShow.setAttribute("class", "hidden")
}

// Function for changing class from "hidden" to "show"
function goToShow () {
    // Targets a class with "Hidden"
    classHidden.setAttribute("class", "show")
}


// Timer Function
function startTimer() {
        // Minus 1 second
        secondsLeft--;
        // Push seconds to timeEl
        timeEl.textContent = secondsLeft;
    
        if(secondsLeft <= 0) {
        endGame();
        }
}


// Start the Games once Start Quiz Button is clicked
function startGame() {
    // Sets interval in variable
    // 1000ms / 1s for delay
    timerInterval = setInterval(startTimer, 1000)
    goToHidden();
    goToShow();
    getQuestion();
}


// Function for getting the questions, displaying question + options
function getQuestion() {
    var currentQuestion = questionList[questionListIndex];
    
    // Clear Options
    optionsEl.innerHTML = ""

    // Clear Image
    imageEl.innerHTML = ""

    // Display Question
    questionToAsk.textContent = currentQuestion.title;

    // Dispaly Pokemon Image
    var picture = currentQuestion.image;
    var img = document.createElement("img")
    img.setAttribute("src", picture);
    imageEl.append(img)

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

                // Plus 10 points to score
                score += 10;
                scoreEl.textContent = score; 
                feedbackEl.textContent = "Correct!"

            } else {

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

        // Check if there are any more questions or time runs out
        if (questionListIndex >= questionList.length) {
            endGame();
        } else {
            getQuestion();
        }
        
        })
    optionsEl.append(button);
    }
}


// Function for ending the game
function endGame() {
    clearInterval(timerInterval)
    // clearInterval(timerInterval)
    // Hide Questions
    containerEl.setAttribute("class", "hidden")

    // Show the Highscore section
    classHide.setAttribute("class", "show");

    // Get the final score 
    var finalScore = score;  
        // Bug with secondsLeft being subtracted at the end when it reaches 0
        // Removed secondsLeft for now

    // Target Final Score
    var finalScoreEl = document.getElementById("finalScore")
    
    // Display Final Score
    finalScoreEl.textContent = finalScore;

}

// Function for saving the scores
function saveHighscore() {
    // get value of input box
    var initials = initialsEl.value.trim();

    // make sure value wasn't empty
    if (initials !== "") {
        // get saved scores from localstorage, or if not any, set to empty array
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        // format new score object for current user
        var newScore = {
        score: score,
        initials: initials
        };

        // save to localstorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        // redirect to next page
        window.location.href = "highscores.html";
    }
    }

// Listen for Enter
function checkForEnter(event) {
// "13" represents the enter key
    if (event.key === "Enter") {
    saveHighscore();
    }
}

// Listen for clicks
startButton.onclick = startGame;
submitEl.onclick = saveHighscore;
initialsEl.onkeyup = checkForEnter; 
