// LOGIC
const winScore = 5;
let humanScore = 0;
let cpuScore = 0;

function getCPUChoice(cpuC) {
  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (randomNumber) {
    case 1:
      return (cpuC = "ROCK");
    case 2:
      return (cpuC = "PAPER");
    case 3:
      return (cpuC = "SCISSORS");
  }
}

function getHumanChoice(humanC) {
  let validChoice = 0;
  while (validChoice != 1) {
    let humanChoiceRaw = prompt(
      "Choose your weapon! (ROCK, PAPER or SCISSORS)"
    );
    humanC = humanChoiceRaw.toUpperCase();
    if (!["ROCK", "PAPER", "SCISSORS"].includes(humanC)) {
      console.log(`${humanChoice} is not a weapon! Try again!`);
    } else {
      validChoice = 1;
    }
  }
  return humanC;
}

function playRound(humanS, cpuS) {
  humanS = getHumanChoice();
  cpuS = getCPUChoice();
  console.log(`You chose: ${humanS}`);
  console.log(`The CPU picked: ${cpuS}`);

  const choices = {
    ROCK: { weakTo: "PAPER", strongTo: "SCISSORS" },
    PAPER: { weakTo: "SCISSORS", strongTo: "ROCK" },
    SCISSORS: { weakTo: "ROCK", strongTo: "ROCK" },
  };

  if (choices[humanS].strongTo === cpuS) {
    console.log(`You win the round!`);
    humanScore++;
    return;
  } else if (choices[humanS].weakTo === cpuS) {
    console.log(`You lose the round :(`);
    cpuScore++;
    return;
  } else {
    console.log(`It's a tie!`);
    return;
  }
}

playRound();

console.log(`Current scores:`);
console.log(`You: ${humanScore}`);
console.log(`CPU: ${cpuScore}`);
console.log(`Start a new round with playRound()`);

