let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3

function sum2(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum2(1, 2, 3, 4)); // Output: 10

function displayArguments() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

displayArguments(1, "hello", true);

// Spread Operator (...):

// * The spread operator produces output depending on how it is used:

// * When used to spread elements from an iterable (e.g., an array or a string), it returns individual elements as separate values. The type of these values depends on the type of the elements in the iterable. For example, if you spread an array of numbers, you get individual numbers as output.

// * When used to create a shallow copy of an array or object, it returns a new array or object with the same data and types as the original.

// * When used in function arguments, it spreads the values into individual arguments, preserving their types. The output type in this context depends on the function's parameter types.

// * When used to concatenate arrays or merge objects, it returns a new array or object with the same types as the original elements.

// Here's an example of spreading elements from an array:
const arr = [1, 2, 3];
const spreadArray = [...arr];
console.log(spreadArray);

// Rest Parameter (...):

// The rest parameter is used in function parameter lists to collect multiple arguments into an array. It always returns an array as its output. The type of this array depends on the types of the arguments passed to the function. It's typically used when you want to work with an arbitrary number of arguments as an array within the function.



// call:

// The call method is used to invoke a function with a specified this value and individual arguments passed as separate parameters.
// It allows you to call a function on an object that is not the function's own context.
// Syntax: functionName.call(thisValue, arg1, arg2, ...)
// Example:
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = { name: "Alice" };
greet.call(person, "Bob");
// Output: Hello, Bob! My name is Alice.

// apply:

// The apply method is similar to call, but it accepts an array or an array-like object to pass the arguments.
// It is often used when you have an array of arguments or when you want to dynamically pass arguments to a function.
// Syntax: functionName.apply(thisValue, [arg1, arg2, ...])
// Example:

function add(a, b) {
  return a + b;
}

const args = [5, 3];
const result = add.apply(null, args);
console.log(result); // Output: 8
// bind:

// The bind method is used to create a new function that, when called, has a specified this value and fixed arguments.
// It returns a new function without actually invoking it.
// It's often used when you want to create a function with a fixed context and arguments.
// Syntax: newFunction = functionName.bind(thisValue, arg1, arg2, ...)
// Example:

function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = { name: "Alice" };
const greetPerson = greet.bind(person);
greetPerson("Bob");
// Output: Hello, Bob! My name is Alice.