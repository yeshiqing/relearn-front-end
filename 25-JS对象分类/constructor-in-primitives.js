// 基本数据类型的 constructor
undefined.constructor // Uncaught TypeError: Cannot read properties of undefined (reading 'constructor')
null.constructor // Uncaught TypeError: Cannot read properties of null (reading 'constructor')

console.log(1234..constructor); // Number
console.log(Infinity.constructor);
console.log(NaN.constructor);

console.log("1234".constructor); // String
console.log(123n.constructor); // BigInt

console.log(true.constructor); // Boolean
console.log(false.constructor);

let symbol = Symbol("foo")
console.dir(symbol.constructor) // Symbol