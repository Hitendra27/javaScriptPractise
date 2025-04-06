// Number Challenge
// Instructions:

// Create a variable called x that is a random number between 1 and 100 along with a variable called y that is a random number between 1 and 50.

// Create a variable for the sum, difference, product, quotient and remainder of x and y. Log the output in a string that shows the two numbers of x and y along with the operator and result.

// You can log the output string directly or put them in separate variables and log them like below.
// You can use string concatenation or template literals for the output.
// Expected Result:

// console.log(sumOutput); // 31 + 15 = 46
// console.log(differenceOutput); // 31 - 15 = 16
// console.log(productOutput); // 31 * 15 = 465
// console.log(quotientOutput); // 31 / 15 = 2.066666666666667
// console.log(rmOutput); // 31 % 15 = 1
// Hints:

// The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1

// The Math.floor() function will round a number down to the nearest integer

let x = Math.floor(Math.random() * 100) + 1;

let y = Math.floor(Math.random() * 50) + 1;

// sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;

//cdifference
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;

// product
const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;

// quotient
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;

// rm
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);
