let title = 'Project';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 0;
let rollbacke = 50;
let fullPrice = 500000;
let adaptive = true;


console.log(alert('Hello there'));
console.log('Hello world');

console.log(`Тип данных title - ${typeof title}, Тип данных fullPrice - ${typeof fullPrice}, Тип данных adaptive - ${typeof adaptive}`);

console.log(`Длина строки screens: ${screens.length}`)

console.log(`Стоимость верстки экранов screenPrice: ${screenPrice} рублей/ долларов/гривен/юани`);

console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);

let arrayWords = screens.toLowerCase().split(',').map(item => item.trim());
console.log(arrayWords);

console.log(`Процент отката посреднику за работу: ${fullPrice * (rollbacke / 100)}`);

