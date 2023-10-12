var operation = prompt("Insira o simbolo de operação");

switch (operation) {
    case "+":
        alert('Adição');
        break;
    case "-":
        alert('Subtração');
        break;
    case "*":
        alert('Divisão');
        break;
    case "/":
        alert('Multiplicação');
        break;
    default:
        alert('Operação não definida');
        break;
}