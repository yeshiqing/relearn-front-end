// example 1
let arr = new Array(1, 2, 3)
console.log(Object.getOwnPropertyDescriptor(arr, '0')) // { value: 1, writable: true, enumerable: true, configurable: true }
delete arr["0"]
console.log(arr)

// example 2
let arrLike = { "0": "a", "1": "b", "2": "c" }
arrLike.length = 3
arrLike.__proto__ = Array.prototype // 这两句效果在 Chrome 上相同，在 Node.js 中不同
delete arrLike[0]
console.log(arrLike)
// console.log(arrLike.__proto__ === arr.__proto__) // true

// example 3
let arrLike2 = { "0": "a", "1": "b", "2": "c" }
arrLike2.length = 3
arrLike2 = Array.from(arrLike2) // 这两句效果在 Chrome 上相同，在 Node.js 中不同
delete arrLike2[0]
console.log(arrLike2)