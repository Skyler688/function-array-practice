// Increased Function Challenges: 1-5

// challenge 1
// create a function that will take in a number and return the number squared
function squareNumber(num) {
  // your code here (HINT: use Math.pow OR multiply the number by itself)
  return num * num;
}
// test the function
console.log(squareNumber(4)); // should return 16

// challenge 2
// create a function that will take in a string and return the string repeated 3 times using a loop
function repeatString(str) {
  // your code here (HINT: create a variable inside the function, then use a loop to add to that variable, then return thr string)
  let result = "";
  for (let i = 0; i < 3; i++) {
    result = str.concat(result);
  }
  return result;
}
// test the function
console.log(repeatString("Hello")); // should return "HelloHelloHello"

// challenge 3
// build a function that has scoped variables and returns a string
function scopingData() {
  // your code here (HINT: create a variable, create a function inside this function, and return the inner function)
  let scopedVar = "Hello World";
  function hello() {
    return scopedVar;
  }
  return hello();
}
// test the function
console.log(scopingData()); // should return "Hello World"

// challenge 4
// create a function that will take in a string and return the string reversed
function reverseString(str) {
  // your code here (HINT: use String.split, String.reverse, and String.join methods, look at w3schools for help on each of these methods)
  // HINT: assign a new name for the string passed in, then after the equals, use the above methods like so: str.function.function.function,
  // You will need to make sure you are assigning quotes inside the parentheses to the first and last function in the above methods.
  // Return the new string.
  let reverse = str.split("");
  reverse.reverse();
  reverse = reverse.join("");
  return reverse;
}
// test the function
console.log(reverseString("Hello")); // should return "olleH"

// challenge 5
// create a function that will return a random number between 1 and 10
function randomNumber() {
  // your code here (HINT: use Math.random)
  let result = Math.random() * 10;
  result = Math.floor(result);
  return result;
}
// test the function
console.log(randomNumber()); // should return a random number between 1 and 10
