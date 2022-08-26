let common = { kind: 'human', hasOwnproperty: 1 }
let obj = Object.create(common) // 以 common 为原型创建一个对象 obj
obj.name = 'jeffrey'
console.dir(obj) // 能看到 obj 的原型上有 kind 属性
// console.dir(obj.__proto__) //{kind: 'human'}
for (const key in obj) {
    // for...in 无法输出原型链上的属性
    // 此句输出 name, kind 
    console.log(key)
}