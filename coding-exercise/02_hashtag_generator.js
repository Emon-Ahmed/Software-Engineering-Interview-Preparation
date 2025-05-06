// Question: Hash Tag Generator

// Your are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

// The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
// If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace. the function should return false.
// Otherwise, the function should return the generated hash tag prefixed with #

const generateHash = (str) => {
  if (str.trim() === 0 || str.length > 280 || !str) {
    return false;
  }
  const words = str.split(" ");
  let hashTag = "#";
  for (let word of words) {
    hashTag += word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return hashTag;
};

console.log(generateHash("my name is thapa technical"));
