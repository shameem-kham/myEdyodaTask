// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

var result;

switch (operator) {

    case "+":
        result = number1 + number2;
        break;

    case "-":
        result = number1 - number2;
        break;
    case "/":
        result = number1 / number2;
        break;
    case "*":
        result = number1 * number2;
        break;
}

// display the result
document.getElementById("cal").innerHTML = "Final Result of the number  is :" + result;
console.log(`${number1} ${operator} ${number2} = ${result}`);