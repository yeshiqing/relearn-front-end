let a = 3
debugger
let fn = function func1() {
    let a = 2
    let b = "b"
    return function func2() {
        let a = 1
    }
}
fn()()