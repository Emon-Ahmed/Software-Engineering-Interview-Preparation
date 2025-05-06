// Write a function to calculate the sum of squares of all elements in an array. For example, given then array [1,2,3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14

const sumOfSquares = (arr) => {
  return arr.reduce((acc, e) => (acc = acc + e * e), 0);
};

const sumOfSquaresForLoop = (arr) => {
  let sum = 0;
  for (let e of arr) {
    sum = sum + e * e;
  }
  return sum;
};

console.log(sumOfSquares([1, 2, 3]));
console.log(sumOfSquaresForLoop([1, 2, 3]));
