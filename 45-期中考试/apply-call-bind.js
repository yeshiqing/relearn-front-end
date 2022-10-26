let fn = function () {
    console.log(this);
    console.log(arguments);
};
// fn.call('0', 1, 2, 3)
// fn.apply('0', [1, 2, 3]);
(fn.bind('0'))(1, 2, 3);
// 等价于
(fn.bind('0', 1))(2, 3)