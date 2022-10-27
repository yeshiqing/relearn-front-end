// 代码很精简但是很难读不易维护，只有易读的代码才容易维护。

// 数组去重

// 难读原因
// 1. ES6 新语法 arr.reduce
// 2. key 有可能是函数
// cur 其实就是 e
function unique(arr, key) {
    if (key === undefined) return [...new Set(arr)]
    const MAP = {
        'string': e => e[key],
        'function': e => key(e),
    }
    let fn = MAP[typeof key]
    let obj = arr.reduce((o, cur) => {
        o[fn(cur)] = cur
        return o
    }, {})
    return Object.values(obj)
}

const list = [
    { id: 0, name: '小明', age: 13 },
    { id: 1, name: '小明', age: 99 },
    { id: 2, name: '小明', age: 23 },
    { id: 1, name: '小红', age: 42 },
    { id: 4, name: '小明', age: 13 },
    { id: 1, name: '小芳', age: 35 },
    { id: 0, name: '小明', age: 13 },
    { id: 1, name: '', age: 23 },
    { id: 1, name: 'lm', age: 22 },
    { id: 9, name: 'xh', age: 79 }
]

// console.log(unique(list, 'id'));
console.log(unique(list, e => e.name + e.age));