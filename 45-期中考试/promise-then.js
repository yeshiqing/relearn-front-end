function makePromise() {
    return new Promise(function (resolve, reject) {
        // 模拟异步操作
        setTimeout(function () {
            console.log('异步1');
            resolve('异步1参数');
        }, 2000);
    })
}

makePromise().then((data) => {
    console.log(data);
    return makePromise()
}, () => { }).then((data) => {
    console.log(data);
}, () => { })
