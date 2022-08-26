const object1 = {};

Object.defineProperty(object1, 'property1', {
    value: 42,
    configurable: true,
    writable: true
});

object1.property1 = 77;
// throws an error in strict mode
// delete object1.property1
console.log(object1.property1);
Object.defineProperty(object1, 'property1', {
    writable: false
})
object1.property1 = 27;
console.log(object1.property1);
// expected output: 42