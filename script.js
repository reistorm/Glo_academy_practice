let title = 'Project';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 0;
let rollbacke = 50;
let fullPrice = 500000;
let adaptive = true;

title = prompt('Как называется ваш проект?');

screens = prompt('Какие типы экранов нужно разработать?')

screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?'))

adaptive = confirm(`Нужен ли адаптив на сайте?`)

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = parseFloat(prompt("Сколько это будет стоить?"));

const service2 = prompt("Какой еще дополнительный тип услуги нужен?");
const servicePrice2 = parseFloat(prompt("Сколько это будет стоить?"));


fullPrice = screenPrice + servicePrice1 + servicePrice2;

const servicePercentPrice = Math.ceil(fullPrice - rollbacke);
console.log("Стоимость за вычетом отката:", servicePercentPrice);

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%"
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%"
    } else if (price < 15000 && price > 0) {
        return "Скидка не предусмотрена"
    } else if (price <= 0) {
        return "Что-то пошло не так"
    }
}

console.log(getRollbackMessage(fullPrice));



