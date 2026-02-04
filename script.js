let title = 'Project GLO aCaDemy';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 0;
let rollbacke = 50;
let fullPrice = 500000;
let adaptive = true;

//title = prompt('Как называется ваш проект?');

screens = prompt('Какие типы экранов нужно разработать?')

screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?'))

//adaptive = confirm(`Нужен ли адаптив на сайте?`)

//const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = parseFloat(prompt("Сколько это будет стоить?"));

//const service2 = prompt("Какой еще дополнительный тип услуги нужен?");
const servicePrice2 = parseFloat(prompt("Сколько это будет стоить?"));


fullPrice = screenPrice + servicePrice1 + servicePrice2;

// let servicePercentPrice = Math.ceil(fullPrice - rollbacke);
// console.log("Стоимость за вычетом отката:", servicePercentPrice);

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

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}


// 1) Объявить функцию getAllServicePrices. Функция возвращает сумму всех дополнительных услуг. Результат сохраняем в переменную allServicePrices. Тип - function expression

const getAllServicePrices = function (price1, price2) {
    return price1 + price2
}
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

//console.log(allServicePrices);

// 2) Объявить функцию getFullPrice. Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг (screenPrice + allServicePrices). Результат сохраняем в переменную fullPrice. Тип - function declaration

function getFullPrice(price1, price2) {
    fullPrice = price1 + price2
    return fullPrice
}

getFullPrice(screenPrice, allServicePrices)

// 3) Объявить функцию getTitle. Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой". Учесть вариант что строка может начинаться с пустых символов. " КаЛьКулятор Верстки"

const getTitle = function (title) {
    if (title.length === 0) {
        return ''
    }
    const firstChar = title[0].toUpperCase();
    const restChar = title.slice(1).toLowerCase();
    return firstChar + restChar
}

getTitle(title)

// 4) Объявить функцию getServicePercentPrices. Функция возвращает итоговую стоимость за вычетом процента отката. Результат сохраняем в переменную servicePercentPrice (итоговая стоимость минус сумма отката)
const getServicePercentPrices = function(price, rollbacke) {
    const finalPrice = Math.ceil(price - rollbacke);
    return finalPrice
}

let servicePercentPrice = getServicePercentPrices(fullPrice, rollbacke);

// 5) Почистить консоль логи и добавить недостающие, должны остаться:
// - вызовы функции showTypeOf
// - вывод строки с типами экранов для разработки screens
// - сообщение о скидке пользователю (вызовы функции getRollbackMessage)
// - стоимость за вычетом процента отката посреднику (вызовы функции getServicePercentPrices)

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)


console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);


