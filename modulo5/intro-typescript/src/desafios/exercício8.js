var reverso = function (palavra) {
    var palavraReversa = palavra.split("").reverse().join("").toUpperCase();
    return palavraReversa;
};
console.log(reverso("abcd"));
