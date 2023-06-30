// JavaScript Program to Remove Duplicates From Array.

const getUnique = (arr) => {

    let uniqueArr = [];

    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 4, 3, 5, 4];

getUnique(array);
