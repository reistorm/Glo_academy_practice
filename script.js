// Придумать способ сохранять в переменную ответ пользователя после проверки на число именно как число при любом вводе. (с пробелами и без в переменную заносилось именно число) На данный момент проверка isNumber пропустит такой вариант "   123   " и именно это значение попадет в переменную. Необходимо это исправить. Так же учитывайте что человек может нажать отмену и в проверку уйдет значение NULL


let answer;

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num))
}

const asking = function () {
    do {
        answer = prompt('Введите число');
    } while (!isNumber(answer) || answer.trim() === "" || answer === null)
    answer = parseFloat(answer)
    console.log(answer + " - " + typeof answer);
}

asking();