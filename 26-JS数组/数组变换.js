let arr = [1, 2, 3, 4, 5]
// 将原数组中的数字转变为字符串
arr.map(item => `${item}`) // 返回一个新数组，不改变原数组的值

// 过滤出原数组中的偶数
arr.filter(item => item % 2 === 0) // 返回一个新数组，不改变原数组的值

// 对数组元素求和（使元素合并为一个值）
arr.reduce((sum, item) => { return sum + item }, 0) // 返回单一的值，值的数据类型由函数中 return 语句后面的表达式决定。