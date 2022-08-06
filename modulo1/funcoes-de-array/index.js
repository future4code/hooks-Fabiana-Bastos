/* 1) IRÁ IMPRIMIR AS INFORMAÇÕES SALVAS NA VARIÁVEL usuarios JUNTO AO NÚMERO DO ÍNDICE.
2) IMPRIMIRÁ APENAS OS ITEMS DE NOME DENTRO DA ARRAY: Amanda Rangel, Laís Petra, Letícia Chijo
3) IMPRIMIRÁ TODAS AS INFO NA VARIAVEL, MENOS SOBRE CHIJO.
*/

//EXERCÍCIO 1
const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]

//imprime a lista de nomes dos doguinhos
const nomesDoguinhos = pets.map((item, index, array) => {
  console.log(item.nome)
})

//imprime apenas as informações dos doguinhos salsicha
const cachorroSalsicha = pets.filter((item, index, array) => {
  return item.raca ==="Salsicha"
  })

console.log(cachorroSalsicha)

//imprime mensagem para os donos de poddles
const cachorroPoodle = pets.filter((item, index, array) => {
  return item.raca === "Poodle"
})

const mensagemPoodles = cachorroPoodle.map((item, index, array) => {
  console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
})

//EXERCÍCIO 2
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//imprime apenas o nome de cada item
const nomesProdutos = produtos.map((item, index, array) => {
  console.log(item.nome)
})

//imprime desconto de produtos
const produtosDesconto = produtos.map((item, index, array) => {
    let valor = item.preco*5/100
    let desconto = item.preco - valor
    console.log((`nome: ${item.nome}, preço ${desconto.toFixed(2)}`))
})

//imprime apenas as bebidas
const produtosBebidas = produtos.filter((item, index, array) => {
  return item.categoria ==="Bebidas"
  })

console.log(produtosBebidas)

//imprime apenas produtos Ypê
  const produtosYpe = produtos.filter((item, index, array) => {
    return item.nome.includes('Ypê')
})

console.log(produtosYpe)

//imprime frase
const mensagemYpe = produtosYpe.map((item, index, array) => {
  console.log(`Compre ${item.nome} por R$${item.preco}`)
})

//DESAFIO
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]

 //coloca nomes em ordem alfabética
 const ordemAlfabetica = pokemons.map((item, index, array) => {
  return item.nome
  
})

console.log(ordemAlfabetica.sort())

//imprime tipos sem repetição
const tiposPokemon = pokemons.map((item, index, array) => {
return item.tipo

})

const tipos = [...new Set(tiposPokemon)]
console.log(tipos)