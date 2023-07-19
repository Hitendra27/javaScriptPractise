// JavaScript Program to Set a Default Parameter Value For a Function

const sum = (x = 3, y = 5) => {
  return x + y;
};

console.log(sum(5, 15)); // 20
console.log(sum(7)); //12
console.log(sum()); //8
