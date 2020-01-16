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

//show win/lose message
function showMessage(msg) {
    resultDisplay.style.visibility = 'visible';
    resultDisplay.textContent = msg
};

//show win image
function showWinLossImage(result) {
    if (result === 'win') return resultWinImage.style.display = 'inline-block';
    else if (result === 'loss') return resultLoseImage.style.display = 'inline-block';
    else return;
};

//show lose image
function hideWinLossImage() {
    resultWinImage.style.display = 'none';
    resultLoseImage.style.display = 'none';
};

//resets win/lose/draw counts and hides messages/images
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


//takes results of running game shows win/lose message and images, updates counts
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

//gets random throw from computer and user input and checks result before calling outcome function.
function runGame() {
    const computerChoice = getRandomThrow();
    const userGuess = document.querySelector('input:checked').value;
    const gameResult = checkResults(userGuess, computerChoice);
    hideWinLossImage();
    showMessage('');
    outcome(gameResult);
};

//reset button
resetButton.addEventListener('click', () => {
    resetGame();
});

//play button
playButton.addEventListener('click', () => {
    runGame();
});
