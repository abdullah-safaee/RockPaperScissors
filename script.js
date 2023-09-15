let weaponList = ['Rock' , 'Scissors' , 'Paper']



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
    }

    else if (computerChoice === 'Rock' && playerChoice.toUpperCase() === 'SCISSORS'){
        console.log('You lose rock beates scissors')
    }

    else if (computerChoice === 'Paper' && playerChoice.toUpperCase() === 'ROCK'){
        console.log('You lose paper beates rock')
    }

    else if (computerChoice === 'Paper' && playerChoice.toUpperCase() === 'SCISSORS'){
        console.log('You win rock beates scissors')
    }

    else if (computerChoice === 'Scissors' && playerChoice.toUpperCase() === 'PAPER'){
        console.log('You lose scissors beates paper')
    }

    else if (computerChoice === 'Scissors' && playerChoice.toUpperCase() === 'ROCK'){
        console.log('You win rock beates paper')
    }

    else{
        console.log('Invalid weapon!')
        playGame
    }

}

playGame()
playGame()
playGame()
playGame()
playGame()



