// Question: Count Occurrences Character

// Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string

// The function should be case-sensitive.
// The function should handle both lowercase and uppercase characters.
// The character parameter can be any printable ASCII character (the function should accept any character that it part of the ASCII character set and is printable)

const countChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();
  totalCount = word.split("").reduce((accum, curChar) => {
    if (curChar === char) {
      accum++;
    }
    return accum;
  }, 0);
  return totalCount;
};

console.log(countChar("MissIssippi", "s"));
