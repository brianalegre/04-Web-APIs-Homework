// HTML Targeting Variables
classShow = document.querySelector(".show")
classHidden = document.querySelector(".hidden")
timeEl = document.querySelector("#timeRemaining")

// Variables
secondsLeft = 100;



// List of all questions, choices, and answers
var questions = [
    {
        title: "Who's that Pokemon?",
        
        choices: ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"],
        answer: "Pikachu"
    },
    {
        title: "Who's that Pokemon?",
        choices: ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"],
        answer: "Charmander"
    },
    {
        title: "Who's that Pokemon?",
        choices: ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"],
        answer: "Squirtle"
    },
    ];

// Function for changing class from "hidden" to "show"
// Verified. Works
function goToHidden () {
    classShow.setAttribute("class", "hidden")
}

// Function for changing class from "hidden" to "show"
// Verified. Works
function goToShow () {
    classHidden.setAttribute("class", "show")
}

// Testing Functions goToShow, goToHidden
goToHidden();       // Verified. Works
goToShow();         // Verified. Works

// Timer Function
// Verified. Works
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);}
    // 1000ms / 1s for delay
    }, 1000)
}

// Testing Timer Function 
// Verified. Works
setTime();          // Verified. Works