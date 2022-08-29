// 一、研究思路
/* 
了解 Function 函数的方法体和对象上的属性，然后逐渐增加 Function 的属性。
console.dir(Function)
1. 函数的方法体
1.1 接受一个参数
const fooFunc = new Function(value);
1.2 接受多个参数
const sumFunc = new Function('a', 'b', 'return a + b'); 
*/

// 二、代码实现
// 备份 Function
const FUNCTION = Function
// JS 世界创建 Function 的伪代码。先实现接受一个参数的形式。
Function = function (/*funcBody*/) {
    let funcBody = arguments[0];
    let str = `(function anonymous() {
        ${funcBody}
    })` // 必须加圆括号，这样 eval 才会返回表达式的值，否则返回 undefined。
    /**
     * 创建一个函数 func 时，
     * JS 引擎会自动做如下事情，JS 引擎会自动做如下事情，JS 引擎会自动做如下事情：
     * 1. 配置 func 的基本属性
     * func.arguments = null
     * func.caller = null
     * func.name = "func"
     * 
     * 2. 配置 func 的 prototype（箭头函数、Function.prototype 不做这一步）
     * 2.1 func.prototype = {}
     * 2.2 func.prototype.constructor = func
     * 2.3 func.prototype.__proto__ = Object.prototype
     * 
     * 3. 配置 func 的原型 
     * func.__proto__ = FUNCTION.prototype
     */
    let func = eval(str) // 把字符串转化为对象。用 eval 是危险的。
    return func
}
Function.length = 1 // 默认为 1
Function.name = 'Function' // 属性描述符。{value: 'Function', writable: false, enumerable: false, configurable: true}

/**
 * 其他函数的 prototype 都是对象，唯独 Function.prototype 是函数。
 * 这个函数必须用「箭头函数」语法或 Function.prototype.bind() 创建
 * 因为只有这样这个函数才没有 prototype 属性。
 */
Function.prototype = () => { return undefined }

Function.prototype.constructor = Function
Function.prototype.apply = function () { }
Function.prototype.bind = function () { }
Function.prototype.call = function () { }
Function.prototype.length = 0
Function.prototype.name = ""
Function.prototype.toString = function () { }
Object.assign(Function.prototype, {
    // 只读属性，无法赋值
    // [Symbol.hasInstance]() { },
    // Function.prototype.arguments 不属于任何规范，已被弃用。请使用 ECMAScript 3 的 arguments 对象。
    // Function.prototype.arguments 不属于任何规范，已被弃用。
})

// 所有函数的原型都指向 Function.prototype （Function.prototype 例外，它的原型指向 Object.prototype）
Function.prototype.__proto__ = Object.prototype

/**
 * 所有的「函数对象的原型」默认都指向 Function.prototype，箭头函数也不例外。
 * Function 也是函数对象，所以 Function 也是由 Function 构造的吗？
 * 不是的。一开始 Function 只是一个普通的函数而已。由于人为地指定它的原型是它的 prototype 属性，所以好像是它构造自己。
 * 其实计算机的世界里不存在鸡生蛋蛋生鸡的问题，我创建一个蛋，然后指定它的构造者是自己。鸡和蛋就是同一个对象，并不矛盾。
 */
Function.__proto__ = Function.prototype


// 测试用例1：new 操作，参数为方法体的字符串形式，产生一个函数
let f = new Function('let x = 1;return x;');
console.dir(f)
/**
 * 以下步骤在 new Function() 里面已自动完成
 * 1. f.prototype.constructor = f
 * 2. f.prototype.__proto__ = Object.prototype
 * 3. f.__proto__ = FUNCTION.prototype
 */

// 测试用例2：检测函数的原型是什么？
function f2() { }
console.dir(f2)
console.log(f2.__proto__ === Function.prototype) // false
console.log(f2.__proto__ === FUNCTION.prototype) // true

