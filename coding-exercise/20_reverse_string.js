// Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reversed string.

const reverseString = (str) => {
  let r_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r_str = r_str + str[i];
  }
  return r_str;
};
console.log(reverseString("hello"));

const countDown = (num) => {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
};

console.log(countDown(10));
