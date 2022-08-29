// Function.prototype 是个函数，可不是个普通的对象。
// 它的构造函数是 Function，而不是 Object，但是它的原型指向 Object.prototype
console.log(typeof Function.prototype); // function
console.dir(Function.prototype);// 虽然它也是个函数，但是它没有 prototype 属性。一般函数都有 prototype 属性，只有这个和「箭头函数」例外。
console.log(Function.prototype()); // 这个函数返回值是 undefined
console.log(Function.prototype.toString()); // 'function () { [native code] }' 看不到方法体的源码

console.log(Function.prototype.constructer === Function); // true