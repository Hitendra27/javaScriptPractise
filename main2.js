// JavaScript Program to Remove Duplicates From Array.

const getUnique = (arr) => {

   let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 4, 3, 5, 4];

getUnique(array);
