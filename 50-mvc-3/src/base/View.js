import $ from 'jquery'
import { EventBus } from './EventBus'

class View extends EventBus {
    constructor(options) {
        // 'el', 'html', 'init', 'render', 'data', 'eventbus', 'events'
        super()

        Object.assign(this, options)
        this.el = $(this.el)
        this.render(this.data)
        this.autobindEvents()
        this.on('m_updated', () => {
            this.render(this.data)
        })
    }
    autobindEvents() {
        for (let key in this.events) {
            let spaceIndex = key.indexOf(' ')
            let eventName = key.slice(0, spaceIndex)
            let selector = key.slice(spaceIndex + 1)
            let fn = this[this.events[key]]
            this.el.on(eventName, selector, fn)
        }
    }
    render() { }
}

export { View }