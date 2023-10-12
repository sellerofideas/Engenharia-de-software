var firstNumber = prompt("Insira o primeiro número: ");
var nextNumber = prompt("Insira o próximo número: ");
var operation = prompt ("Qual operação deseja realizar? (Digite + ou - ou * ou /) ");

var operationResult = 0;

if (operation == "+") 
operationResult = sum(firstNumber, nextNumber);

    
if (operation == "-") 
operationResult = debit(firstNumber, nextNumber);


if (operation == "*") 
operationResult = divide(firstNumber, nextNumber);

    
if (operation == "/") 
operationResult = multiply(firstNumber, nextNumber);

alert('O resultado da operação é igual a: ' + operationResult);

function sum(firstNumber, nextNumber) {
    return parseInt(firstNumber) + parseInt(nextNumber);
}

function debit(firstNumber, nextNumber) {
    return parseInt(firstNumber) - parseInt(nextNumber);
}

function divid(firstNumber, nextNumber) {
    return parseInt(firstNumber) * parseInt(nextNumber);
}

function multiply (firstNumber, nextNumber) {
    return parseInt(firstNumber) / parseInt(nextNumber);
}
