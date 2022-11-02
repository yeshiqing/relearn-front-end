import $ from 'jquery';
import './app1.css';
import { Model } from './base/Model.js'
import { View } from './base/View.js'


const LS_KEY_NUMBER = 'number'

let eventBus = $({}) // m、v、c 对象间通信

let m = new Model({
    data: {
        n: parseInt(localStorage.getItem(LS_KEY_NUMBER)) || 100
    },
    update(data) {
        Object.assign(m.data, data)
        localStorage.setItem(LS_KEY_NUMBER, m.data.n);
        eventBus.trigger('m_updated')
    }
})

let x = new View({
    el: null
})
console.log(x);
let v = {
    el: null,
    html: `
        <div>
            <div class="output">
                <span id="number">{{n}}</span>
            </div>
            <div class="actions">
                <button id="add1">+1</button>
                <button id="minus1">-1</button>
                <button id="mul2">*2</button>
                <button id="div2">÷2</button>
            </div>
        </div>
    `,
    init(el) {
        v.el = $(el);
        v.render(m.data.n)
    },
    render(n) {
        if (v.el.children.length !== 0) {
            v.el.empty()
        }
        $(v.html.replace('{{n}}', n))
            .appendTo(v.el)
    }
};

let c = {
    init(el) {
        v.init(el)
        c.autoBindEvents()
        eventBus.on('m_updated', () => { // 监听 m_updated 事件，trigger 时执行回调
            v.render(m.data.n)
        })
    },
    events: {
        'click #add1': 'add',
        'click #minus1': 'minus',
        'click #mul2': 'mul',
        'click #div2': 'div'
    },
    add() {
        m.update({ n: m.data.n + 1 })
    },
    minus() {
        m.update({ n: m.data.n - 1 })
    },
    mul() {
        m.update({ n: m.data.n * 2 })
    },
    div() {
        m.update({ n: m.data.n / 2 })
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

export { c };
