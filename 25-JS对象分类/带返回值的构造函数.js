/**
 * If the constructor function returns a non-primitive, 
 * this return value becomes the result of the whole new expression. 
 * Otherwise, 
 * if the constructor function doesn't return anything or returns a primitive, 
 * newInstance is returned instead. 
 * (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)
 */
function Foo() {
    return "123"
}
let foo = new Foo()
console.dir(foo) // 返回空对象，而不是 "123"