const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
const btn = document.querySelector('.btn');


btn.addEventListener('click', function() {
    let val = document.querySelector('#infield').value;
    val = val.trim();

    if (!valueCheck(val)) {
        console.log('MISS');
        return;
    }

    console.log('Функция продолжается ' + i);
    
});

function valueCheck(val) {
    if (val.length !== 2 || !isNaN(val[0]) || isNaN(val[1]))
        return alert('Введите в правильном формате');
    if (letters.indexOf(val[0]) === -1)
        return alert('Такой буквы нет на доске');
    if (numbers.indexOf(val[1]) === -1)
        return alert('Такой цифры нет на доске');
    return true;
}