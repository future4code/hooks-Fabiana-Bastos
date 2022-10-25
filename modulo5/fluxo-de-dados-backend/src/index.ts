import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { products } from "./data";
import { errors } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

//EXERCÍCIO 1
app.get("/test", (req, res) => {
    res.send("We're in!")
})

//EXERCÍCIO 3
app.post("/produtos", (req, res) => {
    try{ 
        const {id, name, price} = req.body

        if(!id || !name || !price) {
            throw new Error("Alguma informação em falta, favor checar")
        }

        if(typeof name!== "string") {
            throw new Error("O id precisa ser uma string")
        }

        if(typeof id!== "string") {
            throw new Error("O nome precisa ser uma string")
        }

        if(typeof price!== "number") {
            throw new Error("O preço precisa receber dígitos")
        }

        res.status(201).send([...products, {id,name,price}])
    }

    catch(error:any){
        res.send(error.message)
    }
})

//EXERCÍCIO 4
app.get("/produtos", (req, res) =>{
    try{
        res.status(201).send(products)
    }
    catch(error:any){
        res.send(error.message)
    }
})

//EXERCÍCIO 5
app.put("/products/:id", (req, res)=>{
    try{
      const id = req.params.id
      const price = req.body.price

      if(!price){
        throw new Error(errors.MISSING_PARAMETERS.message)
      }
      products.forEach((p)=>{
        if(p.id === id){
          p.price = price
        }       
      })
      res.status(201).send(products)
    }
    catch(error:any){
      res.send(error.message)
    }}
  )

//EXERCÍCIO 6
app.delete("/products/:id", (req, res)=>{
    try{
      const id = req.params.id
      products.forEach((p, i)=>{
        if(p.id === id){
          products.splice(i,1)
        }
      })
      res.status(200).send(products)
    }
    catch(error:any){
      res.send(error.message)
    }}
  )

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });;