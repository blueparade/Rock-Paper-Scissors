function getComputerChoice() {
    let result = Math.floor(Math.random() * 3 + 1);

   if (result === 1) {
        return("Rock");
    } else if (result === 2) {
        return("Paper");
    } else if (result === 3) {
        return("Scissors");
    }
}

function getHumanChoice() {
    let sign = window.prompt("Insert Choice (Rock, Paper, Scissors)");

    if (sign === "Rock") {
        return("Rock");
    } else if (sign === "Paper") {
        return("Paper");
    } else if (sign === "Scissors") {
        return("Scissors");
    }
}

const humanScore = 0;
const computerScore = 0;

function playRound () {
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();

    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Draw!");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Draw!");
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Draw!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore++;
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(playRound());
    }

    if (humanScore > computerScore) {
        alert("You win!");
    } else if (humanScore < computerScore) {
        alert("You lose!")
    }
}

console.log(playGame())