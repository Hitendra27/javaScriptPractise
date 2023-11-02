// JavaScript Program to Swap Two Variables

let a = prompt("Enter the first variable: ");
let b = prompt("Enter the second variable: ");

[a, b] = [b, a];

console.log(`The value of a after swapping is ${a}`);
console.log(`The value of b after swapping is ${b}`);
