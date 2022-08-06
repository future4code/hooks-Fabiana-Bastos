/* let valor = 0
for(let i = 0; i < 5; i++) {
	valor += i
  }
  console.log(valor)
1. NESTE EXERCÍCIO, ESTAMOS SOMANDO O VALOR DA VARIÁVEL i A VARIÁVEL valor ENQUANTO i FOR MENOR QUE 5. O RESULTADO IMPRESSO É 10

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

2) a) SERÁ IMPRESSO A SEQUÊNCIA 19, 21, 23, 25, 27, 30
b) NÃO É SUFICIENTE, PRECISA ADICIONAR .entries() APÓS O VALOR DA CONST ARRAY PARA RECEBER O ÍNDICE

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

3) *, **, ***, **** */


//EXERCÍCIO 1//
const bichosEstimacao = Number(prompt("Quantos bichos de estimação você tem?")) //recebo o número de pets//
if (bichosEstimacao === 0) { 
	//se o número de pets for 0, imprimo a seguinte mensagem//
  console.log("Que pena! Você pode adotar um pet!")
} else {
	//se o número de pets for maior do que zero, ele armazenará os nomes numa array e imprimirá//
  const nomesBichos = prompt("Quais os nomes deles?")
  const listaNomes = [ ]
  listaNomes.push(nomesBichos)
  console.log(listaNomes)
}

//EXERCÍCIO 2//
//a
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

function imprimeArray (){
  for (let i= 0; i < arrayOriginal.length; i++ ){
    console.log(arrayOriginal[i]);
  }
}

imprimeArray()

//b

function divisaoArray(){
	for (let i= 0; i < arrayOriginal.length; i++ ){
	  console.log(arrayOriginal[i]/10);
	}
  }
  divisaoArray();

//c//
let arryPar =[]

function par(){
  for (let i= 0; i < arrayOriginal.length; i++ ){
  
    let aPar = (arrayOriginal[i] % 2) === 0
    if (aPar === true) {
      arryPar.push(arrayOriginal[i])
    }
  }
  console.log(arryPar);
}
par();

//d

let arrayString =[]

function imprimeStrings(){
  for (let i= 0; i < arrayOriginal.length; i++ ){
    arrayString.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
  }
  console.log(arrayString);
}
imprimeStrings();


//e


function maiorMenorNumero(){

  let maiorNumero = 0
  let menorNumero = 10000
  for (let i= 0; i < arrayOriginal.length; i++ ){
    let numeroMaior = arrayOriginal[i]

    if (numeroMaior > maiorNumero){
      maiorNumero = numeroMaior
    }
    if (numeroMaior < menorNumero){
      menorNumero = numeroMaior
    }
  }
  console.log( `O maior número é ${maiorNumero} e o menor numero é ${menorNumero}`)
}
maiorMenorNumero()