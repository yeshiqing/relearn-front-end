function fn() {
    var i = 10;
    return function () {
        debugger // 作用域链：Local → Closure → Script → Global
        return i
    }
}
let f1 = fn()
f1()