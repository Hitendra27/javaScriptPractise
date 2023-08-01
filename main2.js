// JavaScript Program to Pass Parameter to a setTimeout() Function

const greet = (x, y) => {
  console.log(x);
  console.log(y);
};

setTimeout(greet, 3000, "hello", "world");
console.log("This message is shown first");
