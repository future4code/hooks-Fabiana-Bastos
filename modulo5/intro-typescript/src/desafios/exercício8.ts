const reverso = (palavra: string): string => {
    const palavraReversa = palavra.split("").reverse().join("").toUpperCase()
    return palavraReversa
}

console.log(reverso("abcd"))