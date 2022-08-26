const o = {}; // Creates a new object

// Example of an object property added
// with defineProperty with an accessor property descriptor
let bValue = 38;
Object.defineProperty(o, 'b', {
    enumerable: true,
    configurable: true,
    get() { return bValue; },
    set(newValue) { bValue = newValue; }
});
console.log(o)
console.log(o.b) // 38
