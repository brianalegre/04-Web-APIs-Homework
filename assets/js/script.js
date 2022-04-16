// HTML Targeting Variables
var classShow = document.querySelector(".show")
var classHidden = document.querySelector(".hidden")
var classHide = document.querySelector(".hide")
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
var containerEl = document.getElementById("container")
var initialsEl = document.getElementById("initials");
var submitEl = document.getElementById("submit")
var clearEl = document.getElementById("clear")
var ulEl = document.querySelector("ul")

// Variables
var secondsLeft = 300;
var questionListIndex = 0;
var score = 0;
// var timerInterval;
var initials;
var player = [];
var finalScore;
var playerIndex = 0;
// var currentQuestion;



// // List of all questions, options, and answers
// var questionList = [
//     {
//         title: "Who's that Pokemon?",
//         options: ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"],
//         image: "./assets/images/gPikachu.png",
//         answer: "Pikachu"
//     },
//     {
//         title: "Who's that Pokemon?",
//         options: ["Squirtle", "Squirtle", "Charmander", "Squirtle"],
//         answer: "Charmander"
//     },
//     {
//         title: "Who's that Pokemon?",
//         options: ["Charmander", "Charmander", "Charmander", "Squirtle"],
//         answer: "Squirtle"
//     },
//     ];

// Function for changing class from "hidden" to "show"
// Verified. Works
function goToHidden () {
    // Targets a class with "Show"
    classShow.setAttribute("class", "hidden")
}

// Function for changing class from "hidden" to "show"
// Verified. Works
function goToShow () {
    // Targets a class with "Hidden"
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
        // clearInterval(timerInterval)
        secondsLeft = 0;
        endGame();
        }
    // 1000ms / 1s for delay
    },1000);
}

// Start the Games once Start Quiz Button is clicked
function startGame() {
    goToHidden();
    goToShow();

    // cylceQuestion();
    getQuestion();
}


// Function for getting the questions, displaying question + options
function getQuestion() {
    startTimer();
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


// Inserting an image
// var img = document.createElement("img")
// img.setAttribute("src", "./assets/images/1-Bulbasaur.jpg");
// imageEl.append(img)


// Function for endgame;
function endGame() {
    console.log("This is the end")
    clearInterval(timerInterval)
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

// Next things to do:
    // Save the highScore
    // Display highScore
    // Clear highScore

// Save highScore
    // Save Initials from textbox
// function displayScores () {
    
//     // currentplayer = player[playerIndex]
//     console.log(initials)
//     // Render a new li for each player
//     for (var i = 0; i < player.length; i++)
//         var players = player[i];

//         // Create li elemenets for each palyer
//         var li = document.createElement("li");
//         li.textContent = players;
//         li.setAttribute("data-index", i)
//         ulEl.appendChild(li);
// }

// function saveScores () {
//     localStorage.setItem("player", JSON.stringify(player));
// }

// // Event Listen to Submit Button
// submitEl.addEventListener("submit", function(event) {
//     event.preventDefault();
//     initials = initialsEl.value.trim()
    
//     // Check if initals is empty
//     if (initials === "") {
//         return
//     }
//     player.push(initials)
    
// });

// // Display Question
    // questionToAsk.textContent = questionList[0].title;
    // // Display Choices
    // choice1.textContent = questionList[0].choices[0];
    // choice2.textContent = questionList[0].choices[1];
    // choice3.textContent = questionList[0].choices[2];
    // choice4.textContent = questionList[0].choices[3];
    


    
    // user clicks button to submit initials

    // Listen for click
    // clearEl.onclick = clearHighScores;

// Listen for click to start the game
// Verified. Works
startButton.onclick = startGame;
submitEl.onclick = saveHighScore;
initialsEl.onkeyup = checkForEnter; 



// Testing Functions area
// -----------------------------------------------------------------------------------
// Testing Timer Function 
// Verified. Works
// setTime();          // Verified. Works

// Testing Functions goToShow, goToHidden
// Verified. Works
// goToHidden();       // Verified. Works
// goToShow();         // Verified. Works



function saveHighScore() {
    // Get value of input box
    var initials = initialsEl.value.trim();

    // Check if initials is empty
    if (initials !== "") {
      // Save highScore
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

    // format new score object for current user
    var newScore = {
        score: score,
        initials: initials
    };

      // save to localstorage
    highScores.push(newScore);
    window.localStorage.setItem("highScores", JSON.stringify(highScores));
    }
}

// Listen for Enter Key on highScore Section
function checkForEnter(event) {
    if (event.key === "Enter") {
    saveHighScore();
    }
}


    // // Get highScores from localStorage
    // var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    // console.log("hi" + highScores)
    // // sort highscores by score property in descending order
    // // highScores.sort(function(a, b) {
    // // return b.score - a.score;
    // // });

    // // create li tag for each high score
    // highScores.forEach(function() {
    //     var liTag = document.createElement("li");
    //     liTag.textContent = initials + " - " + score;

    // // display on page
    // var ulEl = document.getElementById("highScores");
    // ulEl.append(liTag);
    // });


// Clear highScores
function clearHighScores() {
    window.localStorage.removeItem("highScores");
    window.location.reload();
}

