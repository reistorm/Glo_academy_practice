// Создайте функцию, которая принимает 1 аргумент (название произвольное)
// — Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
// — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
// — Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)

const stringCheck = function (title) {
    if (typeof title !== 'string') {
        alert('Передана не строка')
        return;
    } 
    
    const trimmed = title.trim();

    if (trimmed.length > 30) {
        const newTitle = trimmed.slice(0, 30) + '...'
        return newTitle;
    } else {
        return trimmed;
    }
}

console.log(stringCheck("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aut animi ad, quia enim iure saepe nemo, perferendis odit sint ex, facere molestiae. Fuga, ipsum inventore omnis consectetur sequi voluptatibus earum atque!"));