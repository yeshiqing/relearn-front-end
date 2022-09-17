// class oConstructor {
//     #age = 0
//     constructor(age) {
//         this.#age = age
//     }
//     get age() {
//         return this.#age
//     }
//     set age(v) {
//         if (v < 0) {
//             console.log("年龄不允许小于0");
//         } else {
//             this.#age = v
//         }
//     }
// }

// let o = new oConstructor(12);
// console.log(o.age); // 12



// let oConstructor = function (age) {
//     let _age = age || 0
//     return {
//         get age() {
//             return _age
//         },
//         set age(v) {
//             if (v < 0) {
//                 console.log("年龄不允许小于0");
//             } else {
//                 _age = v
//             }
//         }
//     }
// }

// let o = new oConstructor(12);
// console.log(o.age); // 12



// var o = {};
// (function () {
//     var _age = 0
//     Object.defineProperty(o, 'age', {
//         get() {
//             return _age
//         },
//         set(v) {
//             if (v < 0) {
//                 console.log("年龄不允许小于0");
//             } else {
//                 _age = v;
//             }
//         }
//     })
// })()
// console.log(o.age); // 输出 0
// o.age = 12;
// console.log(o.age); // 12



// let o = {}
// {
//     let _age = 0
//     Object.defineProperty(o, 'age', {
//         get() {
//             return _age
//         },
//         set(v) {
//             if (v < 0) {
//                 console.log("年龄不允许小于0");
//             } else {
//                 _age = v;
//             }
//         }
//     })
// }
// console.log(o.age); // 输出 0
// o.age = 12;
// console.log(o.age); // 12



// let oConstructor = function (age) {
//     let _age = age || 0
//     Object.defineProperty(this, "age", {
//         get() {
//             return _age
//         },
//         set(v) {
//             if (v < 0) {
//                 console.log("年龄不允许小于0");
//             } else {
//                 _age = v
//             }
//         }
//     })
// }

// let o = new oConstructor(12);
// console.log(o.age);



// let oConstructor = function (age) {
//     let _age = age || 0
//     Object.defineProperty(this, "age", {
//         configurable: true,
//         enumerable: true,
//         get() {
//             return _age
//         },
//         set(v) {
//             if (v < 0) {
//                 console.log("年龄不允许小于0");
//             } else {
//                 _age = v
//             }
//         }
//     })
// }

// let o = new oConstructor(12);
// console.log(o.age);


// let o = {
//     get age() {
//         return this._age || 0 // this.age 会由于重复调用导致调用栈溢出
//     },
//     set age(v) {
//         if (v < 0) {
//             console.log("年龄不允许小于0");
//         } else {
//             this._age = v;
//         }
//     }
// }
// console.log(o.age); // 0
// o.age = 12;
// console.log(o.age); // 12
// console.log(o) // 会让对象多出一个 "_age" 属性很讨厌，有办法从代码角度优化吗？


// var o = (function () {
//     var age = 0;
//     return {
//         get age() {
//             return age;
//         },
//         set age(v) {
//             // 在设置里加一个判断
//             if (v < 0) {
//                 console.log("年龄不允许小于0");
//             } else {
//                 age = v;
//             }
//         }
//     }
// })();
// console.log(o.age);
// o.age = 12;
// console.log(o.age);



// var o = (function () {
//     var age = 0;
//     return {
//         get_age: function () {
//             return age;
//         },
//         set_age: function (v) {
//             // 在设置里加一个判断
//             if (v < 0) {
//                 console.log("年龄不允许小于0")
//             } else {
//                 age = v;
//             }
//         }
//     }
// })();
// console.log(o.get_age()); // 0
// o.set_age(12);
// console.log(o.get_age()); // 12



// let o = {
//     age: 0
// }
// console.log(o.age); // 0
// o.age = 12;
// console.log(o.age); // 12

// let assignAge = -123
// if (assignAge < 0) {
//     console.log("年龄不允许小于0");
// } else {
//     o.age = assignAge
// }
