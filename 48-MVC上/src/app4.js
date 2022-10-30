import './app4.css';
import $ from 'jquery';

let $circle = $('#app4 .circle');
$circle.on('mouseenter', () => {
    $circle.addClass('active');
}).on('mouseleave', () => {
    $circle.removeClass('active');
});