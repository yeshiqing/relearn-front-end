{
    /*
    forEach 判断是否为伪数组的标准 
     */
    const isArrayLike = function (obj) {
        if (obj.length > 0) {
            for (let i = 0; i < obj.length; i++) {
                if (obj.hasOwnProperty(i)) {
                    return true
                }
            }
        }
        return false
    }
    // let arrLike = { 0: 'a', length: 1 }
    // arrLike 也没有 forEach 方法，为什么 forEach.call(arrLike) 就可以。
    // 答案：说明在 forEach 的源码中是有 this 这个东西的
    // 另外，用 call 方法调用函数有个问题，就是如果出错，不会报错
    Array.prototype.myforEach = function (fn, thisArg) {
        thisArg = thisArg || this
        if (!isArrayLike(thisArg)) {
            return
        }
        for (let i = 0; i < thisArg.length; i++) {
            thisArg.hasOwnProperty('' + i) && fn.call(thisArg, thisArg[i], i, thisArg)
        }
    }
}

// 测试用例1
// let obj_not_arrayLike = { foo: 'a', length: 1 }
// 测试用例2
// let obj_not_arrayLike = { 0: undefined, length: 3 }
// 测试用例3
// let obj_not_arrayLike = { 1: null, 2: '', length: 3 }
// 黑盒测试，测试用例4
// let obj_not_arrayLike = "123"
// 测试用例5（字符串有 length 属性，但是数字没有 length 属性）
let obj_not_arrayLike = 123

// 检验差异
Array.prototype.myforEach.call(obj_not_arrayLike, function (item) {
    console.log(item)
})
// Array.prototype.forEach.call(obj_not_arrayLike, function (item) {
//     console.log('进入函数体') // 无结果
//     console.log(item)
// })


// let arr = [1, 2, 3]
// arr.myforEach(function (item) {
//     console.log(item)
// })