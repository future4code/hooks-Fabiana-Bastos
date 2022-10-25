type product = {
    id:string,
    name:string,
    price:number
}

export const products :product[] =[{
    id:"1",
    name:"produto a",
    price:10
}, {
    id:"2",
    name:"produto b",
    price:20
}, {
    id:"3",
    name:"produto c",
    price:30
}]

export const errors ={
    ID_NOT_FOUND:{status: 404, message:"id nao encontrado"},
    MISSING_PARAMETERS:{status: 404, message:"Faltando parametro"},

}