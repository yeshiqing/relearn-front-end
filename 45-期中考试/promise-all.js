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

Promise.all([p1, p2]).then(function (result) {
    console.log(result); // 3秒后输出["第一个promise", "第二个promise"]
});
