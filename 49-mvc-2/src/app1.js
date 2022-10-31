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
    init(container) {
        v.container = $(container);
        v.render();
    },
    render() {
        if (v.el === null) {
            v.el = $(v.html.replace('{{n}}', m.data.n))
                .appendTo($(v.container));
        } else {
            let newEle = $(v.html.replace('{{n}}', m.data.n)) // 新创建的jQuery元素
            v.el.replaceWith(newEle) // 用新创建的元素代替旧元素
            v.el = newEle // 属性赋新值
        }
    }
};

let c = {
    init(container) {
        v.init(container)
        c.ui = {
            button1: $("#add1"),
            button2: $("#minus1"),
            button3: $("#mul2"),
            button4: $("#div2"),
            $number: $("#number")
        }
        c.bindEvents()
    },
    bindEvents() {
        v.container.on("click", '#add1', () => {
            m.data.n += 1;
            v.render()
            localStorage.setItem("number", m.data.n);
        });
        v.container.on("click", '#minus1', () => {
            m.data.n -= 1;
            v.render()
            localStorage.setItem("number", m.data.n);
        });
        v.container.on("click", '#mul2', () => {
            m.data.n *= 2;
            v.render()
            localStorage.setItem("number", m.data.n);
        });
        v.container.on("click", '#div2', () => {
            m.data.n /= 2;
            v.render()
            localStorage.setItem("number", m.data.n);
        });
    }
}


export default c