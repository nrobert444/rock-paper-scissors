import { getRandomThrow, checkResults } from './get-random-throw.js';

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const displayWinSpan = document.getElementById('user-win');
const displayLossSpan = document.getElementById('user-loss');
const displayDrawSpan = document.getElementById('user-draw');
const resultDisplay = document.getElementById('show-message');
const resultWinImage = document.getElementById('show-win-image');
const resultLoseImage = document.getElementById('show-lose-image');
const userThrowSpan = document.getElementById('user-throw');
const computerThrowSpan = document.getElementById('computer-throw');
const displayDate = document.getElementById('date-display');
const displayTime = document.getElementById('time-display');
const now = new Date();
const currentDate = now.toLocaleString();
const currentTime = now.toTimeString();
let player = { win: 0, loss: 0, draw: 0 };



//show win/lose message
function showMessage(msg, date, time) {
    displayDate.textContent = date;
    displayTime.textContent = time;
    resultDisplay.textContent = msg;
    
}

//show win image
function showWinLossImage(result) {
    if (result === 'win') return resultWinImage.style.display = 'inline-block';
    else if (result === 'loss') return resultLoseImage.style.display = 'inline-block';
    else return;
}

//show lose image
function hideWinLossImage() {
    resultWinImage.style.display = 'none';
    resultLoseImage.style.display = 'none';
}

//resets win/lose/draw counts and hides messages/images
function resetGame() {
    displayWinSpan.textContent = '';
    displayLossSpan.textContent = ''; 
    displayDrawSpan.textContent = ''; 
    player.win = 0;
    player.loss = 0;
    player.draw = 0;
    showMessage();
    hideWinLossImage();
    showThrows();
}


//takes results of running game shows win/lose message and images, updates counts
function outcome(result) {
    if (result === 'win') {
        player.win++;
        displayWinSpan.textContent = player.win;
        showMessage('You Win!', currentDate, currentTime);
        showWinLossImage('win');
    } else if (result === 'loss') {
        player.loss++;
        displayLossSpan.textContent = player.loss;
        showMessage('You Lose!', currentDate, currentTime);
        showWinLossImage('loss');
    } else if (result === 'draw') {
        player.draw++;
        displayDrawSpan.textContent = player.draw;
        showMessage('Draw!', currentDate, currentTime);
        hideWinLossImage();
    }
}

//gets random throw from computer and user input and checks result before calling outcome function.
function runGame() {
    const computerChoice = getRandomThrow();
    const userGuess = document.querySelector('input:checked').value;
    const gameResult = checkResults(userGuess, computerChoice);
    showThrows(userGuess, computerChoice);
    hideWinLossImage();
    showMessage();
    outcome(gameResult);
}

//reset button
resetButton.addEventListener('click', () => {
    resetGame();
});

//play button
playButton.addEventListener('click', () => {
    runGame();
});

//Attn TA: why does this function break my buttons. had to drop low to get buttons to work.
function showThrows(userThrow, computerThrow) {
    userThrowSpan.textContent = userThrow;
    computerThrowSpan.textContent = computerThrow;
}

//userThrowSpan.textContent = userGuess;
//computerThrowSpan.textContent = computerChoice;