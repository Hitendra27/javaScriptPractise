// JavaScript Program to Remove Specific Item From an Array

const removeItemFromArray = (array, n) => {
    const index = array.indexOf(n);

    if(index > -1) {
        array.splice(index, 1);
    }
    return array;
}

const result = removeItemFromArray([1, 2, 3, 4, 2, 5], 2);

console.log(result);

