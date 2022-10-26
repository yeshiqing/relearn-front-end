let obj1 = { key: "key", value: "value" };
let obj2 = { key: "key", value: "value" };
let obj3 = { value: "value", key: "key" }
let array = [
    obj1,
    obj1,
    obj3,
    { name: "name" }]
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

console.log(unique(array)); // 