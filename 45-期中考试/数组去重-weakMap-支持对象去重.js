let obj1 = { key: 'key', value: 'value' }
let obj2 = { key: 'key', value: 'value' }
let array = [obj1, obj1, obj2, obj1, obj1]
function unique(array) {
    let wm = new WeakMap()
    let target = []
    array.forEach((item, i) => {
        if (!wm.has(item)) {
            wm.set(item, i)
            target.push(item)
        }
    })

    return target
}

console.log(unique(array)); // [{ key: 'key', value: 'value' }, { key: 'key', value: 'value' }]