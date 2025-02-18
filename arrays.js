// array challenges 1-5

// You will need to create 3 arrays and use them to solve the following challenges:

// challenge 1
function findLargestNumber(arr) {
  // Your code here (HINT: use Math.max)
  return Math.max(...arr);
}

console.log(findLargestNumber([3, 6, 2, 8, 4])); // Should output: 8

// challenge 2
// create an array of words and only rerturn words that are 5 characters long
function removeDuplicates(arr) {
  // Your code here (HINT: use Set)
  let result = new Set(arr);
  let answer = [...result];
  return answer;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Should output: [1, 2, 3, 4, 5]

// challenge 3
function filterEvenNumbers(arr) {
  // Your code here (HINT: use filter)
  let result = arr.filter(isEven);
  function isEven(number) {
    return number % 2 === 0;
  }
  return result;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Should output: [2, 4]

// challenge 4 (optional)
function filterArray(arr, steps) {
  // Your code here (HINT: use slice, and concat methods)
  let arr_1 = arr.slice(steps);
  let arr_2 = arr.slice(0, steps);
  arr_1 = arr_1.concat(arr_2);
  return arr_1;
}

console.log(filterArray([1, 2, 3, 4, 5], 2)); // Should output: [3, 4, 5, 1, 2]

// challenge 5 (optional)
function rotateArray(arr, steps) {
  // Your code here (HINT: use slice, and concat methods)
  negativeSteps = -steps;
  let arr_1 = arr.slice(negativeSteps);
  let arr_2 = arr.slice(0, negativeSteps);
  arr_1 = arr_1.concat(arr_2);
  return arr_1;
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Should output: [4, 5, 1, 2, 3]
