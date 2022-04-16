// Function for showing highsocres
function displayHighscores() {
  // Get highscrces from localstorage
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  // Sort highscores
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function(score) {
    // Create li for each score
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + ": " + score.score;

    // Display score on page
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}

// Function for clearing highscores
function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

// Listen for click
document.getElementById("clear").onclick = clearHighscores;

// Run function on page load
displayHighscores();
