function unique(arr, keyOrFn) {
    if (keyOrFn === undefined) return [...new Set(arr)]
    const MAP = {
        'string': e => e[keyOrFn],
        'function': e => keyOrFn(e),
    }
    let fn = MAP[typeof keyOrFn]
    let obj = arr.reduce((o, cur) => {
        console.log(fn(cur));
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