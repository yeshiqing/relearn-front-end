import './app4.css';
import $ from 'jquery';

let html = `
    <section id="app4">
        <div class="circle"></div>
    </section>
`;
$(html).appendTo($('body>.page'));

let $circle = $('#app4 .circle');
$circle.on('mouseenter', () => {
    $circle.addClass('active');
}).on('mouseleave', () => {
    $circle.removeClass('active');
});