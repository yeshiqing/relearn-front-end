import './app3.css';
import $ from 'jquery';
let $square = $('#app3 .square');

$square.on('click', () => {
    $square.toggleClass('active');
});