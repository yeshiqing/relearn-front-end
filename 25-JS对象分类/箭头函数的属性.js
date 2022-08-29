let f1 = () => {
    let x = 1
    return x
}
console.dir(f1)
{
    // length: 0
    // name: "f1"
    // arguments: (…)
    // caller: (…)
    // [[FunctionLocation]]: VM1231:1
    // [[Prototype]]: ƒ ()
    // [[Scopes]]: Scopes[2]
}
// 没有 prototype 属性