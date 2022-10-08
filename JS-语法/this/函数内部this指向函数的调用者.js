function fn() {
    // 本层作用域中的this来自外层调用者
    let obj = {
        who: this // 函数内部this默认指向本层作用域中的this
    }
    console.log(obj.who);
}
fn() // window.fn()，this 指向调用者 window