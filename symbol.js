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