// Factorial Finder
// Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n1, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.

const factorialFinder = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log(factorialFinder(5));

// Here are some examples of factorial calculations:

// factorial(0) => 1
// factorial(1) => 1
// factorial(2) => 2
// factorial(3) => 6
// factorial(4) => 24
// factorial(5) => 120

// Your function should work for any non-negative integer input

// Later I will show using recursive function
