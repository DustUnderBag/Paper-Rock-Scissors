let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

let playerScore = 0;
let computerScore = 0;

const resultWindow = document.querySelector('.result');
const scoreWindow = document.querySelector('.score');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const buttons = [rockButton,paperButton,scissorsButton]; //create array containing all three buttons.

buttons.forEach(button => {
  button.addEventListener('click', e => {
    playRound(getPlayerSelection(e), getComputerSelection());
    
});

  button.addEventListener('mouseover', addTransition, {capture:true});
  button.addEventListener('mouseout', removeTransition);
});


function addTransition(e){
  console.log(e.target);
  e.target.classList.add('effect');

}

function removeTransition(e){
  e.target.classList.remove('effect');
}

//Generate random selection for computer.
function getComputerSelection() {
  const choiceId = Math.random();
  if(choiceId < 0.33) return rock;
  else if(choiceId > 0.33 && choiceId < 0.66) return paper;
  else return scissors;
}

//Get input from the user.
function getPlayerSelection(e) {
  return e.target.getAttribute('id');
}

function playRound(playerSelection, computerSelection) {
  let result = "";
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
   
  let message = `You picked ${playerSelection}, the computer picked ${computerSelection}...`
  switch(result) {
    case 'win':
      playerScore++;
      message += `You win! ${playerSelection} beats ${computerSelection}.`;
      break;

    case 'lose':
      computerScore++;
      message += `You lose! ${computerSelection} beats ${playerSelection}.`;
      break;
    default:
      message += `Tie! You both picked ${playerSelection}.`;
  }
  resultWindow.textContent = message;
  scoreWindow.textContent = `You: ${playerScore}       Computer's point: ${computerScore}`
}