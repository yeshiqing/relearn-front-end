function unique(arr, keyOrFn) {
    if (keyOrFn === undefined) return [...new Set(arr)]
    const MAP = {
        'string': e => e[keyOrFn],
        'function': e => keyOrFn(e),
    }
    let fn = MAP[typeof keyOrFn]
    let map = new Map();
    let target_primitive = [];
    let obj = arr.reduce((o, cur) => {
        if (cur instanceof Object === false) {
            // 基本数据类型单独处理
            if (!map.has(cur)) {
                target_primitive.push(cur);
                map.set(cur, true);
            }
        } else {
            o[fn(cur)] = cur
        }
        return o
    }, {})
    console.log(obj);
    return Object.values(obj).concat(target_primitive)
}

const list = [
    { id: 0, name: '小明', age: 13 },
    { id: 1, name: '小明', age: 99 },
    { id: 2, name: '小明', age: 23 },
    { id: 1, name: '小红', age: 42 },
    { id: 0, name: '小明', age: 13 },
    { id: 1, name: '小芳', age: 35 },
    { id: 0, name: '小明', age: 13 },
    { id: 1, name: '', age: 23 },
    { id: 1, name: 'lm', age: 22 },
    { id: 9, name: 'xh', age: 79 },
    1, 2, 4, 1, '1', '1', 1, 3, 1
]

// console.log(unique(list, 'id'));
console.log(unique(list, e => e.id + e.name + e.age));