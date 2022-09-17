class Student {
    firstName
    lastName
    constructor(firstName, lastName) {
        this.firstName = firstName || ''
        this.lastName = lastName || ''
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ")
    }
}

let student = new Student('jeffrey', 'Ye')
// console.log(student);
// console.log(student.hasOwnProperty('firstName') === true);
// console.log(student.hasOwnProperty('fullName')); // false，通过 getter/setter 构建的属性 fullName 并不在实例自身上
// console.log(student.__proto__.hasOwnProperty('fullName') === true);

// typeof 的值取决于 getter 函数返回值
// console.log(typeof student.fullName === 'string');
// console.log(typeof student.__proto__.fullName === 'string');