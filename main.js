let playerScore = 0;
let computerScore = 0;

let gameOver = (playerScore, computerScore) => (playerScore === 5 || computerScore === 5);

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
let validChoice = (playerChoice) => {
    return playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors";
}




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
        playerScore++;
        return `${res} ${playerChoice} beats ${computerChoice}.`
    } else {
        computerScore++;
        return `${res} ${computerChoice} beats ${playerChoice}.`
    }
}

function getWinner(playerScore, computerScore){
    if (playerScore == 5){
        console.log("Game Over!: Player wins!!!")
    } else if (computerScore == 5){
        console.log("Game Over!: Computer Wins!!")
    }
    
}

function askReplay() {
    let choice = prompt("Would you like to play again? (Yes | No): ").toLowerCase();
    return choice;
}

let printInvlidChoiceMessage = () => alert("Invalid Choice, please re-enter your choice");

function game() {

    while (!gameOver(playerScore, computerScore)){ // keep playing game until one party wins
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
    
        // Keep asking for user input while the user input is invalid
        while (!validChoice(playerChoice)){
            printInvlidChoiceMessage();
            playerChoice = getPlayerChoice();
        }

        console.log(playRound(playerChoice, computerChoice));
        console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
        
        getWinner(playerScore, computerScore);
        
        if (gameOver(playerScore, computerScore)) {
            let replayChoice = askReplay();

            while (replayChoice != "yes" && replayChoice != "no"){
                printInvlidChoiceMessage();
                replayChoice = askReplay();
            }
        }
    }
}
game();
//console.log(playRound(playerChoice, computerChoice));
