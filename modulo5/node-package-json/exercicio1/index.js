/*Para acessar os parâmetros na linha de comando, precisamos usar o process.argv, lembrando que o argumento 0 e o 1 são sempre o node e o nome do arquivo*/

/*EXERCÍCIO 1*/
const nome = process.argv[2]
const idade = Number(process.argv[3])
/*transforma o objeto do array de string em número para permitir o cálculo*/
const novaIdade = Number(process.argv[3]) + Number(7)

if (process.argv[2] && process.argv[3] == undefined){
    console.log("Você esqueceu de colocar o nome ou a idade")
} else {

    console.log(`\u001b[31m Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`)
}


