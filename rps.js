// LOGIC
function getCPUChoice() {
  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (randomNumber) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
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

let cpuChoice = getCPUChoice();
let humanChoice = getHumanChoice();

console.log(`You chose: ${humanChoice}`);
console.log(`The CPU picked: ${cpuChoice}`);
