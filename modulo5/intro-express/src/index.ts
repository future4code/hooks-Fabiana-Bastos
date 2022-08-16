import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'

//EXERCÍCIO 1
const app = express()

app.listen(3003, () => {
    console.log('Hi there!');
 });

app.use(express.json())
app.use(cors())

app.get('/', (request: Request, response: Response) => {
    response.send('Bem vinde!'); 
 });
 
 app.get('/documentation', (request: Request, response: Response) => {
    response.send('Alô alô Brasil'); 
 });

 app.get('/about', (request: Request, response: Response) => {
    response.send('Me chamo Fabiana');
 });

 //EXERCÍCIO 2


 type Data = {
     id: string | number,
     name: string,
     phone: string| number,
     email: string,
     website: string
 }

 //EXERCÍCIO 3

 const users:Data[] = [
	{ id: 1, name: "Bethânia", phone: 12345678, email: "bet@gmail.com", website:"bet.com.br" },
    { id: 2, name: "Caetano", phone: 87654321, email: "cae@gmail.com", website:"cae.com.br" },
	{ id: 3, name: "Gilberto", phone: 10101010, email: "gil@gmail.com", website:"gil.com.br" },
	{ id: 4, name: "Gal", phone: 74758566, email: "gal@gmail.com", website:"gal.com.br" },
    { id: 5, name: "Rita", phone: 5556666, email: "riri@gmail.com", website:"riri.com.br" },
]

console.log(users[1].name)

//EXERCICIO 4

app.get("/users", (req: Request, res: Response) => {
    if(!users.length){
        res.status(401).send("Vazio")
    }
    res.status(201).send(users)
    console.log("a",users)
}) 

//EXERCICIO 5 


type Posts = {
    id: number,
    title: string,
    body: string| number,
    userId: number
}

//EXERCICIO 6

const postsData:Posts[] = [
	{ id: 1, title: "abc", body: "óh abelha rainha", userId: 1,  },
    { id: 2, title: "def", body: "faz de mim", userId:1, },
	{ id: 3, title: "ghi", body: "um instrumento de", userId: 1, },
	{ id: 4, title: "klm", body: "teu prazer, sim, sim", userId: 2, },
    { id: 5, title: "nop", body: "e de tua glória", userId: 2, },
]

// EXERCICIO 7

app.get("/posts", (req: Request, res: Response) => {
    if(!postsData.length){
        res.status(401).send("Vazio")
    }
    res.status(201).send(postsData)
    console.log("b",postsData)
})  

// EXERCICIO 8

app.get("/users/posts", (req: Request, res: Response) => {

    if(req.query.userId){
        console.log(req.query)

        const filteredId = postsData.filter((prop)=>{
            return prop.userId === Number(req.query.userId)

        })
        res.status(201).send(filteredId)

    }else{
        res.status(400).end()
    }

})  