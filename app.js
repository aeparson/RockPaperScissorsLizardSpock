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

const getResult = () => {
    if (computerChoiceDisplay === playerChoiceDisplay) {
        resultDisplay = "DRAW";
    } else if (computerChoiceDisplay == "rock" && playerChoiceDisplay == "paper") {
        resultDisplay = "YOU WIN! Paper covers rock!"
    } else if (computerChoiceDisplay == "rock" && playerChoiceDisplay == "scissors") {
        resultDisplay = "BAZINGA! Rock crushes scissors!"
    } else if (computerChoiceDisplay == "rock" && playerChoiceDisplay == "lizard") {
        resultDisplay = "BAZINGA! Rock crushes lizard!"
    } else if (computerChoiceDisplay == "rock" && playerChoiceDisplay == "spock") {
        resultDisplay = "YOU WIN! Spock vaporizes rock!"
    } else if (computerChoiceDisplay == "paper" && playerChoiceDisplay == "rock") {
        resultDisplay = "BAZINGA! Paper covers rock!"
    } else if (computerChoiceDisplay == "paper" && playerChoiceDisplay == "scissors") {
        resultDisplay = "YOU WIN! Scissors cut paper!"
    } else if (computerChoiceDisplay == "paper" && playerChoiceDisplay == "lizard") {
        resultDisplay = "YOU WIN! Lizard eats paper!"
    } else if (computerChoiceDisplay == "paper" && playerChoiceDisplay == "spock") {
        resultDisplay = "BAZINGA! Paper disproves Spock!"
    } else if (computerChoiceDisplay == "scissors" && playerChoiceDisplay == "rock") {
        resultDisplay = "YOU WIN! Rock smashes scissors!"
    } else if (computerChoiceDisplay == "scissors" && playerChoiceDisplay == "paper") {
        resultDisplay = "BAZINGA! Scissors cuts paper!"
    } else if (computerChoiceDisplay == "scissors" && playerChoiceDisplay == "lizard") {
        resultDisplay = "YOU WIN! Scissors decapitates lizard!"
    } else if (computerChoiceDisplay == "scissors" && playerChoiceDisplay == "spock") {
        resultDisplay = "BAZINGA! Spock smashes scissors!"
    } else if (computerChoiceDisplay == "lizard" && playerChoiceDisplay == "rock") {
        resultDisplay = "YOU WIN! Rock crushes lizard!"
    } else if (computerChoiceDisplay == "lizard" && playerChoiceDisplay == "paper") {
        resultDisplay = "BAZINGA! Lizard eats paper!"
    } else if (computerChoiceDisplay == "lizard" && playerChoiceDisplay == "scissors") {
        resultDisplay = "YOU WIN! Scissors decapitates lizard!"
    } else if (computerChoiceDisplay == "lizard" && playerChoiceDisplay == "spock") {
        resultDisplay = "BAZINGA! Lizard poisons Spock!"
    } else if (computerChoiceDisplay == "spock" && playerChoiceDisplay == "rock") {
        resultDisplay = "BAZINGA! Spock vaporizes rock!"
    } else if (computerChoiceDisplay == "spock" && playerChoiceDisplay == "paper") {
        resultDisplay = "YOU WIN! Paper disproves Spock!"
    } else if (computerChoiceDisplay == "spock" && playerChoiceDisplay == "scissors") {
        resultDisplay = "BAZINGA! Spock smashes scissors!"
    } else {
        resultDisplay = "YOU WIN! Lizard poisons Spock!"
    }
}
