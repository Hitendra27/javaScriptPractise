// JavaScript Program to Add Element to Start of an Array

const addElement = (arr) => {

   arr.splice(0, 0, 4);

    console.log(arr);

}

const array = [1, 2, 3];

addElement(array);
