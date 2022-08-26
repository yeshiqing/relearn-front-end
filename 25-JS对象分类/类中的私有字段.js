class Foo {
    nonPrivateField = "foo's father" // 类的实例可以访问到这个属性，Java 中叫「成员变量」，也叫「字段」
    #privateField = "A"
    getPrivateField() {
        console.log(this.#privateField);
    }
}

let foo = new Foo()

console.log(foo); // 虽然控制台可以看到 foo 有 #privateField 属性，但是 foo 根本无法访问这个属性。
console.log('#privateField' in foo); // false，说明 foo 根本无法访问这个属性。
console.log(foo.hasOwnProperty('#privateField')) // false，说明 #privateField 属性根本不在 foo 上。其实它也不在 foo 的原型链上，它相当于构造函数中的一个局部变量。
console.log(foo.nonPrivateField) // "foo's father"
console.log(foo["#privateField"]); // undefined

foo["#testProperty"] = 1
console.log(foo["#testProperty"]); // 1

foo["#privateField"] = 2
console.log(foo); // 从控制台可以看出：新增 #privateField 属性的值为 2。但原有的 #privateField 依然存在，值仍为 A
console.log(foo.hasOwnProperty('#privateField')) // true

foo.getPrivateField() // "A"