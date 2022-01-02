// import modules
const fs = require('fs');

fs.readdir('.', (err, files) => {
  files = files.filter(file => file.indexOf('.') === -1);
  files = files.filter(file => file !== 'LICENSE');

  files.forEach(folder => {
    fs.writeFile(`${folder}/results/list_of_known_primes_by_computer.txt`, `2\n`, err => {
      fs.writeFile(`${folder}/results/currentPrime.json`, `{ "curr": 2 }`, err => {});
    });
  });
});