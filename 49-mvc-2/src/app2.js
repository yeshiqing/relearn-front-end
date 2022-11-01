import './app2.css';
import $ from "jquery";

const LS_KEY_TABINDEX = 'tabIndex'

let eventBus = $(window)

let m = {
    data: {
        n: parseInt(localStorage.getItem(LS_KEY_TABINDEX)) || 0
    },
    create() { },
    delete() { },
    update(data) {
        Object.assign(m.data, data)
        localStorage.setItem(LS_KEY_TABINDEX, m.data.n);
        eventBus.trigger('m_updated')
    },
};

let v = {
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
        v.el = $(el)
        v.render(m.data.n)
    },
    render(index) {
        if (v.el.children.length !== 0) {
            $(v.el).empty()
        }
        $(v.html(index)).appendTo($(v.el))
    }
}
let c = {
    init(el) {
        v.init(el)
        c.autoBindEvents()
        eventBus.on('m_updated', () => { // 监听 m_updated 事件，eventBus.trigger() 执行回调
            v.render(m.data.n)
        })
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
        for (let key in c.events) {
            let spaceIndex = key.indexOf(' ')
            let eventName = key.slice(0, spaceIndex)
            let selector = key.slice(spaceIndex + 1)
            let fn = c[c.events[key]]
            v.el.on(eventName, selector, fn)
        }
    }
}

export default c