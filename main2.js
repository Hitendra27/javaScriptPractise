// JavaScript Program to Split Array into Smaller Chunks

function splitIntoChuck(arr, chuck) {
  for (i = 0; i < arr.length; i += chuck) {
    let tempArray;
    tempArray = arr.slice(i, i + chuck);
    console.log(tempArray);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chuck = 2;
splitIntoChuck(array, chuck);
