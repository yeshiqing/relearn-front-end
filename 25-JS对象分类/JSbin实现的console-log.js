// 自己在原生 console 对象上又封装了一层。
// a 就是封装的 console.log，即 console.log = a
let a = function () {
    var b = [].slice.call(arguments), e = c(b);
    l.postMessage("console", { method: "_raw" === d ? b.shift() : d, args: "_raw" === d ? e.slice(1) : e }),
        a.console && (console[d] || (d = "log"),
            a.console && "_raw" !== d && ("clear" !== d || "clear" === d && console.clear) && console[d].apply(console, b))
}