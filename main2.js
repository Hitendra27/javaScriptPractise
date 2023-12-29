// JavaScript Program to Find the Largest Among Three Numbers

const num1 = 45;
const num2 = 88;
const num3 = 77;
let Largest;

if (num1 >= num2 && num1 >= num3) {
  Largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  Largest = num2;
} else {
  Largest = num3;
}

console.log(`The largest number is: ${Largest}`);
