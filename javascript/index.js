// import modules
const fs = require('fs');

// import classes
const PrimeChecker = require('./lib/PrimeChecker');

// import txt and json files
const current = require('./results/currentPrime.json');

const largestPrime = () => {
  const primeChecker = new PrimeChecker;
  let x = current.curr + 1;

  while (true) {
    if (primeChecker.isPrime(x)) {
      fs.appendFileSync('results/list_of_known_primes_by_computer.txt', `${x}\n`);
      fs.writeFileSync('results/currentPrime.json', `{ "curr": ${x} }`);
    }

    x++;
  }
}

largestPrime();