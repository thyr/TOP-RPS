// DOM
const btnSword = document.querySelector("#button-sword"),
  btnAxe = document.querySelector("#button-axe"),
  btnLance = document.querySelector("#button-lance"),
  cpuWeaponIcon = document.querySelector("#computer-choice"),
  pRound = document.querySelector("#round"),
  pLives = document.querySelector("#lives"),
  pCombat = document.querySelector("#combat"),
  pResults = document.querySelector("#results");

// LOGIC
let humanScore, cpuScore, winRAR;

function getCPUC(cpuC) {
  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (randomNumber) {
    case 1:
      return (cpuC = "SWORD");
    case 2:
      return (cpuC = "LANCE");
    case 3:
      return (cpuC = "AXE");
  }
}

function getHumanC(humanC) {
  let validC = 0;
  while (validC != 1) {
    let humanCRaw = prompt("Choose your weapon! (SWORD, LANCE or AXE)");
    humanC = humanCRaw.toUpperCase();
    if (!["SWORD", "LANCE", "AXE"].includes(humanC)) {
      console.log(`${humanC} is not a weapon! Try again!`); // I forgot to change the call when I abreviated humanChoice, so it was crashing the function.
    } else {
      validC = 1;
    }
  }
  return humanC;
}

function playRound(humanS, cpuS) {
  humanS = getHumanC();
  cpuS = getCPUC();
  console.log(`You chose: ${humanS}`);
  console.log(`The CPU picked: ${cpuS}`);

  const choices = {
    SWORD: { weakTo: "LANCE", strongTo: "AXE" },
    LANCE: { weakTo: "AXE", strongTo: "SWORD" },
    AXE: { weakTo: "SWORD", strongTo: "LANCE" },
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

  console.log(`Welcome to SWORD, LANCE, AXE!`);
  console.log(`Rules:`);
  console.log(`SWORD outmaneuvers AXE.`);
  console.log(`AXE chops down LANCE.`);
  console.log(`LANCE outcheaches SWORD.`);
  console.log(
    `It's a best of 5 game. The player with the most points after 5 rounds wins.`
  );
  console.log(`Good luck!`);

  while (roundC < 5) {
    playRound();
    console.log(`Current scores:`);
    console.log(`You: ${humanScore}`);
    console.log(`CPU: ${cpuScore}`);
    console.log(`Starting new round.`);
    roundC++;
  }

  if (humanScore > cpuScore) {
    winRAR = "YOU";
  } else if (humanScore < cpuScore) {
    winRAR = "CPU";
  } else if (humanScore === cpuScore) {
    winRAR = "IT'S A TIE!";
  }

  console.log(`AND THE WINNER IS: ${winRAR}`);
}
