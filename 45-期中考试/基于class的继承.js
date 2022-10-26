class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayName() {
        console.log(this.name)
    }
    sayAge() {
        console.log(this.age)
    }
}

class Cat extends Animal {
    constructor(age) {
        super('cat', age)
    }
    jump() {
        console.log('cat jump');
    }
}

let cat = new Cat(1)
cat.sayName() // 'cat'
cat.sayAge() // 1
cat.jump() // 'cat jump'