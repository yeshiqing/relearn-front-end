function makePromise() {
    return new Promise((resolve, reject) => {
        // 模拟异步操作
        setTimeout(() => {
            resolve('成功执行')
        }, 2000)
    })
}
makePromise().then((data) => {
    console.log(data);
})