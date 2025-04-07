const getCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

//console.log(`The temperature is ${getCelsius(100)} \xB0C`);

const minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
};

//console.log(minMax([1, 2, 3, 4, 5]));

((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(10, 5);
