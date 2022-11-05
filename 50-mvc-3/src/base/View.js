import $ from 'jquery'
class View {
    constructor(options) {
        // const PROP = ['el', 'html', 'init', 'render', 'data', 'eventbus', 'events']
        // for (let key in options) {
        //     if (PROP.includes(key)) {
        //         this[key] = options[key]
        //     }
        // }

        Object.assign(this, options)
        this.el = $(this.el)
        this.render(this.data)
        this.autobindEvents()
        this.eventBus.on('m_updated', () => {
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