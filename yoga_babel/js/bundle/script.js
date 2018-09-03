window.addEventListener('DOMContentLoaded', function () {


let ajax = require('../dist/ajax.js');
let calc = require('../dist/calc.js');
let modal = require('../dist/modal.js');
let slider = require('../dist/slider.js');
let tab = require('../dist/tab.js');
let timer = require('../dist/timer.js');

ajax();
calc();
modal();
slider();
tab();
timer();

});