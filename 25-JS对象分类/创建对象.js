function Animal(name) {
    this.name = name
}
Animal.prototype.sayMyName = function () {
    console.log(`我的名字是 ${this.name}`)
}

let dog = new Animal("foo")
console.log(dog instanceof Animal) // true
console.log(dog.constructor === Animal) //