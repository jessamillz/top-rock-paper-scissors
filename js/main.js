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

// Pull in choice buttons from DOM
const choiceBtn = document.querySelector("#choice-buttons");

// Add click events to the choice buttons
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
    
    playRound(humanChoice, computerChoice);
});

let computerScore = 0;
let humanScore = 0;
let winningScore = 5;

const resultsContainer = document.querySelector("#results");
const results = document.createElement("p");
const score = document.createElement("p");
const playAgainPara = document.createElement("p");

function playRound(humanChoice, computerChoice) {
    if (playAgainPara.textContent === "Make a selection to play again!") {
        playAgainPara.remove();
    }   
    if (humanChoice === computerChoice) {
        results.textContent = "Tie! " + humanChoice + " is the same as " + computerChoice + "!";
    } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') || 
            (humanChoice === 'scissors' && computerChoice === 'paper') || 
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
        humanScore++;
        results.textContent = "You win, " + humanChoice + " beats " +  computerChoice + "! :)";
    } else if (
            (humanChoice === 'paper' && computerChoice === 'scissors') || 
            (humanChoice === 'rock' && computerChoice === 'paper') || 
            (humanChoice === 'scissors' && computerChoice === 'rock')
        ) {
        computerScore++;
        results.textContent = "You lose, " + computerChoice + " beats " +  humanChoice + "! :(";
    }
    resultsContainer.appendChild(results);
    score.textContent = "Human: " + humanScore + " Computer: " +computerScore;
    resultsContainer.appendChild(score);
    
    if (checkScore(computerScore, humanScore, winningScore)) {
        results.textContent = checkScore();
        resultsContainer.append(playAgainPara);
        playAgainPara.textContent = "Make a selection to play again!";
        computerScore = 0;
        humanScore = 0;
    }  
}
function checkScore(computerScore, humanScore, winningScore) {
    if ( computerScore === winningScore ) {
        return "You lost, computer won :(";
    } else if( humanScore === winningScore ) {
        return "You won!!! :)"
    }
}



