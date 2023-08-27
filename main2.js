// JavaScript Program to Calculate the Area of a Triangle

const side1 = parseInt(prompt("Enter side1: "));
const side2 = parseInt(prompt("Enter side2: "));
const side3 = parseInt(prompt("Enter side3: "));

const s = (side1 + side2 + side3) / 2;

const areaValue = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log(`The area of the triangle is ${areaValue}`);
