const obj = {};
const mySymbol = Symbol("mySymbol");
const mySymbol2 = Symbol("mySymbol");
mySymbol2 = 10;
console.log(mySymbol2, typeof mySymbol2);

console.log(typeof mySymbol);
console.log(mySymbol.toString());
console.log(mySymbol.description);
console.log(typeof obj);

obj[mySymbol] = "Hello, World";

console.log(obj[mySymbol]); // "Hello, World"

// using symbols to explicitly convert types

const myObject = {
    value: 42,
    [Symbol.toPrimitive](hint) {
      if (hint === "number") {
        return this.value;
      }
      if (hint === "string") {
        return `The value is ${this.value}`;
      }
      // For "default" or any other hint, return the default value.
      return this.value;
    }
  };
  
  console.log(+myObject);      // Output: 42 (coerced to a number)
  console.log(String(myObject)); // Output: "The value is 42" (coerced to a string)
  console.log(myObject);        // Output: { value: 42 } (coerced to the default)
  