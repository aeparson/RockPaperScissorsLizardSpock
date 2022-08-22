const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button');



let playerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    // generateComputerChoice()
}))

// const generateComputerChoice = () => {
//     const randomNumber = Math.floor(Math.random(1) * possibleChoices.length);
//     console.log(randomNumber);

// }

