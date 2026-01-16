const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('ComputerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('ComputerScore');  
let playerScore = 0;
let computerScore = 0;  

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    }
    else{
        switch (playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissors') ? 'You win!' : 'Computer wins!';
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? 'You win!' : 'Computer wins!';
                break;
            case 'scissors':
                result = (computerChoice === 'paper') ? 'You win!' : 'Computer wins!';
                break;
        }
    }
   
    playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;
    resultDisplay.textContent = result;

    switch (result) {
        case 'You win!':
            resultDisplay.classList.add('greenText');
            playerScore++;
            playerScoreDisplay.textContent = playerScore;   
            break;
        case 'Computer wins!':
            resultDisplay.classList.add('redText');
            computerScore++;
            computerScoreDisplay.textContent = computerScore;   
            break;
        default:
            resultDisplay.classList.remove('greenText', 'redText');
    }
             
}