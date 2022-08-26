let common = function () { }
common.alias = "我是个公用函数"
let obj = Object.create(common) // 以 common 为原型创建一个对象 obj

// 存在疑惑：为什么无法对 obj.name 赋值
// 应该是 name 属性是 writable：false，验证不对。
obj.name = 'jeffrey'
let discriptor = Object.getOwnPropertyDescriptor(obj, 'name')
console.log(discriptor);
console.dir(obj) // 能看到 obj 的原型上有 kind 属性

// console.dir(obj.__proto__) //{kind: 'human'}
for (const key in obj) {
    // for...in 无法输出原型链上的属性
    // 此句输出 name, kind 
    console.log(key)
}