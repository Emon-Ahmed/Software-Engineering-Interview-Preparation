// Programming Question: Longest Word in a String

// Q: Write a function findLongestWord that takes a string as input and return the longest word in the string. If there are multiple longest words, return the first one encountered.

// Constraint:
// The input string may contain alphabetic characters, digits, spaces, and punctuation
// The input string is non-empty.
// The input string may contain multiple words separated by spaces.

// Note:
// If the input string is empty or contains only whitespace, the function should return an false.
// The function should ignore leading and trailing whitespace when determining the longest word.

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  let words = str.split(" ");
  //   let longestWord = words.sort((a, b) => b.length - a.length);
  //   return longestWord[0];

  return words.reduce(
    (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
    ""
  );
};

console.log(
  findLongestWord("Watch Thapa Technical JavaScript Course On YouTube")
);
