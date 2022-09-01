// 找出所有大于 60 分的成绩
let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91]
let scores2 = scores.filter((item, i) => {
    return item > 60
})
console.log(scores2) //  [95,91,82,72,85,67,66, 91]