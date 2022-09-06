let obj = { foo: 'a' }
Array.prototype.forEach.call(obj, (item, i) => {
    debugger
    console.log(item)
})
// 用 call 方法调用函数有个问题，就是如果出错，不会报错
// 本来 obj 不是数组，是没有 forEach 方法的，如果直接用obj.forEach会报错。
// 但是用 forEach.call(obj) 就不会报错。

// arrLike 也没有 forEach 方法，为什么 forEach.call(arrLike) 就可以。
// 答案：说明在 forEach 的源码中是有 this 这个东西的
let arrLike = { 0: 'a', length: 1 }
Array.prototype.forEach.call(arrLike, (item, i) => {
    console.log(item)
})
