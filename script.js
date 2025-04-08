

const player_score = document.getElementById('player-score');
const computer_score = document.getElementById('computer-score');
const player_choice = document.getElementById('player-choice');
const computer_choice = document.getElementById('computer-choice');
const result = document.getElementById('result');
const reset_button = document.getElementById('reset-btn');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const dwight = document.getElementById('dwight');
const yogaball = document.getElementById('yogaball');
const choices = document.querySelectorAll('.choice');

// scorekeeping values
let player_score_val = 0;
let computer_score_val = 0;



// selection list for choosing rock, paper, or scissors
const choices_list = ['rock', 'paper','scissors', 'dwight','yogaball'];
// selection list for choosing the icon for player & computer
const choice_icons = ['assets/rock.png', 'assets/transparent-image-lined-paper-school-book-26.png', 'assets/scissors-12.png', 'assets/DwightSchrute.png', 'assets/pngimg.com - exercise_ball_PNG111131.png']

// actionListeners for buttons
reset_button.addEventListener('click', () => {
    console.log("Reset button clicked.");
    reset_game();
})


// for each button, add the check_winner function
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        console.log("Choice button clicked.")
        // choose the index of the target button id, then have the cpu choose a random value
        check_winner((choices_list.indexOf(choice.id)+1), cpu_choose_item());
    })
})

// returns a random integer value from 1-3 (1 = rock, 2 = scissors, etc.)
function cpu_choose_item() { 
    return Math.floor(Math.random() * choices.length) + 1 
}

// compare the player's selected item to the CPU's
function check_winner(player, cpu) {
    console.log(`Player: ${player} | Computer: ${cpu}`);
    let winner;
    // if the values are equal, tie
    if(player == cpu)
    {
        winner = "Tie!"
    }
    // if player chose rock
    else if(player == 1) {
        // if cpu chooses scissors, player wins
        if(cpu == 3 || cpu == 4) {
            winner = "Player Wins!"
        }
        else 
            winner = "CPU Wins!"

    }    
    // if player chose paper
    else if(player == 2) {
        // if cpu chooses rock, player wins
        if(cpu == 1 || cpu == 5) {
            winner = "Player Wins!"
        }
        else 
            winner = "CPU Wins!"
    }
    // if player chose scissors
    else if(player == 3) {
        // if cpu chooses paper, player wins
        if(cpu == 2 || cpu == 5) {
            winner = "Player Wins!"
        }
        else 
            winner = "CPU Wins!"
    }
    else if(player == 4) {
        // if cpu chooses paper, player wins
        if(cpu == 2 || cpu == 3) {
            winner = "Player Wins!"
        }
        else 
            winner = "CPU Wins!"
    }
    else if(player == 5) {
        // if cpu chooses paper, player wins
        if(cpu == 1 || cpu == 4) {
            winner = "Player Wins!"
        }
        else 
            winner = "CPU Wins!"
    }

    if(winner.match("Player Wins!")) {
        player_score_val++;
    }
    else if(winner.match("CPU Wins!")) {
        computer_score_val++;
    }

    // update the interface with the current choice values, and the winner
    updateUI(player, cpu, winner);
}

// update the UI with the corresponding values for player, cpu, and winner
function updateUI(player, cpu, winner) {
    result.textContent = winner;
    
    // empty out any images stored previously
    player_choice.innerHTML = '';
    computer_choice.innerHTML = '';
    
    // create a new image, set the source to the player's
    // choice, format the size, then append to player_choice
    let p_img = new Image();
    p_img.src = choice_icons[player-1];
    p_img.classList.add('choice_image'); 
    player_choice.appendChild(p_img); 

    // create a new image, set the source to the cpu's
    // choice, format the size, then append to computer_choice
    let c_img = new Image();
    c_img.src = choice_icons[cpu-1];
    c_img.classList.add('choice_image');
    computer_choice.appendChild(c_img);

    player_score.innerText = player_score_val;
    computer_score.innerText = computer_score_val;
}

// function to reset the UI and all associated values
function reset_game() {
    // reset the scores to zero
    player_score_val = 0;
    computer_score_val = 0;
    
    // update the UI with nothing and a starter prompt
    updateUI('','',"Choose your weapon!");
    player_choice.innerHTML = '';
    computer_choice.innerHTML = '';
}
