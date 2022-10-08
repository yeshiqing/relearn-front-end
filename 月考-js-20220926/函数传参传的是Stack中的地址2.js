function hello(obj) {
    obj.name = 'lucy';
    obj = new Object(); // 新赋值了一个地址
    obj.name = 'lili';
    return obj;
}

var person = new Object();
person.name = 'jon';
var newPerson = hello(person);
console.log(person.name); // lucy 
console.log(newPerson.name); // lili 

// 作者：至秦臻
// 链接：https://juejin.cn/post/6844903929470271501
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。