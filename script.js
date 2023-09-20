let weaponList = ['Rock' , 'Scissors' , 'Paper']

let playerScore = (document.querySelector('div.player>span'))
let computerScore = (document.querySelector('div.computer>span'))

console.log(typeof(parseInt(playerScore.textContent)))

let rockButton = document.querySelector('button.rock')
let paperButton = document.querySelector('button.paper')
let scissorsButton = document.querySelector('button.scissors')

function compare(playerChoice,computerChoice){

    let winner

    if (playerChoice === computerChoice){
        winner = 'none'
        return winner
    }

    if (playerChoice === 'Rock'){

        if (computerChoice === 'Scissors'){
            winner = 'player'
            return winner
        }

        if (computerChoice === 'Paper'){
            winner = 'computer'
            return winner
        }

    }

    if (computerChoice === 'Paper'){

        if (playerChoice === 'Scissors'){
            winner = 'player'
            return winner
        }

        if (playerChoice === 'Rock'){
            winner = 'computer'
            return winner
        }

    }

    if (computerChoice === 'Scissors'){

        if (playerChoice === 'Rock'){
            winner = 'player'
            return winner
        }

        if (playerChoice === 'Paper'){
            winner = 'computer'
            return winner
        }

    }

}



function playRound(button) {

    let playerChoice = button
    let computerChoice = weaponList[Math.floor(Math.random() * weaponList.length)]

    let winner = compare(playerChoice,computerChoice)

    if (winner === 'player'){
        playerScore.textContent ++
        // parseInt(playerScore.textContent) = parseInt(playerScore.textContent) + 1;
    }

    if (winner === 'computer'){
        computerScore.textContent ++
        // parseInt(computerScore.textContent) = parseInt(computerScore.textContent) + 1;
    }

    else{
        
    }

}




rockButton.addEventListener('click' , function() {playRound(rockButton.value) })
paperButton.addEventListener('click' , function() {playRound(paperButton.value) })
scissorsButton.addEventListener('click' , function() {playRound(scissorsButton.value) })
