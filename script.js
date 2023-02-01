const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerSelection() {
  const choiceId = Math.random();
  if(choiceId < 0.33) return rock;
  else if(choiceId > 0.33 && choiceId < 0.66) return paper;
  else return scissors;
}

function getPlayerSelection(playerInput) {
  playerInput = prompt("Enter rock/paper/scissors to play against me!");
  playerInput = playerInput.toLowerCase();
  
  if(playerInput === rock ||
   playerInput === paper ||
   playerInput === scissors) {
   return playerInput; 
  }else {
    console.log(`Invalid input`);
    getPlayerSelection();
  }
}

function playRound(playerSelection, computerSelection) {
  console.log(`You picked ${playerSelection}, Computer picked ${computerSelection}.`);

  let result;
  let winMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
  let loseMessage = `You lose! ${computerSelection} beats ${playerSelection}.`;
  let tieMessage = `Tie! You both picked ${playerSelection}.`;

 
  
  return result;
}