// JavaScript Program To Perform Intersection Between Two Arrays

const performIntersection = (arr1, arr2) => {
  return arr1.filter((x) => arr2.indexOf(x) !== -1);
};

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

const result = performIntersection(array1, array2);
console.log(result);
