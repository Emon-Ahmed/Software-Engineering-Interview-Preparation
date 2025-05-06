// Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

// The new Set() method in JavaScript creates a new Set object. A Set object is a collection of unique values. It can store any type of value, whether primitive values or object reference.

// The input array may contain both positive and negative integers.
// The input array may be empty
// The elements in the input array are npt guaranteed to be stored.
// The output array should retains the original order of elements from the input array

const removeDuplicates = (arr) => {
  let newArr = new Set(arr);
  return [...newArr];
};

console.log(removeDuplicates([1, 2, 3, 4, 1, 2, 4]));
