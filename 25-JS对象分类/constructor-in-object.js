/**
 * 所有对象（除了 Object.create(null)创建的对象），都有一个 constructor 属性在它的原型链上。
 * constructor 属性指向类的实例（本对象）的构造函数。
 * 这个值是可以改的，因此不准确。不可作为判断构造函数的依据。
 */

/**
 * 【表面规律】
 * 1. 用构造函数创建的对象（new constructor() 语法创建的对象），对象的 constructor 指向构造函数。
 * 2. 不是用构造函数创建的对象，而是用字面量方式或其他方式初始化的对象，
 * 它的 contructor 属性指向 the Fundamental Object constructor type for that object。其实就是 JS 的内置构造函数（对象）。
 * 如 Array，RegExp
 */

/**
 * 【本质】
 * 一般来说，一个函数一诞生就有 prototype 属性。prototype 一诞生，它就有 constructor 属性且属性值为这个函数自身。
 * 读属性时，一个对象会沿着原型链查找 constructor，找到的第一个 constructor 作为结果读出来。
 */

// 对象初始化（创建对象）的 3 种方法
// 1. 对象字面量
let obj = { foo: 'foo' }
console.dir(obj) // 在浏览器控制台查看对象属性
obj.hasOwnProperty('constructor') // false
console.log(obj.constructor === Object); // true

// 2. 构造函数
function fooConstructor() {
    this.prop = arguments[0]
}
let obj2 = new fooConstructor("123123")
console.log(obj2.constructor === fooConstructor); // true

// 3.1. Object.create()
let obj3 = Object.create(obj) // obj3 的原型上没有 constructor，继续沿着原型链查找。
console.log(obj3.constructor === Object); // true

// 3.2. Object.create()
let obj4 = Object.create(fooConstructor.prototype)
console.log(obj4.constructor === fooConstructor); // true
