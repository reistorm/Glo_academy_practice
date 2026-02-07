'use strict'

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,

    rollback: 50,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice()
        appData.getServicePercentPrices();
        appData.getTitle()

        appData.logger();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num))
    },
    isText: function (text) {
        const trimmed = text.trim();
        const hasNonDigits = /[^0-9]/.test(trimmed)
        const isValidChars = /^[a-za-яё0-9\s]+$/i.test(trimmed)
        return trimmed.length > 0 && hasNonDigits && isValidChars
    },
    asking: function () {
        do {
            appData.title = prompt('Как называется ваш проект?');
        }
        while (!this.isText(appData.title) || appData.title.trim() === "")
        console.log(appData.title);
        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt('Какие типы экранов нужно разработать?')

            }
            while (!this.isText(name) || name.trim() === "")

            let price = 0;

            do {
                price = prompt('Сколько будет стоить данная работа?')
            }
            while (!this.isNumber(price) || price.trim() === "");
            appData.screens.push({ id: i, name: name, price: price })

        }

        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt('Какой дополнительный тип услуги нужен?')

            }
            while (!this.isText(name) || name.trim() === "")
            let price;
            do {
                price = prompt("Сколько это будет стоить?");
                price = price.trim();
            }
            while (!this.isNumber(price) || price === "")
            appData.services[name] = +price;
        }

        appData.adaptive = confirm(`Нужен ли адаптив на сайте?`)

    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
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
    logger: function () {
        console.log(this.fullPrice);
        console.log(this.servicePercentPrice);
        console.log(appData.screens);
    }
}

appData.start();




