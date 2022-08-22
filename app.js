const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.getElementsByName('choiceButton');
console.log(possibleChoices);

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
}))

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    switch (randomNumber) {
        case 0: 
            computerChoiceDisplay = "rock";
            break;
        case 1: 
            computerChoiceDisplay = "paper";
            break;
        case 2: 
            computerChoiceDisplay = "scissors";
            break;
        case 3:
            computerChoiceDisplay = "lizard";
            break;
        case 4:
            computerChoiceDisplay = "spock";
            break;
    }
}

