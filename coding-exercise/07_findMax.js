// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

const findMax = (arr) => {
  return Math.max(...arr);
};

console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-10, -5, -3, -9, -2]));
console.log(findMax([5]));
