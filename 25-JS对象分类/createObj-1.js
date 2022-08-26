// 通过 for loop 创建 12 个正方形
let squareList = []
let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6]
for (let i = 0; i < widthList.length; i++) {
    squareList[i] = {
        width: widthList[i],
        getArea() {
            return this.width * this.width
        },
        getLength() {
            return this.width * 4
        }
    }
}
console.log(squareList)
// 存在问题：重复的函数浪费内存
// 利用原型将重复的函数作为共有属性