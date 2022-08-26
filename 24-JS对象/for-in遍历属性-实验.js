let o;
o = Object.create(Object.prototype, {
    // foo is a regular 'value property'
    foo: {
        writable: true,
        configurable: true,
        value: 'hello'
    },
    // bar is a getter-and-setter (accessor) property
    bar: {
        configurable: false,
        get() { return 10; },
        set(value) {
            console.log('什么都不做');
        }
    }
});
let obj = Object.create(o)

// 存在疑惑：为什么无法对 obj.bar 赋值
obj.bar = 'jeffrey'

console.dir(obj) // 能看到 obj 的原型上有 kind 属性
for (const key in obj) {
    console.log(key)
}