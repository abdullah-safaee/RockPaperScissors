let weaponList = ['Rock' , 'Scissors' , 'Paper']

let playerScore = 0
let computerScore = 0

function playGame(){

    let computerChoice = weaponList[ Math.floor( Math.random() * weaponList.length ) ]

    let playerChoice = prompt('Choose your weapon (Rock Paper Scissors)')

    // tie 

    if (computerChoice.toUpperCase() === playerChoice.toUpperCase()){

        console.log(`tie (${computerChoice} vs ${playerChoice} )`)

        playGame()
    }

    // tie

    else if (computerChoice === 'Rock' && playerChoice.toUpperCase() === 'PAPER'){
        console.log('You win paper beates rock')
        playerScore++
    }

    else if (computerChoice === 'Rock' && playerChoice.toUpperCase() === 'SCISSORS'){
        console.log('You lose rock beates scissors')
        computerScore++
    }

    else if (computerChoice === 'Paper' && playerChoice.toUpperCase() === 'ROCK'){
        console.log('You lose paper beates rock')
        computerScore++
    }

    else if (computerChoice === 'Paper' && playerChoice.toUpperCase() === 'SCISSORS'){
        console.log('You win rock beates scissors')
        playerScore++
    }

    else if (computerChoice === 'Scissors' && playerChoice.toUpperCase() === 'PAPER'){
        console.log('You lose scissors beates paper')
        computerScore++
    }

    else if (computerChoice === 'Scissors' && playerChoice.toUpperCase() === 'ROCK'){
        console.log('You win rock beates paper')
        playerScore++
    }

    else{
        console.log('Invalid weapon!')
        playGame()
    }

}

playGame()
playGame()
playGame()
playGame()
playGame()

function congratulateWinner(playerScore , computerScore){

    if (computerScore > playerScore) {
        console.log(`you lose ${computerScore} to ${playerScore}`)
    }

    if (computerScore < playerScore) {
        console.log(`you win ${playerScore} to ${computerScore}`)
    }

}

congratulateWinner(playerScore,computerScore)



