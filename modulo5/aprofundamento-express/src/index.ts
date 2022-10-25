import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


//EXERCÍCIO 1
app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

//EXERCÍCIO 2
type ToDoList = {
    userId: Number,
    id: Number,
    title: String,
    completed: Boolean
}

//EXERCÍCIO 3
const array = [
    {
        userId: 1,
        id: 1,
        title: "Comer",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "Estudar",
        completed: true
    },
    {
        userId: 1,
        id: 3,
        title: "Trabalhar",
        completed: false
    },
    {
        userId: 2,
        id: 4,
        title: "Comer",
        completed: true
    },
    {
        userId: 2,
        id: 5,
        title: "Trabalhar",
        completed: false
    }
]

//EXERCÍCIO 4
app.get("/todolist", (req: Request, res: Response) => {
    if(!array.length){
        res.status(401).send("Nada encontrado!")
    }
    res.status(201).send(array)
})

app.get("/todolist/completed", (req: Request, res: Response) => {
    const filteredList = array.filter((prop) => {
        return prop.completed === true
    })

    console.log(filteredList)
    res.status(201).send(filteredList)

})

app.get("/todolist/notcompleted", (req: Request, res: Response) => {
    const filteredList = array.filter((prop) => {
        return prop.completed === false
    })

    console.log(filteredList)
    res.status(201).send(filteredList)

})

//EXERCÍCIO 5
app.post("/todolist", (req: Request, res: Response) => {
    const data = req.body
    res.status(201).send([... array, data])
})

//EXERCÍCIO 6
app.put("/todolist/:id", (req: Request, res: Response) =>{
    const id = Number(req.params.id)
    const completed = req.body.completed

    array.forEach((kind)=> {
        if(kind.id === id){
            kind.completed = completed
        }
    })
    res.status(200).send(array)
})

//EXERCÍCIO 7
app.delete("/todolist/:id", (req: Request, res: Response) =>{
    const id = Number(req.params.id)

    array.forEach((kind, takeout)=> {
        if(kind.id === id){
            array.splice(takeout, 1)
        }
    })
    res.status(200).send(array)

})

//EXERCÍCIO 8
app.get("/todolist/:userId", (req: Request, res: Response) =>{
    if(req.query.userId){
        console.log(req.query)

        const filteredId = array.filter((prop) =>{
            return prop.userId === Number(req.query.userId)
        })

        res.status(201).send(filteredId)
    } else {
        res.status(400).end("Bad Request")
    }
})

app.listen(3003, () => console.log("We're in!"))