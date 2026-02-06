'use strict'

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,

    rollback: 50,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', "Калькулятор верстки");
        appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, сложные")
        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?')
        }
        while (!this.isNumber(appData.screenPrice) || appData.screenPrice.trim() === "");
        appData.screenPrice = parseFloat(appData.screenPrice);

        appData.adaptive = confirm(`Нужен ли адаптив на сайте?`)
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num))
    },
    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?')
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?')
            }
            let input;
            do {
                input = prompt("Сколько это будет стоить?");
                input = input.trim();
            }
            while (!this.isNumber(input) || input === "") {
                sum += parseFloat(input);
            }
        }
        return sum;
    },
    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%"
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%"
        } else if (price < 15000 && price > 0) {
            return "Скидка не предусмотрена"
        } else if (price <= 0) {
            return "Что-то пошло не так"
        }
    },
    start: function () {
        appData.asking();
        return appData.logger();
    },
    logger: function () {
        this.allServicePrices = this.getAllServicePrices();
        this.fullPrice = this.getFullPrice()
        this.servicePercentPrice = this.getServicePercentPrices();
        this.title = this.getTitle()
        console.log(this.fullPrice);
        console.log(this.servicePercentPrice);
        for (let key in appData) {
            console.log(key);
            // console.log(`${key}: ${appData[key]}`);
        }
    }
}

appData.start();




