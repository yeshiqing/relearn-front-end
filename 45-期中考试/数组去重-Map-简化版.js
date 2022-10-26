let obj1 = { key: 'key', value: 'value' }
let obj2 = { key: 'key', value: 'value' }
let array = [obj1, obj1, obj2, NaN, 'NaN', 1, 5, 2, 3, 4, 2, 3, 1, 3, 4, NaN]
let unique = function (arr) {
    let map = new Map();
    return arr.filter((item) => !map.has(item) && map.set(item, 1))
}

console.log(unique(array)); // [obj1,obj2,NaN,'NaN',1,5,2,3,4]