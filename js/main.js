/*
Rock Paper Scissors

Rock beats Scissors
Scissors beats Paper
Paper beats Rock

1. Computer randomly selects Rock, Paper, or Scissors
2. User selects Rock, Paper, or Scissors
3. Compare selections and determine winner
3. Display winner

*/

// Get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const rock = document.querySelector("#rockbtn");
const paper = document.querySelector("#paperbtn");
const scissors = document.querySelector("#scissorsbtn");
const choiceBtn = document.querySelector("#choice-buttons");


choiceBtn.addEventListener('click', (event) => {
    const targetId = event.target.id;
    let humanChoice;
    let computerChoice = getComputerChoice();
    if (targetId === "rockbtn") {
        humanChoice = "rock";
    } else if (targetId === "paperbtn") {
        humanChoice = "paper";
    } else if (targetId === "scissorsbtn") {
        humanChoice = "scissors";
    }
    alert("You chose " + humanChoice + "!");
    playRound(humanChoice, computerChoice);
});
let computerScore = 0;
let humanScore = 0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie! " + humanChoice + " is the same as " + computerChoice + "!");
    } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') || 
            (humanChoice === 'scissors' && computerChoice === 'paper') || 
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
        humanScore++;
        console.log("You win, " + humanChoice + " beats " + computerChoice + "! :)");
    } else if (
            (humanChoice === 'paper' && computerChoice === 'scissors') || 
            (humanChoice === 'rock' && computerChoice === 'paper') || 
            (humanChoice === 'scissors' && computerChoice === 'rock')
        ) {
        computerScore++;
        console.log("You lose, " + computerChoice + " beats " + humanChoice + "! :(");
    }
    console.log("Human: " + humanScore + " Computer: " + computerScore);
}

// Get the user's choice
// function getHumanChoice() {
//     let humanChoice = prompt("Enter rock, paper, or scissors: ");
//     return humanChoice.toLowerCase();
// }



function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    // Play a round of Rock, Paper, Scissors
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "Tie! " + humanChoice + " is the same as " + computerChoice + "!";
        } else if (
                (humanChoice === 'rock' && computerChoice === 'scissors') || 
                (humanChoice === 'scissors' && computerChoice === 'paper') || 
                (humanChoice === 'paper' && computerChoice === 'rock')
            ) {
            humanScore++;
            return "You win! " + humanChoice + " beats " + computerChoice + "! :)";
        } else if (
                (humanChoice === 'paper' && computerChoice === 'scissors') || 
                (humanChoice === 'rock' && computerChoice === 'paper') || 
                (humanChoice === 'scissors' && computerChoice === 'rock')
            ) {
            computerScore++;
            return "You lose! " + computerChoice + " beats " + humanChoice + "! :(";
        }
    }

    // Play 5 rounds of Rock, Paper, Scissors
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log("Human: " + humanScore + " Computer: " + computerScore);
    }

    // After 5 rounds, display the winner
    if (humanScore > computerScore) {
        console.log("You win the game! :)");
    } else if (humanScore < computerScore) {
        console.log("You lose the game! :(");
    } else {
        console.log("The game is a tie!");
    }
}

// playGame();

