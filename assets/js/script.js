/**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("control");
const playerScore =document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
/**
 * Add event listener to all buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}
/**
 * The main game function that accepts one selection
 * which is the data choice value of the selected button
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assest/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];
    let result = checkWinner(choices[computerChoice], choices[playerChoice]);
    updateScores(result);
}

/**
 * Checks to see who the winner is accepting two strings
 * as inputs
 */
function calculateWinner() {
     let playerScore = document.getElementsByClassName("player");
     let computerScore = document.getElementsByClassName("computer");
     
     if (choices[playerChoice][0]) {
        return ++playerScore;
     } else (choice[computerChoice])
     if (choices[playerChoice][1] && choices[computerChoice][0])
     ++playerScore;
     if (choices[playerChoice][2] && choices[computerChoice][3])
     ++computerScore
     if (choices[playerChoice][] && choices[computerChoice][1])
     ++
     if (choices[playerChoice][0] && choices[computerChoice][1])
     ++
     if (choices[playerChoice][0] && choices[computerChoice][1])
     ++
     
        
    }
}

