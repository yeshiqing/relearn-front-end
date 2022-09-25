// 模拟 Element
let DivConstructor1 = function (className) {
    let _className = className || ""
    return {
        get className() {
            return _className
        },
        set className(v) {
            _className = v
        }
    }
}

let div1 = new DivConstructor1("demo");
console.log(div1.className); // "demo"
console.log(div1.hasOwnProperty('className')); // true，className getter/setter 在自身上


// 模拟 Element
class DivConstructor2 {
    #className = ""
    constructor(className) {
        this.#className = className || ""
    }
    get className() {
        console.log(this)
        return this.#className
    }
    set className(v) {
        this.#className = v
    }
}

let div2 = new DivConstructor2("demo");
console.log(div2.className); // "demo"
console.log(div2.hasOwnProperty('className')); // false，className 属性实际在 Element.prototype 上