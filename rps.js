// LOGIC
let humanScore, cpuScore, winRAR;

function getCPUC(cpuC) {
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

function getHumanC(humanC) {
  let validC = 0;
  while (validC != 1) {
    let humanCRaw = prompt("Choose your weapon! (ROCK, PAPER or SCISSORS)");
    humanC = humanCRaw.toUpperCase();
    if (!["ROCK", "PAPER", "SCISSORS"].includes(humanC)) {
      console.log(`${humanC} is not a weapon! Try again!`); // I forgot to change the call when I abreviated humanChoice, so it was crashing the function.
    } else {
      validC = 1;
    }
  }
  return humanC;
}

function playRound(humanS, cpuS) {
  //humanS = getHumanC();
  cpuS = getCPUC();
  console.log(`You chose: ${humanS}`);
  console.log(`The CPU picked: ${cpuS}`);

  const choices = {
    ROCK: { weakTo: "PAPER", strongTo: "SCISSORS" },
    PAPER: { weakTo: "SCISSORS", strongTo: "ROCK" },
    SCISSORS: { weakTo: "ROCK", strongTo: "PAPER" },
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

function playGame() {
  let roundC = 0;
  // Reset scores to 0 on new game
  (humanScore = 0), (cpuScore = 0);

  console.log(`Welcome to Rock, Paper, Scissors!`);
  console.log(`Rules:`);
  console.log(`Rock smashes Scissors.`);
  console.log(`Paper wraps Rock.`);
  console.log(`Scissors cuts Paper.`);
  console.log(
    `It's a best of 5 game. The player with the most points after 5 rounds wins.`
  );
  console.log(`Good luck!`);

  //  while (roundC < 5) {
  //    playRound();
  //    console.log(`Current scores:`);
  //    console.log(`You: ${humanScore}`);
  //    console.log(`CPU: ${cpuScore}`);
  //    console.log(`Starting new round.`);
  //    roundC++;
  //  }

  if (humanScore > cpuScore) {
    winRAR = "YOU";
  } else if (humanScore < cpuScore) {
    winRAR = "CPU";
  } else if (humanScore === cpuScore) {
    winRAR = "IT'S A TIE!";
  }

  console.log(`AND THE WINNER IS: ${winRAR}`);
}
