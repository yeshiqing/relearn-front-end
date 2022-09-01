// 算出所有奇数之和
let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91]
let sum = scores.reduce((sum, num) => {
    return num % 2 === 1 ? sum + num : sum
}, 0)
// let sum = scores.reduce((sum, num) =>
//     (num % 2 === 1 ? sum + num : sum)
//     , 0)
console.log(sum) // 奇数之和：598 