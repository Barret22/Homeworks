

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    }
}

const calculator = new Calculator();

function performOperation(operation) {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = "Please enter valid numbers";
    } else {
        switch (operation) {
            case 'add':
                result = calculator.add(number1, number2);
                break;
            case 'subtract':
                result = calculator.subtract(number1, number2);
                break;
            case 'multiply':
                result = calculator.multiply(number1, number2);
                break;
            case 'divide':
                result = calculator.divide(number1, number2);
                break;
            default:
                result = "Invalid operation";
        }
    }

    document.getElementById('result').innerText = `Дорівнює: ${result}`;
}
