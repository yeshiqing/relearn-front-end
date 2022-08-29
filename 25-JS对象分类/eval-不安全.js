// 可用 Function 代替
let f2 = function anonymous(/*) {*/) { }
console.log(f2.toString())

let f1 = new Function("/*", "*/){");
console.dir(f1)
console.log(f1.toString())