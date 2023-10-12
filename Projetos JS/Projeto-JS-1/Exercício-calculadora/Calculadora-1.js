

var firstNumber = prompt("Insira o primeiro número: ");
var nextNumber = prompt("Insira o segundo número: ");

var divisionResult = debt(firstNumber, nextNumber);

alert('O resultado da divisão é igual a: ' + divisionResult);

function debt(firstNumber, nextNumber) {
    var result = 0;

    result = firstNumber / nextNumber;

    return result;
}
