// arguments 对象是所有（非箭头）函数中都可用的局部变量
// arguments 并不在 this 上，而是 JS 引擎执行函数时，在栈帧上创建的一个局部变量。函数执行完，栈帧销毁，局部变量丢弃。
// 如果你编写兼容 ES6 的代码，那么优先推荐使用剩余参数
function fn(a, b, c) {
    // console.log(`进入函数执行环境......`);
    debugger
    console.log(arguments)
    console.log(arguments[0] === a);
    console.log(fn.arguments); // 函数执行时，JS 引擎会重置 fn.arguments。
    console.log(fn.arguments[0] === a);
    // console.log(this); // global or window
    // console.log(fn.arguments === arguments); // false，推测是各自拷贝了一份数据。
    // console.log(this.arguments) // undefined
    // console.log(typeof arguments) // object
}

// console.log(fn.hasOwnProperty('arguments')); // true
// console.log(fn.arguments); // null
debugger
fn(foo = 1, 2, 3)