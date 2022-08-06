// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a, b){return a-b})
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter(number => number%2 === 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrayParesElevados = []
   for (number of array){
      if (number % 2 === 0)
         arrayParesElevados.push(number*number)
   }   
      return arrayParesElevados 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(null, array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = 0
  let menorNumero = 0
  let maiorDivisivelPorMenor = 0
  let diferenca = 0
//imprime o maior número
  if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }
//valor booleano se é ou não divisível
  if (maiorNumero%menorNumero === 0) {
    maiorDivisivelPorMenor = true
  } else {
    maiorDivisivelPorMenor = false
  }

  diferenca = maiorNumero - menorNumero

  return {
    maiorNumero,
    maiorDivisivelPorMenor,
    diferenca
  }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

  let primeirosPares = []
  let retornaPrimeiroPar = (primeirosPares[0], primeirosPares[1], primeirosPares[2])

  for (number of n) {
     if (number % 2 === 0)
        primeirosPares.push(number)
        
        return retornaPrimeiroPar
  }   

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC & ladoC === ladoA){
    return "Equilátero"
  } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
    return "Escaleno"
  } else {
    return "Isósceles"
  }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort((a, b)=> a - b)
   return array = [array[array.length-2], array[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   filme = {
     nome:'O Diabo Veste Prada',
     ano: 2006,
     diretor: 'David Frankel',
     atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let anonimo = {...pessoa, nome:"ANÔNIMO"}
   return anonimo

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let autorizadas = pessoas.filter(condicao => condicao.idade > 14 && condicao.idade < 60 && condicao.altura > 1.5)
  return (autorizadas)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let naoAutorizadas = pessoas.filter (condicao => condicao.idade <= 14 || condicao.idade >= 60 || condicao.altura <= 1.5)
   return (naoAutorizadas)
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  let totalCompras = 0
  for (const valor of contas) {
      totalCompras = valor.compras.reduce((numeroTotal, valorCompras) => {
          numeroTotal += valorCompras
          return numeroTotal
        });

  valor.saldoTotal -= totalCompras
  valor.compras = []
  return contas
  }
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort(nome)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}