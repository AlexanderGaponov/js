(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function ajax() {
    
    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);


        //AJAX

        let request = new XMLHttpRequest();
        request.open("POST", "server.php")
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);

        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;
                    //Добавляем контент на страницу
                }
            } else {
                statusMessage.innerHTML = message.failure;
            }
        }
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
            //Очищаем поля ввода
        }
    });

    let contact = document.getElementById('form'),
        email = contact.getElementsByTagName('input')[0],
        tel = contact.getElementsByTagName('input')[1],
        statusContact = document.createElement('div');
    statusContact.classList.add('status');

    contact.addEventListener('submit', function(event) {
        event.preventDefault();
        contact.appendChild(statusContact);

        let request = new XMLHttpRequest();
        request.open("POST", "server.php")
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(contact);

        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statusContact.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusContact.innerHTML = message.success;
                    //Добавляем контент на страницу
                }
            } else {
                statusContact.innerHTML = message.failure;
            }
        }
        email.value = '';
        tel.value = '';
        //Очищаем поля ввода
    });
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc () {
let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0;

         totalValue.innerHTML = 0;

         persons.addEventListener('change', function(){
            personSum = +this.value;
            total = (daysSum + personSum) * 4000;
            if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0 ){
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
         })

         restDays.addEventListener('change', function(){
            daysSum = +this.value;
            total = (daysSum + personSum) * 4000;
            if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0 ){
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
         });

         place.addEventListener('change', function(){
            if(persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0 ){
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value; 
            }
         });
}
        
         module.exports = calc;
},{}],4:[function(require,module,exports){
function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        descriptionBtn = document.querySelectorAll('.description-btn'),
        close = document.querySelector('.popup-close');


    for (i = 0; i < descriptionBtn.length; i++) {
        descriptionBtn[i].addEventListener('click', function() {
            this.classList.add('more-splash');
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    more.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

    });
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function slider() {
    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');

    ShowSlides(slideIndex);

    function ShowSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        };
        if (n < 1) {
            slideIndex = slides.length;
        };

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSliders(n) {
        ShowSlides(slideIndex += n)
    }

    function currentSlide(n) {
        ShowSlides(slideIndex = n)
    }

    prev.addEventListener('click', function() {
        plusSliders(-1)
    });
    next.addEventListener('click', function() {
        plusSliders(1)
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i)
            }
        }
    });
}

module.exports = slider;
},{}],6:[function(require,module,exports){
function tab() {
    let tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.getElementsByClassName('info-header')[0];

    let hideTabContent = a => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);


    let showTabContent = b => {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target.className == 'info-header-tab') {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    })
}

module.exports = tab;
},{}],7:[function(require,module,exports){
function timer() {
    let deadline = '2018-09-24';

    let getTimeRemaining = endtime => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        let updateClock = () => {
            let t = getTimeRemaining(endtime);
            if (0 <= t.hours && t.hours < 10) {
                hours.innerHTML = `0 ${t.hours}`;
            } else {
                hours.innerHTML = t.hours;
            };
            if (0 <= t.minutes && t.minutes < 10) {
                minutes.innerHTML = `0${t.minutes}`;
            } else {
                minutes.innerHTML = t.minutes;
            };
            if (0 <= t.seconds && t.seconds < 10) {
                seconds.innerHTML = `0 ${t.seconds}`;
            } else {
                seconds.innerHTML = t.seconds;
            };

            if (t.total <= 0) {

                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
                clearInterval(timeInterval);
            }
        };
        updateClock();
        let timeInterval = setInterval(updateClock, 1000);
    };

    setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
