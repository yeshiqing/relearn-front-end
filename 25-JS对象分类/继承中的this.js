function Animal(name) {
    this.name = name
}
{
    let util = function (toWhom) {
        console.log(arguments)
    }
    Animal.prototype.sayMyName = function () {
        console.log(this) // 创建的类的实例（对象）
        return util.apply(this, arguments)
    }
}

let dog = new Animal("foo")
dog.sayMyName("Bob")