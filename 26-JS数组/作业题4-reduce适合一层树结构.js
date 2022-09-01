// 测试用例1
let arr = [
    { 名称: '狗', id: 2, parent: 1 },
    { 名称: '猫', id: 3, parent: 1 },
    { 名称: '动物', id: 1, parent: null },
    { 名称: '猪', id: 4, parent: 1 },
    { 名称: '老鼠', id: 5, parent: 1 },
    { 名称: '牛', id: 6, parent: 1 },
    { 名称: '老虎', id: 7, parent: 1 }
];
// 测试用例2
// arr = [
//     { 名称: '动物', id: 1, parent: null },
// ];

// 要求：数组变成对象
// let targetData = {
//     id: 1, 名称: '动物', children: [
//         { id: 2, 名称: '狗', children: null },
//         { id: 3, 名称: '猫', children: null },
//     ]
// }

// 数组的 reduce 方法仅适合 children 有一层的情况。
let arr2 = arr.reduce((preValue, curValue) => {
    // 这里面实际上 parent 相当于一个标志位。null 是顶级，1 是非顶级，直接塞进 children
    if (curValue.parent === null) {
        preValue.id = curValue.id
        preValue['名称'] = curValue['名称']
    } else {
        preValue.children = preValue.children || []
        preValue.children.push(curValue)
        curValue.children = null
        delete curValue.parent // 改变了原始数据的值
    }
    return preValue
}, { id: null, 名称: null, children: null })

// console.log(arr2)