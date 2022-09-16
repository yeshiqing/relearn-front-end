let obj = {}
let fn = () => { }
// obj.call = Function.prototype.call
obj.call = fn.call
console.log(typeof obj)