class Foo {
    #privateField = "A" // # 前缀表示属性是「私有」属性。Java 中称作「私有」字段，用 private 访问控制修饰符生命。
    #method() { }
    getMethodName() {
        console.log(this.#method.name);
    }
}

let foo = new Foo()

console.log(foo); // 虽然控制台可以看到 foo 有 #method 方法，但是 foo 根本无法访问这个属性。
console.log("#method" in foo); // false，证明 foo 无法访问这个属性。
console.log(foo["#method"]); // undefined
foo.getMethodName() // "#method"