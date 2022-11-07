import './app2.css';
import Vue from 'vue'

let init = (el) => {
    const LS_KEY_TABINDEX = 'tabIndex'

    new Vue({
        el: el,
        data: {
            index: parseInt(localStorage.getItem(LS_KEY_TABINDEX)) || 0
        },
        methods: {
            selectTab(e) {
                let li = e.currentTarget
                let index = parseInt(li.dataset.index)
                localStorage.setItem(LS_KEY_TABINDEX, index)
                this.index = index
            }
        },
        template: `
            <section id="app2">
                <ol class="tab-bar">
                    <li :class="index === 0 ? 'selected' : ''" 
                    data-index="0" @click='selectTab'> 页签1</li>
                    <li :class="index === 1 ? 'selected' : ''" 
                    data-index="1" @click='selectTab'> 页签2</li>
                </ol >
                <ol class="content">
                    <li :class="index === 0 ? 'active' : ''">内容1</li>
                    <li :class="index === 1 ? 'active' : ''">内容2</li>
                </ol>
            </section>
        `
    })
}


export { init }