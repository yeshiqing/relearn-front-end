// example 2
for (var i = 0; i < 2; i++) {
    setTimeout(() => {
        debugger; // i 的作用域每次都是全局 global 中的 2
        console.log(i);
    }, 0);
}

// example 1
// 用 let 声明的变量是语句的局部变量。
for (let i = 0; i < 2; i++) {
    let testVariable = i + 10;
    setTimeout(() => {
        debugger; // 每次都保留当时调用函数时 i 的作用域 Block：0，1
        // 执行时，作用域信息并不保存 testVariable。因为方法体内没有 testVariable 的引用，testVariable已经被垃圾回收了。
        console.log(i);
    }, 0);
}
// output:
// 0
// 1