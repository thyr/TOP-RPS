// LOGIC
const winScore = 5;
let humanScore = 0;
let cpuScore = 0;

function getCPUChoice(cpuChoice) {
  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (randomNumber) {
    case 1:
      return (cpuChoice = "ROCK");
    case 2:
      return (cpuChoice = "PAPER");
    case 3:
      return (cpuChoice = "SCISSORS");
  }
}

function getHumanChoice(humanChoice) {
  let validChoice = 0;
  while (validChoice != 1) {
    let humanChoiceRaw = prompt(
      "Choose your weapon! (ROCK, PAPER or SCISSORS)"
    );
    humanChoice = humanChoiceRaw.toUpperCase();
    if (!["ROCK", "PAPER", "SCISSORS"].includes(humanChoice)) {
      console.log(`${humanChoice} is not a weapon! Try again!`);
    } else {
      validChoice = 1;
    }
  }
  return humanChoice;
}

function playRound(humanSelection, cpuSelection) {
  humanSelection = getHumanChoice();
  cpuSelection = getCPUChoice();
  console.log(`You chose: ${humanSelection}`);
  console.log(`The CPU picked: ${cpuSelection}`);
}
