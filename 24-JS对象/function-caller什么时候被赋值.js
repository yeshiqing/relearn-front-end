// 结论：在每次调用函数时，JS 引擎会将函数的 caller 赋值
function myFunc() {
    console.dir(`第2次打印：` + myFunc.caller) // function () {\n        return myFunc()\n    }'
    if (myFunc.caller === null) {
        return 'The function was called from the top!';
    } else {
        return `This function's caller was ${myFunc.caller}`;
    }
}
let obj = {
    fn: function () {
        return myFunc()
    }
}

console.dir(`第1次打印：` + myFunc.caller) // null
obj.fn()