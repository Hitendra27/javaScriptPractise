// JavaScript Program to Empty an Array

function emptyArray(arr) {

    arr.splice(0, arr.length);

    return arr;
}

const array = [1, 2, 3];
console.log(array);

const result = emptyArray(array);
console.log(result);

