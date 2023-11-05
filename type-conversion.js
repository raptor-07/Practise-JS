// Output: "123"  (number converted to string)
"123" + 0  

// Output: "2001" (number converted to string)
"20" + 1  

// Output: 2021 (numbers added)
20 + 1

// Output: "202null" (null converted to "null" string) 
"20" + null

// Output: 123 (boolean converted to number)
123 + true

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