function Person() {
    this.age = 0;

    setInterval(() => {
        // 箭头函数不会创建自己的 this，它只会从自己的作用域链的上一层继承 this。
        this.age++; // this 正确地指向 p 实例
        console.log(this.age);
    }, 1000);
}

var p = new Person();