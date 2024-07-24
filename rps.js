// DOM
const btnSword = document.getElementById("button-sword"),
  btnAxe = document.getElementById("button-axe"),
  btnSpear = document.getElementById("button-spear"),
  btnReplay = document.getElementById("replay"),
  cpuWeaponIcon = document.getElementById("computer-choice"),
  pRound = document.getElementById("round"),
  pLives = document.getElementById("lives"),
  pCombat = document.getElementById("combat"),
  cResults = document.getElementById("container-results"),
  pResults = document.getElementById("results");

btnSword.onclick = () => playRound("SWORD");
btnAxe.onclick = () => playRound("AXE");
btnSpear.onclick = () => playRound("SPEAR");
btnReplay.onclick = () => gameStart();

// LOGIC
let humanLives, cpuLives, roundC;

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

function playRound(humanS, cpuS) {
  cpuS = getCPUC();
  cpuWeaponIcon.classList.replace(cpuWeaponIcon.className, cpuS.toLowerCase());

  const choices = {
    SWORD: { weakTo: "SPEAR", strongTo: "AXE" },
    SPEAR: { weakTo: "AXE", strongTo: "SWORD" },
    AXE: { weakTo: "SWORD", strongTo: "SPEAR" },
  };

  if (choices[humanS].strongTo === cpuS) {
    cpuLives--;
    roundC++;
    pLives.textContent = `Your Lives: ${humanLives} | Enemy's Lives: ${cpuLives}`;
    pRound.textContent = `Round: ${roundC}`;
    pCombat.textContent = `Your ${humanS.toLowerCase()} hits! The enemy is sent reeling!`;
    checkGameEnd();
  } else if (choices[humanS].weakTo === cpuS) {
    humanLives--;
    roundC++;
    pLives.textContent = `Your Lives: ${humanLives} | Enemy's Lives: ${cpuLives}`;
    pRound.textContent = `Round: ${roundC}`;
    pCombat.textContent = `The enemy's ${cpuS.toLowerCase()} rends your flesh! It hurts!`;
    checkGameEnd();
  } else {
    roundC++;
    pRound.textContent = `Round: ${roundC}`;
    pCombat.textContent = `Sparks fly as your weapons clash!`;
    checkGameEnd();
  }
}

function gameStart() {
  // Set round counter to 0 and print it like so
  roundC = 0;
  pRound.textContent = `Round: ${roundC}`;

  // Re-enable buttons (they get disabled on game end)
  btnAxe.disabled = false;
  btnSpear.disabled = false;
  btnSword.disabled = false;

  // Reset lives to 5 on new game
  (humanLives = 5), (cpuLives = 5);
  pLives.textContent = `Your Lives: ${humanLives} | Enemy's Lives: ${cpuLives}`;

  // Hide results div (it gets enabled on game end)
  cResults.style.cssText = "visibility: hidden;";
  fade(cResults);
}

function checkGameEnd() {
  if (humanLives == 0) {
    btnAxe.disabled = true;
    btnSpear.disabled = true;
    btnSword.disabled = true;
    cResults.style.cssText = "visibility: visible;";
    unfade(cResults);
    pResults.textContent = `YOU DIED`;
  } else if (cpuLives == 0) {
    btnAxe.disabled = true;
    btnSpear.disabled = true;
    btnSword.disabled = true;
    cResults.style.cssText = "visibility: visible;";
    unfade(cResults);
    pResults.textContent = `VICTORY ACHIEVED`;
  } else {
    return;
  }
}

function fade(element) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 50);
}

function unfade(element) {
  var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 10);
}

gameStart();
