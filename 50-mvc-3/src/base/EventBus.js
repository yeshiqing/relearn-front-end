import $ from 'jquery'

class EventBus {
    constructor(app) {
        app = app || "window"
        // 不要用`$({})`，否则 Model 和 View 中的 _eventBus 不是同一个，是浅复制的关系，无法触发事件
        // this._eventBus = $(window)
        // this._eventBus = $({})

        window.appHashMap = window.appHashMap || {}
        let appName = Object.keys(appHashMap).find((str) => {
            return str.indexOf(app) >= 0
        })
        if (appName) {
            this._eventBus = appHashMap[appName]
        } else {
            this._eventBus = appHashMap[app + new Date().getTime()] = $({})
        }
    }
    on(eventName, fn) {
        return this._eventBus.on(eventName, fn)
    }
    trigger(eventName, data) {
        return this._eventBus.trigger(eventName, data)
    }
    off(eventName, fn) {
        return this._eventBus.off(eventName, fn)
    }
}

export { EventBus }