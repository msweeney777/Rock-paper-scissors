const linebyline = require('readline');

const choices = ['rock', 'paper', 'scissors'];
const tie = "It's a tie!";
const win = 'You win!';
const lose = 'You lose.';
const stats = {[win]: 0, [lose]: 0, [tie]: 0}
const results = {
  rock: {
    rock: tie,
    paper: lose,
    scissors: win
  },
  paper: {
    rock: win,
    paper: tie,
    scissors: lose
  },
  scissors: {
    rock: lose,
    paper: win,
    scissors: tie
  }
}

linebyline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', handleResponse);
begin()

function begin () {
  process.stdout.write('\nRock, paper or scissors?\n\n>');
}

function handleResponse (input) {
  const response = input.trim().toLowerCase();

  if(choices.includes(response)) {
    process.stdout.write(' ');
    setTimeout(respond, 100, response);
  } else {
    setTimeout(wtf, 400);
  }
}

function respond (response) {
  const machine = random(choices);
  const result = results[response][machine];

  process.stdout.write(machine);
  setTimeout(report, 800, result);
}

function report (result) {
  console.log(`\n\n\n ${result}\n`)
  setTimeout(statistics, 800, result)
}

function statistics (result) {
  stats[result]++;

  console.log(`
  human: ${stats[win]}
  machine: ${stats[lose]}
  tie: ${stats[tie]}`)

  begin();

}

function wtf () {
  console.log('\n Does not compute\n');
  setTimeout(begin, 1000);
}

function random (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
