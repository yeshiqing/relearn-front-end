/* 
如果是 let 声明，Chrome 在 global 里面有加一层作用域，叫 Script
如果是 var 声明，Chrome 把 things 变量加到 Global 里
 */
let things = {};

// Since when the let expression is used, 
// every iteration creates a new lexical scope，在 Chrome Scope 面板上叫 Block
for (let i = 0; i < 3; i++) {
    things["fun" + i] = function () {
        debugger // 作用域链：Local → Block → Script → Global
        console.log(i);
    };
}

things["fun0"](); // prints 0
things["fun1"](); // prints 1
things["fun2"](); // prints 2