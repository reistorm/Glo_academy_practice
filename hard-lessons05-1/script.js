// Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
// 2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
// — Статья про простые числа - КЛИК
// — Рядом с каждым числом написать оба делителя данного числа
//     Например: “Делители этого числа: 1 и n”


let arr = []
arr = ["12345", "23456", "34567", "456789", "17", "45214", "21456"]

const firstChar = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
            console.log(arr[i]);
        }
    }
}

firstChar(arr);


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}


for (let num = 1; num <= 100; num++) {
    if (isPrime(num)) {
        const divisors = getDivisors(num);
        console.log(`${num}, делители этого числа: ${divisors.join(', ')}`);
    }
}
