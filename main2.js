// JavaScript Program to Merge Two Arrays and Remove Duplicate Items

const getUniqueAfterMerge = (arr1, arr2) => {

    let arr = [...arr1, ...arr2];

    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);

}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5];

getUniqueAfterMerge(array1, array2);