
//cache
let playerScore = 0; 
let computerScore = 0; //variables with underscore are DOM variables
const playerScore_div = document.getElementById("player-score");
const computerScore_div = document.getElementById("computer-score");
const scoreContainer_div = document.querySelector(".score-container");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock"); 
const paper_div = document.getElementById("paper"); 
const scissors_div = document.getElementById("scissors");
const buttons = document.querySelectorAll(".button-section");

//function for computers random move
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
};

//scoreboard and result functionality
function convertToWord(word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    if (word === "scissors") return "Scissors";
}

function win(playerSelection, computerSelection) {
    playerScore++;
    playerScore_div.innerHTML = playerScore;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(playerSelection)} beats ${convertToWord(computerSelection)}. You win!`;
    document.getElementById(playerSelection).classList.add('green-glow');
    setTimeout(function () { document.getElementById(playerSelection).classList.remove('green-glow') }, 750);
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    playerScore_div.innerHTML = playerScore;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(playerSelection)} loses to ${convertToWord(computerSelection)}. You lose!`;
    document.getElementById(playerSelection).classList.add('red-glow');
    setTimeout(function () { document.getElementById(playerSelection).classList.remove('red-glow') }, 750);
}

function draw(playerSelection, computerSelection) {
    playerScore_div.innerHTML = playerScore;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(playerSelection)} and ${convertToWord(computerSelection)} are equally matched. It's a draw!`;
    document.getElementById(playerSelection).classList.add('grey-glow');
    setTimeout(function () { document.getElementById(playerSelection).classList.remove('grey-glow') }, 750);
}

//Win, lose and tie game function and end game button disabler
function disabled() {
    buttons.classList.add('disable');
}

function game(playerSelection) {
    const computerSelection = computerPlay(); 
    switch (playerSelection + computerSelection) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerSelection, computerSelection);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerSelection, computerSelection);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerSelection, computerSelection);
            break;
    }
    if (playerScore == 5) {
        result_p.innerHTML = "Congrats, You won the game! Refresh to play again."
    }
    if (computerScore == 5) {
        result_p.innerHTML = "You lost to a computer? Refresh for a rematch"
        
    }
};

//Button functionality
function main() {
    
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}
    
main();









