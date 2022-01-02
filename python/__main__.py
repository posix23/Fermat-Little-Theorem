# import modules
import json


# import classes
from PrimeChecker import PrimeChecker


# import txt and json files
current = json.load(open('results/currentPrime.json'))


def main():
  prime_checker = PrimeChecker()
  x = current['curr'] + 1

  while (True):
    if (prime_checker.is_prime(x)):
      f = open("results/list_of_known_primes_by_computer.txt", "a")
      f.write(str(x) + "\n")
      f.close()

      l = open("results/currentPrime.json", "w")
      l.write('{ "curr": ' + str(x) + ' }')
      l.close()

    x += 1


if __name__ == '__main__':
  main()