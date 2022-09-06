function f(n) {
    debugger
    return n !== 1 ? n * f(n - 1) : 1
}
f(4)
