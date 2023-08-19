// JavaScript Program to Remove All Whitespaces From a Text

function trimString(x) {
  const result = x.replace(/\s/g, "");
  return result;
}

const result = trimString("      Hello World       ");
console.log(result);
