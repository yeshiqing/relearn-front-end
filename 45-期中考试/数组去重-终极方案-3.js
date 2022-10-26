let array = [{}, {}, { value: 'value', key: 'key' }, { key: 'key', value: 'value' }, { key: 'key', value: 'value' }, 1, 1, '1', '1', 'true', 'true', true, true, 16, 16, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', 0, 69.3];
function unique(arr) {
    let target = [];
    let obj = {};
    arr.forEach((item, i) => {
        let key = typeof item + JSON.stringify(item)
        if (!obj[key]) {
            target.push(item)
            obj[key] = 1
        } else {
            obj[key]++
        }
    })
    return target;
}
console.log(unique(array));