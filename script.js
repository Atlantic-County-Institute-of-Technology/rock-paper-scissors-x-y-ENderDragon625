
const playerScoreBoard = document.querySelector('.p-count');
const computerScoreBoard = document.querySelector('.c-count');
const result = document.querySelector('.result');
const playerDisplay = document.getElementById('playerDisplay')
const computerDisplay = document.getElementById('computerDisplay')
let victory = new Audio("6am.mp3")
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const dwightBtn = document.querySelector('.dwight');
const yogaballBtn = document.querySelector('.yogaball');
const playerOptions = [rockBtn, paperBtn, scissorBtn, dwightBtn, yogaballBtn];
const computerOptions = ['rock', 'paper', 'scissors', 'dwight', 'yogaball'];
const playerVals = ['rock','paper','scissors','dwight','yogaball'];

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
      

        // // Function to start playing game
        // playerOptions.forEach(option => {
        //     option.addEventListener('click', function () {

        //         const movesLeft = document.querySelector('.movesleft');
        //         moves++;
        //         movesLeft.innerText = `Moves Left: ${10 - moves}`;

        //         const choiceNumber = Math.floor(Math.random() * 5);
        //         const computerChoice = computerOptions[choiceNumber];

        //         // Function to check who wins
        //         console.log(playerVals.indexOf(this.innerText.toLowerCase()) + 1)
        //         winner(playerVals[this.innerText], computerChoice)

        //         // Calling gameOver function after 10 moves
        //         if (moves == 10) {
        //             gameOver(playerOptions, movesLeft);
        //         }
        //     })
        // })

    }

    //TODO: Add event listeners for all buttons that calls on the numerical value of the object chosen (i.e. rock is 1, paper is 2, etc)
    //TODO: Add a function called cpuChoice that randomly chooses a value between 1 and 5
    //TODO: Change the winner function so that it compares on numbers instead of strings, that will fix the majority of your problems


    rockBtn.addEventListener("click", () => {
        winner(1, cpuChoice())
    })
    scissorBtn.addEventListener("click", () => {
        winner(2, cpuChoice())
    })
    paperBtn.addEventListener("click", () => {
        winner(3, cpuChoice())
    })
    dwightBtn.addEventListener("click", () => {
        winner(4, cpuChoice())
    })
    yogaballBtn.addEventListener("click", () => {
        winner(5, cpuChoice())
    })



    //Math.floor(Math.random() * 5) + 1

    function winner(player, computer) {

       
        console.log(player)
        console.log(computer)
        playerDisplay.textContent = `Player: ${player}`
        if (player == computer) {
            console.log("Tie!")
            result.textContent = 'Tie'
        }
        //if player and rock are equal 
        else if(player == 1) {
            if (computer == 3 || computer == 5) {
                result.textContent = `Computer Won, ${computer} beats ${player}`;
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            } else {
                result.textContent = `Player Won, ${player} beats ${computer}`;
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player.localeCompare('scissors') == 2) {
            if (computer === 1) {
                console.log("rock beats scissors")
                result.textContent = `Computer Won, ${computer} beats ${player}`;
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = `Player Won, ${player} beats ${computer}`;
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        // else if (player.localeCompare('paper')) {
        //     if (computer == 'scissors' || computer == 'dwight' || computer == 'yogaball' ) {
        //         result.textContent = 'Computer Won';
        //         computerScore++;
        //         computerScoreBoard.textContent = computerScore;
        //     } else {
        //         result.textContent = 'Player Won';
        //         playerScore++;
        //         playerScoreBoard.textContent = playerScore;
        //     }
        // }
        // else if (player.localeCompare('dwight')) {
        //     if (computer == 'scissors'  || computer == 'rock') {
        //         result.textContent = 'Computer Won';
        //         computerScore++;
        //         computerScoreBoard.textContent = computerScore;
        //     } else {
        //         result.textContent = 'Player Won';
        //         playerScore++;
        //         playerScoreBoard.textContent = playerScore;
        //     }
        // }
        // else if (player.localeCompare('yogaball')) {
        //     if (computer == 'dwight' || computer == 'scissors') {
        //         result.textContent = 'Computer Won';
        //         computerScore++;
        //         computerScoreBoard.textContent = computerScore;
        //     } else {
        //         result.textContent = 'Player Won';
        //         playerScore++;
        //         playerScoreBoard.textContent = playerScore;
        //     }
        // }
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
            let victory = new Audio("Assets/6am.mp3");
        victory.play();
        
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