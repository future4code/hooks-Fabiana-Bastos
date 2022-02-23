/*  const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

A) SERÁ IMPRESSO Matheus Nachtergaele, EM SEGUIDA Matheus Nachtergaele, Selton Mello, Denise Fraga E POR ÚLTIMO canal: "Globo", horario: "14h"



const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

A) SERÁ IMPRESSO AS INFORMAÇOES DO OBJETO CACHORRO (O NOME, IDADE, ETC), EM SEGUIDA IMPRIMIRÁ AS MESMAS INFORMAÇÕES APENAS TROCANDO O NOME DO CACHORRO PARA "JUBA", POR FIM,IMPRIMIRÁ AS MESMAS INFOS, MAS COM O NOME JUBA ALTERADO PARA JUBO

B) OS TRÊS PONTINHOS REDEFINE UM VALOR DENTRO DO OBJETO



function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

A) IMPRIMIRÁ FALSE E EM SEGUIDA UNDEFINED.

B) NO CASO DO "BACKENDER", É IMPRESSO FALSE PORQUE SE TRATA DE UM VALOR BOOLEANO, QUE É ACESSADO DENTRO DO OBJETO PESSOA. QUANDO A ALTURA, NÃO FOI DEFINIDA DENTRO DO OBJETO.

*/
 //Exercício 1
const pessoa = {
    nome: "Fabiana",
    apelido: ["Fabi", "Bi", "Fafa"]
}

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelido}.`)

const novaPessoa = {
    ...pessoa,
    apelido: ["Bibi", "Bia", "Fa"]
}

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${novaPessoa.apelido}.`)

//Exercício 2
function funcaoInformacoes (us1, us2) {
    const usuario1 = {
        nome: "Monique",
        idade: 34,
        profissão: "marceneira"
    }
    
    const usuario2 = {
        nome: "Juliana",
        idade: 34,
        profissão: "professora"
    }
    const array1 = ["Monique", usuario1.nome.length, 34, "marceneira", usuario1.profissão.length]
    const array2 = ["Juliana", usuario2.nome.length, 34, "professora", usuario2.profissão.length]
    console.log(array1, array2)
    
}
funcaoInformacoes()

//Exercício 3
let carrinho = []

const fruta1 = {
	nome: "banana",
	disponibilidade: true
}

const fruta2 = {
	nome: "manga",
	disponibilidade: true
}

const fruta3 = {
	nome: "jaca",
	disponibilidade: true
}

function sacolao(fruta) {
	carrinho.push(fruta1, fruta2, fruta3)
	console.log(carrinho)
}

sacolao()

//DESAFIOS
//DESAFIO1
function perfil(){
	let name = prompt("Qual seu nome")
	let age = prompt("Qual a sua idade")
	let job = prompt("Qual a sua profissao")

	const profile = {
		nome: name,
		profissao: job,
		idade: age
	}
	console.log(profile)
}
perfil()

//DESAFIO2
function movies(){
	const filme1 = {
		nome: "senhor dos aneis",
		ano: 2001
	}
	
	const filme2 = {
		nome: "doutor estranho",
		ano: 2016
	}
	console.log("O segundo filme foi lançado antes do primeiro?", false)
	console.log("Os filmes foram lançados em anos diferentes", true)
}
movies()