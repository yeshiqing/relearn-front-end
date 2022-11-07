import $ from 'jquery'

class EventBus {
    #createApp(appName) {
        return window.appHashMap[appName + '_' + new Date().getTime()] =
            (appName === 'window' ? $(window) : $({}))
    }
    constructor({ appName }) {
        appName = appName || "window"
        // 不要用`$({})`，否则 Model 和 View 中的 _eventBus 不是同一个，是浅复制的关系，无法触发事件
        // this._eventBus = $(window)
        // this._eventBus = $({})

        window.appHashMap = window.appHashMap || {}

        let appKey = Object.keys(appHashMap).find((str) => {
            return str.indexOf(appName) >= 0
        })
        this._eventBus = appKey ? appHashMap[appKey] : this.#createApp(appName)
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