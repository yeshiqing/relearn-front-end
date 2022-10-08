let obj = {}
obj.fn = function fn() {
    console.log(this) // obj
    let a = {
        who: this // obj 
    }
    console.log(a.who);
}
obj.fn()