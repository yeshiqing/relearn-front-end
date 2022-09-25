// 模拟 HTMLDivElement
class DivConstructor2 {
    #className = ""
    constructor(test) {
        this.#className = test || ""
    }
    get test() {
        console.log(this)
        return this.#className
    }
    set test(v) {
        this.#className = v
    }
}

class DivConstructor3 extends DivConstructor2 {
    #className = ""
    constructor(className) {
        this.#className = className || ""
    }
    get className() {
        console.log(this === DivConstructor3.prototype) // true
        debugger
        // DivConstructor3.prototype 的 class 是 Object，是 Object 构造了 DivConstructor3.prototype
        // class Object{} 内部没有声明 #className 私有属性，因而产生如下报错
        // Uncaught TypeError: Cannot read private member #className from an object whose class did not declare it
        return this.#className
    }
    set className(v) {
        this.#className = v
    }
}

// console.log(DivConstructor3.prototype.__proto__ === DivConstructor2.prototype); // true
// console.log(DivConstructor3.prototype.__proto__.constructor === DivConstructor2); // true
console.log(DivConstructor3.prototype['className']);