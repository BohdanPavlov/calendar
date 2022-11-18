import '../../../scss/main.scss'
import renderCalendar from './render';

const date = new Date();
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const handlePrevButton = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar(date, months);
}

const handleNextButton = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar(date, months);
}

const prevBtn = document.querySelector('.arrow-prev')
prevBtn.addEventListener('click', handlePrevButton);

const nextBtn = document.querySelector('.arrow-next')
nextBtn.addEventListener('click', handleNextButton);

renderCalendar(date, months);
