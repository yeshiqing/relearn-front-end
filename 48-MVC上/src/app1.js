import './app1.css';
import $ from 'jquery';
let $button1 = $("#add1");
let $button2 = $("#minus1");
let $button3 = $("#mul2");
let $button4 = $("#div2");
let $number = $("#number");
let n = localStorage.getItem("number") || 100;
$number.text(n);

$button1.on("click", () => {
    let n = parseInt($number.text());
    n += 1;
    $number.text(n);
    localStorage.setItem("number", n);
});
$button2.on("click", () => {
    let n = parseInt($number.text());
    n -= 1;
    $number.text(n);
    localStorage.setItem("number", n);
});
$button3.on("click", () => {
    let n = parseInt($number.text());
    n *= 2;
    $number.text(n);
    localStorage.setItem("number", n);
});
$button4.on("click", () => {
    let n = parseInt($number.text());
    n /= 2;
    $number.text(n);
    localStorage.setItem("number", n);
});