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
            computerChoice = "spock";
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

const getResult = () => {
    if (computerChoice === playerChoice) {
        resultDisplay.innerHTML = "DRAW";
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        resultDisplay.innerHTML = "YOU WIN! Paper covers rock!"
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        resultDisplay.innerHTML = "BAZINGA! Rock crushes scissors!"
    } else if (computerChoice == "rock" && playerChoice == "lizard") {
        resultDisplay.innerHTML = "BAZINGA! Rock crushes lizard!"
    } else if (computerChoice == "rock" && playerChoice == "spock") {
        resultDisplay.innerHTML = "YOU WIN! Spock vaporizes rock!"
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        resultDisplay.innerHTML = "BAZINGA! Paper covers rock!"
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        resultDisplay.innerHTML = "YOU WIN! Scissors cut paper!"
    } else if (computerChoice == "paper" && playerChoice == "lizard") {
        resultDisplay.innerHTML = "YOU WIN! Lizard eats paper!"
    } else if (computerChoice == "paper" && playerChoice == "spock") {
        resultDisplay.innerHTML = "BAZINGA! Paper disproves Spock!"
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        resultDisplay.innerHTML = "YOU WIN! Rock smashes scissors!"
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        resultDisplay.innerHTML = "BAZINGA! Scissors cuts paper!"
    } else if (computerChoice == "scissors" && playerChoice == "lizard") {
        resultDisplay.innerHTML = "YOU WIN! Scissors decapitates lizard!"
    } else if (computerChoice == "scissors" && playerChoice == "spock") {
        resultDisplay.innerHTML = "BAZINGA! Spock smashes scissors!"
    } else if (computerChoice == "lizard" && playerChoice == "rock") {
        resultDisplay.innerHTML = "YOU WIN! Rock crushes lizard!"
    } else if (computerChoice == "lizard" && playerChoice == "paper") {
        resultDisplay.innerHTML = "BAZINGA! Lizard eats paper!"
    } else if (computerChoice == "lizard" && playerChoice == "scissors") {
        resultDisplay.innerHTML = "YOU WIN! Scissors decapitates lizard!"
    } else if (computerChoice == "lizard" && playerChoice == "spock") {
        resultDisplay.innerHTML = "BAZINGA! Lizard poisons Spock!"
    } else if (computerChoice == "spock" && playerChoice == "rock") {
        resultDisplay.innerHTML = "BAZINGA! Spock vaporizes rock!"
    } else if (computerChoice == "spock" && playerChoice == "paper") {
        resultDisplay.innerHTML = "YOU WIN! Paper disproves Spock!"
    } else if (computerChoice == "spock" && playerChoice == "scissors") {
        resultDisplay.innerHTML = "BAZINGA! Spock smashes scissors!"
    } else {
        resultDisplay.innerHTML = "YOU WIN! Lizard poisons Spock!"
    }

}
