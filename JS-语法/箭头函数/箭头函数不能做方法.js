// Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
// A method is a function which is a property of an object. 

// function f1() {
//     // In Node, `this` is `globalThis`
//     return this
// }
// console.log(f1() === globalThis); // true



// 函数作用域链在声明函数时就已经确定了，箭头函数的 this 指向箭头函数本身所在的作用域的 this
let fruits = ["watermelon", "mango"];
let obj = {
    likes: {
        fruits: ["apple", "banana"],
        getLikes() {
            console.log(this); // this 在这里指 likes
            let getFruits = () => {
                // 箭头函数在 getLikes 函数体内，
                // 因此 this 在这里也是 likes
                console.log(this.fruits);
            };
            getFruits();
        },
    },
};
obj.likes.getLikes(); // ["apple", "banana"]
