var wave1 = document.querySelector('#wave1');
var wave2 = document.querySelector('#wave2');
var wave3 = document.querySelector('#wave3');
var wave4 = document.querySelector('#wave4');
var header = document.querySelector('#header');

window.addEventListener('scroll' , function () {
    let value = window.scrollY;

    wave1.style.backgroundPositionX = 400 + value *4 + 'px'
    wave2.style.backgroundPositionX = 300 + value *4 + 'px'
    wave3.style.backgroundPositionX = 200 + value *2 + 'px'
    wave4.style.backgroundPositionX = 100 + value *2 + 'px'
})