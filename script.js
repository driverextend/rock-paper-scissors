let materialOptions = ["rock","paper","scissors"]

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)
    return materialOptions[computerChoice]
}

function getHumanChoice(){
    let humanChoice = prompt('“rock”, “paper” or “scissors”')
    return humanChoice.toLowerCase()
}


function playGame(){
    // scores
    let computerScore = 0
    let humanScore = 0

    let playRound = function(computerChoice, humanChoice = "rock"){
        if (humanChoice === computerChoice)
            return "Tie"
        else if (humanChoice === materialOptions[materialOptions.indexOf(computerChoice) - 1]){
            // Computer will beat player
            computerScore++
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        } else {
            // Player will beat computer 
            humanScore++
            return `You win! ${humanChoice} beats ${computerChoice}`;
        }
    }

    for (let i=0; i<5; i++){
        console.log(playRound(getComputerChoice(), getHumanChoice()))
        console.log(`WINS: ${humanScore}\nLOSES: ${computerScore}`);
    }

}