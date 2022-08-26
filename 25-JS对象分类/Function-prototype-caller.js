// 创建 myFunc 时，myFunc.caller 值为 null
// 执行一个函数时，会将它的 caller 值改变。
// 浏览器中，如果一个函数 f 是在全局作用域内被调用的，则 f.caller 为 null。相反，如果一个函数是在另外一个函数作用域内被调用的，则 f.caller 指向调用它的那个函数。
function myFunc() {
    debugger
    if (myFunc.caller === null) {
        return 'The function was called from the top!';
    } else {
        return `This function's caller was ${myFunc.caller}`;
    }
}
let obj = {
    fn: function () {
        return function () {
            console.log(myFunc.caller); // null
            return myFunc()
        }
    }
}

// Chrome 环境下输出 ’The function was called from the top!‘
// node.js 环境下有不同效果。外面包了一层 function (exports, require, module, __filename, __dirname) {}
console.log(myFunc())

/**
 * 输出：
 * This function's caller was function () {
 *       console.log(myFunc.caller); // null
 *       return myFunc()
 *    }
 */
console.log((obj.fn)()())
