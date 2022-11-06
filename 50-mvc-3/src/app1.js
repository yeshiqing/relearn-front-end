import $ from 'jquery';
import './app1.css';
import { Model } from './base/Model.js'
import { View } from './base/View.js'

const LS_KEY_NUMBER = 'number'



let init = (el) => {
    let m = new Model({
        data: {
            n: parseFloat(localStorage.getItem(LS_KEY_NUMBER)) || 100
        },
        update(data) {
            Object.assign(m.data, data)
            localStorage.setItem(LS_KEY_NUMBER, m.data.n);
            m.trigger('m_updated')
        }
    })

    new View({
        el: el,
        data: m.data,
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
        render(data) {
            let n = data.n
            if (this.el.children.length !== 0) {
                this.el.empty()
            }
            $(this.html.replace('{{n}}', n))
                .appendTo(this.el)
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
        }
    })
}

export { init };
