# Fermat's Little Theorem

## Introduction
### The theorem was created by Pierre de Fermat on 1640 to verify if a given integer is prime. If ![\Large p](https://latex.codecogs.com/svg.latex?\Large&space;p) is a prime number and ![\Large a](https://latex.codecogs.com/svg.latex?\Large&space;a) is not divisible by ![\Large p](https://latex.codecogs.com/svg.latex?\Large&space;p), then ![\Large a^{p-1}-1](https://latex.codecogs.com/svg.latex?\Large&space;a^{p-1}-1) is divisible by ![\Large p](https://latex.codecogs.com/svg.latex?\Large&space;p).

## Algorithm
### The algorithm aims to verify if a given integer is prime by rejecting every even integer bigger than 2 as defined as ![\Large 2k](https://latex.codecogs.com/svg.latex?\Large&space;2k) for ![\Large k](https://latex.codecogs.com/svg.latex?\Large&space;k) being any integer and even checks if a very large integer outside of JavaScript's max integer is a prime number.