// JavaScript Program to Split Array into Smaller Chunks

function splitIntoChuck(arr, chuck) {
  while (arr.length > 0) {
    let tempArray;
    tempArray = arr.splice(0, chuck);
    console.log(tempArray);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chuck = 2;
splitIntoChuck(array, chuck);
