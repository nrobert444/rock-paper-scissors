import { getRandomThrow, checkResults } from './get-random-throw.js';


const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const displayWinSpan = document.getElementById('user-win');
const displayLossSpan = document.getElementById('user-loss');
const displayDrawSpan = document.getElementById('user-draw');
const resultDisplay = document.getElementById('show-message');
const player = { win: 0, loss: 0, draw: 0 };

playButton.addEventListener('click', () => {
    const computerChoice = getRandomThrow();
    let userGuess = document.querySelector('input:checked').value;
    const gameResult = checkResults(userGuess, computerChoice);
    showMessage('');
    console.log(gameResult);
    if (gameResult === 'win') {
        player.win++;
        displayWinSpan.textContent = player.win;
        showMessage('You Win!')
        console.log(player)
    } else if (gameResult === 'loss') {
        player.loss++;
        displayLossSpan.textContent = player.loss;
        showMessage('You Lose!')
        console.log(player)
    } else if (gameResult === 'draw') {
        player.draw++;
        displayDrawSpan.textContent = player.draw;
        console.log(player)
    }
});

function showMessage(msg) {
    resultDisplay.style.visibility = 'visible';
    resultDisplay.textContent = msg
  }


resetButton.addEventListener('click', () => {
    resetGame();
});

 function resetGame() {
    displayWinSpan.textContent = "";
    displayLossSpan.textContent = ""; 
    displayDrawSpan.textContent = ""; 
    player.win = 0;
    player.lose = 0;
    player.draw = 0;
    showMessage('');
    

 };
