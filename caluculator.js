// selecting the buttons
let numbers = document.querySelectorAll('.number');
let inputField = document.querySelector('input');
let clearAll = document.querySelector('#AC');
let deleteButton = document.querySelector('#delete')
let decimal = document.querySelector('#decimal');
let signs = document.querySelectorAll('.sign');
let equal = document.querySelector('#equal')

// adding the number to the inpt field (screen)
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (inputField.value[0] === '0' && inputField.value.includes('.') === false) {
            inputField.value = '';
        }
        inputField.value += number.textContent;
    })
})


// the AC button
clearAll.addEventListener('click', () => {
    inputField.value = '';
})

// delete the previous number or symbol
deleteButton.addEventListener('click', () => {
    inputField.value = inputField.value.slice(0, -1);
})

// adding functionality to +, - , / , *;
let signsStr = '+x-÷'
signs.forEach(sign => {
    sign.addEventListener('click', () => {
        if (signsStr.includes(inputField.value[inputField.value.length - 1])) {
            inputField.value = inputField.value.slice(0, - 1) + sign.textContent;
        }
        else if (inputField.value !== '') {
            inputField.value += sign.textContent;
        }
    })
})

// add decimal
decimal.addEventListener('click', () => {
    // the problem is it wont let u include another decimal in a valid position
    let re = /\+|-|x|÷/;
    if (signsStr.includes(inputField.value.slice(-1)) === false) {
        if (inputField.value.match(re)) {
            let s = inputField.value.split(inputField.value.match(re));
            s[s.length - 1].includes('.') === false ? inputField.value += '.' : null;
        }
        else {

            inputField.value.includes('.') === false ? inputField.value += '.' : null;
        }
    }
})

// equal sign
equal.addEventListener('click', () => {
    if (inputField.value !== '') {
        inputField.value = inputField.value.replace(/÷/, '/');
        inputField.value = inputField.value.replace(/x/, '*');
        inputField.value = eval(inputField.value)
    }
})
