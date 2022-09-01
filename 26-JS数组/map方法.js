let arr = [{ foo: "bar" }, 2, 3, 4, 5, 6]

// n 变 n
arr.map((item, i, array) => {
    item = 0 // 由于是传值，所以并不影响原数组中的元素
    return item
})

arr.map((item, i, array) => {
    item.foo && (item.foo = 0) // 由于是传址，所以影响原数组中的元素
    return item
})