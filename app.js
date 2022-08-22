const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.getElementsByName('choiceButton');


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
}))

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    switch (randomNumber) {
        case 0: 
            computerChoiceDisplay.innerHTML = "rock";
            break;
        case 1: 
            computerChoiceDisplay.innerHTML = "paper";
            break;
        case 2: 
            computerChoiceDisplay.innerHTML = "scissors";
            break;
        case 3:
            computerChoiceDisplay.innerHTML = "lizard";
            break;
        case 4:
            computerChoiceDisplay.innerHTML = "spock";
            break;
    }
}

// const getResult = () => {
//     if (computerChoice === playerChoice) {
//         resultDisplay = "DRAW";
//     } else if (computerChoice == "rock" && playerChoice == "paper") {
//         resultDisplay = "YOU WIN! Paper covers rock!"
//     } else if (computerChoice == "rock" && playerChoice == "scissors") {
//         resultDisplay = "BAZINGA! Rock crushes scissors!"
//     } else if (computerChoice == "rock" && playerChoice == "lizard") {
//         resultDisplay = "BAZINGA! Rock crushes lizard!"
//     } else if (computerChoice == "rock" && playerChoice == "spock") {
//         resultDisplay = "YOU WIN! Spock vaporizes rock!"
//     } else if (computerChoice == "paper" && playerChoice == "rock") {
//         resultDisplay = "BAZINGA! Paper covers rock!"
//     } else if (computerChoice == "paper" && playerChoice == "scissors") {
//         resultDisplay = "YOU WIN! Scissors cut paper!"
//     } else if (computerChoice == "paper" && playerChoice == "lizard") {
//         resultDisplay = "YOU WIN! Lizard eats paper!"
//     } else if (computerChoice == "paper" && playerChoice == "spock") {
//         resultDisplay = "BAZINGA! Paper disproves Spock!"
//     } else if (computerChoice == "scissors" && playerChoice == "rock") {
//         resultDisplay = "YOU WIN! Rock smashes scissors!"
//     } else if (computerChoice == "scissors" && playerChoice == "paper") {
//         resultDisplay = "BAZINGA! Scissors cuts paper!"
//     } else if (computerChoice == "scissors" && playerChoice == "lizard") {
//         resultDisplay = "YOU WIN! Scissors decapitates lizard!"
//     } else if (computerChoice == "scissors" && playerChoice == "spock") {
//         resultDisplay = "BAZINGA! Spock smashes scissors!"
//     } else if (computerChoice == "lizard" && playerChoice == "rock") {
//         resultDisplay = "YOU WIN! Rock crushes lizard!"
//     } else if (computerChoice == "lizard" && playerChoice == "paper") {
//         resultDisplay = "BAZINGA! Lizard eats paper!"
//     } else if (computerChoice == "lizard" && playerChoice == "scissors") {
//         resultDisplay = "YOU WIN! Scissors decapitates lizard!"
//     } else if (computerChoice == "lizard" && playerChoice == "spock") {
//         resultDisplay = "BAZINGA! Lizard poisons Spock!"
//     } else if (computerChoice == "spock" && playerChoice == "rock") {
//         resultDisplay = "BAZINGA! Spock vaporizes rock!"
//     } else if (computerChoice == "spock" && playerChoice == "paper") {
//         resultDisplay = "YOU WIN! Paper disproves Spock!"
//     } else if (computerChoice == "spock" && playerChoice == "scissors") {
//         resultDisplay = "BAZINGA! Spock smashes scissors!"
//     } else {
//         resultDisplay = "YOU WIN! Lizard poisons Spock!"
//     }
// }
