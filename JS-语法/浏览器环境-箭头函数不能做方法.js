// Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
// A method is a function which is a property of an object. 

// 在全局作用域下，箭头函数作为对象方法时，this 会指向 window
// 箭头函数一般不作为方法使用。
// 全局作用域 Global Scope
// var fruits = ["watermelon", "mango"]
// var obj = {
//     likes: {
//         deepProperty: {
//             fruits: ["apple", "banana"],
//             getLikes: () => {
//                 // 次级作用域 Local Scope
//                 // console.log(this === window); // true
//                 debugger // 打断点后，在 Local Scope 面板发现 this 是 undefined，其实应该是 window
//                 console.log(this); // window
//                 console.log(this.fruits); // ["watermelon", "mango"]
//             }
//         }
//     }
// };
// obj.likes.deepProperty.getLikes();




// 1. 全局作用域 Global Scope
var fruits = ["watermelon", "mango"]
function fn() {
    // 2. 闭包作用域 Closure Scope
    debugger
    console.log(this); // window
    let foo = 123
    let obj = {
        likes: {
            deepProperty: {
                fruits: ["apple", "banana"],
                getLikes: () => {
                    // 3. 局部作用域 Local Scope
                    foo += 1
                    debugger // 在 Local Scope 面板发现 this 是 window
                    console.log(this.fruits);
                }
            }
        }
    };
    obj.likes.deepProperty.getLikes(); // ["watermelon", "mango"]
}
fn()



// // 1. 全局作用域 Global Scope
// var fruits = ["watermelon", "mango"]
// function fn() {
//     // 2. 闭包作用域 Closure Scope
//     let foo = 123
//     let obj = {
//         likes: {
//             deepProperty: {
//                 fruits: ["apple", "banana"],
//                 getLikes: function () {
//                     // 3. 局部作用域 Local Scope
//                     foo += 1
//                     debugger // 在 Local Scope 面板发现 this 是 deepProperty 对象
//                     console.log(this); // deepProperty 对象
//                     console.log(this.fruits); // ["apple", "banana"],
//                 }
//             }
//         }
//     };
//     obj.likes.deepProperty.getLikes();
// }
// fn()