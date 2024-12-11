require("dotenv").config();

const db = require("./db");

const express = require("express")  ;
const app = express();

app.use(express.json());

app.delete("/produtos/:id", async(request, response)=>{
    const id = request.params.id;
    db.removeProduto(id);
    response.sendStatus(204);
});

app.patch("/produtos/:id", async (request, response)=>{
    const id = request.params.id;
    const dados = request.body;
    
    await db.alteraProduto(id, dados);
    response.sendStatus(200);
});

app.post("/produtos", async (request, response)=>{
    const produto = request.body;
    await db.inserirProduto(cliente);
    response.sendStatus(201);
});

app.get("/produtos/:id",async (request, response)=>{
    const id = request.params.id;
    const resultado = await db.listaProduto(id);
    response.json(resultado);
});

app.get("/produtos", async (request, response)=>{
    const resultado = await db.listaProduto();
    response.json(resultado);
});

 app.get("/", (request, response) => {
         response.json({
             message: "Está OK o Response!"
         })
     })

app.listen(process.env.PORT, ()=>{
    console.log("App IS RUNNING!") ;   
})
