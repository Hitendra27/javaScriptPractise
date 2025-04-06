// Challenge 2:
// Instructions:

// Combine arr1 and arr2 into a new array called arr3 with the following elements:

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];
// Notice that both arr1 and arr2 include the number 5. You will have to find a way to get rid of the extra 5.

// Expected Result:

// console.log(arr3);
// // [1,2,3,4,5,6,7,8,9,10]
// Hint: There are many ways to do this, but think of the concat() method or the spread operator as well as the slice() or splice() methods

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [5, 6, 7, 8, 9, 10];

//const arr3 = arr1.concat(arr2);

const arr3 = [...arr1, ...arr2];

arr3.splice(4, 1);

console.log(arr3);
