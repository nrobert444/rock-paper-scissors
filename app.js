import { getRandomThrow, checkResults } from './get-random-throw.js';


const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const displayWinSpan = document.getElementById('user-win');
const displayLossSpan = document.getElementById('user-loss');
const displayDrawSpan = document.getElementById('user-draw');
const player = {
    win: 0,
    loss: 0,
    draw: 0
};

let win = 0;
let loss = 0;
let draw = 0;

playButton.addEventListener('click', () => {
    const computerChoice = getRandomThrow();
    const userGuess = document.querySelector('input:checked').value;
    const gameResult = checkResults(userGuess, computerChoice);
    console.log(gameResult);
    if (gameResult === 'win') {
        player.win++;
        displayWinSpan.textContent = win;
    } else if (gameResult === 'loss') {
        player.loss++;
        displayLossSpan.textContent = loss;
    } else if (gameResult === 'draw') {
        player.draw++;
        displayDrawSpan.textContent = draw;
    }
    

});

resetButton.addEventListener('click', () => {
    resetGame();
});

// function resetGame() {
//     displayWinSpan.style.visibility = 'hidden';
//     displayLossSpan.style.visibility = 'hidden';
//     displayDrawSpan.style.visibility = 'hidden';
    

    

//};

// function showWinLossDraw() {
//     const gameResult = checkResults(userGuess, computerChoice);
//     if (gameResult === 'win') {
//     win++;
//     displayWinSpan.textContent = win;
//     } else if (gameResult === 'loss') {
//         loss++;
//         displayLossSpan.textContent = loss;
//     } else {
//         draw++;
//         displayDrawSpan.textContent = draw;
//     }
// };