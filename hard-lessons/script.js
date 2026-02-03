let lang1 = prompt('ru/en?')
const dayNumber1 = parseInt(prompt('Введите номер дня (1-7):'));

if (lang1 === 'ru' || lang1 === 'Ru') {
    if (dayNumber1 === 1) {
        console.log('Пн');
    } else if (dayNumber1 === 2) {
        console.log('Вт');
    } else if (dayNumber1 === 3) {
        console.log('Ср');
    } else if (dayNumber1 === 4) {
        console.log('Чт');
    } else if (dayNumber1 === 5) {
        console.log('Пт');
    } else if (dayNumber1 === 6) {
        console.log('Сб');
    } else if (dayNumber1 === 7) {
        console.log('Вс');
    } else {
        console.log('Некорректный номер дня');
    }
} else if (lang1 === 'en' || lang1 === 'En') {
    if (dayNumber1 === 1) {
        console.log('Mon');
    } else if (dayNumber1 === 2) {
        console.log('Tue');
    } else if (dayNumber1 === 3) {
        console.log('Wed');
    } else if (dayNumber1 === 4) {
        console.log('Thu');
    } else if (dayNumber1 === 5) {
        console.log('Fri');
    } else if (dayNumber1 === 6) {
        console.log('Sat');
    } else if (dayNumber1 === 7) {
        console.log('Sun');
    } else {
        console.log('Некорректный номер дня');
    }
} else {
    console.log('Язык не поддерживается');
}

// --------------------------------------------

let lang2 = prompt('ru/en?')
let dayNumber2 = parseInt(prompt('Введите номер дня (1-7):'));
switch (lang2) {
    case 'ru':
        switch (dayNumber2) {
            case 1:
                console.log('Пн');
                break;
            case 2:
                console.log('Вт');
                break;
            case 3:
                console.log('Ср');
                break;
            case 4:
                console.log('Чт');
                break;
            case 5:
                console.log('Пт');
                break;
            case 6:
                console.log('Сб');
                break;
            case 7:
                console.log('Вс');
                break;
            default:
                console.log('Некорректный номер дня');
        }
        break;
    case 'en':
        switch (dayNumber2) {
            case 1:
                console.log('Mon');
                break;
            case 2:
                console.log('Tue');
                break;
            case 3:
                console.log('Wed');
                break;
            case 4:
                console.log('Thu');
                break;
            case 5:
                console.log('Fri');
                break;
            case 6:
                console.log('Sat');
                break;
            case 7:
                console.log('Sun');
                break;
            default:
                console.log('Некорректный номер дня');
        }
        break;
    default:
        console.log('Язык не поддерживается');
}

// --------------------------------------------

const days = {
    ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};

const lang3 = prompt('Ru/en?')
const dayNumber3 = parseInt(prompt('Введите номер дня (1-7):'));

if (days[lang3] && dayNumber3 >=1 && dayNumber3 <=7) {
    console.log(days[lang3][dayNumber3 - 1]);
} else {
    console.log('Некорректный ввод');
}