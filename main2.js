// JavaScript Program to Get File Extension

const getFileExtension = (filename) => {
  const extention = filename.split(".").pop();
  return extention;
};

const result1 = getFileExtension("module.js");
console.log(result1);

const result2 = getFileExtension("module.txt");
console.log(result2);
