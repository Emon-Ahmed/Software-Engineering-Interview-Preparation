// Write a function to convert a string to camelCase & snake_case.

const toCamelCase = (str) => {
  return str
    .trim()
    .split(" ")
    .map((e, index) => {
      if (index === 0) {
        return e;
      } else {
        return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
      }
    })
    .join("");
};

console.log(toCamelCase("hello world thApa ")); // Output: helloWorld

// Homework
// console.log(toSnakeCase("helloWorld")) ; // Output: hello_world

const toSnakeCase = (str) => {
  return str
    .trim()
    .split(" ")
    .map((e) => {
      return e.charAt(0) + e.slice(1).toLowerCase();
    })
    .join("_");
};

console.log(toSnakeCase("hello world thApa ")); // Output: hello_world
