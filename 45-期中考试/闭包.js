function fn() {
    let foo = '123'
    return function fn_inner() {
        console.log(foo)
    }
}
console.log(fn()()); // 123