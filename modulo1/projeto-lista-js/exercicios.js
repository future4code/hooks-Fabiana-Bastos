// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const base = Number(prompt("Digite o número da base do triângulo"))
  const alt = Number(prompt("Digite o número da altura do triângulo"))
  const resultado = base*alt
  console.log(resultado)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Em que ano estamos?"))
const anoNascimento = Number(prompt("Em que ano você nasceu?"))
const idade = anoAtual-anoNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual o seu nome")
  let idade = prompt("Qual a sua idade")
  let email = prompt("Qual o seu email")
  let fraseDeConfirmacao = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(fraseDeConfirmacao)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  arr1 = []
  let cor1 = prompt("Qual a sua cor favorita")
  let cor2 = prompt("Digite uma segunda cor")
  let cor3 = prompt("Digite uma terceira cor")
  arr1.push(cor1,cor2,cor3)
  console.log(arr1)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let stringMaior = string.toUpperCase()
  return(stringMaior)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let semPrejuizo = custo / valorIngresso
  return(semPrejuizo)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let s1 = string1.length
  let s2 = string2.length
  return s1===s2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const UltimoElement = array[array.length -1]
  return UltimoElement

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = array[0]
  const ultimo = array[array.length -1]

  array[0] = ultimo
  array[array.length -1] = primeiro

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let p1 = string1.toUpperCase()
  let p2 = string2.toUpperCase()
  
  return p1===p2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}