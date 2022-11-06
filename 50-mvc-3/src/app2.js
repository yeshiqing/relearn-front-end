import './app2.css';
import $ from "jquery";
import { Model } from './base/Model.js'
import { View } from './base/View.js'
import { EventBus } from './base/EventBus.js'

const LS_KEY_TABINDEX = 'tabIndex'

let eventBus = new EventBus()

let m = new Model({
    data: {
        index: parseInt(localStorage.getItem(LS_KEY_TABINDEX)) || 0
    },
    update(data) {
        Object.assign(m.data, data)
        localStorage.setItem(LS_KEY_TABINDEX, m.data.index);
        eventBus.trigger('m_updated')
    }
})

let init = (el) => {
    new View({
        el: el,
        eventBus: eventBus,
        data: m.data,
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
        render(data) {
            let index = data.index
            if (this.el.children.length !== 0) {
                $(this.el).empty()
            }
            $(this.html(index)).appendTo($(this.el))
        },
        events: {
            'click .tab-bar li': 'selectTab',
        },
        selectTab(e) {
            let li = e.currentTarget
            let index = parseInt(li.dataset.index)
            m.update({ index: index })
        }
    })
}


export { init }