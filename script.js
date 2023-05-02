let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
let questionMark = 'question-mark';

let roundNum = 0;

let playerScore = 0;
let computerScore = 0;

let playerSelection = "";
let computerSelection = "";

const buttons = document.querySelectorAll(".button");
const round = document.querySelector(".round");
const resultWindow = document.querySelector('.result');

const playerScoreBoard = document.querySelector('.player-score');
const computerScoreBoard = document.querySelector('.computer-score');


const computerText = document.querySelector('.computer-text');
const computerSign = document.querySelector('.computer-sign');

const announce = document.querySelector('div.announce');
const restartButton = document.createElement('button');

buttons.forEach(button => {
    button.addEventListener("click", e => clickHandler(e));


  button.addEventListener('mouseover', addTransition);
  button.addEventListener('mouseout', removeTransition);
});

function clickHandler(e) {
  if(isGameOver() ) {
    return;
  }
  roundNum++;
  round.textContent = `Round: ${roundNum}`;

  let playerSelection = getPlayerSelection(e);
  let computerSelection = getComputerSelection();
  playRound(playerSelection, computerSelection);

  if(isGameOver() ) {
    announceWinner();
  }

}

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
   
  let message = "";
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
  playerScoreBoard.textContent = `Score: ${playerScore}`;
  computerScoreBoard.textContent = `Score: ${computerScore}`;
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function announceWinner() {
  (playerScore > computerScore)
    ? announce.textContent = "You WIN! Click RESTART to play again."
    : announce.textContent = "You LOSE! Restart to try again.";

    //Create Restart button
    restartButton.textContent = "RESTART";
    restartButton.classList.add("restart");
    announce.appendChild(restartButton);
    restartButton.addEventListener("click", restartGame);

}


function restartGame(){
  playerScore = 0;
  computerScore = 0;

  roundNum = 0;
  round.textContent = "Round: 0";

  resultWindow.textContent = "";
  scoreBoard.textContent = "";

  computerText.textContent = "";
  computerSign.src = "./img/question-mark.svg";

  announce.textContent = "";
}
