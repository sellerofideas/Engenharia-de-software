var firstNumber = prompt("Insira o primeiro numero: ");
var nextNumber = prompt("Insira o próximo numero: ");
var operation = prompt("Qual operação deseja realizar? (Digite + ou - ou * ou /) ");

var operationResult = performOperation(firstNumber, nextNumber, operation);

alert('O resultado da operação é igual a: ' + operationResult);

function performOperation(firstNumber, nextNumber, op){
    var result = 0;

    //result = firstNumber + eval(op) + nextNumber;
    result = eval(firstNumber + op + nextNumber);

    return result;
}