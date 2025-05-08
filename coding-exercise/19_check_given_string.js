// Write a function to check if a given string starts with a specific substring.

// A string (e.g. "Hello world")
// A substring to check if it starts the given string (e.g. "Hello")
// true if the given string starts with the specified substring, otherwise false.

const startsWith = (str, substr) => {
  return str.toLowerCase().startsWith(substr.toLowerCase());
};

console.log(startsWith("Hello World", "hello"));
