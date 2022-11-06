import { EventBus } from "./EventBus"

class Model extends EventBus {
    constructor(options) {
        super()

        const PROPS = ['data', 'create', 'delete', 'update', 'get']
        for (let key in options) {
            if (PROPS.includes(key)) {
                this[key] = options[key]
            }
        }
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