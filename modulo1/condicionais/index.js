/* EXERCÍCIO 1

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Ele diz se o número é par ou não, a partir da sobra da divisão por 2.
b) Para números divisiveis por 2.
c) Para números não divisiveis por 2.


#EXERCÍCIO 2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

A) Para dar o valor da fruta a partir do que for digitado pelo usuário.
B) "O preço da fruta maçã é R$2.25"
C) "O preço da fruta pêra é $ 5"


#EXERCÍCIO 3

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) Solicitando o número que irá ser processado pela condicional no tipo Number.
b) Se o número dado pelo usuário for 10, ele receberá a mensagem "Esse número passou no teste". Se for -10, dará erro pois a variável não foi definida fora da condicional.
c) Haverá um erro porque a variável precisa ser definida fora do escopo do bloco if, para que ela seja uma variável global e possa funcionar em diferentes blocos. */

//EXERCICIO 1
const  maiorDeIdade = Number(prompt("Quantos anos você tem?"))

if (maiorDeIdade > 18) {

	console.log("Você pode dirigir")
} else {
	console.log("Você não pode dirigir")
}

//EXERCICIO 2
const horarioEstudo =  prompt("Em que momento você estuda? Digite, M, V ou N para matutino, vespertino e noturno, respectivamente")

if (horarioEstudo === "M") {
	console.log("Bom dia!");
} else if (horarioEstudo === "V") {
	console.log("Boa tarde!");
} else {
	console.log("Boa noite!");
}

//EXERCICIO 3
let periodo = prompt("Em que momento você estuda? Digite, M, V ou N para matutino, vespertino e noturno, respectivamente")
switch (periodo) {
	case 'M':
		console.log("Bom dia!")
		break
	case 'V':
		console.log("Boa tarde!")
		break
	case 'N':
		console.log("Boa noite!")
		break

}

//EXERCICIO 4
const generoFilme = prompt("Qual o gênero do filme que vamos assistir?")
const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

if (generoFilme === "Fantasia" && valorIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

//DESAFIO 1
const filme = prompt("Qual o gênero do filme que vamos assistir?")
const ingresso = Number(prompt("Qual o valor do ingresso?"))
const lanchinho = prompt("Qual lanchinho você vai querer?")

if (filme === "Fantasia" && ingresso < 15) {
    console.log(`Bom filme! Aproveite seu/sua ${lanchinho}`)
} else {
    console.log("Escolha outro filme :(")
}