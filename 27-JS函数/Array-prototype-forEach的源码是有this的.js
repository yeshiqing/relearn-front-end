{
    const isArrayLike = function () {

    }
    Array.prototype.myforEach = function (element, index, array) {
        if (this.length)
        // arrLike 也没有 forEach 方法，为什么 forEach.call(arrLike) 就可以。
        // 答案：说明在 forEach 的源码中是有 this 这个东西的
    }
}

// 测试用例
let obj = { foo: 'a', length: 1 }
Array.prototype.forEach.call(obj, function (item) {
    console.log(item)
})