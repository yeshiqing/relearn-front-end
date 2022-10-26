let obj1 = { key: "key", value: "value" };
let obj2 = { key: "key", value: "value" };

let array = [
    obj1, obj1, obj1,
    1, 5, 2, 3, 4, 2, 3, 1, 3, 4]
let unique = function (arr) {
    let target = []
    arr.forEach((item, i) => {
        if (target.includes(item) === false) {
            target.push(item)
        }
    })
    return target
}

console.log(unique(array)); // [1,5,2,3,4]