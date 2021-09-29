const highScore = JSON.parse(localStorage.getItem('highscores'))
const highScoreText = document.querySelector('#high-score-display')
//parse score from local

function displayHighScore() {
    let highScoreText = highScore
    highScoreText.forEach(element => {
      let tempScoreDisplay = document.createElement('button')
      tempScoreDisplay.textContent = element
      highScoreText.appendChild('highScore')
    }
}

displayHighScore()