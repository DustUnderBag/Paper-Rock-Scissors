//assign string values to choices.
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

//Generate random selection for computer.
function getComputerSelection() {
  const choiceId = Math.random();
  if(choiceId < 0.33) return rock;
  else if(choiceId > 0.33 && choiceId < 0.66) return paper;
  else return scissors;
}

//Get input from the user.
function getPlayerSelection() {
  let checkValidInput = false; // Check if player's input is valid.
  while(checkValidInput === false) {
    //Ask for player's input then convert to lowerCase.
    let playerInput = (prompt("Enter rock/paper/scissors to play against me!")).toLowerCase();

    checkValidInput = (playerInput === rock || playerInput === paper || playerInput === scissors); //Check if player's input is valid.
    if(checkValidInput) {
      return playerInput;
    }else {
      console.log(`Invalid input, please check spelling.`);
      checkValidInput = false; //Repeat asking for input if input is invalid.
    }
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

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for(let i = 0; i < 5; i++){
    let roundNum = i+1;
    console.log("Round: " + roundNum);

    //get win/lose/tie result from playRound().
    let result = playRound(getPlayerSelection(), getComputerSelection());

    //Score 1 mark if win, else computer scores 1 mark.
    switch (result) {
      case "win":
        playerScore++;
        break;
      case "lose":
        computerScore++;
        break;
    }
    console.log("You scored: " + playerScore);
    console.log("Computer scored: " + computerScore);
  }

}
game();