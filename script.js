const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerSelection() {
  const choiceId = Math.random();
  if(choiceId < 0.33) return rock;
  else if(choiceId > 0.33 && choiceId < 0.66) return paper;
  else return scissors;
}
