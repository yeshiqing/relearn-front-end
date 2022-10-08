// 扩展运算符`...` 将数组第一层展开
var obj = {
    array: [[1, 2, 3], ['a', 'b'], [[undefined, null], [false, true]]]
}
let newArray = [...obj.array]
console.log(newArray);

// 只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错
console.log(...obj.array);
