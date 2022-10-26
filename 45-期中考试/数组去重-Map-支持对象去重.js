let obj1 = { key: 'key', value: 'value' }
let obj2 = { key: 'key', value: 'value' }
let array = [obj1, obj1, obj2, NaN, 1, 5, 2, 3, 4, 2, 3, 1, 3, 4, NaN]
let unique = function (arr) {
    let map = new Map();
    let target = [];
    arr.forEach((item, i) => {
        if (!map.has(item)) {
            target.push(item);
            map.set(item, true);
        }
    })
    return target;
}

console.log(unique(array)); // [obj1,obj2,NaN,1,5,2,3,4]