const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers.filter((a) => a >= 0).reduce((a, b) => a + b, 0);

console.log(positiveSum);
