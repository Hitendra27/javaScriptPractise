// Capitalize Challenge
// Instructions:

// Take the variable myString and capitalize the first letter of the word using some of the methods that we talked about in the last video. Put the result in a variable called myNewString.

// Create multiple solutions if you would like.

// Expected Result:

// const myString = 'developer';

// console.log(myNewString); // 'Developer'
// Hints:

// You can use the charAt() method as well as string[index] to get the character at a specific index.
// The .toUpperCase() method will make the entire string uppercase
// substring() or slice() will return a specific portion of a string




let myNewString;

const myString = "developer";

myNewString = `${myString.charAt(0).toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);
