class Model {
    constructor(options) {
        // Object.assign(this, options) // 可以用，但是将所有可枚举属性都复制，不能限定属性名

        const PROP = ['data', 'create', 'delete', 'update', 'get']
        // 方法一：遍历 options
        for (let key in options) {
            if (PROP.includes(key)) {
                this[key] = options[key]
            }
        }
        // 方法二：遍历PROP
        // PROP.forEach((key) => {
        //     if (key in options) {
        //         this[key] = options[key]
        //     }
        // })
    }
    create() {
        console && console.error && console.error('没有实现 create 方法')
    }
    delete() {
        console && console.error && console.error('没有实现 delete 方法')
    }
    update() {
        console && console.error && console.error('没有实现 update 方法')
    }
    get() {
        console && console.error && console.error('没有实现 get 方法')
    }
}

export { Model }