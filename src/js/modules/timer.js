function timer(){
    setClock('.timer')
    function getTimeRemaining(deadline, now) {
        const total = deadline - now,
              days = Math.floor(total / (1000 * 60 * 60 * 24)),
              hours = Math.floor(total / (1000 * 60 * 60) % 24),
              minutes = Math.floor(total / (1000 * 60) % 60),
              seconds = Math.floor(total / 1000 % 60);
        return {
            total,
            days,
            hours,
            minutes,
            seconds
        }
    }
    function setClock(selector) {
        const timer = document.querySelector(selector),
            timeInterval = setInterval(() => updateClock('.timer'), 1000)
        updateClock()
    
        function updateClock() {
            const deadline = new Date(2023, 2, 20), //'20.03.2023'
                  now = new Date(),
                  t = getTimeRemaining(deadline, now);
            if (t.total <= 500) {
                clearInterval(timeInterval)
            } else {
                timer.querySelector('#days').innerText = t.days > 9 ? t.days : '0' + t.days;
                timer.querySelector('#hours').innerText = t.hours > 9 ? t.hours : '0' + t.hours;
                timer.querySelector('#minutes').innerText = t.minutes > 9 ? t.minutes : '0' + t.minutes;
                timer.querySelector('#seconds').innerText = t.seconds > 9 ? t.seconds : '0' + t.seconds;
            }
        }
    }
}
export default timer;