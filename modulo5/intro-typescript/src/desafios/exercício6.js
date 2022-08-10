function doisNumeros(num1, num2) {
    var soma = num1 + num2;
    var sub = num1 - num2;
    var mult = num1 * num2;
    var div = num1 / num2;
    var maiorNumero;
    if (num1 > num2) {
        maiorNumero = num1;
    }
    else {
        maiorNumero = num2;
    }
    return "O resultado da soma \u00E9 ".concat(soma, ". O da subtra\u00E7\u00E3o \u00E9 ").concat(sub, ". O da multiplica\u00E7\u00E3o \u00E9 ").concat(mult, ". E o da divis\u00E3o \u00E9 ").concat(div, ", sendo o maior n\u00FAmero ").concat(maiorNumero, ".");
}
console.log(doisNumeros(10, 5));
