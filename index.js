let firstOperand = '';
let secondOperand = '';
let currentOperator = null;

function appendNumber(number) {
    if (currentOperator === null) {
        firstOperand += number;
    } else {
        secondOperand += number;
    }
    updateDisplay();
}

function setOperator(operator) {
    if (currentOperator !== null) calculate();
    currentOperator = operator;
    updateDisplay();
}

function clearDisplay() {
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = firstOperand +
        (currentOperator !== null ? ' ' + currentOperator + ' ' : '') +
        secondOperand;
}

function calculate() {
    if (currentOperator === null || secondOperand === '') return;
    const a = parseInt(firstOperand, 2);
    const b = parseInt(secondOperand, 2);
    let result;

    switch (currentOperator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = Math.floor(a / b);
            break;
        default:
            return;
    }

    firstOperand = result.toString(2);
    secondOperand = '';
    currentOperator = null;
    updateDisplay();
}
