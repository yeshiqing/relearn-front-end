// obj.fn is the obj shorthand method
let obj = {
    fn() {

    }
}

// 属性简洁表示法表示的对象方法没有 prototype 属性
// i.e. 对象的简写方法没有prototype属性
console.log(obj.fn.prototype); // undefined
new obj.fn() // Uncaught TypeError: obj.fn is not a constructor