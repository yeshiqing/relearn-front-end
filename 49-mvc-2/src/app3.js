import './app3.css';
import $ from 'jquery';
let html = `
    <section id="app3">
        <div class="square"></div>
    </section>
`;
$(html).appendTo($('body>.page'));

let $square = $('#app3 .square');
let isActive = localStorage.getItem('isActive') === 'yes';

$square.on('click', () => {
    if ($square.hasClass('active')) {
        isActive = false;
        localStorage.setItem('isActive', 'no');
    } else {
        isActive = true;
        localStorage.setItem('isActive', 'yes');
    }

    $square.toggleClass('active');
});

$square.toggleClass('active', isActive);
setTimeout(() => {
    $square.addClass('animation');
}, 0);