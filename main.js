//function to get the computer's choice
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

// function to get player's choice from prompt
function getPlayerChoice(){
    let choice = prompt("Enter your choice (Rock | Paper | Scissors):").toLowerCase();

    return choice;
}

// check for validity in player's choice 
let checkChoice = (playerChoice) => {
    return playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors";
}

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();


// Compute the outcome of the round
function playRound(playerChoice, computerChoice) {
    const message = ["You Win!", "You Lose!", "It's A Tie!"]; // store possible messages indicating result of the round
    let res;

    if (playerChoice == "rock") {
        switch (computerChoice) {
            case "rock":
                res = message[2];
                break;
            case "scissors":
                res = message[0];
                break;
            case "paper":
                res = message[1];
                break;
        }
    } else if (playerChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                res = message[0];
                break;
            case "scissors":
                res = message[1];
                break;
            case "paper":
                res = message[2];
                break;
        }
    } else if (playerChoice == "scissors") {
        switch (computerChoice) {
            case "rock":
                res = message[1];
                break;
            case "scissors":
                res = message[2];
                break;
            case "paper":
                res = message[0];
                break;
        }
    }

    if (res == message[2]){
        return res;
    } else if (res == message[0]){
        return `${res} ${playerChoice} beats ${computerChoice}.`
    } else {
        return `${res} ${computerChoice} beats ${playerChoice}.`
    }
}

//console.log(playRound(playerChoice, computerChoice));
