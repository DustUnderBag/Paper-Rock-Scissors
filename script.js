let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
let questionMark = 'question-mark';

let playerScore = 0;
let computerScore = 0;

let playerSelection = "";
let computerSelection = "";

const resultWindow = document.querySelector('.result');
const scoreWindow = document.querySelector('.score');

const computerText = document.querySelector('.computer-text');
const computerSign = document.querySelector('.computer-sign');

const announce = document.querySelector('div.announce');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const buttons = [rockButton,paperButton,scissorsButton]; //create array containing all three buttons.

buttons.forEach(button => {
  button.addEventListener('click', e => {
    let playerSelection = getPlayerSelection(e);
    let computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
    console.log("player: " + playerScore, "computer: " + computerScore);


  
  if(playerScore === 5 || computerScore === 5) {
    if(playerScore > computerScore) {
      announce.textContent = "You WIN! Click RESTART to play again.";
    } else {
      announce.textContent = "You LOSE! Restart to try again."
    }
    const restartButton = document.createElement('button');
    restartButton.textContent = "RESTART";
    restartButton.classList.add('restart');
    announce.appendChild(restartButton);
  }

});

  button.addEventListener('mouseover', addTransition);
  button.addEventListener('mouseout', removeTransition);
});

function addTransition(e){
  e.target.classList.add('effect');
}

function removeTransition(e){
  e.target.classList.remove('effect');
}

//Generate random selection for computer.
function getComputerSelection() {
  const choiceId = Math.floor(Math.random()*3);
  if(choiceId == 0) computerSelection = rock;
  else if(choiceId == 1 ) computerSelection = paper;
  else computerSelection = scissors;

  computerSign.src = `./img/${computerSelection}.svg`; //show computer selection by image.

  computerText.textContent = computerSelection;

  return computerSelection;
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
  scoreWindow.textContent = `You: ${playerScore}       Computer's point: ${computerScore}`;
}
