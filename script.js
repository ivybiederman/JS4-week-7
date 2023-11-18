// Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//  Subtract the value of the first element from the value in the last element of the array programmatically
//    (ages[7] - ages[0] is not allowed!)
let lastIndex = ages.length - 1;  // Find the index of the last element
let firstValue = ages[0];        // Store the value of the first element
let lastValue = ages[lastIndex]; // Store the value of the last element

let ageDifference = lastValue - firstValue;
console.log("Age difference:", ageDifference);


// Add a new age to your array and repeat the step above to ensure it is dynamic.
ages.push(45);  // Example of adding a new age
lastIndex = ages.length - 1;  // Update the index of the last element
lastValue = ages[lastIndex];  // Update the value of the last element

ageDifference = lastValue - firstValue;
console.log("Updated age difference:", ageDifference);

// Use a loop to iterate through the array and calculate the average age.
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let averageAge = sum / ages.length;
console.log("Average age:", averageAge);

// 5. Create an array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 6. Calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log("Average letters per name:", averageLetters);

// 7. Concatenate all names together
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + ' ';
}
console.log("Concatenated names:", concatenatedNames.trim());

// 8. Access the last element of any array
let lastElement = ages[ages.length - 1];
console.log("Last element of ages:", lastElement);

// 9. Access the first element of any array
let firstElement = ages[0];
console.log("First element of ages:", firstElement);

// 10. Create a new array called nameLengths
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log("Name lengths:", nameLengths);

// 11. Calculate the sum of all elements in nameLengths
let sumNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sumNameLengths += nameLengths[i];
}
console.log("Sum of name lengths:", sumNameLengths);

// 12. Write a function to concatenate a word n times
function concatenateWord(word, n) {
  return word.repeat(n);
}

console.log(concatenateWord('Hello', 3));

// 13. Write a function to return a full name
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log(getFullName('John', 'Doe'));

// 14. Write a function to check if the sum of array is greater than 100
function isSumGreaterThan100(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum > 100;
}

console.log(isSumGreaterThan100([30, 40, 35]));

// 15. Write a function to calculate average of array
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(calculateAverage([20, 30, 40]));

// 16. Write a function to compare averages of two arrays
function compareAverages(arr1, arr2) {
  return calculateAverage(arr1) > calculateAverage(arr2);
}

console.log(compareAverages([20, 30, 40], [10, 15, 20]));

// 17. Write a function for willBuyDrink
function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.50;
}

console.log(willBuyDrink(true, 12.00));
