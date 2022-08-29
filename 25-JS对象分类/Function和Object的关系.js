// 用代码模拟 Function 和 Object 的创建过程
// Object.defineProperty(Object.prototype, '__proto__', {
//     writable: true
// })
const FUNCTION = Function
const FUNCTION_PROTOTYPE = Function.prototype
const OBJECT = Object
const PROTOTYPE_TOP = Object.prototype // 原版 JS 世界中原型链的最顶端
const PROTONAME = '__proto__' // 原型的属性名，默认为 __proto__
const OBJECT_ASSIGN = OBJECT.assign

let F = function () { return function () { } } // F 表示 Function，假设先有 Function
F.prototype = new F()
OBJECT_ASSIGN(F.prototype, {
    apply: function apply() { return FUNCTION_PROTOTYPE.apply() },
    bind: function bind() { },
    call: function call() { },
    constructor: F,
    length: 0,
    name: "",
    toString: function toString() { },
    [Symbol.hasInstance]() { },
    // Function.prototype.arguments 不属于任何规范，已被弃用。请使用 ECMAScript 3 的 arguments 对象。
    get arguments() {
        if (this === F.prototype) {
            throw "TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them"
        }
        /* native code */
    },
    set arguments(value) {
        /* native code */
    },
    // Function.prototype.arguments 不属于任何规范，已被弃用。
    get caller() {
        if (this === F.prototype) {
            throw "TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them"
        }
        /* native code */
    },
    set caller(value) {
        /* native code */
    }
})

let O = new F() // O 表示 Object
let proto_descriptor = new O({ // 模拟 Object.prototype.__proto__ 的属性描述符
    // writable: true, // 默认 writable: false
    configurable: true,
    enumerable: false,
    get [PROTONAME]() {
        /* native code */
        console.log("谁调用了 __proto__ 的 getter 方法？")
        console.log(this)
        return (this == O.prototype) ? null : (this.constructor.prototype)
    },
    set [PROTONAME](value) {
        /* native code */
        // 默认无法修改对象的 __proto__ 属性
    }
})

// 模拟 Object.prototype，代表原型链的最顶端
O.prototype = new O({
    constructor: O,
    hasOwnProperty: function hasOwnProperty() { /* native code */ return prototype.hasOwnProperty() },
    isPrototypeOf: function isPrototypeOf() {/* native code */ return prototype.isPrototypeOf() },
    propertyIsEnumerable: function propertyIsEnumerable() {/* native code */ return prototype.propertyIsEnumerable() },
    toLocaleString: function toLocaleString() {/* native code */ return prototype.toLocaleString() },
    toString: function toString() {/* native code */ return prototype.toString() },
    valueOf: function valueOf() {/* native code */ return prototype.valueOf() },
    __defineGetter__: function __defineGetter__() {/* native code */ return prototype.__defineGetter__() },
    __defineSetter__: function __defineSetter__() {/* native code */ return prototype.__defineSetter__() },
    __lookupGetter__: function __lookupGetter__() {/* native code */ return prototype.__lookupGetter__() },
    __lookupSetter__: function __lookupSetter__() {/* native code */ return prototype.__lookupSetter__() }
})
O.defineProperty(O.prototype, PROTONAME, proto_descriptor)

console.dir(F.prototype) // {constructor: F, __proto__: Object.prototype}
// F.prototype = new O();

// 将 Object.prototype.__proto__ 的 writable 属性置为 false
proto_descriptor.writable = false
Object.defineProperty(Object.prototype, PROTONAME, proto_descriptor)