// JavaScript Program To Check If A Variable Is undefined or null

const checkVarible = (variable) => {
  if (variable == null) {
    console.log("The variable is undefined or null");
  } else {
    console.log("The variable is neither undefined nor null");
  }
};

let newVariable;

checkVarible(5);
checkVarible("hello");
checkVarible(null);
checkVarible(newVariable);
