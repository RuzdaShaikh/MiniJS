const moves = document.querySelectorAll('.move');
const scoreboard = document.querySelectorAll('.score-box')

const resetBtn1 = document.querySelector('.reset-btn1');

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

const msg = document.getElementById('msg');
const winnerMsg = document.querySelector('.winner-msg')

let userMove = '';
let computerMove = '';

let playerScore = 0;
let computerScore = 0;

const playGame = (userMove) => {
    const computerMove = generateCompMove();
    // console.log('Computer move = ', computer); // Debugging line
    // console.log('User move = ', userMove); // Debugging line
    if (userMove === computerMove) {
        msg.textContent = 'It is a tie';
        console.log('It is a tie');
    } else if (userMove === 'rock' && computerMove === 'scissors' || 
                userMove === 'paper' && computerMove === 'rock' || 
                userMove === 'scissors' && computerMove === 'paper') {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        console.log('Player wins');
    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        console.log('Computer wins');
    }
    updateMsg(userMove, computerMove);
    generateWinner()
}

const generateCompMove = () => {
    const random = Math.floor(Math.random() * 3);
    const moves = ['rock', 'paper', 'scissors'];
    return moves[random];
}

moves.forEach(move => {
    move.addEventListener('click', () => {
        userMove = move.getAttribute('id');
        playGame(userMove);
    })
})

const updateMsg = (userMove, computerMove) => {
    if (userMove === computerMove) {
        msg.textContent = "It's a tie!";
    } else if (
        (userMove === 'rock' && computerMove === 'scissors') ||
        (userMove === 'paper' && computerMove === 'rock') ||
        (userMove === 'scissors' && computerMove === 'paper')
    ) {
        msg.textContent = `${capitalize(userMove)} beats ${computerMove}. You win!`;
    } else {
        msg.textContent = `${capitalize(computerMove)} beats ${userMove}. Computer wins!`;
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const generateWinner = () => {
    // console.log('generateWinner called'); // Debugging line
    // console.log('playerScore:', playerScore, 'computerScore:', computerScore); // Debugging line

    if (playerScore === 3) {
        winnerMsg.innerHTML = '<span>Player wins the game!</span><br><button class="reset-btn2">Play Again</button>';
        winnerMsg.classList.remove('hide')

        const resetBtn2 = document.querySelector('.reset-btn2');
        resetBtn2.addEventListener('click', () => {
            resetGame();
            winnerMsg.classList.add('hide');
        });
    } else if (computerScore === 3) {
        winnerMsg.innerHTML = '<span>Computer wins the game!</span><br><button class="reset-btn2">Play Again</button>';
        winnerMsg.classList.remove('hide')

        const resetBtn2 = document.querySelector('.reset-btn2');
        resetBtn2.addEventListener('click', () => {
            resetGame();
            winnerMsg.classList.add('hide');
    });
    }
}

const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    msg.textContent = '';
}

resetBtn1.addEventListener('click', () => {
    resetGame();
    winnerMsg.classList.add('hide')
});