//JavaScript Program to Pass a Function as Parameter

function greet() {
  return "Hello";
}

function name(user, func) {
  const message = func();

  console.log(`${message} ${user}`);
}

name("John", greet());
name("Jack", greet());
name("Sara", greet());
