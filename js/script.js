const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
const btn = document.querySelector('.btn');

let xIndex;
let yIndex;

let finalStr = '';

btn.addEventListener('click', function () {
    let val = document.querySelector('#infield').value;
    val = val.trim().toLowerCase();
    
    xIndex = letters.indexOf(val[0]);
    yIndex = numbers.indexOf(val[1]);

    if (!valueCheck(val, xIndex, yIndex))
        return;

    stepAccessibility(val, xIndex, yIndex);

    alert(finalStr.toUpperCase());

});

function valueCheck(val, xInd, yInd) {
    if (val.length !== 2 || !isNaN(val[0]) || isNaN(val[1]))
        return alert('Введите в правильном формате');
    if (xIndex === -1)
        return alert('Такой буквы нет на доске');
    if (yIndex === -1)
        return alert('Такой цифры нет на доске');
    return true;
}

function stepAccessibility(val, xInd, yInd) {
    const horizontalAcces = [2, 1, -1, -2, -2, -1, 1, 2];
    const verticalAcces = [-1, -2, -2, -1, 1, 2, 2, 1];

    for (let i = 0; i < horizontalAcces.length; i++) {
        if ((xIndex + horizontalAcces[i] >= 0) && (xIndex + horizontalAcces[i] <= (letters.length - 1)) &&
            (yIndex + verticalAcces[i] >= 0) && (yIndex + verticalAcces[i] <= (numbers.length - 1))) {

            finalStr += letters[xIndex + horizontalAcces[i]] + numbers[yIndex + verticalAcces[i]] + ' ';
        }
    }
}