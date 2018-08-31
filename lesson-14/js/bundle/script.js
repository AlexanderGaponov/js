window.addEventListener('DOMContentLoaded', () => {


let ajax = require('../parts/ajax.js')
let calc = require('../parts/calc.js')
let modal = require('../parts/modal.js')
let slider = require('../parts/slider.js')
let tab = require('../parts/tab.js')
let timer = require('../parts/timer.js')

ajax();
calc();
modal();
slider();
tab();
timer();


});