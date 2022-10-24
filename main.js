let playerWins = 0;
let computerWins = 0;


const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return ("rock");
        break;
        case 2:
            return ("paper");
        break;
        case 3:
            return ("scissors");
        break;
    }
}

const decide = (playerSelection, computerSelection) => {
    console.log("Player: "+playerSelection)
    console.log("Computer: "+computerSelection)

    //Rock
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++;
        return("You lose! Paper beats rock.");
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
        return("You win! Rock beats scissors.");
    }
    if (playerSelection === "rock" && computerSelection === "rock") {
        return("Tie!");
    }

    //Paper
    if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins++;
        return("You lose! Scissors beat paper.");
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        return("You win! Paper beats rock.");
    }
    if (playerSelection === "paper" && computerSelection === "paper") {
        return("Tie!");
    }

    //Scissors
    if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins++;
        return("You lose! Rock beats scissors.");
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        return("You win! Scissors beats paper.");
    }
    if (playerSelection === "scissors" && computerSelection === "scissors") {
        return("Tie!");
    }
}

const playRound = () => {
    let playerSelection = prompt("Rock paper or scissors?").toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(decide(playerSelection, computerSelection)+" Score: P-"+playerWins+" C-"+computerWins);
}

const game = () => {
    while(playerWins < 5 && computerWins < 5 )
    {
        playRound();
    }
    if(playerWins === 5) {
        console.log("You won the match, nicely done.")
    } else {
        console.log("You lost the match, better luck next time!")
    }
    playerWins = 0;
    computerWins = 0;
}