// 字面量形式的对象
// 1. 数组字面量
let arr = [1, 2, 3]
console.dir(arr);
console.log(arr.constructor === Array); // true

// 2. 正则表达式字面量
const re = /ab+c/;
console.log(re.constructor === RegExp); // true

// 3. 字符串字面量
const str = "1234"
console.log(str.constructor === String); // true


/**
 * 以下这些类型的对象只能用构造函数创建。所以他们的 constructor 就是构造函数本身。
 */
let date = new Date()
console.log(date.constructor === Date); // true

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 300);
});
console.log(myPromise.constructor === Promise); // true
