const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const userGuess = document.querySelector('input:checked');
const displayWinSpan = document.getElementById('user-win');
const displayLossSpan = document.getElementById('user-loss');
const displayDrawSpan = document.getElementById('user-draw');
const computerGuess = Math.round(Math.random() * 3);

let win;
let loss;
let draw;

playButton.addEventListener('click', () => {

});

resetButton.addEventListener('click', () => {
    resetGame();
});

function resetGame() {
    displayWinSpan.style.visibility = 'hidden';
    displayLossSpan.style.visibility = 'hidden';
    displayDrawSpan.style.visibility = 'hidden';

    

};

function 