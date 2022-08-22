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
    console.log(playerChoice)
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
        result = "DRAW";
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        result = "YOU WIN! Paper covers rock!"
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        result = "BAZINGA! Rock crushes scissors!"
    } else if (computerChoice == "rock" && playerChoice == "lizard") {
        result = "BAZINGA! Rock crushes lizard!"
    } else if (computerChoice == "rock" && playerChoice == "spock") {
        result = "YOU WIN! Spock vaporizes rock!"
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        result = "BAZINGA! Paper covers rock!"
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        result = "YOU WIN! Scissors cut paper!"
    } else if (computerChoice == "paper" && playerChoice == "lizard") {
        result = "YOU WIN! Lizard eats paper!"
    } else if (computerChoice == "paper" && playerChoice == "spock") {
        result = "BAZINGA! Paper disproves Spock!"
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        result = "YOU WIN! Rock smashes scissors!"
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        result = "BAZINGA! Scissors cuts paper!"
    } else if (computerChoice == "scissors" && playerChoice == "lizard") {
        result = "YOU WIN! Scissors decapitates lizard!"
    } else if (computerChoice == "scissors" && playerChoice == "spock") {
        result = "BAZINGA! Spock smashes scissors!"
    } else if (computerChoice == "lizard" && playerChoice == "rock") {
        result = "YOU WIN! Rock crushes lizard!"
    } else if (computerChoice == "lizard" && playerChoice == "paper") {
        result = "BAZINGA! Lizard eats paper!"
    } else if (computerChoice == "lizard" && playerChoice == "scissors") {
        result = "YOU WIN! Scissors decapitates lizard!"
    } else if (computerChoice == "lizard" && playerChoice == "spock") {
        result = "BAZINGA! Lizard poisons Spock!"
    } else if (computerChoice == "spock" && playerChoice == "rock") {
        result = "BAZINGA! Spock vaporizes rock!"
    } else if (computerChoice == "spock" && playerChoice == "paper") {
        result = "YOU WIN! Paper disproves Spock!"
    } else if (computerChoice == "spock" && playerChoice == "scissors") {
        result = "BAZINGA! Spock smashes scissors!"
    } else {
        result = "YOU WIN! Lizard poisons Spock!"
    }
    resultDisplay.innerHTML = result;

}
