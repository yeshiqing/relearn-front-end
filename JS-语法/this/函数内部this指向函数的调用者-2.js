let obj = {}
obj.fn = function fn() {
    // 函数fn内部的this就是作用域中的this，指向函数的调用者
    console.log(this) // obj
    let a = {
        who: this // obj 
    }
    console.log(a.who);
}
obj.fn()