// Array Challenges
// Challenge 1:
// Instructions:

// Use some of the array methods that we looked at to mutate the following array to = the expected result below:

// const arr = [1, 2, 3, 4, 5];
// Expected Result:

// console.log(arr);
// // [6, 5, 4, 3, 2, 1, 0];
// Hint: No hints. This one is pretty easy ;)

const arr = [1, 2, 3, 4, 5];

arr.reverse().unshift(6);

arr.push(0);

console.log(arr);
