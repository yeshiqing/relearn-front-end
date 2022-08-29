// 类的继承
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
function Parent() { /* ... */ }
Parent.prototype.parentMethod = function parentMethod() { }

function Child() {
    Parent.call(this) // Make sure everything is initialized properly
}
Child.prototype = Object.create(Parent.prototype) // re-define child prototype to Parent prototype

Child.prototype.constructor = Child // return original constructor to Child

let child1 = new Child()
console.dir(child1)