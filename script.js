// variables to keep track of score so that the game logic can check for winners
let playerScore = 0;
let computerScore = 0;

// UI Selectors
const messagePanel = document.querySelector('.roundMessage');   // Panel where message displayed for each round result
const playerChoicePanel = document.querySelector("#playerChoice");  // Panel to show the sign that the player have chosen
const computerChoicePanel = document.querySelector("#computerChoice"); // Panel to show 
const playerScoreTracker = document.querySelector("#playerScore");
const computerScoreTracker = document.querySelector("#computerScore");
const controls = document.querySelector('.controls');

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
    let winner = '';

    // compute results of player choice vs computer's choice
    if (
        (playerChoice == 'rock' && computerChoice == 'scissors') || 
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissors' && computerChoice == 'paper')
        ){
            playerScore++;
            winner = 'player';
        }
    else if (
        (playerChoice == 'rock' && computerChoice == 'paper') || 
        (playerChoice == 'paper' && computerChoice == 'scissors') ||
        (playerChoice == 'scissors' && computerChoice == 'rock')
        ){
            computerScore++;
            winner = 'computer';
        } else {
            winner = '';
        }
    updateChoice(playerChoice, computerChoice);
    updateMessage(winner, playerChoice, computerChoice);
}

const capitalizeFirstLetter = (word) => {
    return word[0].toUpperCase() + word.slice(1, word.length);
}

function updateMessage(winner, playerChoice, computerChoice) {
    if (winner == 'computer'){
        messagePanel.textContent = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}.`;
    } else if (winner = 'player') {
        messagePanel.textContent = `You win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`;
    } else {
        messagePanel.textContent = `It's a tie! you both chose ${playerChoice}.`;
    }
}



function updateChoice(playerChoice, computerChoice){
    // setting the image of the choice panel to correspond to computer's and player's chocie
    let choiceEmoji = {'rock': "👊", 'paper': "✋", 'scissors': "✌️"};
    
    playerChoicePanel.textContent = choiceEmoji[playerChoice];
    computerChoicePanel.textContent = choiceEmoji[computerChoice];
}

function updateScore() {
    playerScoreTracker.textContent = "Player: " + playerScore;
    computerScoreTracker.textContent = "Computer: " + computerScore;
}

// checking if there is a winner and alert message to display who wins the game
function getWinner(){
    if (playerScore == 5){
        alert('Game Over!: Player wins!!!')
    } else if (computerScore == 5){
        alert('Game Over!: Computer Wins!!')
    }
    
}

function askReplay() {
    let choice = prompt('Would you like to play again? (Yes | No): ').toLowerCase();
    return choice;
}

function game() {
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
        updateScore();
        getWinner()
    });
}
game();