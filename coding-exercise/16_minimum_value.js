// Find the Minimum Value in an Array
// Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array

// The input array may contain both positive and negative value
// The input array may be empty
// The input array may contain duplicate values.

const findMin = (arr) => {
  //   arr = arr.sort((a, b) => {
  //     if (a > b) return -1;
  //   });
  //   return arr[0];
  if (arr.length === 0) return "Array is empty";
  return Math.min(...arr);
};

console.log(findMin([5, 10, 2, 8]));
