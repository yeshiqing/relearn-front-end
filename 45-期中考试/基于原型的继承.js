function Animal(name, age) {
    this.name = name
    this.age = age
}
Animal.prototype.sayName = function () {
    console.log(this.name);
}
Animal.prototype.sayAge = function () {
    console.log(this.age);
}

function Cat(age) {
    Animal.call(this, 'cat', age)
}
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat
// 或者
Object.setPrototypeOf(Cat.prototype, Animal.prototype) // 不必设置 Cat.prototype.constructor = Cat
Cat.prototype.jump = function () {
    console.log('cat jump');
}

let cat = new Cat(1)
cat.sayName() // 'cat'
cat.sayAge() // 1
cat.jump() // 'cat jump'