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
    let usuario = []
    let computador = []
    
    if(confirm("Bem-vinde ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")) {
       //primeiras cartas
       let ases = false
       while (!ases) {
          usuario.push(comprarCarta())
          usuario.push(comprarCarta())
          computador.push(comprarCarta())
          computador.push(comprarCarta())
          if ((usuario[0].valor === 11 && computador[0].valor === 11) || (usuario[1].valor === 11 && computador[1].valor === 11)) {
             usuario = [];
             computador = []
          } else {
             ases = true
          }         
       }

       let jogando = true
       while (jogando) {
          if (confirm(`"Suas cartas são ${usuario[0].texto} ${usuario[1].texto}. A carta revelada do computador é ${computador[0].texto}.` + "\n" + "Deseja comprar mais uma carta?")) {
             
          }
          
   } else {
          alert("O jogo acabou.")
       }