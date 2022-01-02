// Check if a number is prime by using Fermat's Little Theorem
// Any prime number after 2 is odd and therefore, 2 will be used as the base number
module.exports = class PrimeChecker {
  isPrime = x => {
    if (x === 2) return true;

    if ((x <= Number.MAX_SAFE_INTEGER && x % 2 === 0) || this.#isEven(x)) return false;
    
    // Max is 1024
    if (x < 1025 && Math.pow(2, x - 1) % x === 1) return true;

    if (this.#largeNumMod(2, x - 1, x) === 1) return true;

    return false;
  };

  // This is for checking a very large integer if it is even as mod operator is no longer accurate
  #isEven = x => {
    x += ""; // Convert x to a string

    if (parseInt(x[x.length - 1]) % 2 === 0) return true;

    return false;
  };

  // n^d mod x
  // O(d) run time
  #largeNumMod = (n, d, x) => {
    let powerMap = new Map(), remainder = Math.pow(n, 2) % x, powerArr = [1, 2];

    powerMap.set(2, remainder);

    for (let i = 4; i <= d; i *= 2) {
      powerArr.push(i);
      powerMap.set(i, Math.pow(remainder, 2) % x);
      remainder = Math.pow(remainder, 2) % x;
    }

    let result = 1;
    for (let i = powerArr.length - 1; i >= 0; i--) {
      d -= powerArr[i];
      if (d >= 0) result *= powerMap.get(powerArr[i]);
      else d += powerArr[i];
    }

    return result % x;
  };
}