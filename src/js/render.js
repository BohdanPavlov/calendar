const renderCalendar = (date, months) => {
    const DAYS_IN_WEEK = 7

    date.setDate(1);

    const daysBlock = document.querySelector('.days');

    const currentMonth = document.querySelector('.date__title')
    currentMonth.innerHTML = months[date.getMonth()];

    const currentDay = document.querySelector('.date__text')
    currentDay.innerHTML = new Date().toDateString();

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = DAYS_IN_WEEK - lastDayIndex - 1;

    let allDays = '';

    for (let x = firstDayIndex; x > 0; x--) {
        allDays += `<div class="prev-month-day">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            allDays += `<div class="today">${i}</div>`;
        } else {
            allDays += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        allDays += `<div class="next-month-day">${j}</div>`;
        daysBlock.innerHTML = allDays;
    }
};

export default renderCalendar