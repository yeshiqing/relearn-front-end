const self_instanceof = function (instance, constructor) {
    let instance_proto = instance.__proto__;
    let constructor_proto = constructor.prototype;

    while (true) {
        // 找到终点返回false
        if (instance_proto === null) { return false };
        // 找到返回true
        if (instance_proto === constructor_proto) { return true };
        // 当实例与构造函数原型不相同, 沿着原型链继续向上查找
        instance_proto = instance_proto.__proto__;
    }
}
console.log([] instanceof Array)   // true
console.log(self_instanceof([], Array))  // true

// 作者：日月有土
// 链接：https://juejin.cn/post/6844903957903441927
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。