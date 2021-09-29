const highScore = JSON.parse(localStorage.getItem('highscores'))

const highScoreText = document.querySelector('#high-score-display')
//parse score from local

function displayHighScore() {
    highScoreText.innerHTML = ' ';
    let highScoreText = "highscore"
}

displayHighScore()


// problems displaying highscore, append or parse issue?