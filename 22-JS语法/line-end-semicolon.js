// // 解构赋值，加上分号才正确
// let a = 10
// let b = 10;
// [a, b] = [20, 20]
// console.log(a, b) // 20 20

let y = function () { return function () { return 1 } }
let x = y
    (function () {
        /*...*/
    })()
// 等同于
// let x = y(function () {/*...*/})();
console.log(x)