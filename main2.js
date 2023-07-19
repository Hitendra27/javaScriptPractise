// JavaScript Program to Set a Default Parameter Value For a Function
//  Using Previous Parameter in Another Parameter

let calculate = (x = 15, y = x + 2) => x + y;

const result1 = calculate(10);
console.log(result1); // 22

const result2 = calculate();
console.log(result2); //32
