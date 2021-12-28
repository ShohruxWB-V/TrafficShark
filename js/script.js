const counters = document.querySelectorAll('.header-statistic__box h1');
counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const target_time = +counter.getAttribute('value');
        const c = +counter.innerText;

        const increment = Math.floor(Math.random() * target_time);

        if (c < target) {
            counter.innerText = Math.ceil(c + increment);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target + '+';
        }
    };

    updateCounter();
});
const counters2 = document.querySelectorAll('.header-statistic__box h2');

counters2.forEach(counter2 => {
    counter2.innerText = '0';

    const updateCounter2 = () => {
        const target2 = +counter2.getAttribute('data-target');
        const target_time2 = +counter2.getAttribute('value');
        const c = +counter2.innerText;

        const increment2 = Math.floor(Math.random() * target_time2);

        if (c < target2) {
            counter2.innerText = Math.ceil(c + increment2);
            setTimeout(updateCounter2, 1);
        } else {
            counter2.innerText = target2 + ' лет';
        }
    };

    updateCounter2();
});