var str = "aaa"
str.foo = 1;
// console.dir(str.foo) // undefined

let str2 = new String('aaa')
let str3 = new String('aaa')
//     console.log(str2 === str3) // false
//     console.log(str === str2) // false
if (str.includes === str2.includes) {
    console.log('includes 方法相等') // true
}