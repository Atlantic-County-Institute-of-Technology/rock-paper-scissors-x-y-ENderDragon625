const playerScoreBoard = document.querySelector('.p-count');
const computerScoreBoard = document.querySelector('.c-count');
const result = document.querySelector('.result');

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const dwightBtn = document.querySelector('.dwight');
        const yogaballBtn = document.querySelector('.yogaball');
        const playerOptions = [rockBtn, paperBtn, scissorBtn, dwightBtn, yogaballBtn];
        const computerOptions = ['rock', 'paper', 'scissors', 'dwight', 'yogaball']

        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerOptions[choiceNumber];

                // Function to check who wins
                winner(this.innerText, computerChoice)

                // Calling gameOver function after 10 moves
                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })

    }

    function winner(player, computer) {

        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player == computer) {
            result.textContent = 'Tie'
        }
        else if (player.localeCompare('rock')) {
            if (computer == 'paper' || computer == 'dwight' || computer == 'yogaball') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            } else {
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player.localeCompare('scissors')) {
            if (computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player.localeCompare('paper')) {
            if (computer == 'scissors' || computer == 'dwight' || computer == 'yogaball' ) {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player.localeCompare('dwight')) {
            if (computer == 'scissors') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player.localeCompare('paper')) {
            if (computer == 'yogaball' || computer == 'scissors' || computer == 'dwight') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player.localeCompare('yogaball')) {
            if (computer == 'dwight' || computer == 'scissors') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player.localeCompare('rock')) {
            if (computer == 'dwight' || computer == 'yogaball' || computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player.localeCompare('rock')) {
            if (computer == 'yogaball' || computer == 'dwight' || computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player.localeCompare('yogaball')) {
            if (computer == 'scissors' || computer == 'dwight') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player.localeCompare('paper')) {
            if (computer == 'dwight' || computer == 'scissors' || computer == 'yogaball') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    const gameOver = (playerOptions, movesLeft) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })


        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }

    playGame();

}

game();