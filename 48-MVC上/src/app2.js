import './app2.css';
import $ from "jquery";

let $tabBar = $('#app2 .tab-bar');
let $content = $('#app2 .content');

$tabBar.on('click', 'li', (e) => {
    let $li = $(e.currentTarget);
    $li.addClass('selected')
        .siblings()
        .removeClass('selected');
    let index = $li.index();
    $content.children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active');
});