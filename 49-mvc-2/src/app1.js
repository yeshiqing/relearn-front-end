import './app1.css';
import $ from 'jquery';

let m = {
    data: {
        n: parseInt(localStorage.getItem('number') || 100)
    }
};

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
        v.render();
    },
    render() {
        if (v.el.children.length !== 0) {
            v.el.empty()
        }
        $(v.html.replace('{{n}}', m.data.n))
            .appendTo(v.el)
    }
};

let c = {
    init(el) {
        v.init(el)
        v.render(m.data.n)
        c.autoBindEvents()
    },
    events: {
        '#add1': 'add',
        '#minus1': 'minus',
        '#mul2': 'mul',
        '#div2': 'div'
    },
    add() { m.data.n += 1; },
    minus() { m.data.n -= 1; },
    mul() { m.data.n *= 2; },
    div() { m.data.n /= 2; },
    autoBindEvents() {
        for (let selector in c.events) {
            let fn = c[c.events[selector]]
            v.el.on('click', selector, () => {
                fn()
                v.render()
                localStorage.setItem("number", m.data.n);
            })
        }
    }
}


export default c