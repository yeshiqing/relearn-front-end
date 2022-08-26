let obj = {}
let common = function () { }
// common 中含有的属性：arguments、caller、length、name
// 前两个属性不可 configurable，后两个可以 configurable

// 发现问题：当把一个对象的原型指向一个函数时，obj 的 name 属性无法修改
obj.__proto__ = common
obj.name = 123
console.log(obj.name) // common，修改 name 属性怎么会不生效呢？
Object.getOwnPropertyDescriptor(obj.__proto__, 'name')
Object.defineProperty(obj.__proto__, 'name', {
    writable: true
})
obj.name = 124
console.log(obj.name) // 124，终于可以修改了

// let common = function () { }
// common.alias = "我是个公用函数"
// let obj = Object.create(common)
// obj.name = "123" // 不成功
// console.log(obj)