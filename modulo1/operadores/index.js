/* 1) const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) - imprimirá false, pois true && false = false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) - imprimirá false, pois na primeira condição temos um true && false, e na segunda temos um false && true (pois bool3 é diferente de bool2 {!bool2})

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)- imprimirá true pois true || false = true

console.log("d. ", typeof resultado) - imprimirá boolean pois é o tipo de variável que dá true e false*/ 

/* 2) let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

sairá uma sequência do número digitado no primeiroNumero seguido do segundoNumero, pois o uso do símbolo + no javascript também é feito para unir strings. Antes fazer a soma, a variável deve ter seu tipo mudado de string para boolean*/

/* let primeiroNumero = Number(prompt("Digite um número!"))
let segundoNumero = Number(prompt("Digite outro número!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

let suaIdade = Number(prompt("Digite a sua idade:"))
let idadeAmigo = Number(prompt("Digite a idade do seu melhor amigo:"))
console.log("Sua idade é maior do que a do seu melhor amigo?")
const maior = suaIdade > idadeAmigo
const menor = suaIdade <= idadeAmigo
console.log(maior)

const subtracao = suaIdade - idadeAmigo
console.log(subtracao)

let par = Number(prompt("Insira um número par:"))
const divisao = par % 2
console.log(divisao) //quando o número colocado é par, a sobra é sempre 0, por ser divisível por 2. Quando é ímpar, é sempre 1//

let idade = Number(prompt("Qual a sua idade?"))
let idadeMeses = idade * 12 //número de meses em um ano//
console.log(idadeMeses)

let idadeDias = idade * 365 //número de dias em um ano//
console.log(idadeDias)

let idadeHoras = idade * 8766 //número de horas em um ano//
console.log(idadeHoras)

let numA = Number(prompt("Digite um número:"))
let numB = Number(prompt("Digite outro número:"))

const primeiroMaior = numA > numB
console.log("O primeiro numero é maior que o segundo?", primeiroMaior)
const primeiroIgual = numA === numB
console.log("O primeiro numero é igual ao segundo?", primeiroIgual)
const divisivel = numA % numB === 0
console.log("O primeiro numero é divisivel pelo segundo?", divisivel)
const divisivelOposto = numB % numA === 0
console.log("O segundo numero é divisivel pelo primeiro?", divisivelOposto)

const farenheit = Number((77 + 459.67) * 5 / 9) //para converter 77ºC em farenheit//
console.log(farenheit, "K")
const celsius = Number(80 * 1.8 + 32) //para converter 80ºF em celsius//
console.log(celsius, "Fº")
const celsiusParaFarenheit = Number (30 + 1.8 + 32) //para converter 30ºC em Farenheit//
const celsiusParaKelvin = Number(30 + 273) //para converter 30ºC em Kelvin//
console.log(celsiusParaFarenheit, "Fº")
console.log(celsiusParaKelvin, "K")

let conversao = Number(prompt("Insira a temperatura em celsius que deseja converter: "))
const conversaoFarenheit = Number(conversao + 1.8 + 32)
const conversaoKelvin = Number(conversao + 273)
console.log(conversaoFarenheit, "Fº", conversaoKelvin, "K")