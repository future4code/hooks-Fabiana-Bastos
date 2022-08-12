//A
const minhaString:string | number = 14
// retorna erro pois o tipo definido é string. Para fazer funcionar é preciso usar o separador | Ou.


//B
const meuNumero:number | string = '14'
//Para fazer funcionar é preciso usar o separador | Ou.

//C
type person = {
    name:string,
    age:number,
    favColor:string
}

const person1: person ={
    name: 'fabiana',
    age: 29,
    favColor: 'verde'
}

const person2: person ={
    name: 'hailton',
    age: 71,
    favColor: 'azul'
}

const person3: person ={
    name: 'monique',
    age: 34,
    favColor: 'azul'
}

const person4: person ={
    name: 'augusta',
    age: 60,
    favColor:"vermelho"
}

//D
enum Cor {
	VERMELHA="ação",
	LARANJA="drama",
	AMARELA="comédia",
	VERDE="romance",
	AZUL="terror",
    ANIL="anil",
    VIOLETA="violeta"
}

const person5: person ={
    name: 'Mariazinha',
    age: 10,
    favColor: Cor.AMARELA
}