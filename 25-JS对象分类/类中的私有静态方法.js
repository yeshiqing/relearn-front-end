class ClassWithPrivateStaticMethod {
    static #privateStaticMethod() { // 私有静态方法。static表明是静态方法，是类的方法；# 前缀表明是私有方法，类外部无法访问。
        return 42;
    }

    static publicStaticMethod() {
        return this.#privateStaticMethod(); // 等价于 return ClassWithPrivateStaticMethod.#privateStaticMethod();
    }
}
console.log(ClassWithPrivateStaticMethod['#privateStaticMethod']); // undefined
console.log(ClassWithPrivateStaticMethod.publicStaticMethod()); //42