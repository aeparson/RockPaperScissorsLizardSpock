const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.getElementsByName('choiceButton');

let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    switch (randomNumber) {
        case 0: 
            computerChoice = "rock";
            break;
        case 1: 
            computerChoice = "paper";
            break;
        case 2: 
            computerChoice = "scissors";
            break;
        case 3:
            computerChoice = "lizard";
            break;
        case 4:
            computerChoice = "Spock";
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

const getResult = () => {
    if (computerChoice === playerChoice) {
        result = "DRAW";
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        result = "DRATS! Paper covers rock!"
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        result = "BAZINGA! Rock crushes scissors!"
    } else if (computerChoice == "rock" && playerChoice == "lizard") {
        result = "BAZINGA! Rock crushes lizard!"
    } else if (computerChoice == "rock" && playerChoice == "Spock") {
        result = "DRATS! Spock vaporizes rock!"
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        result = "BAZINGA! Paper covers rock!"
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        result = "DRATS! Scissors cut paper!"
    } else if (computerChoice == "paper" && playerChoice == "lizard") {
        result = "DRATS! Lizard eats paper!"
    } else if (computerChoice == "paper" && playerChoice == "Spock") {
        result = "BAZINGA! Paper disproves Spock!"
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        result = "DRATS! Rock smashes scissors!"
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        result = "BAZINGA! Scissors cuts paper!"
    } else if (computerChoice == "scissors" && playerChoice == "lizard") {
        result = "BAZINGA! Scissors decapitates lizard!"
    } else if (computerChoice == "scissors" && playerChoice == "Spock") {
        result = "DRATS! Spock smashes scissors!"
    } else if (computerChoice == "lizard" && playerChoice == "rock") {
        result = "DRATS! Rock crushes lizard!"
    } else if (computerChoice == "lizard" && playerChoice == "paper") {
        result = "BAZINGA! Lizard eats paper!"
    } else if (computerChoice == "lizard" && playerChoice == "scissors") {
        result = "DRATS! Scissors decapitates lizard!"
    } else if (computerChoice == "lizard" && playerChoice == "Spock") {
        result = "BAZINGA! Lizard poisons Spock!"
    } else if (computerChoice == "Spock" && playerChoice == "rock") {
        result = "BAZINGA! Spock vaporizes rock!"
    } else if (computerChoice == "Spock" && playerChoice == "paper") {
        result = "DRATS! Paper disproves Spock!"
    } else if (computerChoice == "Spock" && playerChoice == "scissors") {
        result = "BAZINGA! Spock smashes scissors!"
    } else {
        result = "DRATS! Lizard poisons Spock!"
    }
    resultDisplay.innerHTML = result;

}
