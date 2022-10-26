let p1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("第一个promise");
    }, 3000);
});

let p2 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("第二个promise");
    }, 1000);
});

Promise.race([p1, p2]).then(function (result) {
    console.log(result); // 1秒后输出 "第二个promise"
});
