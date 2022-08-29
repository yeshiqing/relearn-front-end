// failed
// debugger // function 声明会使得一开始值就提前
const FUNCTION = Function
function Function() {
    return 1
}
console.dir(FUNCTION)

// success
// const FUNCTION = Function
// Function = function () {
//     return 1
// }
// console.dir(FUNCTION)