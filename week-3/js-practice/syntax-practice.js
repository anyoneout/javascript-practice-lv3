/**
 * Node.js Assignment: Ternary Operator & Array Destructuring
 *
 * Instructions:
 * 1. You will complete two exercises on the use of the ternary operator.
 * 2. You will complete two exercises on array destructuring without using functions.
 * 
 * Follow the TODO comments to complete each task.
 * Run the file using Node.js by typing `node exercise.js` in the terminal.
 */

// TASK 1: Ternary Operator Example
// Example: Use the ternary operator to determine if a number is positive or negative.
function checkPositiveOrNegative(number) {
  return number >= 0 ? "Positive" : "Negative";
}

// Example usage
console.log("Task 1 Example: Positive or Negative?");
console.log(checkPositiveOrNegative(10));  // Expected output: "Positive"
console.log(checkPositiveOrNegative(-5));  // Expected output: "Negative"

// TASK 1: Ternary Operator Exercise 1
// TODO: Use the ternary operator to check if a string is empty or not.
// Return "Empty String" if the string length is 0, otherwise return "Non-empty String".

function checkEmptyString(str) {
  // TODO: Write your solution here
  return str == 0 ? "Empty String" : "Non-empty String"
}
console.log(checkEmptyString(""));
console.log(checkEmptyString("Hello"));


// Example usage
// console.log(checkEmptyString(""));     // Expected output: "Empty String"
// console.log(checkEmptyString("Hello")); // Expected output: "Non-empty String"

// TASK 1: Ternary Operator Exercise 2
// TODO: Use the ternary operator to check if a number is divisible by 5.
// Return "Divisible by 5" if true, otherwise "Not Divisible by 5".

function checkDivisibleByFive(number) {
  // TODO: Write your solution here
  return (number%5) === 0 ? "Divisible by 5" : "Not Divisible by 5"
}
console.log(checkDivisibleByFive(20));
console.log(checkDivisibleByFive(27));

// Example usage
// console.log(checkDivisibleByFive(10));  // Expected output: "Divisible by 5"
// console.log(checkDivisibleByFive(7));   // Expected output: "Not Divisible by 5"


// TASK 2: Array Destructuring Example
// Example: Destructure an array of three cities and log the first two cities.
const cities = ["New York", "London", "Tokyo"];
const [city1, city2] = cities;

console.log("\nTask 2 Example: Array Destructuring (Cities)");
console.log(`First City: ${city1}, Second City: ${city2}`);  // Expected output: "First City: New York, Second City: London"

// TASK 2: Array Destructuring Exercise 1
// TODO: Destructure an array of three animals and log the second and third animals.

const animals = ["Lion", "Tiger", "Elephant"];
const [animal1, animal2, animal3] = animals;
console.log(`Second Animal: ${animal2}, Third Animal" ${animal3}`);
// TODO: Use array destructuring to extract three animals into three variables



// Example usage
console.log(`Second Animal: ${animal1}, Third Animal: ${animal2}`);  // Expected output: "Second Animal: Tiger, Third Animal: Elephant"

// TASK 2: Array Destructuring Exercise 2

const numbers = [8, 12, 20, 30];
// TODO: Destructure an array of four numbers and log the sum of the first two numbers.
const [number1, number2, number3, number4] = numbers;
const sum = number1 + number2;
console.log(sum);
// TODO: Use array destructuring to extract the first two numbers and calculate their sum


const [firstNum, secondNum] = numbers;  // Uncomment this line and complete the TODO
const sum2 = firstNum + secondNum;
console.log(`Sum: ${sum2}`);

// Example usage
 // Expected output: "Sum: 20"

// Task 3: Get creative and use the ternary operator with your own example
function greaterThan10(number) {
  return number > 10 ? "Greater than 10" : "Not Greater than 10";
}
console.log(greaterThan10(9));
console.log(greaterThan10(10));
console.log(greaterThan10(11));
// Task 4: Get creative and use array destructuring with your own example