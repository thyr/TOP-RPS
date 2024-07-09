// DOM
const btnSword = document.querySelector("#button-sword"),
  btnAxe = document.querySelector("#button-axe"), btnSpear = document.querySelector("#button-spear"),
  cpuWeaponIcon = document.querySelector("#computer-choice"),
  pRound = document.querySelector("#round"),
  pLives = document.querySelector("#lives"),
  pCombat = document.querySelector("#combat"),
  pResults = document.querySelector("#results");

btnSword.onclick = () => playRound("SWORD");
btnAxe.onclick = () => playRound("AXE");
btnSpear.onclick = () => playRound("SPEAR");

// LOGIC
let humanLives, cpuLives, winRAR, roundC;

function getCPUC(cpuC) {
  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (randomNumber) {
    case 1:
      return (cpuC = "SWORD");
    case 2:
      return (cpuC = "SPEAR");
    case 3:
      return (cpuC = "AXE");
  }
}

// function getHumanC(humanC) {
//   let validC = 0;
//   while (validC != 1) {
//     let humanCRaw = prompt("Choose your weapon! (SWORD, SPEAR or AXE)");
//     humanC = humanCRaw.toUpperCase();
//     if (!["SWORD", "SPEAR", "AXE"].includes(humanC)) {
//       console.log(`${humanC} is not a weapon! Try again!`); // I forgot to change the call when I abreviated humanChoice, so it was crashing the function.
//     } else {
//       validC = 1;
//     }
//   }
//   return humanC;
// }

function playRound(humanS, cpuS) {
  // humanS = getHumanC();
  cpuS = getCPUC();
  cpuWeaponIcon.classList.replace(cpuWeaponIcon.className, cpuS.toLowerCase());
  // console.log(`You chose: ${humanS}`);
  // console.log(`The CPU picked: ${cpuS}`);

  const choices = {
    SWORD: { weakTo: "SPEAR", strongTo: "AXE" },
    SPEAR: { weakTo: "AXE", strongTo: "SWORD" },
    AXE: { weakTo: "SWORD", strongTo: "SPEAR" },
  };

  if (choices[humanS].strongTo === cpuS) {
    // console.log(`You win the round!`);
    cpuLives--;
    roundC++;
    pLives.textContent = `Your Lives: ${humanLives} | Enemy's Lives: ${cpuLives}`;
    pRound.textContent = `Round: ${roundC}`;
    return;
  } else if (choices[humanS].weakTo === cpuS) {
    // console.log(`You lose the round :(`);
    humanLives--;
    roundC++;
    pLives.textContent = `Your Lives: ${humanLives} | Enemy's Lives: ${cpuLives}`;
    pRound.textContent = `Round: ${roundC}`;
    return;
  } else {
    // console.log(`It's a tie!`);
    roundC++;
    pRound.textContent = `Round: ${roundC}`;
    return;
  }
}

function gameStart() {
  roundC = 0;
  // Reset lives to 5 on new game
  (humanLives = 5), (cpuLives = 5);

  // console.log(`Welcome to SWORD, SPEAR, AXE!`);
  // console.log(`Rules:`);
  // console.log(`SWORD outmaneuvers AXE.`);
  // console.log(`AXE chops down SPEAR.`);
  // console.log(`SPEAR outcheaches SWORD.`);
  // console.log(
  //   `It's a best of 5 game. The player with the most points after 5 rounds wins.`
  // );
  // console.log(`Good luck!`);

  // while (roundC < 5) {
  //   playRound();
  //   console.log(`Current scores:`);
  //   console.log(`You: ${humanLives}`);
  //   console.log(`CPU: ${cpuLives}`);
  //   console.log(`Starting new round.`);
  //   roundC++;
  // }
}

function gameEnd() {
  //   if (humanLives > cpuLives) {
  //     winRAR = "YOU";
  //   } else if (humanLives < cpuLives) {
  //     winRAR = "CPU";
  //   } else if (humanLives === cpuLives) {
  //     winRAR = "IT'S A TIE!";
  //   }
  //   console.log(`AND THE WINNER IS: ${winRAR}`);
}

gameStart();
