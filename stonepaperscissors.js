//Getting the necessary elements for the game

const buttons = ["Stone", "Paper", "Scissors", "Lizard", "Spock"];
const scoreDiv = document.getElementById('score'); 
const emojiDiv = document.getElementById('emojis');
const actualOutcomeDiv = document.getElementById('actual-outcome');
const playerButton = document.querySelectorAll('.gameClass');
let score = 0;

//Getting computer's choice

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * buttons.length);
  return buttons[randomIndex];
}

//Applying computer choices for all buttons

playerButton.forEach(btn =>{
  btn.onclick = () => compareChoices(btn)
});

//Creating the main function

const compareChoices = humanValue => {
  console.log(humanValue.value);
  let humanChoice = humanValue.value;
  let robotChoice = getComputerChoice();

  if (humanChoice === "Stone" && robotChoice === "Lizard"
  || humanChoice === "Stone" && robotChoice === "Scissors"
  || humanChoice === "Paper" && robotChoice === "Stone"
  || humanChoice === "Paper" && robotChoice === "Spock"
  || humanChoice === "Scissors" && robotChoice === "Paper"
  || humanChoice === "Scissors" && robotChoice === "Lizard"
  || humanChoice === "Lizard" && robotChoice === "Spock"
  || humanChoice === "Lizard" && robotChoice === "Paper"
  || humanChoice === "Spock" && robotChoice == "Scissors"
  || humanChoice === "Spock" && robotChoice == "Stone"){
    score++;
    scoreDiv.innerText = score;
    emojiDiv.innerText = `👨: ${humanValue.value} VS 🤖: ${robotChoice}`;
    actualOutcomeDiv.innerText = 'You won this round!';
  }
  else if (humanChoice === robotChoice){
    scoreDiv.innerText = score;
    emojiDiv.innerText = `👨: ${humanValue.value} VS 🤖: ${robotChoice}`;
    actualOutcomeDiv.innerText = 'Tie in this round!';
  }
  else {
    score--;
    scoreDiv.innerText = score;
    emojiDiv.innerText = `👨: ${humanValue.value} VS 🤖: ${robotChoice}`;
    actualOutcomeDiv.innerText = 'You lost this round!';
  }
}

//Restarting the game

const restartButton = document.getElementById('restart');
restartButton.onclick = () => {
  score = 0;

  scoreDiv.innerText = '';
  emojiDiv.innerText = '';
  actualOutcomeDiv.innerText = '';
}