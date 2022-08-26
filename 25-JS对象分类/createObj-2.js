// 利用原型将重复的函数作为共有属性
let squareList = []
let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6]
let squarePrototype = {
    getArea() {
        return this.width * this.width
    },
    getLength() {
        return this.width * 4
    }
}
for (let i = 0; i < widthList.length; i++) {
    squareList[i] = Object.create(squarePrototype)
    squareList[i].width = widthList[i]
}
console.log(squareList)
// 存在问题：for 循环中 square 代码过于分散
// 可以抽象到函数中