import './app2.css';
import $ from "jquery";
import { Model } from './base/Model.js'
import { View } from './base/View.js'

const LS_KEY_TABINDEX = 'tabIndex'

let eventBus = $({})

let m = new Model({
    data: {
        n: parseInt(localStorage.getItem(LS_KEY_TABINDEX)) || 0
    },
    update(data) {
        Object.assign(m.data, data)
        localStorage.setItem(LS_KEY_TABINDEX, m.data.n);
        eventBus.trigger('m_updated')
    }
})

let view = {
    el: null,
    html(index) {
        return `<div>
            <ol class="tab-bar">
                <li class="${index === 0 ? 'selected' : ''}" 
                data-index="0"> 页签1</li>
                <li class="${index === 1 ? 'selected' : ''}" 
                data-index="1"> 页签2</li>
            </ol >
            <ol class="content">
                <li class="${index === 0 ? 'active' : ''}">内容1</li>
                <li class="${index === 1 ? 'active' : ''}">内容2</li>
            </ol>
        </div>
    `},
    init(el) {
        view.el = $(el)
        view.render(m.data.n)
        view.autoBindEvents()
        eventBus.on('m_updated', () => { // 监听 m_updated 事件，eventBus.trigger() 执行回调
            view.render(m.data.n)
        })
    },
    render(index) {
        if (view.el.children.length !== 0) {
            $(view.el).empty()
        }
        $(view.html(index)).appendTo($(view.el))
    },
    events: {
        'click .tab-bar li': 'selectTab',
    },
    selectTab(e) {
        let li = e.currentTarget
        let index = parseInt(li.dataset.index)
        m.update({ n: index })
    },
    autoBindEvents() {
        for (let key in view.events) {
            let spaceIndex = key.indexOf(' ')
            let eventName = key.slice(0, spaceIndex)
            let selector = key.slice(spaceIndex + 1)
            let fn = view[view.events[key]]
            view.el.on(eventName, selector, fn)
        }
    }
}

export { view as c }