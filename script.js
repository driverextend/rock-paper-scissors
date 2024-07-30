let materialOptions = ["rock","paper","scissors"]

const playerOptions = document.getElementById("player-options")
const gameResult = document.getElementById("results-text")
const wins = document.getElementById('wins')
const losses = document.getElementById('losses')

playerOptions.addEventListener("click", (e) => {
    let playerChoice = e.target;
    console.log(playerChoice);
    switch(playerChoice.id) {
        case 'player-rock':
            playRound(getComputerChoice(), "rock")
            break;
        case 'player-paper':
            playRound(getComputerChoice(), "paper")
            break;
        case 'player-scissors':
            playRound(getComputerChoice(), "scissors")
            break;

    }
})


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)
    return materialOptions[computerChoice]
}

function checkForWinner(){
    if (humanScore === 5) playerOptions.innerHTML = 'You did it, you beat the evil AI'
    if (computerScore === 5) playerOptions.innerHTML = 'You failed, you lost to the evil AI'

    return (humanScore === 5 || computerScore === 5)
}
// scores
let computerScore = 0
let humanScore = 0

let playRound = function(computerChoice, humanChoice = "rock"){
    let gameOutcomeMessage
    if (humanChoice === computerChoice) {

        gameOutcomeMessage = "Tie!\nChoose an option to play again"
    } else if (computerChoice === materialOptions[(materialOptions.indexOf(humanChoice) + 1) % 3]){
        // Computer will beat player
        computerScore++
        losses.innerText = `LOSSES: ${computerScore}`
        
        gameOutcomeMessage = `${humanChoice.toUpperCase()} loses! The computer picked ${computerChoice.toUpperCase()}\nChoose an option to play again`;
    } else {
        // Player will beat computer 
        humanScore++
        wins.innerText = `WINS: ${humanScore}`
        
        gameOutcomeMessage = `${humanChoice.toUpperCase()} wins! The computer picked ${computerChoice.toUpperCase()}\nChoose an option to play again`;
    }

    if (checkForWinner()) gameOutcomeMessage = "GAME OVER\nRELOAD TO PLAY AGAIN"
    
    // Change results in HTML and return game outcome message
    gameResult.innerText = gameOutcomeMessage
    // The return statement is currently for debugging purposes
    return gameOutcomeMessage
}

