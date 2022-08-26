function createPerson(sIdentity) {
    var oPerson = new Function("console.log(arguments.callee.identity);"); // 这样用匿名函数的时候，没有其他方式可以替代 arguemnts.callee
    oPerson.identity = sIdentity;
    return oPerson;
}

var john = createPerson("John Smith");

console.log(john); // [Function: anonymous] { identity: 'John Smith' }
john();