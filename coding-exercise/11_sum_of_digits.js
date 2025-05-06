// Write a function that takes a number as input and returns the sum of it's digits

// The input number will always be a positive integer.
// The input number can have multiple digits.
// The output should be then sum of all the digits in the input number.
// This function calculates the sum of digits without converting the number to a string.

const mySumOfDigits = (digit) => {
  const digits = digit.toString().split("");
  const digit_number = digits.map(Number);
  const sum = digit_number.reduce((acc, a) => acc + a, 0);
  return sum;
};

const sumOfDigits = (digit) => {
  const digits = Array.from(String(digit), Number);
  return (sum = digits.reduce((acc, a) => acc + a, 0));
};

console.log(mySumOfDigits(1234)); // 10
console.log(sumOfDigits(1234)); // 10
