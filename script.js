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

  if (computerSelection === playerSelection) {
    result = "tie";
  }else if (computerSelection === rock && playerSelection === paper) {
    result = "win";
  }else if (computerSelection === rock && playerSelection === scissors) {
    result = "lose";
  }else if (computerSelection === paper && playerSelection === rock) {
    result = "lose";
  }else if (computerSelection === paper && playerSelection === scissors) {
    result = "win";
  }else if (computerSelection === scissors && playerSelection === rock) {
    result = "win";
  }else if(computerSelection === scissors && playerSelection === paper){
    result = "lose";
  }
   
  if(result === "tie") console.log(tieMessage);
  else if(result === "win") console.log(winMessage);
  else console.log(loseMessage);
  
  return result;
}