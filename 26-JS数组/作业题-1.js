// 请使用 arr.map 把 0 变成'周日'，把 1 变成'周一'，以此类推
let arr = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 6]
const weeks = ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四', '周六']
let arr2 = arr.map((item, i) => {
    return weeks[i]
})

console.log(arr2)