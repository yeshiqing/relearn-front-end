const sym1 = Symbol("foo")
const sym2 = Symbol.hasInstance

// let f = function [sym1](){ }

let obj = {
    [sym1]() { },
    [sym2]() { }
}

console.log(obj[sym1].name) // "[foo]"
console.log(obj[sym2].name) // "[Symbol.hasInstance]" 