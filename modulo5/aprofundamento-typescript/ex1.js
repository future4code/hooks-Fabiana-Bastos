//A
var minhaString = 14;
// retorna erro pois o tipo definido é string. Para fazer funcionar é preciso usar o separador | Ou.
//B
var meuNumero = '14';
var person1 = {
    name: 'fabiana',
    age: 29,
    favColor: 'verde'
};
var person2 = {
    name: 'hailton',
    age: 71,
    favColor: 'azul'
};
var person3 = {
    name: 'monique',
    age: 34,
    favColor: 'azul'
};
var person4 = {
    name: 'augusta',
    age: 60,
    favColor: "vermelho"
};
//D
var Cor;
(function (Cor) {
    Cor["VERMELHA"] = "a\u00E7\u00E3o";
    Cor["LARANJA"] = "drama";
    Cor["AMARELA"] = "com\u00E9dia";
    Cor["VERDE"] = "romance";
    Cor["AZUL"] = "terror";
    Cor["ANIL"] = "anil";
    Cor["VIOLETA"] = "violeta";
})(Cor || (Cor = {}));
var person5 = {
    name: 'Mariazinha',
    age: 10,
    favColor: Cor.AMARELA
};
