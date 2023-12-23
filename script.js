// variables to keep track of score so that the game logic can check for winners
let playerScore = 0;
let computerScore = 0;

// boolean to check if there are winners in the game and the game must be over
let gameOver = (playerScore, computerScore) => (playerScore === 5 || computerScore === 5);

// generates a random integer between 0-2 to get the computer's choice for the game
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}


function getPlayerChoice(){
    let choice = prompt('Enter your choice (Rock | Paper | Scissors):').toLowerCase();

    return choice;
}

// boolean to assist with asking for a valid input choice from the player
let validChoice = (playerChoice) => {
    return playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors';
}





function playRound(playerChoice, computerChoice) {
    const message = ['You Win!', 'You Lose!', "It's A Tie!"]; // store possible messages indicating result of the round

    // select panel to display result of the round to the UI
    let messagePanel = document.querySelector('.scoreMessage');

    // compute results of player choice vs computer's choice
    if (
        (playerChoice == 'rock' && computerChoice == 'scissors') || 
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissors' && computerChoice == 'paper')
        ){
            playerScore++;
            messagePanel.textContent = `${message[0]} ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`
        }
    else if (
        (playerChoice == 'rock' && computerChoice == 'paper') || 
        (playerChoice == 'paper' && computerChoice == 'scissors') ||
        (playerChoice == 'scissors' && computerChoice == 'rock')
        ){
            computerScore++;
            messagePanel.textContent = `${message[1]} ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`;
        }
    else {
        messagePanel.textContent = `${message[2]} you both chose ${capitalizeFirstLetter(playerChoice)}s.`;
    }
}

const capitalizeFirstLetter = (word) => {
    return word[0].toUpperCase() + word.slice(1, word.length);
}

//select controls div, where the input buttons are
const controls = document.querySelector('.controls');

// Event listener to controls div so that when a user clicks one of its buttons, the player's choice will be inputed
controls.addEventListener('click', function(e) {
    switch (e.target.id){
        case 'btnRock':
            playRound('rock', getComputerChoice());
            break;
        case 'btnPaper':
            playRound('paper', getComputerChoice());
            break;
        case 'btnScissors':
            playRound('scissors', getComputerChoice());
            break;
    }
});

// assist in printing the correct message depending on who wins
function getWinner(playerScore, computerScore){
    if (playerScore == 5){
        console.log('Game Over!: Player wins!!!')
    } else if (computerScore == 5){
        console.log('Game Over!: Computer Wins!!')
    }
    
}

function askReplay() {
    let choice = prompt('Would you like to play again? (Yes | No): ').toLowerCase();
    return choice;
}

let printInvalidChoiceMessage = () => alert('Invalid Choice, please re-enter your choice');

// LOG: Working on linking button click events to game choice uncomment once done
/*function game() {
    
    // loop over the gameover condition so that player can keep playing until they win or lose
    while (!gameOver(playerScore, computerScore)){
        let computerChoice = getComputerChoice();
        //let playerChoice = getPlayerChoice();
    
        // loop to Keep asking for user input while the user input is invalid
        while (!validChoice(playerChoice)){
            printInvalidChoiceMessage();
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
}*/
//game();
