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