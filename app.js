import { getRandomThrow, checkResults } from './get-random-throw.js';

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const displayWinSpan = document.getElementById('user-win');
const displayLossSpan = document.getElementById('user-loss');
const displayDrawSpan = document.getElementById('user-draw');
const resultDisplay = document.getElementById('show-message');
const resultWinImage = document.getElementById('show-win-image');
const resultLoseImage = document.getElementById('show-lose-image');
let win = 0;
let loss = 0;
let draw = 0;

function showMessage(msg) {
    resultDisplay.style.visibility = 'visible';
    resultDisplay.textContent = msg
};

function showWinLossImage(result) {
    if (result === 'win') return resultWinImage.style.display = 'inline-block';
    else if (result === 'loss') return resultLoseImage.style.display = 'inline-block';
    else return;
};

function hideWinLossImage() {
    resultWinImage.style.display = 'none';
    resultLoseImage.style.display = 'none';
};

function resetGame() {
    displayWinSpan.textContent = "";
    displayLossSpan.textContent = ""; 
    displayDrawSpan.textContent = ""; 
    win = 0;
    loss = 0;
    draw = 0;
    showMessage('');
    hideWinLossImage();
};

function outcome(result) {
    if (result === 'win') {
        win++;
        displayWinSpan.textContent = win;
        showMessage('You Win!')
        showWinLossImage('win');
    } else if (result === 'loss') {
        loss++;
        displayLossSpan.textContent = loss;
        showMessage('You Lose!')
        showWinLossImage('loss');
    } else if (result === 'draw') {
        draw++;
        displayDrawSpan.textContent = draw;
        hideWinLossImage();
    }
};

function runGame() {
    const computerChoice = getRandomThrow();
    const userGuess = document.querySelector('input:checked').value;
    const gameResult = checkResults(userGuess, computerChoice);
    hideWinLossImage();
    showMessage('');
    outcome(gameResult);
};

resetButton.addEventListener('click', () => {
    resetGame();
});

playButton.addEventListener('click', () => {
    runGame();
});
