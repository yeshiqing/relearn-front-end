// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
// 函数声明
function name(param1, param2, paramN) {
    statements
}

// 函数表达式
// A function expression is similar to and has the same syntax as a function declaration
const myFunction = function () {
    statements
};

// 函数表达式后面建议添加分号，避免后面有立即执行函数报错。
// https://stackoverflow.com/questions/1834642/why-should-i-use-a-semicolon-after-every-function-in-javascript
var myFn = function funcName() {
    console.log("Surprise!");
} // <-- No semicolon! // TypeError: (intermediate value)(...) is not a function
    (function () {
        //...
    })();

// 函数声明后面接立即执行函数不会报错
function funcName() {
    console.log("Surprise!");
} // <-- No semicolon! OK!
(function () {
    //...
})();