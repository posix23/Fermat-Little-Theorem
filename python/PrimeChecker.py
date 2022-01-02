import sys

# Check if a number is prime by using Fermat's Little Theorem
# Any prime number after 2 is odd and therefore, 2 will be used as the base number
class PrimeChecker:
  def __init__(self) -> None:
      pass


  def is_prime(self, x):
    if x < 2:
      return False

    if x == 2:
      return True

    if (x <= sys.maxsize and x % 2 == 0) or self._is_even(x):
      return False
    
    # Max is 1024
    if x < 1025 and 2**(x - 1) % x == 1:
      return True

    if self._large_num_mod(2, x - 1, x) == 1:
      return True

    return False


  # This is for checking a very large integer if it is even as mod operator is no longer accurate
  def _is_even(self, x):
    x = str(x); # Convert x to a string

    if (int(x[len(x) - 1]) % 2 == 0):
      return True

    return False


  # n^d mod x
  # O(d) run time
  def _large_num_mod(self, n, d, x):
    power_map = {}
    remainder = n**2 % x
    power_arr = [1, 2]

    power_map[2] = remainder

    i = 4
    while (i <= d):
      power_arr.append(i)
      power_map[i] = remainder**2 % x
      remainder = remainder**2 % x
      i *= 2

    result = 1
    for i in range(len(power_arr) - 1, 0, -1):
      d -= power_arr[i]
      if d >= 0:
        result *= power_map[power_arr[i]]
      else:
        d += power_arr[i]

    return result % x