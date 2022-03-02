

//function for computers random move
const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay () {
    return myArray[Math.floor(Math.random() * myArray.length)];
};


//function for Game//
let playerScore = 0; 
let computerScore = 0; 

function game(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return "Tie Game!";
    } if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore = playerScore++
        return "You Win!";
    } else {
        computerScore++
        return "You Lose!";
        }
    };


//Button functionality
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        playerSelection = img.alt.toLowerCase();
    })
})

//score keeper
function score(playerScore, computerScore) {
    if (playerScore === 5) {
        return "Great Job! You have beat the computer!"
    } if (computerScore === 5) {
        return "Sorry better luck next time!"
    }
}





