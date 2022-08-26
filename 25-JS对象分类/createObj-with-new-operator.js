// new 操作符进一步简化代码
function Square(width) {
    this.width = width
}
Object.assign(Square.prototype, {
    getArea() {
        return this.width * this.width
    },
    getLength() {
        return this.width * 4
    }
})
let square1 = new Square(5)
console.log(square1)
console.log(square1.__proto__) // Square.prototype
// console.log(square1.__proto__ === Square.prototype) // true
console.log(square1.__proto__.hasOwnProperty('constructor')) // true。square1 有 constructor 属性，只是这个属性不可枚举，所以 for in 和 Object.keys() 都看不到 constructor。
console.log(square1.__proto__.constructor) // Square 函数
// console.log(square1.__proto__.hasOwnProperty('__proto__')) // false，见 stackoverlow
console.log('__proto__' in square1.__proto__)
console.log(square1.__proto__.__proto__) // Object.prototype

// new X() 自动做了 4 件事
// 1) 创建一个空对象 obj
// 2) 为空对象关联原型（obj.__proto__ = X.prototype）
// 3) 将空对象作为 this 关键字执行构造函数（X.apply(obj, argsArray)）
// 4) 自动 return this




// createObj-without-new-operator.js
// function createSquare(width) {
//     let obj = Object.create(createSquare.squarePrototype)
//     obj.width = width
//     return obj
// }
// createSquare.squarePrototype = {
//     getArea() {
//         return this.width * this.width
//     },
//     getLength() {
//         return this.width * 4
//     },
//     constructor: createSquare // 如果没有这句，则创建的对象的原型中没有 constructor 属性
// }
// let square = createSquare(5)
// console.log(`square:`)
// console.log(square)
// console.log(square.__proto__)
