// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
let f1 = function () { }
console.dir(f1) // 在浏览器控制台查看对象属性
console.log(typeof f1.prototype); // object
console.log(f1.prototype.hasOwnProperty('constructor')); // true
console.log(f1.prototype.constructor === f1); // true