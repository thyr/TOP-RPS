function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const computerChoice = randomIntFromInterval(1, 3);

console.log(computerChoice);
