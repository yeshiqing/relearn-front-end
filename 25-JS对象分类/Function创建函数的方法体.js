// 用 F 表示 Function
const F = function (funcBody) {
    let str = `(function anonymous() {
        ${funcBody}
    })` // 必须加圆括号，这样 eval 才会返回表达式的值，否则返回 undefined。
    let func = eval(str) // 把字符串转化为对象。用 eval 是危险的。
    return func
}

// 测试用例
let f1 = new F('let x=1;return x;')
console.log(f1.toString());
console.log(f1());