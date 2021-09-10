// selecting the buttons
let number = document.querySelectorAll('.number');
let inputField = document.querySelector('input');
let clearAll = document.querySelector('#AC');
let deleteButton = document.querySelector('#delete')
let decimal = document.querySelector('#decimal');
let sign = document.querySelectorAll('.sign');
let equal = document.querySelector('#equal')

// adding the number to the inpt field (screen)
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', () => {
        if (inputField.value[0] === '0' && inputField.value.includes('.') === false) {
            inputField.value = '';
        }
        inputField.value += number[i].innerHTML;
        // console.log(number[i].innerHTML)
    })
}

// the AC button
clearAll.addEventListener('click', () => {
    inputField.value = '';
})

// delete the previous number or symbol
deleteButton.addEventListener('click', () => {
    // console.log(inputField.value, typeof inputField.value)
    inputField.value = inputField.value.slice(0, -1)
})

// add decimal
decimal.addEventListener('click', () => {
    if (inputField.value.includes('.') === false) {
        inputField.value += '.'
    }
})

// adding functionality to +, - , / , *;
for (let i = 0; i < sign.length; i++) {
    sign[i].addEventListener('click', () => {
        if (inputField.value !== '' && inputField.value[inputField.value.length - 1] !== '*' &&
            inputField.value[inputField.value.length - 1] !== '+' && inputField.value[inputField.value.length - 1] !== '-' &&
            inputField.value[inputField.value.length - 1] !== '÷') {
            inputField.value += sign[i].innerHTML;
        }
    })
}

// equal sign
equal.addEventListener('click', () => {
    if (inputField.value !== '') {
        inputField.value = inputField.value.replace(/÷/, '/');
        inputField.value = eval(inputField.value)
    }
})