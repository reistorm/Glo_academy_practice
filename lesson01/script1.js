let number = 266219;

let arr = String(number).split('').map(Number)

let multiNum = 1;

for (i = 0; i < arr.length; i++) {
    multiNum *= arr[i]
}
console.log(`Произведение цифр числа num = ${multiNum}`);

let powNumber = multiNum * multiNum * multiNum
// console.log(`Результат в 3-ей степени ${powNumber}`)


powNumber = String(powNumber).slice(0, 2) 
console.log(powNumber);