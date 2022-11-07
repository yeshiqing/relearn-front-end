import './app1.css';
import Vue from 'vue'

let init = (el) => {
    const LS_KEY_NUMBER = 'number'

    new Vue({
        el: el,
        data: {
            n: parseFloat(localStorage.getItem(LS_KEY_NUMBER)) || 100
        },
        methods: {
            add() {
                this.n += 1
            },
            minus() {
                this.n -= 1
            },
            mul() {
                this.n *= 2
            },
            div() {
                this.n /= 2
            },
        },
        watch: {
            n() {
                localStorage.setItem('n', this.n)
            }
        },
        template: `
            <section id="app1">
                <div class="output">
                    <span id="number">{{n}}</span>
                </div>
                <div class="actions">
                    <button @click="add">+1</button>
                    <button @click="minus">-1</button>
                    <button @click="mul">*2</button>
                    <button @click="div">÷2</button>
                </div>
            </section>
        `
    })
}

export { init };
