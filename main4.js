const words = ["coder", "programmer", "developer"];

const capitalizeWords = words.map((a) => a[0].toUpperCase() + a.slice(1, a.length));

console.log(capitalizeWords);
