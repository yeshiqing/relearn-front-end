let obj1 = { key: "key", value: "value" };
let obj2 = { key: "key", value: "value" };

let array = [
    { key: "key", value: "value" },
    { key: "key", value: "value" },
    { key: "key", value: "value" },
    1, 5, 2, 3, 4, 2, 3, 1, 3, 4]

let unique = function (arr) {
    return Array.from(new Set(arr))
}

console.log(unique(array)); // [1,5,2,3,4]