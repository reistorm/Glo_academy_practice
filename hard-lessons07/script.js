// Создать массив week и записать в него дни недели в виде строк

// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)


const week = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
const date = new Date();
const today = (date.getDay() + 6) % 7;

const getDays = function () {
    for (let i = 0; i < week.length; i++) {
        if (i === today) {
            console.log('%c' + week[today], 'font-weight: bold;');
        } else if (i >= 0 && i < 5) {
            console.log(week[i]);
        } else if (i === 5 || i === 6) {
            console.log('%c' + week[i], 'font-style: italic;');
        }
    }
}

getDays();
