// JavaScript Program to Check If a Variable is of Function Type

function testVariable(variable) {
  if (Object.prototype.toString.call(variable) == "[object Function]") {
    console.log("The variable is of function type");
  } else {
    console.log("The variable is not of function type");
  }
}

const count = true;
const x = () => {
  console.log("hello");
};

testVariable(count);
testVariable(x);
