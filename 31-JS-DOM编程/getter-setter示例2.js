function User(name, birthday) {
    this.name = name;
    if (typeof birthday === 'number') {
        this.age = birthday;
    } else if (birthday instanceof Date) {
        this.birthday = birthday;
        // let todayYear = new Date().getFullYear();
        // this.age = todayYear - this.birthday.getFullYear()
        // 年龄是根据当前日期和生日计算得出的
        // Object.defineProperty(this, "age", {
        //     get() {
        //         let todayYear = new Date().getFullYear();
        //         return todayYear - this.birthday.getFullYear();
        //     }
        // });
    }
}

// let bob = new User('Bob', 12) // 旧代码可以继续使用

let john = new User("John", new Date(1992, 6, 1));
console.log(john.birthday); // birthday 是可访问的
console.log(john.age);      // age 也是可访问的，对 age 进行写操作是无效的。
