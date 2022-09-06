let person = {
    name: 'jeffrey',
    sayHi: function () {
        console.log(this.name)
    }
}

person.sayHi() // 把 person 作为函数中的 this 使用。