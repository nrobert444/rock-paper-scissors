export function getRandomThrow() {
    const randomGenerator = Math.floor(Math.random() * 3);
      
    if (randomGenerator === 0) {
        return "rock";
    }
        else if (randomGenerator === 1) {
        return "paper";
    }
        else if (randomGenerator === 2) {
        return "scissors";
    }

};

export function checkResults(player, computer) {
    if (computer === player) return 'draw';
    else if (computer === 'scissors' && player === 'rock') return 'win';
    else if (computer === 'paper' && player === 'scissors') return 'win';
    else if (computer === 'rock' && player === 'paper') return 'win';
    else return 'loss';
};