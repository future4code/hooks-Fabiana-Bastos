´´ function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let primeiraP = p1 * 2 
  let segundaP = p2 * 3
  let exercicios = ex * 1
  let mp = (primeiraP +  segundaP + exercicios)/6
  
  if (mp >= 9) {
    return "A"
  } else if (mp < 9 && mp >= 7.5) {
    return "B"
  } else if (mp < 7.5 && mp >= 6) {
    return "C"
  } else {
    return "D"
  }
} ´´