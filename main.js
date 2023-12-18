// variables to keep track of score so that the game logic can check for winners
let playerScore = 0;
let computerScore = 0;

// boolean to check if there are winners in the game and the game must be over
let gameOver = (playerScore, computerScore) => (playerScore === 5 || computerScore === 5);

// generates a random integer between 0-2 to get the computer's choice for the game
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}


function getPlayerChoice(){
    let choice = prompt("Enter your choice (Rock | Paper | Scissors):").toLowerCase();

    return choice;
}

// boolean to assist with asking for a valid input choice from the player
let validChoice = (playerChoice) => {
    return playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors";
}





function playRound(playerChoice, computerChoice) {
    const message = ["You Win!", "You Lose!", "It's A Tie!"]; // store possible messages indicating result of the round
    let res;

    // compute results of player choice vs computer's choice
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

    // 
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

// assist in printing the correct message depending on who wins
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
    
    // loop over the gameover condition so that player can keep playing until they win or lose
    while (!gameOver(playerScore, computerScore)){
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
    
        // loop to Keep asking for user input while the user input is invalid
        while (!validChoice(playerChoice)){
            printInvlidChoiceMessage();
            playerChoice = getPlayerChoice();
        }

        console.log(playRound(playerChoice, computerChoice));
        console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
        
        getWinner(playerScore, computerScore);
        
        if (gameOver(playerScore, computerScore)) {
            let replayChoice = askReplay();

            // loop to keep asking for player's choice for replay until they give a valid choice
            while (replayChoice != "yes" && replayChoice != "no"){
                printInvlidChoiceMessage();
                replayChoice = askReplay();
            }
        }
    }
}
game();
