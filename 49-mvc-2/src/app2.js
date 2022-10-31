import './app2.css';
import $ from "jquery";
let html = `
    <section id="app2">
        <ol class="tab-bar">
            <li>页签1</li>
            <li>页签2</li>
        </ol>
        <ol class="content">
            <li>内容1</li>
            <li>内容2</li>
        </ol>
    </section>
`;
$(html).appendTo($('body>.page'));

let $tabBar = $('#app2 .tab-bar');
let $content = $('#app2 .content');
const LS_KEY_TABINDEX = 'tabIndex';
let tabIndex = parseInt(localStorage.getItem(LS_KEY_TABINDEX)) || 0;

$tabBar.on('click', 'li', (e) => {
    let $li = $(e.currentTarget);
    $li.addClass('selected')
        .siblings()
        .removeClass('selected');
    let index = $li.index();
    localStorage.setItem(LS_KEY_TABINDEX, index);
    $content.children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active');
});

$tabBar.children().eq(tabIndex).trigger("click");