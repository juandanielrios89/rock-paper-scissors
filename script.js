function getComputerChoice() {
    const choice = Math.random();
    if (choice < 0.34) {
        return "rock";
    } else if (choice <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumanChoice() {
    const choice = prompt("Rock, Paper or scissors?");
    return choice.toLowerCase();

}


function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win! Rock beats scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! Paper beats rock");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! Scissors beats paper");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        console.log("You lose! Rock beats scissors");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        console.log("You lose! Paper beats rock");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        console.log("You lose! Scissors beats paper");
    }
}

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    }
    else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game.");
    }
    else {
        console.log("The game is a tie!");
    }
}

playGame();
