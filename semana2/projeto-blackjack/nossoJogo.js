/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

/** console.log("Boas vindas ao jogo de Blackjack!")
if(confirm("quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"
   const carta1 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
   const carta2 = comprarCarta();
   const carta3 = comprarCarta();
   const carta4 = comprarCarta();

console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - ${carta1.valor + carta2.valor}`) // imprime o texto da carta. Nesse caso: "K♦️"

console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - ${carta3.valor + carta4.valor}`) // imprime o valor da carta (um número). Nesse caso: 10)
   if (carta1.valor + carta2.valor > carta3.valor + carta4.valor) {
      console.log("O usuário ganhou!")
   } if (carta1.valor + carta2.valor < carta3.valor + carta4.valor) {
      console.log("O computador ganhou!")
   } if (carta1.valor + carta2.valor === carta3.valor + carta4.valor) {
      console.log("Empate!")
   }
} else {
	// o que fazer se o usuário clicar "cancelar"
   console.log("O jogo acabou.")
}  */
