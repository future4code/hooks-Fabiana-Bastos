/* let array
console.log('a. ', array) -imprime a. undefined, já que não tem uma array especificada.

array = null
console.log('b. ', array) - imprime b. null, já que a array é nula.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) - imprimirá c. 11 como comprimento, tendo 11 números nessa array.

let i = 0
console.log('d. ', array[i]) - imprimirá d. 3 porque a array se inicia do 0 (a) até d (3)

array[i+1] = 19
console.log('e. ', array) //- imprimirá a lista do array, substituindo o 4 por 19, já que o i = 3: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) - imprime 9 pois na array, i = 3, então i + 6 =  9 */

 /* const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) - Digitando a frase "Subi num ônibus em Marrocos", terei: SUBI NUM ÔNIBUS EM MIRROCOS 27 */

let nomeDoUsuario = prompt("Qual seu nome de usuario")
let emailDoUsuario = prompt("Qual seu email")

let fraseDeConfirmacao = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`
console.log(fraseDeConfirmacao)

const comidasFavoritas = ["chocolate", "pizza", "pastel", "acaraje", "quiabada"]
console.log(comidasFavoritas)
const primeiroItem = comidasFavoritas[0]
const segundoItem = comidasFavoritas[1]
const terceiroItem = comidasFavoritas[2]
const quartoItem = comidasFavoritas[3]
const quintoItem = comidasFavoritas[4]
console.log("Essas são minhas comidas favoritas:")
console.log(primeiroItem)
console.log(segundoItem)
console.log(terceiroItem)
console.log(quartoItem)
console.log(quintoItem)

let comidaDoUsuario = prompt("Qual é a sua comida favorita")
let i = 1
comidasFavoritas[i] = comidaDoUsuario
console.log(comidasFavoritas)


let listaDeTarefas = []
let tarefaUm = prompt("Coloque uma tarefa que você precisa fazer hoje")
let tarefaDois = prompt("Coloque outra tarefa que você precisa fazer hoje")
let tarefaTrês = prompt("Coloque uma terceira tarefa que você precisa fazer hoje")
listaDeTarefas.push(tarefaUm, tarefaDois, tarefaTrês)
console.log(listaDeTarefas)

let tarefasTerminadas = Number(prompt("Qual a atividade você já fez hoje? Digite 0, 1 ou 2"))
listaDeTarefas.splice(tarefasTerminadas, 1)
console.log(listaDeTarefas)