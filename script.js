let title = 'Project';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 0;
let rollbacke = 50;
let fullPrice = 500000;
let adaptive = true;



title = prompt('Как называется ваш проект?');
//console.log(`Проект - ${title}`);

screens = prompt('Какие типы экранов нужно разработать?')
//console.log(`Типы экранов: ${screens}`);

screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?'))
//console.log(`Стоимость работы: ${screenPrice}`);

adaptive = confirm(`Нужен ли адаптив на сайте?`)

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = parseFloat(prompt("Сколько это будет стоить?")); 

const service2 = prompt("Какой еще дополнительный тип услуги нужен?"); 
const servicePrice2 = parseFloat(prompt("Сколько это будет стоить?")); 


fullPrice = screenPrice + servicePrice1 + servicePrice2;


const servicePercentPrice = Math.ceil(fullPrice - rollbacke);
console.log("Стоимость за вычетом отката:", servicePercentPrice);

if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice <= 0) {
    console.log('Что-то пошло не так');
}





