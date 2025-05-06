// Calculate the Average

// Write a function called calculatedAverage that takes an array of numbers as input and returns the average of those numbers.

// Accept an array of numbers as input
// Calculate the sum of all the numbers in the array to find the average.
// Divide the sum by the total number of elements in the array to find the average.
// Return the calculated average.

const calculateAverage = (arr) => {
  let total = arr.reduce((acc, curElement) => acc + curElement, 0);
  return total / arr.length;
};

console.log(calculateAverage([5, 10, 2, 8]));
