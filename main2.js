// JavaScript Program To Perform Intersection Between Two Arrays

function performIntersection(arr1, arr2) {
  const setA = new Set(arr1);
  const setB = new Set(arr2);

  let IntersectionResult = [];

  for (let i of setB) {
    if (setA.has(i)) {
      IntersectionResult.push(i);
    }
  }
  return IntersectionResult;
}

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

const result = performIntersection(array1, array2);
console.log(result);
