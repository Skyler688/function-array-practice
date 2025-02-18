let fox = "Jumped Over The Lazy Dog";

// challenge 1
// readme.md link to challenge 1
// The goal of this challenge is to create a function that will take in a string
// and return an additional string at the end. YOU CANNOT APPEND THE STRING MANUALLY.
function jumpOverFence(fox) {
  // your code here (HINT: use string interpolation, WHICH IS ADDING A VARIABLE TO A STRING)
  // complete this so that the function returns "The Lazy Brown Fox Jumps Over The Fence"

  // already have: Over, The, Lazy.
  let the = fox.slice(12, 15);
  let over = fox.slice(7, 11);
  let lazy = fox.slice(16, 20);
  let animal = "Fox";
  let action = "Jumps";
  let color = "Brown";
  let object = "Fence";

  return `${the} ${lazy} ${color} ${animal} ${action} ${over} ${the} ${object}`;
}

// test the function
console.log(jumpOverFence(fox)); // should return "The Lazy

// challenge 2
// You will need to take a number and return true or false if the number is even or odd
function isEvenOrOdd(num) {
  // your code here (HINT: use % MODULUS operator DIVIDED BY 2)
  let result = num % 2;

  if (result == 0) {
    return true;
  } else if (result == 1) {
    return false;
  } else {
    console.error("number is not even or odd.");
  }
}

// test the function
console.log(isEvenOrOdd(10)); // should return true
console.log(isEvenOrOdd(5)); // should return false

// challenge 3
// The goal of this challenge is to create a function that will convert celsius to fahrenheit
function celsiusToFahrenheit(celsiusNumber) {
  // your code here (HINT: use the formula (C * 9/5) + 32) and return the new fahrenheit number passed in as celsius
  return (celsiusNumber * 9) / 5 + 32;
}

// test the function with degree symbol
console.log(celsiusToFahrenheit(30)); // should return 86
console.log(celsiusToFahrenheit(0)); // should return 32

// challenge 4
// find the max number in an array
function findMaxNumber(arr) {
  // your code here (HINT: use Math.max)
  return Math.max(...arr);
}

// test the function
console.log(findMaxNumber([1, 2, 3, 4, 5])); // should return 5

// challenge 5
//  create a function that will wait 2 seconds and then log "Hello World"
function sayHelloWorld() {
  // your code here (HINT: use setTimeout)
  setTimeout(function () {
    console.log("Hello World");
  }, 2000);
}

// test the function
sayHelloWorld(); // should log "Hello World" after 2 seconds
