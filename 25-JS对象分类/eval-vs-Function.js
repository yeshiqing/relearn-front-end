// bad code with `eval()`
(function () {
    function Date(n) {
        return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][n % 7]; // 由于是原始类型，所以 new Date 实际返回一个空对象
    }
    function looseJsonParse(obj) {
        return eval(`(${obj})`);
    }
    console.log(looseJsonParse(
        "{a:(4-1), b:function(){}, c:new Date()}"// 这个 Date 是局部作用域的 Date
    ))
})()
console.log(Date.toString());

// better code without `eval()`
(function () {
    function Date(n) {
        return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][n % 7]; // 由于是原始类型，所以 new Date 实际返回一个空对象
    }
    function looseJsonParse(obj) {
        let fn = Function(`return (${obj})`) // use strict
        // debugger
        return fn();
    }
    console.log(looseJsonParse(
        "{a:(4-1), b:function(){}, c:new Date()}"
    ))
})()
console.log(Date.toString());