// 将生成 square 的代码抽象到函数中
let squareList = []
let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6]
function createSquare(width) {
    let obj = Object.create(squarePrototype)
    obj.width = width
    return obj
}
let squarePrototype = {
    getArea() {
        return this.width * this.width
    },
    getLength() {
        return this.width * 4
    }
}
for (let i = 0; i < widthList.length; i++) {
    squareList[i] = createSquare(widthList[i])
}
console.log(squareList)
// console.log(squareList[0].constructor); // Object
// console.log(squareList[0].__proto__.__proto__.hasOwnProperty('constructor')) // true，对象沿着原型链向上查找，在原型的原型上找到 constructor 属性
// 存在问题：squarePrototype 原型和 createSquare 构造函数还是分散的
// 能不能组合到一起？