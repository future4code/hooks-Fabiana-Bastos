/*let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

O primeiro console imprimirá b = 10. Como let é uma variável que permite substituição, o segundo console vai imprimir a = 10 e b = 5 

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

O console irá imprimir a = 10, b = 10 e c = 10, já que c e a tem o mesmo valor, em seguida o valor de b é substituído pelo de c, consequentemente, se torna o mesmo de a

let horasTrabalhadasNoDia = prompt("Quantas horas você trabalha por dia?")
let pagamentoDiario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasTrabalhadasNoDia/pagamentoDiario} = prompt("Quanto você recebe por dia?")
} por hora`) */

let nome = ""
console.log(typeof nome)

let idade = ""
console.log(typeof idade)

//Quando uma variável que está entre aspas é lida, ela é dada como string. //

let seuNome = prompt("Qual seu nome?")
let suaIdade = prompt("Qual a sua idade?")
console.log(typeof seuNome)
console.log(typeof suaIdade)

//As variáveis seguirão impressas, ambas, como string, até que o valor da variável suaIdade seja formatado para ser lido como number//

console.log("Olá", seuNome, ", você tem", suaIdade, "anos")

let roupa = "Você usou roupa rosa hoje?"
let frango = "Você almoçou frango hoje?"
let estudo = "Você estudou hoje?"

const afirm = "SIM"
const nega = "NÃO"
const talvez = "TALVEZ"

console.log(roupa, " - ", nega)
console.log(frango, " - ", afirm)
console.log(estudo, " - ", afirm)


let a = 10
let b = 25
let c = ""

c = a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", c) // O novo valor de b é 10

let d = prompt("Digite um primeiro número:")
let e = prompt("Digite um segundo número:")

let x = parseInt(d) + parseInt(e) // transformei a variável string em número
let y = d * e

console.log("1. O primeiro número somado ao segundo número resulta em:", x)
console.log("2. O primeiro número multiplicado pelo segundo número resulta em:", y)

