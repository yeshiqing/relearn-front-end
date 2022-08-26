// 将构造函数和对象的原型结合
let squareList = []
let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6]
function createSquare(width) {
    let obj = Object.create(createSquare.squarePrototype) // 这句代码执行时，createSquare.squarePrototype 已定义
    obj.width = width
    return obj
}
createSquare.squarePrototype = {
    getArea() {
        return this.width * this.width
    },
    getLength() {
        return this.width * 4
    },
    // 有了这句，constructor 属性在创建的对象的原型上，保存的地址指向 creatSquare
    // 如果没有这句，则 constructor 属性在对象的原型的原型上，保存的地址指向 Object
    constructor: createSquare
}
for (let i = 0; i < widthList.length; i++) {
    squareList[i] = createSquare(widthList[i])
}
console.log(squareList);
// console.log(squareList[0].constructor); // createSquare，这个 constructor 属性在对象的原型上

let square1 = squareList[0]
// console.log(`square1:`)
console.log(square1.hasOwnProperty('__proto__'))
console.log('__proto__' in square1);
// console.log(square1.__proto__) // createSquare.squarePrototype
// square1 原型的 constructor 属性是手动赋值的，new 操作符创建的对象的原型的 constructor 属性，是构造函数 Square 声明的时候，自动有 Square.prototype.constructor，其值为 Square
// square1 的 constructor 属性是可枚举的，new 操作符创建的对象的 constructor 属性不可枚举。

// 存在问题：代码本身已经完美，但是 JS 之父通过 new 操作符可以进一步简化代码