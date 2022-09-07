import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => console.log("Servidor rodando na porta 3003"))

//EXERCICIO1
app.get('/', (req, res) => {
    res.send('hello there')
})

app.get('/about', (req, res) => {
    res.send('its me, fabiana')
})

//EXERCÍCIO2
type Data = {
    id: string | number,
    name: string,
    phone: string| number,
    email: string,
    website: string
}

//EXERCÍCIO 3

const users:Data[] = [
	{ id: 1, name: "João", phone: 99998888, email: "joao@gmail.com", website:"joao.com.br" },
    { id: 2, name: "Lucas", phone: 77776666, email: "lucas@gmail.com", website:"lucas.com.br" },
	{ id: 3, name: "Renata", phone: 55554444, email: "renata@gmail.com", website:"renata.com.br" },
	{ id: 4, name: "Dalila", phone: 33332222, email: "dalila@gmail.com", website:"dalila.com.br" },
    { id: 5, name: "Dona B", phone: 22221111, email: "DonaB@gmail.com", website:"donaB.com.br" },
]

console.log(users[1].name)

//EXERCICIO 4

app.get("/users", (req, res) => {
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
	{ id: 1, title: "abc", body: "efg", userId: 1,  },
    { id: 2, title: "hij", body: "klm", userId:1, },
	{ id: 3, title: "nop", body: "qrs", userId: 1, },
	{ id: 4, title: "tuv", body: "xyz", userId: 2, },
    { id: 5, title: "ahhaha", body: "hehehe", userId: 2, },
]
//EU PREFERI CRIAR FORA.

// EXERCICIO 7

app.get("/posts", (req, res) => {
    if(!postsData.length){
        res.status(401).send("Vazio")
    }
    res.status(201).send(postsData)
    console.log("b",postsData)
})  

// EXERCICIO 8

app.get("/users/posts", (req, res) => {

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