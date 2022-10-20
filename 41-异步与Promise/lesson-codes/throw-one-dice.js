// 模拟一个异步任务/异步函数：摇骰子
function dice() {
    setTimeout(() => {
        return parseInt(Math.random() * 6) + 1
    }, 1000)
}
dice() // 值为 undefined

// 利用回调函数拿到异步任务的结果
function dice(cb) {
    setTimeout(() => {
        cb(parseInt(Math.random() * 6) + 1)
    }, 1000)
}
dice((value) => {
    console.log(value)
})