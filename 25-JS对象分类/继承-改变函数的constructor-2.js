// 类的继承
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
function Parent() { this.rootClassName = "Parent" }

// 创建一个类 CreatedConstructor，继承 Parent 类
function CreatedConstructor() {
    Parent.call(this)
}

CreatedConstructor.prototype = Object.create(Parent.prototype)

CreatedConstructor.prototype.constructor = CreatedConstructor // sets the correct constructor for future use

// 该类的实例（对象）具有创建自身的 create() 方法。
CreatedConstructor.prototype.create = function create() {
    return new this.constructor()
}

let c1 = new CreatedConstructor().create()
console.dir(c1)
let c2 = c1.create() // c1 创建了一个自己。但 c1 与 c2 不同，只是它们的属性相同，原型指向的对象及整个原型链相同。
console.dir(c2)