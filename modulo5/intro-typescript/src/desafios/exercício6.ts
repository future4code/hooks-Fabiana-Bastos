function doisNumeros(num1: number, num2: number): any {
    let soma: number = num1 + num2;
    let sub: number = num1 - num2;
    let mult: number = num1 * num2;
    let div: number = num1 / num2;
    let maiorNumero: number

    if (num1 > num2) {
        maiorNumero = num1
    } else {
        maiorNumero = num2
    }

    return `O resultado da soma é ${soma}. O da subtração é ${sub}. O da multiplicação é ${mult}. E o da divisão é ${div}, sendo o maior número ${maiorNumero}.`
}

console.log (doisNumeros(10, 5))