// Question:

// Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

// If all three sides are of equal length, return "equilateral"
// If only two sides are of equal length, return "isosceles"
// If all three sides have different lengths, return "scalene"

const checkTriangleType = (num1, num2, num3) => {
  if (num1 === num2 && num2 === num3) {
    return "equilateral";
  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 6, 3));
console.log(checkTriangleType(3, 5, 6));
