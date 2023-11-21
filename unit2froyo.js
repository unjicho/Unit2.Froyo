const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function processOrder(userInput) {
  const flavors = userInput.split(',');
  const flavorCount = {};

  flavors.forEach(function (flavor) {
    flavor = flavor.trim();
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
  });

  console.table(flavorCount);
  rl.close();
}

rl.question('Please enter your froyo flavors (comma-separated): ', (userInput) => {
  processOrder(userInput);
});