// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
(function () {
    let Date = 1
    // 1. 只有 Function 可以，普通的 function 不可以。
    // 2. 其中的变量的作用域都是在全局。
    fn = Function(`
        let date = new Date(); // 函数的作用域是全局，而不是代码块。
        console.dir(date);
        `)
    fn()
})();

(function () {
    let Date = 1
    // 普通的 function 变量声明的作用域是局部作用域，沿着作用域链，一层层向外部找该变量。
    fn = function () {
        let date = new Date(); // Uncaught TypeError: Date is not a constructor
        console.dir(date);
    }
    fn()
})();

// 参考：https://medium.com/itsems-frontend/javascript-scope-and-scope-chain-ca17a1068c96