function add(num1, num2, num3) {
    if (arguments.length === 2) {
        console.log("Result is " + (num1 + num2));
    }
    else if (arguments.length === 3) {
        console.log("Result is " + (num1 + num2 + num3));
    }
}

add(1, 2); // Result is 3
add(1, 2, 3) // Result is 6

// 不使用 argumetns 对象函数无法重载
// function add(num1, num2) {
//     console.log("Method one");
//     return num1 + num2;
// }

// function add(num1, num2, num3) {
//     console.log("Method two");
//     return num1 + num2 + num3;
// }

// add(1, 2); // two
// add(1, 2, 3); // two

