let fn = () => {
    // 1. 箭头函数中的 this 并不捕获 call 和 apply
    console.log(this === window); // true
    // 2. 箭头函数中的 this 并不捕获 call 和 apply
    // console.log(arguments); // 报错。x
    return 1
}
fn.call("a") // call 无效果

// 3. 箭头函数默认没有 prototype 属性
console.log(fn.prototype === undefined) //true

// 用函数声明或函数表达式定义的函数有 prototype 属性
let f1 = function () {
    console.log(this);
}
f1.call(1)
console.dir(f1) 