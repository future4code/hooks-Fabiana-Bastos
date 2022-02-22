/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10)) - SERÁ IMPRESSO PRIMEIRO 10, QUE É O VALOR DO ARGUMENTO (2) MULTIPLICADO POR 5 E DEPOIS 50, QUE É O VALOR DO ARGUMENTO (10) POR 5.
JÁ SEM O CONSOLE.LOG, A FUNÇÃO SERIA EVOCADA, MAS NÃO IMPRESSA.




let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) - ESSA FUNÇÃO IRÁ TRANSFORMAR O TEXTO TODO EM CAIXA BAIXA E CHECAR SE INCLUI A PALAVRA "cenoura", DEVOLVENDO UM VALOR BOOLEANO. PARA AS FRASES:
  i.   Eu gosto de cenoura
     ii.  CENOURA é bom pra vista
     iii. Cenouras crescem na terra
O RETORNO SERÁ SEMPRE TRUE, JÁ QUE EM TODAS AS TRÊS TEMOS A PALAVRA "CENOURA" INDEPENDENTE DO SEU FORMATO.*/

function minhasInformacoes() {
    console.log("Eu sou Fabiana, tenho 28 anos, moro em Salvador e sou estudante.")
}

minhasInformacoes()

function informacoesDeAlguem(nome, idade, moradia, profissao){
    let seuNome = prompt("Qual seu nome")
    let suaIdade = Number(prompt("Qual a sua idade"))
    let suaMoradia = prompt("Em que cidade você mora")
    let suaProfissao = prompt("Qual a sua profissao")

    console.log(`Eu sou ${seuNome}, tenho ${suaIdade} anos, moro em ${suaMoradia} e sou ${suaProfissao}.`)
}

informacoesDeAlguem()


function somaNumeros(num1, num2){
    let number1 = Number(prompt("Diga um número"))
    let number2 = Number(prompt("Diga outro número"))
    console.log(number1 + number2)
}

somaNumeros()

function igualdade(numero1, numero2){
    let numb1 = Number(prompt("Diga um número"))
    let numb2 = Number(prompt("Diga outro número"))
    console.log(numb1 >= numb2) 
}

igualdade()

function frase(mensagem){
    let umaFrase = prompt("Digite uma frase")
    let fraseTamanho = umaFrase.length
    let fraseModificada = umaFrase.toUpperCase()
    console.log(fraseTamanho, fraseModificada)
}

frase()

let number1 = Number(prompt("Diga um número"))
let number2 = Number(prompt("Diga outro número"))

function soma(num1, num2){
    console.log(number1 + number2)
}

function subtracao(num1, num2){
    console.log(number1 - number2)
}

function multiplicacao(num1, num2){
    console.log(number1 * number2)
}

function divisao(num1, num2){
    console.log(number1 / number2)
}

soma()
subtracao()
multiplicacao()
divisao()
