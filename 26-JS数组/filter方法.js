let arr = [{ foo: "bar" }, 2, 3, 4, 5, 6]

// n 变 n
// 返回新数组，不影响原数组
let arr2 = arr.filter((item, i, array) => {
    item = 1
    // console.log(arr)
    return item
})
console.log(arr2)